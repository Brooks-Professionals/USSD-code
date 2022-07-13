//Connecting Java variable to html tag
//document.getElementById("myAnswer").innerHTML="Hello Answer"

// for inner text and innerhtml
//myAnswer.innerHTML="<i>My name is young<i>"
//myAnswer.innerText="<i>My name is young<i>"

//Conditional Statememt
//IF ELSE STATEMENT


//Simple if statement

//let age = 30
//if (age == 30) {
//alert("yes")}
//else {
//alert("No")}

//let password="iou"
// if (password=="iou"){
//alert("Continue")}
// else{
// alert("Error")}

//Nested if State
//let userRole
//if (userRole == null || userRole == "") { console.log ("Value Empty")}
//else if(userRole=="admin"){alert("You are an Admin")}
//else if(userRole=="user"){alert("You are a user")}
//else {alert("Go fill out the form first")}

//loginform()
//function loginform(){
//let userName="Brooks"
//let password="123456"
//if (userName=="Brooks" && password=="123456") {alert("You can login")}
//else if(userName!="Brooks") {alert("User Name Error")}
//else if(password!="123456") {alert("Password Error")}
// else {alert("Go fill out the form first")}}



//promting a user
//let user;
//user = prompt("Input your username?");
//alert("Welcome " + user + "");

//let password = prompt("Enter Your Password");
//if (password == "123456") { alert("Login Successful"); }
//else { alert("Try Again"); }


//INTRODUCTION TO SWITCH STATEMENT
let accountBalance = 10000
let creditBalance = 0
let dataBalance = 0
openmenu()

function openmenu() {
    let menuChoice = prompt("Choose an Option \n1: Buy Airtime\n2: Buy Data\n3: Check Balance")

    switchMenu(menuChoice)
}

function switchMenu(bassey) {
    switch (bassey) {
        case "1":
            buyAirtime()
            break;

        case "2":
            buyData()
            break;

        case "3":
            checkBalance()
            break;

        default:
            openMenu()
            break;
    }
}


function buyAirtime() {
    let netWork = prompt("Select a Network \n1: Airtel\n2: Etisalat\n3: Glo\n4: MTN\n5: Ntel\n6: Smile\n7: Spectranet")

    switchAirtime(netWork)
}

function switchAirtime(b) {
    switch (b) {
        case "1":
            airtel()
            break;

        case "2":
            etisalat()
            break;

        case "3":
            glo()
            break;

        case "4":
            mtn()
            break;

        case "5":
            ntel()
            break;

        case "6":
            smile()
            break;

        case "7":
            spectranet()
            break;

        default:
            openMenu()
            break;
    }

}


function airtel() {
    let amount = prompt("How much would you recharge \n1: N100\n2: N200\n3: N500\n4: N750\n5: N1000\n6: N2000\n7: N5000")

    switchMuch(amount)
}

function etisalat() {
    let amount = prompt("How much would you recharge \n1: N100\n2: N200\n3: N500\n4: N750\n5: N1000\n6: N2000\n7: N5000")

    switchMuch(amount)
}

function glo() {
    let amount = prompt("How much would you recharge \n1: N100\n2: N200\n3: N500\n4: N750\n5: N1000\n6: N2000\n7: N5000")

    switchMuch(amount)
}

function mtn() {
    let amount = prompt("How much would you recharge \n1: N100\n2: N200\n3: N500\n4: N750\n5: N1000\n6: N2000\n7: N5000")

    switchMuch(amount)
}

function ntel() {
    let amount = prompt("How much would you recharge \n1: N100\n2: N200\n3: N500\n4: N750\n5: N1000\n6: N2000\n7: N5000")

    switchMuch(amount)
}

function smile() {
    let amount = prompt("How much would you recharge \n1: N100\n2: N200\n3: N500\n4: N750\n5: N1000\n6: N2000\n7: N5000")

    switchMuch(amount)
}

function spectranet() {
    let amount = prompt("How much would you recharge \n1: N100\n2: N200\n3: N500\n4: N750\n5: N1000\n6: N2000\n7: N5000")

    switchMuch(amount)
}

function switchMuch(br) {
    switch (br) {
        case "1":
            accountBalance = accountBalance - 100
            alert("Successful, Your New Account is N" + accountBalance)
            creditBalance = creditBalance + 100
            alert("N100 has been credited to your line")()
            break;

        case "2":
            accountBalance = accountBalance - 200
            alert("Successful, Your New Account is N" + accountBalance)
            creditBalance = creditBalance + 200
            alert("N200 has been credited to your line")()
            break;

        case "3":
            accountBalance = accountBalance - 500
            alert("Successful, Your New Account is N" + accountBalance)
            creditBalance = creditBalance + 500
            alert("N500 has been credited to your line")()
            break;

        case "4":
            accountBalance = accountBalance - 750
            alert("Successful, Your New Account is N" + accountBalance)
            creditBalance = creditBalance + 750
            alert("N750 has been credited to your line")()
            break;

        case "5":
            accountBalance = accountBalance - 1000
            alert("Successful, Your New Account is N" + accountBalance)
            creditBalance = creditBalance + 1000
            alert("N1000 has been credited to your line")()
            break;

        case "6":
            accountBalance = accountBalance - 2000
            alert("Successful, Your New Account is N" + accountBalance)
            creditBalance = creditBalance + 2000
            alert("N2000 has been credited to your line")()
            break;

        case "7":
            accountBalance = accountBalance - 5000
            alert("Successful, Your New Account is N" + accountBalance)
            creditBalance = creditBalance + 5000
            alert("N5000 has been credited to your line")()
            break;

        default:
            openMenu()
            break;
    }
}



