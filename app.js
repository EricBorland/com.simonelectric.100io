'use strict';

const Homey = require('homey');

class Simon100iOApp extends Homey.App {
  onInit() {
    this.log('Simon100iOApp is running...');
  }
}

module.exports = Simon100iOApp;