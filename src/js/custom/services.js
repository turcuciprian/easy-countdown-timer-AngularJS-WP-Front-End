import {
  app
} from './main.js'

app.factory('generalService', ['$http',function($http) {
  return {
    setPath: function(routePath) {
      return 'http://localhost:8888/wordpress/wp-json' + routePath;
    },
    getTimers: function(){
      return $http.get(this.setPath('/ect/getTimers'));
    }
  }
}]);
