var app = angular.module('myApp', []);

app.controller('SearchController', function($scope) {
    $scope.languages = ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Russian'];
    $scope.nativeLanguage = $scope.languages[0];  // Default selection
    $scope.targetLanguage = $scope.languages[1];  // Default selection
    $scope.query = '';
    $scope.results = [];

    $scope.search = function() {
        // For demonstration, we'll just create dummy results
        if ($scope.query) {
            $scope.results = [
                'Result 1 for "' + $scope.query + '"',
                'Result 2 for "' + $scope.query + '"',
                'Result 3 for "' + $scope.query + '"'
            ];
        } else {
            $scope.results = [];
        }
    };
});
