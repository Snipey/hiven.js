# Hiven.js

<p align="center">
  <a href="https://twitter.com/dustinrouillard"><img src="https://img.shields.io/twitter/follow/dustinrouillard.svg?label=Follow" alt="Follow on twitter"></a>
  <a href="https://twitter.com/hivenjs"><img src="https://img.shields.io/twitter/follow/hivenjs.svg?label=Hiven.js+Twitter" alt="Follow Hiven.js on twitter"></a> 
  <a href="https://npmjs.com/@hivenapp/hiven.js"><img src="https://img.shields.io/npm/v/@hivenapp/hiven.js.svg" alt="NPM Package Version"></a>
  <a href="https://npmjs.com/@hivenapp/hiven.js"><img src="https://img.shields.io/bundlephobia/min/@hivenapp/hiven.js.svg" alt="NPM Bundle MIN Size"></a>
  <a href="https://github.com/hivenapp/hiven.js"><img src="https://img.shields.io/github/license/hivenapp/hiven.js.svg" alt="GitHub License"></a>
  <a href="https://github.com/hivenapp/hiven.js"><img src="https://img.shields.io/github/languages/code-size/hivenapp/hiven.js.svg" alt="GitHub Code Size"></a>
  <a href="https://github.com/hivenapp/hiven.js"><img src="https://img.shields.io/github/repo-size/hivenapp/hiven.js.svg" alt="GitHub Repo Size"></a>
</p>

Client library for Hiven, used to make chat bots and interact with the API.

This library is extremely unfinished currently it only handles incoming events from the gateway.

This was originally created to be similar to discord.js and will probably still inherit some of it's features in the future.

IMPORTANT: In order to use this library with a user account you need to instantiate your client with these settings.

```js
const Hiven = require('hiven.js');
const Client = new Hiven.Client({ clientType: 'user' });
```
