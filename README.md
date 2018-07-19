# boilerplate_react_redux_router

Basic Process of creating your own react project with redux/router

1.  npm i -g create-react-app
2.  create-react-app your_app_name

Note :
Folder structure can differ as needed , common ways are as below:

    a) For small projects : create two seperate folders - containers and components to sepearte class-based and functional componets .

    b) For large projects :  Create seperate folders for different sections of the app based on            functionality, and add all related "class-based" and "functional-componets" inside,this way each    folder represents a different part of the app with it own shared state .

3.  Create "components" folder and add subfolders for different parts of the app.

4.  Add a compDirectory.js to componets folder , export all componets to this file , will access componets anywhere from this file.

Add Redux

1.  npm i redux react-redux redux-thunk;
