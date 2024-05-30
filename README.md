Code needs both the backend and frontend files to run of course.
This is a localhost program which runs of commands put into terminal.
To replicate this program create a backend folder in a project
Go into the backend folder and run "npm init" and enter through all the things it presents, this should create a package.json
Then run the command "npm install express cors axios", this should create node_modules and package-lock.json
Then run "npm install --save-dev nodemon" , this runs the nodeJS server in development mode
Then copy and paste the code from inside this repos json files into your own json files. Then just copy the index.js and request.rest and put into your own project
To start the backend use the command "npm run start"
Create the frontend folder by running the command "npm create vite@latest" and call the project frontend, choose react, choose javascript,
In terminal run "cd frontend" and "npm install"
