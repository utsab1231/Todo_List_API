# Todo_List_API
It is an API for todo app.

Can perform CRUD operation easily.

Can download the zip file and must install all the required packages. --> mongoose,express,dotenv. <br>
Also create a .env file and add MONGODB_URI and PORT value to it.

## Endpoints

GET     localhost:PORT/gettodo               --> Retrieves list of all available todos from database. <br> <br><hr>
GET     localhost:PORT/gettodo/:id           --> Retrieves todo matching the id.  <br> <br><hr>
POST    localhost:PORT/createtodo            --> Create a todo.  <br> <br><hr>
PUT     localhost:PORT/updatetodo/:id        --> Update the todo matching the id .  <br> <br><hr>
Delete  localhost:PORT/deletetodo/:id        --> Deletes the todo matching the  id . <br> <br><hr>
