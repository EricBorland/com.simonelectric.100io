'use strict';

const { ZwaveDevice } = require('homey-meshdriver');

class Simon100iOSocket extends ZwaveDevice {
  onMeshInit() {
    this.log('Initiating Simon100iODimmerSwitch...');
    this.registerCapability('onoff', 'BASIC');
    this.registerCapability('measure_current', 'METER');
    this.registerCapability('measure_power', 'METER');
    this.registerCapability('measure_voltage', 'METER');
    this.log('Simon100iOSocket has been inited');
  }
}

module.exports = Simon100iOSocket;
