/*
 * Copyright (C) 2015 Actor LLC. <https://actor.im>
 */

import { ActorSDK, ActorSDKDelegate } from 'actor-sdk';

// Main application config
const config = {
   endpoints: [
     'ws://61.175.100.14:9080',
  //   'wss://front2-ws-mtproto-api-rev2.actor.im'
   ],
  // isExperimental: true,
  // rootElement: 'actor-web-app',
   forceLocale: 'zh-CN',
  // twitter: 'actorapp',
  // homePage: 'http://actor.im',
  // appName: 'Actor'
};

// Components overriding
const components = {
  // login: null,
  // install: null,
  // deactivated: null,
  // joinGroup: null,

  // sidebar: {
  //   header: null,
  //   footer: null
  // },

  // dialog: {
  //   toolbar: null,
  //   compose: null,
  //   messages: {
  //    service: null
  //    text: null
  //    modern: null
  //    photo: null
  //    document: null
  //    contact: null
  //    location: null
  //    voice: null
  //   }
  // }
};

// Actions overriding
const actions = {
  // setLoggedIn: null
  // setLoggedOut: null
};

// Translation overriding
const l18n = {}

const delegate = new ActorSDKDelegate({ components, actions, l18n });

const app = new ActorSDK({delegate, ...config});
app.startApp();
