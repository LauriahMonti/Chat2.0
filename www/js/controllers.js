angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

//Controller de la connexion qui redirige vers le chat
.controller('user', function($scope, $state) {
    // quand l'utilisateur clique sur "Connexion"
    // on sauvegarde les informations dans la variable user
    // on redirige l'utilisateur vers la page de chat avec en paramètres le pseudo de l'utilisateur
    $scope.save = function(user){
      $state.go("chat", { "user" : user.pseudo });
    }
});
