// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { FirebaseOptions } from "firebase/app";

export const environment = {
  production: false,
  firebase :{
    apiKey: "AIzaSyDdgXlCS9rIIaWnn-WxKiCAF7WAUBqJAX4",
    authDomain: "todolist-86d7d.firebaseapp.com",
    projectId: "todolist-86d7d",
    storageBucket: "todolist-86d7d.appspot.com",
    messagingSenderId: "348143812022",
    appId: "1:348143812022:web:ce561c56fccc31b9bbd517"
  }as FirebaseOptions,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
