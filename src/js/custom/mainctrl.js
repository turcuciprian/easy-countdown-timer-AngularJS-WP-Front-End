import {
  app
} from './main.js';
app.controller("mainController", function(){
var tThis = this;
tThis.timers=[
  {
    id:0,
    title: 'Timer',
    name: 'timer',
    endDate: ''
  }
];
tThis.AddTimer = function(){
  var newID = (tThis.timers.length ==  0 ? 0:tThis.timers[tThis.timers.length-1].id+1);
  var newTimer = {
    id:newID,
    title: ' Timer'+newID,
    name: ' timer'+newID
  };
  tThis.timers.push(newTimer)
};
tThis.removeTimer = function(i){
  tThis.timers.splice(i,1);
};
})
