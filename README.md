![Logo](https://gitlab.com/adp-digital/adp-push-client-rn/raw/master/logo.png) 


# ChabokPush React Native
Implementing the ChabokPush API for Android and iOS.

This repo is a wrapper for the [chabokpush](https://github.com/chabokpush/chabok-client-js) client library which introduces a dependency needed by React Native. See the Chabok Push [documentation](https://doc.chabokpush.com/javascript/introducing.html) for usage details of library.

## Installation
Add library to project
```bash
yarn add chabokpush-rn
```
OR 
```bash
npm install --save chabokpush-rn
```

### Android Installation
Adding the Code in your `AndroidManifest.xml`:

```
.....

<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />

<application ....>
```

## Usage
to initialize Chabok Push globally, import following module before anything else where call `AppRegistry` method : 
```bash
import 'chabokpush-rn/global';
import {AppRegistry} from 'react-native';
import App from './app/index';

AppRegistry.registerComponent('chabokchatdemo', () => App);

```
then you can use Chabok Push anywhere you want:
```javascript
import chabokpush from 'chabokpush-rn';
...

   const authConfig = {
            appId: 'chabok-starter',
            apiKey: 'ae98537a4fb4957277374083a356d2ceb63372c4',
            username: 'chabok-starter',
            password: 'chabok-starter',
            devMode: true
        };
   const options = {
            webpush: {
                enabled: false
            },
            silent: true,
        };
   this.chabok = new chabokpush(authConfig, options);
        
```
