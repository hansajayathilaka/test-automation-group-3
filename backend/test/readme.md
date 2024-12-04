# How to start the cypress test engine 

1. Inside the ```test``` directory the terminal or cmd run : ```npx cypress open``` (*This will spin up the cypress test engine*)
   
2. Then the cypress window will open and chose the required browser as preference.
   
   ![alt text](/backend/test/static/images/image.png)

3. And here in the browser you can see the ```sample-api-test```.
   
4. Click on that and the test case will run.It is just a simple test to check whether that books API is getting a 200 response with a empty array. 
   
   ![alt text](/backend/test/static/images/image-1.png)


# folder structure

Let’s quickly examine these folders, why they are required:

1. ```Fixtures```: This folder helps keep data files such as data.json, which can be read directly inside the test scripts.
2. ```e2e```: This is an important folder. All tests should sit inside this folder, because, by default, Cypress assumes that this is the test folder. Testers can create any number of subfolders inside this.
3. ```Support```: The support folder contains common files (reusable code, global variables, etc.) that need to be accessed globally inside the framework.
