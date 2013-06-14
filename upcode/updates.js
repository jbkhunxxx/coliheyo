function onConfirm(button) {
    if (button==1){
        navigator.app.loadUrl("https://github.com/thesoftmodder/timetable-android-13-html5/raw/downloads/app/v1_2.apk", {openExternal: true});
    }
}

<<<<<<< HEAD
if (appv<1.11){
    updateAvailable = true;
    //updateText = "App Update Available"
    navigator.notification.confirm(
        'Updated App Contains New Features (v1.1.1)',  // message
        onConfirm,              
        'App Update Available',           
        'Download,Later'          
    );
    console.log("Latest Version");
}
else if (appv==1.11){
=======
if (appv=="1.1"){
    /*updateAvailable = true;
    //updateText = "App Update Available"
    navigator.notification.confirm(
        'Updated App Contains New Features (v1.2)',  // message
        onConfirm,              // callback to invoke with index of button pressed
        'App Update Available',            // title
        'Download,Later'          // buttonLabels
    );*/
    console.log("Latest Version");
}
else if (appv=="1.2"){
>>>>>>> ba981cafa6bfa1b126143cd5542063f40f758a26
    updateAvailable = false;
    updateText = "latest"
}






