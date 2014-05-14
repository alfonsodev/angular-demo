function phoneController($scope, ApiService) {
  ApiService.get(function(err, data) {
    $scope.phones = data;
  });
}
