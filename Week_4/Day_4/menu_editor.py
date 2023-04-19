
import psycopg2
from ex_xp import MenuItem
from datetime import date
HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'Oi3msd4d907'
DATABASE = 'Menu'


connection = psycopg2.connect(host = HOSTNAME, user = USERNAME, password = PASSWORD, dbname = DATABASE)
cursor = connection.cursor()

def load_manager():
    item_name = input('Enter the name of the item you want to remove: ')
    item_price = int(input('Enter the price of the item you want to remove: '))
    new_item = MenuItem(item_name, item_price) 
    return new_item

def show_user_menu():
    print('1. Add an item')
    print('2. Delete an item')
    print('3. View the menu')
    print('4. Exit')
    choice = input('Enter your choice: ')
    choice = int(choice)
    return choice

def add_item_to_menu():
    item_menu = input("Enter the item: ")
    item_price = int(input("Enter the item price: "))
    new_item = MenuItem(item_menu, item_price)
    new_item.save()
    print('Item was added successfully.')
def remove_item_from_menu():
    item_remove = load_manager()
    if MenuItem.get_by_name(item_remove.item_name) != []:
        item_remove.delete()
        print('Item was removed successfully.')
    else:
        print('Error: Item not found.')

def show_restaurant_menu():
    items = MenuItem.all()
    print(f'Menu: {items}')
  

def main():
    
    while True:
        choice = show_user_menu()
        if choice == 1:
            add_item_to_menu()
        elif choice == 2:
            remove_item_from_menu()
        elif choice == 3:
            
            show_restaurant_menu()
        elif choice == 4:
            
            break
        else:
            print('Invalid choice. Please try again.')

if __name__ == '__main__':
    main()