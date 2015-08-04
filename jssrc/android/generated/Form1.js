function addWidgetsForm1() {
    Form1.add();
};

function Form1Globals() {
    Form1 = new kony.ui.Form2({
        "addWidgets": addWidgetsForm1,
        "enabledForIdleTimeout": false,
        "id": "Form1",
        "init": null,
        "layoutType": kony.flex.FREE_FORM,
        "menuFocusSkin": "CopyslForm05d46686876d649",
        "menuNormalSkin": "CopyslForm092b8c67f0ea140",
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
        "skin": "CopyslForm05d1f3bc72d2841",
        "title": null,
        "type": constants.FORM_TYPE_NATIVE
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
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
    Form1.setDefaultUnit(kony.flex.DP);
};