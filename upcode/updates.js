function onConfirm(button) {
    if (button==1){
        navigator.app.loadUrl("https://github.com/thesoftmodder/timetable-android-13-html5/raw/downloads/app/v1_11.apk", {openExternal: true});
    }
}

if (appv<1.11){
    updateAvailable = true;
    //updateText = "App Update Available"
    navigator.notification.confirm(
        'Updated App Contains Bugfixes (v1.1.1)',  // message
        onConfirm,              
        'App Update Available',           
        'Download,Later'          
    );
    console.log("Update Avail");
}
if (appv==1.11){
    updateAvailable = true;
    updateText = "latest"
    console.log("Latest Version");
}






