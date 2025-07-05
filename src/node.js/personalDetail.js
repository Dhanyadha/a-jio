function createPersonalDetails(email, password, dob) {
    var user = {
        email: email,
        password: password,
        dob: dob
    };
    return user;
}

var myDetails = createPersonalDetails("irinankur19@gmail.com", "12345", "19-06-2003");
console.log("Personal Details:", myDetails);
