const axios = require('axios');
const colors = require('colors');
const serverUri = `http://localhost:6000/api`;

const totalTests = 6;
var casesPassed = 0;

function pass(res) {
    console.log(res.status);
    console.log(res.data);
    casesPassed++;
}

function testResults() {
    //Results
    console.log('TESTING COMPLETE'.yellow);
    console.log(`${casesPassed} tests passed\nout of ${totalTests} tests`.green);
}


//Signup Testing
function signup(username, name, passwd, school, major) {
    axios.post(`${serverUri}/users/signup`,
        {
            _id: username,
            name: name,
            password: passwd,
            school: school,
            major: major

        })
        .then(function (res) {
            console.log('{PASS}[POST users/signup] succesful...'.yellow);
            pass(res)
        })
        .catch(function (err) {
            console.log("ERROR: ".red + err);
        })
}


// Login Testing
function login(username, password) {
    axios.post(`${serverUri}/users/login`,
        {
            _id: username,
            password: password,
        })
        .then(function (res) {
            console.log('{PASS[POST users/login] succesful...'.yellow);
            pass(res)
        })
        .catch(function (err) {
            console.log("ERROR: " + err);
        })
}

//Browsing the store

//View deprtments (View is the same for guests)
function getDepartments() {
    axios.get(`${serverUri}/departments`)
        .then(res => {
            console.log('{PASS}[GET api/departments] succesful...'.yellow);
            pass(res)
        })
        .catch(err => {
            console.log('ERROR: ' + err);
        });
}

//Getting items from a specific dept
function getFromDepartment(dept) {
    axios.get(`${serverUri}/products/department/${dept}`)
        .then(res => {

            console.log(`{PASS}[GET api/${dept}] succesful...`.yellow);
            pass(res)
        })
        .catch(err => {
            console.log('ERROR: ' + err);
        });
}





//getProduct testing
function getProduct(pid) {
    axios.get(`${serverUri}/products/${pid}`)
        .then(res => {
            console.log(`{PASS}[GET api/products${pid}] succesful...`.yellow);
            pass(res)
        })
        .catch(err => {
            console.log('ERROR: ' + err)
        })
}




//Posting a product
function postProduct(name, desc, price, imgUrl, deptId, sellerId) {
    axios.post(`${serverUri}/products/post`, {
        name: name,
        description: desc,
        price: price,
        imageUrl: imgUrl,
        departmentId: deptId,
        sellerId: sellerId
    }).then(res => {
        console.log(`{PASS}[POST api/products/post] succesful...`.yellow);
        pass(res)
    })
}


//Calling Test Functions Bellow This Line
 function test() {
     signup('MyUsername1A', 'Milo', 'Password', 'SFSU', 'CS');
     login('Test', 'Test');
     getDepartments();
     getFromDepartment('Accounting');
     getProduct('6188adc631cf72b465614be0');
     return true;
}



test()