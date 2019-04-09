'use strict';

const { ZwaveDevice } = require('homey-meshdriver');
const MULTIPLIER = 99;

class Simon100Blinds extends ZwaveDevice {
  onMeshInit() {
    this.log('Initiating Simon100Blinds...');
    this.registerCapability('onoff', 'BASIC');
    this.registerCapability('windowcoverings_set', 'BASIC', {
      get: 'BASIC_GET',
      set: 'BASIC_SET',
      setParser: value => ({
        'Value': value * MULTIPLIER,
      }),
      report: 'BASIC_REPORT',
      reportParser(report) {
        if (report && report.hasOwnProperty('Value')) return report.Value / MULTIPLIER;
        return null;
      }
    });
    this.log('Simon100Blinds has been inited');
  }
}

module.exports = Simon100Blinds;
