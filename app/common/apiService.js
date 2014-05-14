var ApiService = function($http) {

  var api = {
    get: function(callback) {
      var data = [
        { name: 'Samsung Galaxy', url: 'http://www.samsung.com/galaxy' }
        { name: 'Nokia 3600' , url: 'https://www.apple.com/iphone/' }
      ];
      callback(null, data);
    }
  };

  return api;

}
