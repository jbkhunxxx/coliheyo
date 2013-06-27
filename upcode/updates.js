function onConfirm(button) {
    if (button==1){
        navigator.app.loadUrl("https://github.com/thesoftmodder/timetable-android-13-html5/raw/downloads/app/v1_22.apk", {openExternal: true});
    }
}

if (appv<1.22){
    updateAvailable = true;
    //updateText = "App Update Available"
    navigator.notification.confirm(
        'Removed Debug. Added homework feature! (v1.22)',  // message
        onConfirm,              
        'App Update Available',           
        'Download,Dismiss'          
    );
    console.log("Update Avail");
}
if (appv==1.22){
    updateAvailable = true;
    updateText = "latest"
    console.log("Latest Version");
}

if (appv>1.22){
    updateAvailable = true;
    updateText = "latest"
    console.log("U must be the software Programmer");
}


