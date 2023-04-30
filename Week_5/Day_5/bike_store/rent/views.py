from django.shortcuts import render, get_object_or_404, redirect
from .models import CustomerModel, Vehicle_Type, Vehicle_Size, Vehicle, Rental, Rental_Rate
from datetime import timezone
from django.db.models import ExpressionWrapper, BooleanField, Q
from django.core.exceptions import ValidationError
from django.contrib import messages
from .forms import CustomerForm, VehicleForm
from django.db.models import Prefetch
# Create your views here.


def rent_list(request):
    list_r = Rental.objects.annotate(
    is_unreturned=ExpressionWrapper(Q(return_date__isnull=True), output_field=BooleanField())).order_by('-is_unreturned', 'rental_date')
    context = {'list_r': list_r}
    return render(request, 'list_rental.html', context)

def rental_detail(request, pk):
    rental = get_object_or_404(Rental, id=pk)
    context = {'rental': rental}
    return render(request, 'rental_detail.html', context)

def customer_detail(request, pk):
    customer = get_object_or_404(CustomerModel, id=pk)
    context = {'customer': customer}
    return render(request, 'customer_detail.html', context)

def customer_detail_all(request):
    customers = CustomerModel.objects.order_by('last_name', 'first_name')
    context = {'customers': customers}
    return render(request, 'customer_detail_all.html', context)


def return_vehicle(request, rental_id):
    rental = get_object_or_404(Rental, id=rental_id)
    rental.return_date = timezone.now()
    rental.save()
    return render(request, 'rental_detail.html', {'rental': rental})


def rental_create(request):
    error_message = None
    if request.method == 'POST':
        customer_id = request.POST.get('customer_id')
        vehicle_id = request.POST.get('vehicle_id')
        try:
            customer = CustomerModel.objects.get(id=customer_id)
            vehicle = Vehicle.objects.get(id=vehicle_id)

            if Rental.objects.filter(vehicle=vehicle, return_date__isnull=True).exists():
                error_message = "This vehicle is currently being rented."
            else:
                rental = Rental(customer=customer, vehicle=vehicle)
                rental.save()
                messages.success(request, "Rental created successfully.")
                return redirect('rental_list')
        except CustomerModel.DoesNotExist:
            error_message = "Customer does not exist."
        except Vehicle.DoesNotExist:
            error_message = "Vehicle does not exist."
    return render(request, 'rental_create.html', {'error_message': error_message})




def customer_add(request):
    if request.method == 'POST':
        form = CustomerForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Customer added successfully.")
            return redirect('customer_detail_all')
    else:
        form = CustomerForm()
    return render(request, 'customer_add.html', {'form': form})



def vehicle_list(request):
    vehicle_types = Vehicle_Type.objects.prefetch_related(Prefetch('vehicle_set', queryset=Vehicle.objects.select_related('size'))).all()
    context = {'vehicle_types': vehicle_types}
    return render(request, 'vehicle_list.html', context)

def vehicle_detail(request, pk):
    vehicle = get_object_or_404(Vehicle, id=pk)
    rental = Rental.objects.filter(vehicle=vehicle, return_date__isnull=True).first()
    is_rented = rental is not None
    context = {'vehicle': vehicle, 'is_rented': is_rented}
    return render(request, 'vehicle_detail.html', context)



def vehicle_add(request):
    if request.method == 'POST':
        form = VehicleForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('vehicle_list')
    else:
        form = VehicleForm()
    return render(request, 'vehicle_add.html', {'form': form})



