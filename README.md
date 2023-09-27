          /////////  EMPLOYEE_RECORD ////////////
     =-----------------------------------------------=
     

Followed a MVC model 

All functionality is done :-
                 1> If no fields are filled than it will show alert
                 2> if wrong email than it will alert same for password


Used Middileware for Auth

Used Bcrypt for hashing the password

Used JWT for Autentication

HERE I am providing the Model  Routes for successful using the application in BACKEND

MODEL for user :-
----------------------
           {
              name:"",
              email:"",
              password:"",
              city:"",
              age:
           }


USER_ROUTES :-
--------------------

   a> for registration
        
        /user/register   (http://localhost:3009/user/register)

    b> for login 

        /user/login       (http://localhost:3009/user/login)

        (after successful login you will get a token and with that we can do CRUD operations in employee)
////////////////////////////////////////////////////////////////////////////////


MODEL for Employee :-
-------------------------
          { 
            name:"",
            work:"",
            discription:"",
            userID:""
           }


EMPLOYEE_ROUTES :-
--------------------------

    a> for add employee

          /employee/add    (http://localhost:3009/employee/add)

    b> for get employee

         /employee/get    (http://localhost:3009/employee/get)

     c> for update employee

         /employee/patch/:id  (http://localhost:3009/employee/patch/651402a41b3fd5b1535bf9f5)   (id is dummy)

    d> for delete employee

         /employee/delete/:id   (http://localhost:3009/employee/delete/651402a41b3fd5b1535bf9f5)   (id is dummy)

 /////////////////////////////////////////////////////////////////////////////// 


                 /////////////// Thank you ///////////////////         

