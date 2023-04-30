import os
import django
from django.core.wsgi import get_wsgi_application
from faker import Faker
fake = Faker()
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bike_store.settings')
application = get_wsgi_application()

from rent.models import CustomerModel
from rent.models import Rental

def create_fake_customer():
    first_name = fake.first_name()
    last_name = fake.last_name()
    email = fake.email()
    phone_number = fake.phone_number()
    address = fake.street_address()
    city = fake.city()
    country = fake.country()

    customer = CustomerModel(
        first_name=first_name,
        last_name=last_name,
        email=email,
        phone_number=phone_number,
        address=address,
        city=city,
        country=country
    )
    customer.save()

def populate_customers(num_customers=10):
    for _ in range(num_customers):
        create_fake_customer()

if __name__ == "__main__":
    num_customers = 20
    print(f"Populating the Customer table with {num_customers} fake customers...")
    populate_customers(num_customers)
    print("Done.")

