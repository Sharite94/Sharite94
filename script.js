const age = 18;
const isFemale = true;
const driverStatus = "bob";
const firstName = "Sarah";
const totalAmount = 100;

if (age >= 18) {
    document.write("je mag naar binnen");
  } else {
      document.write("je wordt vriendelijk verzocht om buiten te blijven")
}

if (age >= 18 && age <=25) {
    console.log("je krijgt 50% korting!")
} else {
    console.log("geen korting")
}

if (isFemale) {
    document.write(" + 10% korting");
} else {
    document.write(" + 5% korting");
}

if (driverStatus == "bob") {
    document.write(" + je mag rijden");
} else {
    document.write(" +je mag niet rijden");
}

if (firstName = "Sarah || Bram") {
    console.log("gratis biertje");
} else {
    console.log("helaas geen gratis biertje");
}

if (totalAmount >= 100) {
    console.log("gratis fles champagne");
}  else if (totalAmount >= 50) {
        console.log("gratis portie nachos");
    } else if (totalAmount >= 25) {
        console.log("gratis (vega)bitterballen");
    }