function buyData() {
    let select = prompt("Select a Network \n1: Airtel\n2: Etisalat\n3: Glo\n4: MTN\n5: Ntel\n6: Smile\n7: Spectranet")

    switchPlan(select)
}

function switchPlan(bro) {
    switch (bro) {
        case "1":
            airtelng()
            break;

        case "2":
            etisalatng()
            break;

        case "3":
            glong()
            break;

        case "4":
            mtnng()
            break;

        case "5":
            ntelng()
            break;

        case "6":
            smileng()
            break;

        case "7":
            spectranetng()
            break;

        default:
            openMenu()
            break;
    }

}

function airtelng() {
    let plan = prompt("Select Plan \n1: Daily\n2: Weekly \n3: Monthly")

    switchDuration(plan)
}

function etisalatng() {
    let plan = prompt("Select Plan \n1: Daily\n2: Weekly \n3: Monthly")

    switchDuration(plan)
}

function glong() {
    let plan = prompt("Select Plan \n1: Daily\n2: Weekly \n3: Monthly")

    switchDuration(plan)
}

function mtnng() {
    let plan = prompt("Select Plan \n1: Daily\n2: Weekly \n3: Monthly")

    switchDuration(plan)
}

function ntelng() {
    let plan = prompt("Select Plan \n1: Daily\n2: Weekly \n3: Monthly")

    switchDuration(plan)
}

function smileng() {
    let plan = prompt("Select Plan \n1: Daily\n2: Weekly \n3: Monthly")

    switchDuration(plan)
}

function spectranetng() {
    let plan = prompt("Select Plan \n1: Daily\n2: Weekly \n3: Monthly")

    switchDuration(plan)
}

function switchDuration(broo) {
    switch (broo) {
        case "1":
            daily()
            break;

        case "2":
            weekly()
            break;

        case "3":
            monthly()
            break;

        default:
            openMenu()
            break;
    }

}

function daily() {
    let meg = prompt("Select Plan \n1: 50MB for N50\n2: 100MB for N100")

    switchVol(meg)
}

function switchVol(brook) {
    switch (brook) {
        case "1":
            accountBalance = accountBalance - 50
            alert("Successful, Your New Account is N" + accountBalance)
            dataBalance = dataBalance + 50
            alert("50MB has been credited to your line")()
            break;

        case "2":
            accountBalance = accountBalance - 100
            alert("Successful, Your New Account is N" + accountBalance)
            dataBalance = dataBalance + 100
            alert("100MB has been credited to your line")()
            break;

        default:
            openMenu()
            break;
    }

}

function weekly() {
    let mega = prompt("Select Plan \n1: 500MB for N500\n2: 1GB for N1000\n3: 7GB for N1500")

    switchVolu(mega)
}

function switchVolu(brooks) {
    switch (brooks) {
        case "1":
            accountBalance = accountBalance - 500
            alert("Successful, Your New Account is N" + accountBalance)
            dataBalance = dataBalance + 500
            alert("500MB has been credited to your line")()
            break;

        case "2":
            accountBalance = accountBalance - 1000
            alert("Successful, Your New Account is N" + accountBalance)
            dataBalance = dataBalance + 1024
            alert("1GB (1024MB) has been credited to your line")()
            break;

        case "3":
            accountBalance = accountBalance - 1500
            alert("Successful, Your New Account is N" + accountBalance)
            dataBalance = dataBalance + 7168
            alert("7GB (7168MB) has been credited to your line")()
            break;

        default:
            openMenu()
            break;
    }

}

function monthly() {
    let megab = prompt("Select Plan \n1: 1GB for N1000\n2: 1.5GB for N1200\n3: 6GB for N2500\n4: 12GB for N3500")

    switchVolum(megab)
}

function switchVolum(brooksk) {
    switch (brooksk) {
        case "1":
            accountBalance = accountBalance - 1000
            alert("Successful, Your New Account is N" + accountBalance)
            dataBalance = dataBalance + 1024
            alert("1GB (1024MB) has been credited to your line")()
            break;

        case "2":
            accountBalance = accountBalance - 1500
            alert("Successful, Your New Account is N" + accountBalance)
            dataBalance = dataBalance + 1200
            alert("1.5GB has been credited to your line")()
            break;

        case "3":
            accountBalance = accountBalance - 2500
            alert("Successful, Your New Account is N" + accountBalance)
            dataBalance = dataBalance + 6144
            alert("6GB has been credited to your line")()
            break;

        case "4":
            accountBalance = accountBalance - 3500
            alert("Successful, Your New Account is N" + accountBalance)
            dataBalance = dataBalance + 12288
            alert("12GB has been credited to your line")()
            break;

        default:
            openMenu()
            break;
    }

}












function checkBalance() {
    alert("Your Account balance is " + accountBalance)
}


