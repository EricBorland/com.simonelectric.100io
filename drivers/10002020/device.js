'use strict';

const { ZwaveDevice } = require('homey-meshdriver');

class Simon100iODimmerSwitch extends ZwaveDevice {
  async onMeshInit() {
    this.log('Initiating Simon100iODimmerSwitch...');
    this.registerCapability('onoff', 'BASIC');
    this.registerCapability('dim', 'BASIC');
    this.registerCapability('measure_power', 'METER');
    this.log('Simon100iODimmerSwitch has been inited');
  }
}

module.exports = Simon100iODimmerSwitch;
