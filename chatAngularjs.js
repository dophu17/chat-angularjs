/**
 * Created by admin on 7/31/2017.
 */

var app = angular.module('app', ['firebase']);
app.controller('chatCtrl', ['$scope', '$firebase', function($scope, $firebase) {
    var name = prompt("Enter your name: ", '');
    var previousChat = '';
    $scope.name = name;
    $scope.chatMessage = "";

    var ref = new Firebase("https://chat-a6afb.firebaseio.com/");
    var sync = $firebase(ref);
    $scope.chatMessages = sync.$asArray();

    $scope.sendChat = function () {
        if($scope.chatMes == previousChat || $scope.chatMes.length == 0) return;

        var chatMessage = { name: name, message: $scope.chatMes };
        $scope.chatMessages.$add(chatMessage);
        previousChat = $scope.chatMes;
        $scope.chatMes = "";
    }

    $scope.clear = function() {
        for (var i = 0; i < $scope.chatMessages.length; i++) {
            $scope.chatMessages.$remove($scope.chatMessages[i]);
        }
    }
}]);
