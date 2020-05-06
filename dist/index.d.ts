import * as React from 'react';
export declare type IProps = {
    captchaDomain: string;
    onReceiveToken: (captchaToken: string) => void;
    siteKey: string;
    action: string;
};
export declare type IState = {};
declare class ReCaptchaV3 extends React.PureComponent<IProps, IState> {
    private _captchaRef;
    refreshToken: () => void;
    render(): JSX.Element;
}
export default ReCaptchaV3;
