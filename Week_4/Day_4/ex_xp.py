import psycopg2
from datetime import date
HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'Oi3msd4d907'
DATABASE = 'Menu'


connection = psycopg2.connect(host = HOSTNAME, user = USERNAME, password = PASSWORD, dbname = DATABASE)
cursor = connection.cursor()
class MenuItem:
    def __init__(self, item_name:str, price:int):
        self.item_name = item_name
        self.price = price
       
       
    def save(self):
    
        query = f"insert into menu (item, price) values ('{self.item_name}', {self.price});"
        
        with connection.cursor() as cursor:
            cursor.execute(query)
            connection.commit()
         
    
      
       

    def  delete(self):
        query = f"delete from menu where item = '{self.item_name}' and price = {self.price}"
        with connection.cursor() as cursor:
            cursor.execute(query)
            connection.commit()


    def update(self, new_name, new_price):
        query = f"update menu set item = '{new_name}', price = {new_price} where item = '{self.item_name}' and price = {self.price};"
        with connection.cursor() as cursor:
            cursor.execute(query)
            connection.commit()
    def all():
        query = f"select * from menu"
        with connection.cursor() as cursor:
            cursor.execute(query)
            result = cursor.fetchall()
            return result 

    def get_by_name(item_name):
        query = f"select * from menu where item = '{item_name}'"
        with connection.cursor() as cursor:
            cursor.execute(query)
            result = cursor.fetchall()
            if result != []:
                print(result)
            else:
                return None
        




item = MenuItem('Veggie Burger', 37)
item.save()
# item.delete()
# item.update('Veggie Burger', 37)
item.delete()
# item.all()
# menu_items = item.all()
# print(menu_items)
item2 = MenuItem.get_by_name('Beef Stew')
items = MenuItem.all()     
print(items)