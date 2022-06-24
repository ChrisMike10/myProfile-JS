const myProfile = { firstName:"Mike", lastName:"Awoyemi", height: 1.7, country:"Nigeria"};
document.getElementById("fName").innerHTML = myProfile.firstName;
document.getElementById("lName").innerHTML = myProfile.lastName;
document.getElementById("height").innerHTML = myProfile.height;
document.getElementById("country").innerHTML = myProfile.country;


alert("My name is " + myProfile.firstName +" " + myProfile.lastName + ". I am " + myProfile.height + "m tall and I reside in " + myProfile.country);