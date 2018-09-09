![Logo](https://raw.githubusercontent.com/jangholi/chabok-assets/master/chaboklogoblue.png)

# Chabok Push Client for React Native
[![npm](https://img.shields.io/npm/v/chabokpush-rn.svg)](https://www.npmjs.com/package/chabokpush-rn)
[![npm](https://img.shields.io/npm/dt/chabokpush-rn.svg)](https://www.npmjs.com/package/chabokpush-rn)

Implementing the Chabok Push API for Android and iOS.

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
**NOTE: For Android, you will still have to manually update the AndroidManifest.xml (as below).**

### Android manual Installation
Adding the Code in your `AndroidManifest.xml`:

```
.....

<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />

<application ....>
```
## Push Notification
To support dynamic app code updates (CodePush, ...) Chabok react-native (PureJS) SDK has dropped out built-in push notification support which has native dependencies.
However, this SDK provides two alternatives to add native push notification to your application.


### use third-party libraries

**react-native-push-notification:**

[react-native-push-notification](https://github.com/zo0r/react-native-push-notification) is a React Native Local and Remote Notifications with full support of Android and iOS capabilities. for ingrate between Chabok and react-native-push-notification in your implementation add the following:

```js

PushNotification.configure({
    // Called when Token is generated (iOS and Android)
    onRegister: function(token) {
      this.chabok.setPushNotificationToken(token)
    },
})
```
**NOTE:** this chabok `register` method should called after above code. e.g you can call it on class constructor method.

### Push notification Plugin 
**TODO** chabok push notification is a plugin that can integrate with Chabok SDK that aims to make push notification easier to manage, more efficient to execute and simple to test.


## Usage
to initialize Chabok Push globally, import following module before anything else where call `AppRegistry` method : 
```javascript
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
   this.chabok.register('98343534534');
   this.chabok.on('message', msg => console.log(msg));
   this.chabok.on('connecting', _ => console.log('Connecting ...'))
   this.chabok.on('disconnected', _ => console.log('offline'))
   this.chabok.on('connected', _ => console.log('connected'))

```
