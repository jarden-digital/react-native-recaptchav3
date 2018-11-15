**NOT TESTED YET. DO NOT USE. WIP.**

# react-native-recaptchav3

[![npm](https://img.shields.io/npm/v/react-native-recaptchav3.svg)](https://www.npmjs.com/package/react-native-recaptchav3) [![npm](https://img.shields.io/npm/dt/react-native-recaptchav3.svg)](https://www.npmjs.com/package/react-native-recaptchav3)

_React native component to use the invisible reCAPTCHA v3 from Google_

https://www.google.com/recaptcha/intro/v3.html

## Installation

```
npm install --save @haskkor/react-native-recaptchav3
```
or
```
yarn add @haskkor/react-native-recaptchav3
```

## Demo

![show-captcha]()

## Usage

Automatically get a captcha token:

```
import ReCaptchaV3 from '@haskkor/react-native-recaptchav3'

<RecaptchaV3
  ref={(ref: RecaptchaV3) => this._captchaRef = ref}
  captchaDomain={'https://yourowndomainname.co.nz'}
  siteKey={'yourownsitekey'}
  onReceiveToken={(token: string) => Alert.alert('CAPTCHA', token)}/>
```

One could also use a trigger to request a new token using the reference of the component:

```
<TouchableOpacity onPress={() => this._captchaRef.refreshToken()}>
  <Text>Retry</Text>
</TouchableOpacity>
```

## Options

| Key | Description | Default | Required | Type |
|---|---|---|---|---|
|**`captchaDomain`**|Your url registered with Google reCAPTCHA|`None`|`true`|`string`|
|**`onReceiveToken`**|The callback used to get the captcha token from the component|`None`|`true`|`(captchaToken: string) => void`|
|**`siteKey`**|The site key provided by Google reCAPTCHA|`None`|`true`|`string`|

## [Changelog](https://github.com/Haskkor/react-native-recaptchav3/blob/master/CHANGELOG.md)

## Contributing

Pull requests are welcome.

## [License](https://github.com/Haskkor/react-native-recaptchav3/blob/master/LICENSE)
