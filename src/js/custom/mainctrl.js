import {
  app
} from './main.js';
app.controller("mainController", ['generalService', function(generalService) {
  var tThis = this;
  tThis.timers = [{
    id: 0,
    title: 'Timer',
    name: 'timer',
    endDate: ''
  }];
  tThis.AddTimer = function() {
    var newID = (tThis.timers.length == 0 ? 0 : tThis.timers[tThis.timers.length - 1].id + 1);
    var newTimer = {
      id: newID,
      title: ' Timer' + newID,
      name: ' timer' + newID
    };
    tThis.timers.push(newTimer)
  };
  tThis.removeTimer = function(i) {
    tThis.timers.splice(i, 1);
  };
  tThis.saveTimers = function(){
    var newData = {
      'data' : tThis.timers
    };
    tThis.ectMessage = 'Saving Timers.... (please wait)';
    generalService.setTimers(newData).then(function(response){
      tThis.ectMessage = 'Saved !';
    });
  };
  tThis.resetDefaults = function(){
    generalService.getTimers().then(function(response){
      var tempData = response.data;
      if(tempData){
        tThis.timers=tempData;
      }
    })
  };
  tThis.resetDefaults();
}])
