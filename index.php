<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>Home</title>

    <!-- jquery-->
<!--    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>-->
    <!-- AngularJS -->
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.2/angular.min.js"></script>
    <!-- Firebase -->
    <script src="https://cdn.firebase.com/js/client/2.0.4/firebase.js"></script>
    <!-- AngularFire -->
    <script src="https://cdn.firebase.com/libs/angularfire/0.9.0/angularfire.min.js"></script>
</head>
<body ng-app="app">
    <h2>Chat room</h2>
    <a href="">Login</a>
    <hr/>
    <h1>Firebase chatbox</h1>
<!--    <div ng-controller="chatCtrl">-->
<!--        <div id="chatBox" style="padding: 10px; border: black 1px solid; overflow-y: scroll; height: 150px; width: 350px; margin: 0 auto;"></div>-->
<!---->
<!--        <form style="margin-top: 10px">-->
<!--            <label for="name">Name:-->
<!--                <input type="text" name="name" value="Phu" id="name" />-->
<!--            </label>-->
<!--            <label for="message">Message:-->
<!--                <input type="text" name="message" value="" id="message"/>-->
<!--            </label>-->
<!---->
<!--            <button type="button" id="send">Send</button>-->
<!--        </form>-->
<!--    </div>-->


        <div ng-controller="chatCtrl">
            <div id="chatBox" style="padding: 10px; border: black 1px solid; overflow-y: scroll; height: 150px; width: 350px; margin: 0 auto;">
                <h1>Chat box</h1>
                <!--<div ng-repeat="chatMessage in chatMessages | limitTo:-15">-->
                <div ng-repeat="chatMessage in chatMessages">
                    <span style="font-weight: bold">{{chatMessage.name}}</span>   : <span>{{chatMessage.message}}</span>
                </div>
            </div>

            <form>
                Name: {{name}} <br/>
                Chat: <input type="text" ng-model="chatMes"/> <button type="submit" ng-click="sendChat()" >Send</button>
            </form>
        </div>


<!--    <script src="chatJquery.js"></script>-->
    <script src="chatAngularjs.js"></script>
</body>
</html>