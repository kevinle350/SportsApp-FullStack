import pymysql
#DO NOT CHANGE THE USERNAME AND PASSWORD
connection = pymysql.connect(host='34.122.63.20',
                                user='vt101',
                                password='Oven6904',
                                db='PPRS',
                                cursorclass=pymysql.cursors.DictCursor)

with connection.cursor() as cursor:
    sql = "SELECT * FROM Rosters"
    cursor.execute(sql)
    result = cursor.fetchall()
    print(result)

# Path: backend\api\api.py

# CRUD Routes

# Route to insert user input into UserInput Table (CREATE)

# Rote to get all rosters (READ)
@api.route('/rosters', methods=['GET'])
def get_rosters():
    with connection.cursor() as cursor:
        sql = "SELECT * FROM Rosters"
        cursor.execute(sql)
        result = cursor.fetchall()
        # print(result)
        return result
