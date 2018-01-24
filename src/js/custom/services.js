import {
  app
} from './main.js'

app.factory('generalService', ['$http',function($http) {
  return {
    setPath: function(routePath) {
      return window.ectPath + routePath;
    },
    getTimers: function(){
      return $http.get(this.setPath('/ect/getTimers'));
    },
    setTimers: function(data){
      return $http.put(this.setPath('/ect/setTimers'),data);
    }
  }
}]);
