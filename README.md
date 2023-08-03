# how to use api

**setting .env**
mongo_url = < your mongoDB URL >
port = < setting your server port >

**Add webpage view**

---
## /web
- **/web/create** 
method **POST** for create new view collection in mongoDB

- **/web/read** 
method **GET** for get total view from mongoDB

- **/web/update** 
method **PUT** for add a view to mongoDB
---
## /blog
- **/blog/create** 
method **POST** for create new view collection in mongoDB

- **/blog/read** 
method **GET** for get total view from mongoDB
**{blog : < your target >}**

- **/blog/update**
 method **PUT** for add a view to mongoDB
**{blog : < your target >}**
---