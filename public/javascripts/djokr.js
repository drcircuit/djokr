/**
 * Created by espen on 29-Sep-17.
 */
angular.module('djokrapp', ['socialLogin'])
    .config(function(socialProvider){
        socialProvider.setGoogleKey("YOUR GOOGLE CLIENT ID");
        socialProvider.setLinkedInKey("YOUR LINKEDIN CLIENT ID");
        socialProvider.setFbKey({appId: "YOUR FACEBOOK APP ID", apiVersion: "API VERSION"});
    })
    .controller('menuctrl', ['$scope', function ($scope) {
        $scope.menu = {
            buttons: [
                {label: 'Sign in'},
                {label: 'About dJokr'}
            ]
        };
    }]);