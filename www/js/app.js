var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        document.addEventListener("backbutton", function(e) {
            e.preventDefault();
        }, false);
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        AndroidFullScreen.immersiveMode(successFunction, errorFunction);
        window.plugins.insomnia.keepAwake();
        if (cordova.platformId == 'ios') {
            StatusBar.hide();
        }
        loadApp();
    }
};

function successFunction() {
    console.info("It worked!");
}

function errorFunction(error) {
    console.error(error);
}

function trace(value) {
    console.log(value);
}

function loadApp() {
    document.getElementById("loading").style.display = "block";
    console.log('loading');
    console.log(navigator.onLine);
    // if (navigator.onLine) {
    //     var url = "http://rla.io/screen";
    //     // var url = "http://192.168.1.56:3000/screen";
    //     var target = "_self";
    //     var options = "location=no,hidden=yes,zoom=no,hardwareback=no,toolbar=no,allowInlineMediaPlayback=yes";
    //     var ref = cordova.InAppBrowser.open(url, target, options);
    //     ref.addEventListener("loadstop", function() {
    //         ref.show();
    //     });
    // } else {
    //     document.getElementById("loading").style.display = "none";
    //     document.getElementById('greet').innerHTML = "You need to be connected to the internet to use the RLA application.";
    //     return setTimeout(loadRemote, 1000);
    // }
}
