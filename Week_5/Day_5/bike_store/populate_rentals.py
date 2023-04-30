import os
import random
import django
from datetime import date, timedelta
from faker import Faker
from django.utils import timezone
import datetime




os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bike_store.settings')
django.setup()

from rent.models import Vehicle_Type, Vehicle, Vehicle_Size, CustomerModel, Rental

fake = Faker()

# def create_fake_rental():
#     rental_date = fake.date_between(start_date='-2y', end_date='today')
#     rental_date = datetime.combine(rental_date, datetime.min.time())
#     rental_date = timezone.make_aware(rental_date, timezone.get_current_timezone())

#     return_date = None if random.choice([True, False]) else rental_date + timedelta(days=random.randint(1, 60))

#     available_vehicles = list(Vehicle.objects.exclude(rental__return_date__isnull=True, rental__rental_date__lte=rental_date))

    # if not available_vehicles:
    #     print("No available vehicles for the specified rental date.")
    #     return

    # vehicle = random.choice(available_vehicles)
    # customer = CustomerModel.objects.order_by('?').first()


    # rental.save()

# def populate_rentals(num_rentals=100):
#     for _ in range(num_rentals):
#         create_fake_rental()
# for _ in range(30):
#     if __name__ == "__main__":
#             date = fake.date_between(start_date='-2y', end_date='today')
#             new_vehicle = Vehicle(vehicle_type = Vehicle_Type.objects.get(id=random.randint(13,16)),
#                 date_created = date,
#                 real_cost = random.uniform(100, 1000),
#                 size = Vehicle_Size.objects.get(id=random.randint(13,16)),
#             )
#             new_vehicle.save()

for _ in range(10):
    if __name__ == "__main__":
        date = fake.date_between(start_date='-2y', end_date='now')
        new_rental= Rental(
            rental_date=date,
            return_date=date + timedelta(days=6),
            customer=CustomerModel.objects.get(id = random.randint(1, 180)),
            vehicle=Vehicle.objects.get(id= random.randint(1, 16))
            )
        new_rental.save()
    
 

