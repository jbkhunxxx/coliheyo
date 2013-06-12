//updated for 2.8.1

function onConfirm(button) {
    if (button==1){
        navigator.app.loadUrl("https://github.com/thesoftmodder/timetable-android-13-html5/raw/downloads/app/v1_2.apk", {openExternal: true});
    }
}

if (appVersion=="1.1"){
    updateAvailable = true;
    alert("COME UPDATE");
    updateText = "An update is available. Bugfixes New Features."
}
else if (appVersion=="1.2"){
    updateAvailable = false;
    updateText = "latest"
}




