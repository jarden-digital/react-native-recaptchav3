import * as React from 'react';
declare type IProps = {
    captchaDomain: string;
    onReceiveToken: (captchaToken: string) => void;
    siteKey: string;
    action: string;
};
declare class ReCaptchaComponent extends React.PureComponent<IProps> {
    private _webViewRef;
    refreshToken(): void;
    render(): JSX.Element;
}
export default ReCaptchaComponent;
