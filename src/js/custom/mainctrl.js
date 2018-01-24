import {
  app
} from './main.js';
app.controller("mainController", function(){
var tThis = this;
tThis.timers=[
  {
    title: ' Timer1',
    heading: ' Heading1'
  }
];
tThis.AddTimer = function(){
  tThis.timers.push({
    title: ' Timer'+tThis.timers.length+1,
    heading: ' Heading'+tThis.timers.length+1
  })
}
})
