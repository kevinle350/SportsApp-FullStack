import json
import random
import uuid
from decimal import *

import pandas as pd
import pymysql
from flask import Flask, redirect, render_template, request

api = Flask(__name__)

connection = pymysql.connect(host='34.122.63.20',
                                user='vt101',
                                password='Oven6904',
                                db='PPRS',
                                cursorclass=pymysql.cursors.DictCursor)


# test connection
@api.route('/')
def index():
    return render_template('admin.html')
# end test connection

@api.route('/api/insert', methods = ['POST', 'GET'])
def my_profile():
    if request.method == 'POST':
        username = 'testUser'
        off = request.form['offense']
        de = request.form['defense']
        pa = request.form['pass']
        run = request.form['run']

        off_def = 'defense'
        pass_run = 'run'

        if(off == True):
            off_def = 'offense'
        if(pa == True):
            pass_run = 'pass'
        
        hometown = request.form['hometown']
        trigger_result =  []
        favorite_team = request.form['favorite_team']
        penalties = '0'
        big_plays = 'Yes'
        user_id = str(random.randint(1,1000))
        sql_stmt = user_id +',' + '\"'+username + '\"'+ ','+'\"'+off_def+'\"'+ ','+'\"'+pass_run+'\"'+','+'\"'+hometown+'\" '+','+'\"'+big_plays+'\",'+penalties+','+'\"'+favorite_team+'\"'
        with connection.cursor() as cursor:
            sql = "INSERT INTO UserInput (UserId, UserName, OffenseDefense, PassRun, Hometown, BigPlay, Penalties, FavoriteTeam) VALUES ("+sql_stmt+")"
            cursor.execute(sql)
            connection.commit()
            return_sql = "SELECT HomeTeam, AwayTeam FROM UserResult WHERE UserId = "+user_id
            cursor.execute(return_sql)
            trigger_result = cursor.fetchall()

        with connection.cursor() as cursor:
            sql1 = "CALL GetRating"
            sql2 = "SELECT * FROM FinalTable"
            cursor.execute(sql1)
            cursor.execute(sql2)
            ratings = cursor.fetchall()
            trigger_result += ratings
            connection.commit()

        # team_one = 0
        # team_two = 0
        with connection.cursor() as cursor:
            with open('Queries/complex_q1.txt') as f:
                lines = f.readlines()
            with connection.cursor() as cursor:
                sql = ''.join(lines)
                cursor.execute(sql)
                result_one = cursor.fetchall()
            with open('Queries/complex_q2.txt') as f:
                lines = f.readlines()
            with connection.cursor() as cursor:
                sql = ''.join(lines)
                cursor.execute(sql)
                result = cursor.fetchall()
            final = {}
            ctr = 0
            for x,y in zip(result_one[-1:-4:-1], result[0:3:1]):
                final[ctr] = x['TeamName'] + " vs. " + y['TeamName'] 
                ctr+= 1
            
            trigger_result.append(final)
            # print(trigger_result)
    
    print(len(trigger_result))
    return json.dumps(trigger_result)


@api.route('/api/get-user-result', methods = ['GET'])
def get_user_result():
    with connection.cursor() as cursor:
        sql = "SELECT * FROM UserInput"
        cursor.execute(sql)
        result = cursor.fetchall()
        return json.dumps(result)


# DELETE route to remove user input
# PUT route to update player team name
@api.route('/api/admin', methods=['PUT', 'DELETE'])
def admin():
    if request.method == 'DELETE':
            userID = request.form['userid']
            with connection.cursor() as cursor:
                sql = "DELETE FROM UserInput WHERE UserId="+'\"'+userID+'\"'
                cursor.execute(sql)
                connection.commit()
                return "User Input Updated"
    else:
            playerID = request.form['playerid']
            print(playerID)
            newTeam = request.form['newteam']
            with connection.cursor() as cursor:
                sql = 'UPDATE Rosters SET TeamName = ' + '\"' + newTeam + '\"' + ' ' + 'WHERE PlayerId='+ '\"'+playerID+"\""
                cursor.execute(sql)
                connection.commit()
                return "Success"
            

    # return render_template('admin.html')

class DecimalEncoder(json.JSONEncoder):
    def default(self, obj):
        # 👇️ if passed in object is instance of Decimal
        # convert it to a string
        if isinstance(obj, Decimal):
            return str(obj)
        # 👇️ otherwise use the default behavior
        return json.JSONEncoder.default(self, obj)


@api.route('/create-user', methods = ['POST'])
def create_user():
    return 'good'


@api.route('/api/search-players', methods = ['GET'])
def search_user():
    player_name = request.args.get('player_name')
    with connection.cursor() as cursor:
        sql = "select * from Rosters where PlayerName =" + '\"' + player_name + '\"' 
        print(sql)
        cursor.execute(sql)
        result = cursor.fetchall()
        return json.dumps(result)
