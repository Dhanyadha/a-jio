function createuser(name, email) {
    var user = {
        name: name,
        email: email
    }
    return user;
}

var myuser = createuser("dhanyadha", "irinankur19@gmail.com");
console.log("user Object:", myuser);
