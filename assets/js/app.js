// Initialize Firebase
var config = {
    apiKey: "AIzaSyDNYs14_CK81WrZUVI_xtcP70DIpGPUk7I",
    authDomain: "mwclass-48b5d.firebaseapp.com",
    databaseURL: "https://mwclass-48b5d.firebaseio.com",
    projectId: "mwclass-48b5d",
    storageBucket: "mwclass-48b5d.appspot.com",
    messagingSenderId: "1000969090197"
};
firebase.initializeApp(config);

var roomID;
var user;
var userIndex;

// Create a variable to reference the database.
var database = firebase.database();

database.ref('rooms').on("child_added", function (snapshot) {
    var sv = snapshot.val();
});

function createRoom(database, user) {
    return database.ref('rooms').push({
        users: [user]
    });
}

function joinRoom(database, roomId, username) {
    roomID = roomId;
    database.ref('rooms/' + roomId + '/users').once('value').then((snap) => {
        let users = snap.val();
        if (!users || !users.includes(username)) {
            users.push(username);
            database.ref('rooms/' + roomId + '/users').set(users);
            userIndex = users.length - 1;
        } else {
            userIndex = users.indexOf(username);
        }
        user = username;

        database.ref('rooms/' + roomId + '/users/' + userIndex).onDisconnect().remove();

        registerOnNoteReceived();
    });
}

function registerOnNoteReceived(){
    console.log('once');
    database.ref('rooms/' + roomID + "/notes").limitToLast(1).on('child_added', function(snap) {
        let note = snap.val();
        
        console.log(note);
    });
}

$("#addForm").on("submit", function (event) {
    event.preventDefault();
    var name = $("#employeeName").val();
    createRoom(database, name).then((snap) => {
        let key = snap.key;
        joinRoom(database, key, name);
    });
});

$("#joinBtn").on("click", function (event) {
    event.preventDefault();
    var name = $("#employeeName").val();
    var roomId = $("#roomId").val();
    joinRoom(database, roomId, name);
});

$(document).keypress(function (e) {
    if (e.which == 13) {
        database.ref('rooms/' + roomID + "/notes").push({
            c4:userIndex
        });
    }
});