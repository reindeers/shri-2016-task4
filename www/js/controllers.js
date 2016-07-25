angular.module('app.controllers', [])

.controller('homeCtrl', function($scope) {

})
      .controller('TodoListController', function($ionicPlatform, $scope) {
        console.log('fdfdf')
        var storage = window.localStorage;

        var todoList = this;
        todoList.todos = [];
        var result = JSON.parse(storage.getItem("todoList"));
        for (zr in result) {
          todoList.todos.push(result[zr]);
        };


        todoList.addTodo = function() {
          todoList.todos.push({text:todoList.todoText, done:false});
          todoList.todoText = '';
          storage.removeItem("todoList");
          storage.setItem("todoList", JSON.stringify(todoList.todos));
        };

        $scope.deleteTask = function(i) {
          todoList.todos.splice(i, 1);
          navigator.vibrate(1000);

        };

        ///$scope.deleteAllTask = function(i) {
        //  todoList.todos = todoList.todos.slice(i, 1);
        //};

      /*  function onConfirm(buttonIndex) {
            alert('You selected button ' + buttonIndex);
        };

        navigator.notification.confirm(
            'Are u sure?', // message
             onConfirm,            // callback to invoke with index of button pressed
            'Delete all stack',           // title
            ['Yes','No']     // buttonLabels
        );*/

      });
