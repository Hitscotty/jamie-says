import json
import sqlite3
import pandas as pd
# substitute username with your username
conn = sqlite3.connect('/Users/Scotty/Library/Messages/chat.db')
# connect to the database
cur = conn.cursor()

# get the names of the tables in the database
cur.execute(" select name from sqlite_master where type = 'table' ") 


handles = pd.read_sql_query("select * from handle", conn)
chat_message_joins = pd.read_sql_query("select * from chat_message_join", conn)

messages = pd.read_sql_query('''
SELECT
    datetime (message.date / 1000000000 + strftime ("%s", "2001-01-01"), "unixepoch", "localtime") AS message_date,
    message.text
FROM
    chat
    JOIN chat_message_join ON chat. "ROWID" = chat_message_join.chat_id
    JOIN message ON chat_message_join.message_id = message. "ROWID"
WHERE 
	chat.chat_identifier = '+18623673508' 
	AND is_from_me = 0 
	AND message.text IS NOT NULL 
	AND (message.text LIKE '%god%' OR message.text LIKE '%brother%' OR message.text LIKE '%goodmorning%' )
ORDER BY
    message_date DESC;
''', conn) 



result = messages.to_json(orient="split")
parsed = json.loads(result)

s = map(lambda x:  {'date':x[0], 'message': x[1]} , parsed["data"])

with open('messages.json', 'w') as outfile:
    json.dump(s, outfile)

