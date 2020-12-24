//reading data from cc database 

//create firebase instance
var database = firebase.database();

var userId = firebase.auth().currentUser.uid;
  console.log(firebase.database().ref('/users/' + userId).once('value').then((snapshot) => {
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
  }))

ref.once("value", function(data) {
    // do some stuff once
  });

//sign out user
  /* firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });   */