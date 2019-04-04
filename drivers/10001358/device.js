'use strict';

const { ZwaveDevice } = require('homey-meshdriver');

class Simon100Blinds extends ZwaveDevice {
  onMeshInit() {
    this.log('Simon100Blinds has been inited');
    this.enableDebug();
    this.printNode();
    this.registerCapability('onoff', 'SWITCH_BINARY');
    this.registerCapability('windowcoverings_state', 'SWITCH_BINARY');
    this.registerCapability('windowcoverings_tilt_set', 'SWITCH_MULTILEVEL');
  }
}

module.exports = Simon100Blinds;
