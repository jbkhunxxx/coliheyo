//updated for 2.8.1

function onConfirm(button) {
    if (button==1){
        navigator.app.loadUrl("https://github.com/thesoftmodder/timetable-android-13-html5/raw/downloads/app/v1_2.apk", {openExternal: true});
    }
}

if (appV=="1.1"){
    updateAvailable = true;
    //updateText = "App Update Available"
    navigator.notification.confirm(
        'Updated App Contains New Features (v1.2)',  // message
        onConfirm,              // callback to invoke with index of button pressed
        'App Update Available',            // title
        'Download,Later'          // buttonLabels
    );
}
else if (appv=="1.2"){
    updateAvailable = false;
    updateText = "latest"
}




