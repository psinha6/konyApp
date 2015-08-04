function addWidgetsForm0c1239e36bea440() {
    var Button045941c1bdedb47 = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "Button045941c1bdedb47",
        "isVisible": true,
        "left": "52dp",
        "onClick": null,
        "onTouchEnd": null,
        "onTouchMove": null,
        "onTouchStart": null,
        "skin": "slButtonGlossBlue",
        "text": "Submit",
        "top": "522dp",
        "width": "260dp"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var Image06bf5703cf68547 = new kony.ui.Image2({
        "height": "113dp",
        "id": "Image06bf5703cf68547",
        "isVisible": true,
        "left": "11dp",
        "onDownloadComplete": null,
        "onSwipe": null,
        "onTouchCancel": null,
        "onTouchEnd": null,
        "onTouchMove": null,
        "onTouchStart": null,
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "113dp",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var TextBox1 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "34dp",
        "id": "TextBox1",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "144dp",
        "onDone": null,
        "onSwipe": null,
        "onTextChange": null,
        "onTouchCancel": null,
        "onTouchEnd": null,
        "onTouchMove": null,
        "onTouchStart": null,
        "placeholder": null,
        "secureTextEntry": false,
        "skin": "slTextBox",
        "text": "Name",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "34dp",
        "width": "203dp",
        "zIndex": 1
    }, {
        "containerHeight": null,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "onBeginEditing": null,
        "onEndEditing": null,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    Form0c1239e36bea440.add(
    Button045941c1bdedb47, Image06bf5703cf68547, TextBox1);
};

function Form0c1239e36bea440Globals() {
    Form0c1239e36bea440 = new kony.ui.Form2({
        "addWidgets": addWidgetsForm0c1239e36bea440,
        "enabledForIdleTimeout": false,
        "id": "Form0c1239e36bea440",
        "init": null,
        "layoutType": kony.flex.FREE_FORM,
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
    Form0c1239e36bea440.setDefaultUnit(kony.flex.DP);
};