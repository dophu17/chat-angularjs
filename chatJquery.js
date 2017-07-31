/**
 * Created by admin on 7/31/2017.
 */

var config = {
    apiKey: "AIzaSyCbGUBn-ymrfRshAX1UTKhYWDepph8Gb9A",
    authDomain: "chat-a6afb.firebaseapp.com",
    databaseURL: "https://chat-a6afb.firebaseio.com",
    projectId: "chat-a6afb",
    storageBucket: "",
    messagingSenderId: "969652658197"
};
firebase.initializeApp(config);
var database = firebase.database();
var ref = database.ref();

ref.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
        var data = childSnapshot.val();
        var name = data.name;
        var message = data.message;
        getAll(name, message);
    });
});

ref.on('child_added', function (snapshot){
    var data = snapshot.val();
    var name = data.name;
    var message = data.message;
    getAll(name, message);
});

$('#send').click(function(){
    add();
});
$("#message").keypress(function(e){
    if (e.which == 13 ) {
        add();
    }
});

function getAll(name, message) {
    var messageResults = name + ': ' + message + '<br>';
    $('#chatBox').append(messageResults);
    divScroll();
    $('#message').val('');
    console.log('getAll' + name + ': ' + message);
}

function add() {
    var obj = {
        name: $('#name').val(),
        message: $('#message').val()
    };
    ref.push(obj);
    console.log('add new success!');
}

function divScroll() {
    $("#chatBox").scrollTop($("#chatBox")[0].scrollHeight);
}
