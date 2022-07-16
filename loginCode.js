function checkCreds(){
    console.log("checkCreds) started");
    var firstName;
    var lastName;
    var badgeNumb;
    var fullName;
    var fullNameLength;
/*first name*/
    firstName = document.getElementById("fName").value;
    console.log("The first name is: " + firstName);
/*last name*/
    lastName = document.getElementById("lName").value;
    console.log("The last name is: " + lastName);
/*badge number*/
    badgeNumb = document.getElementById("badgeID").value;
    console.log("The badge number is: " + badgeNumb);
/*full name*/
    fullName = firstName + " " + lastName;
    console.log("The user's full name is: " + fullName)
/*full name length*/
    fullNameLength = fullNameLength;
    console.log("The user's full name length is: " + fullNameLength + " characters.");

    if(fullNameLength > 20){
        document.getElementById(loginStatus).innerHTML = "Invalid name, please try again."
    } else if(badgeNumb > 999 || badgeNumb < 1){
        document.getElementById(loginStatus).innerHTML = "Invalid badge number, please try again."
    } else {
        location.replace("./uatSpace.html")
    }
}