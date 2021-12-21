import sqlite3 as sql
import os
import csv
from sqlite3 import Error
import sys

try:
    db_name = sys.argv[1]
    
    # Connect to database
    conn=sql.connect(db_name)
    
    # Export data into CSV file
    print("Exporting data into CSV............")
    cursor = conn.cursor()
    cursor.execute("select * from Users")
    with open("person_data.csv", "w") as csv_file:
        csv_writer = csv.writer(csv_file)
        csv_writer.writerow([i[0] for i in cursor.description])
        csv_writer.writerows(cursor)
    
    dirpath = os.getcwd() + "/person_data.csv"
    print("Data exported Successfully into {}".format(dirpath))

except Error as e:
    print(e)

# Close database connection
finally:
    conn.close()