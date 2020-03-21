  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBV9OWhiTQ0_mSQRIOys9_03PCiC2RZraw",
    authDomain: "gorkville.firebaseapp.com",
    databaseURL: "https://gorkville.firebaseio.com",
    projectId: "gorkville",
    storageBucket: "gorkville.appspot.com",
    messagingSenderId: "481238572240",
    appId: "1:481238572240:web:13996d01106a9939e552d5",
    measurementId: "G-PEPNRECKR3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('results-form').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var playerA = getInputVal('playerA');
  var playerB = getInputVal('playerB');
  var scoreOne = getInputVal('scoreOne');
  var scoreTwo = getInputVal('scoreTwo');

  // Save message
  saveMessage(playerA, playerB, scoreOne, scoreTwo);

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(playerA, playerB, scoreOne, scoreTwo){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    playerA:playerA,
    playerB:playerB,
    scoreOne:scoreOne,
    scoreTwo:scoreTwo
  });
}
}