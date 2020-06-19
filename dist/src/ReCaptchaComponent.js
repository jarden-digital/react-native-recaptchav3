"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const React = require("react");
const react_native_1 = require("react-native");
const react_native_webview_1 = require("react-native-webview");
const patchPostMessageJsCode = `(${String(function () {
    const originalPostMessage = window.postMessage;
    const patchedPostMessage = (message, targetOrigin, transfer) => {
        originalPostMessage(message, targetOrigin, transfer);
    };
    patchedPostMessage.toString = () => String(Object.hasOwnProperty).replace('hasOwnProperty', 'postMessage');
    window.postMessage = patchedPostMessage;
})})();`;
const getExecutionFunction = (siteKey, action) => {
    return `window.grecaptcha.execute('${siteKey}', { action: '${action}' }).then(
    function(args) {
      window.ReactNativeWebView.postMessage(args);
    }
  )`;
};
const getInvisibleRecaptchaContent = (siteKey, action) => {
    return `<!DOCTYPE html><html><head>
    <script src="https://www.google.com/recaptcha/api.js?render=${siteKey}"></script>
    <script>window.grecaptcha.ready(function() { ${getExecutionFunction(siteKey, action)} });</script>
    </head></html>`;
};
class ReCaptchaComponent extends React.PureComponent {
    constructor() {
        super(...arguments);
        this._webViewRef = null;
    }
    refreshToken() {
        if (constants_1.platform.isIOS && this._webViewRef) {
            this._webViewRef.injectJavaScript(getExecutionFunction(this.props.siteKey, this.props.action));
        }
        else if (constants_1.platform.isAndroid && this._webViewRef) {
            this._webViewRef.reload();
        }
    }
    render() {
        return React.createElement(react_native_1.View, { style: { flex: 0.0001, width: 0, height: 0 } },
            React.createElement(react_native_webview_1.WebView, { ref: (ref) => {
                    this._webViewRef = ref;
                }, javaScriptEnabled: true, originWhitelist: ['*'], automaticallyAdjustContentInsets: true, mixedContentMode: 'always', injectedJavaScript: patchPostMessageJsCode, source: {
                    html: getInvisibleRecaptchaContent(this.props.siteKey, this.props.action),
                    baseUrl: this.props.captchaDomain
                }, onMessage: (e) => {
                    this.props.onReceiveToken(e.nativeEvent.data);
                } }));
    }
}
exports.default = ReCaptchaComponent;
