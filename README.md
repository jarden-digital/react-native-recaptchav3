# react-native-recaptchav3

[![npm](https://img.shields.io/npm/v/react-native-recaptchav3.svg)](https://www.npmjs.com/package/react-native-recaptchav3) [![npm](https://img.shields.io/npm/dt/react-native-recaptchav3.svg)](https://www.npmjs.com/package/react-native-recaptchav3)

_React native component to use the invisible ReCaptcha v3 from Google_

## Installation

```
npm install --save react-native-recaptchav3
```
or
```
yarn add react-native-recaptchav3
```

## Demo

![show-captcha]()

## Usage

```
import PINCode from '@haskkor/react-native-pincode'
<PINCode status={'choose'}/>
```

## Options

| Key | Description | Default | Required | Type |
|---|---|---|---|---|
|**`buttonComponentLockedPage`**|Button component to be used at the bottom of the page on the locked application page|TouchableOpacity exit button killing the application|`false`|`any`|
|**`buttonDeleteComponent`**|Button component to be used at the bottom right of the PIN panel to delete a previous entry|TouchableHighlight button with a `delete` text and the `backspace` material icon|`false`|`any`|
|**`buttonDeleteText`**|Text of the of the button used to delete a previous entry on the PIN panel|`delete`|`false`|`string`|

## [Changelog](https://github.com/Haskkor/react-native-recaptchav3/blob/master/CHANGELOG.md)

## Contributing

Pull requests are welcome.

## [License](https://github.com/Haskkor/react-native-recaptchav3/blob/master/LICENSE)
