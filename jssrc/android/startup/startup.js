//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "konyApp",
    appName: "konyApp",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.12.47",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "middleware",
    url: "http://10.10.12.47:80/middleware/MWServlet",
    secureurl: "https://10.10.12.47:443/middleware/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    Form0c1239e36bea440Globals();
    Form0d58f6d73c1e04fGlobals();
    Form1Globals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 6000
    })
};

function themeCallBack() {
    callAppMenu();
    initializeGlobalVariables();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            Form0c1239e36bea440.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("defaultTheme", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;