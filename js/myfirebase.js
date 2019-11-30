// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDdYIyFMiK7XXJf3sgMGiLWEr1U-vAR_RY",
    authDomain: "userstudydatabase.firebaseapp.com",
    databaseURL: "https://userstudydatabase.firebaseio.com",
    projectId: "userstudydatabase",
    storageBucket: "userstudydatabase.appspot.com",
    messagingSenderId: "933503788607",
    appId: "1:933503788607:web:55ed7868477ed6c4583a8a",
    measurementId: "G-C43DPBFYC7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// save data to firebase
// usage: saveToFirebase({ 'me': 'jplin' });
function saveToFirebase(jsonObject, exp_id) {
    firebase.database().ref(exp_id).push().set(jsonObject)
        .then(function (snapshot) {
            success(); // some success method
        }, function (error) {
            console.log('error' + error);
            error(); // some error method
        });
}
function success() {
    console.log('success send firebase')
}
function error() {
    console.log('error' + error)
}