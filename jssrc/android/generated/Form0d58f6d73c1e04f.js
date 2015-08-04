function addWidgetsForm0d58f6d73c1e04f() {
    var Button0e768b2eef4e84d = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "id": "Button0e768b2eef4e84d",
        "isVisible": true,
        "onClick": null,
        "onTouchEnd": null,
        "onTouchMove": null,
        "onTouchStart": null,
        "skin": "slButtonGlossBlue",
        "text": "Submit"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": false,
        "padding": [4, 4, 4, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    Form0d58f6d73c1e04f.add(
    Button0e768b2eef4e84d);
};

function Form0d58f6d73c1e04fGlobals() {
    Form0d58f6d73c1e04f = new kony.ui.Form2({
        "addWidgets": addWidgetsForm0d58f6d73c1e04f,
        "enabledForIdleTimeout": false,
        "id": "Form0d58f6d73c1e04f",
        "init": null,
        "needAppMenu": true,
        "onDecelerationStarted": null,
        "onDestroy": null,
        "onHide": null,
        "onOrientationChange": null,
        "onScrollEnd": null,
        "onScrollStart": null,
        "onScrollTouchReleased": null,
        "onScrolling": null,
        "onTouchEnd": null,
        "onTouchMove": null,
        "onTouchStart": null,
        "postShow": null,
        "preShow": null,
        "skin": "slForm",
        "title": null,
        "type": constants.FORM_TYPE_NATIVE
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "onDeviceBack": null,
        "onDeviceMenu": null,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
};