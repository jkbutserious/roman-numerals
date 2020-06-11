// User Interface Logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const userNumber = $("#user-number").val();

    $("#roman-numeral").text(arabicToRoman(userNumber));
  })
})

// Business Logic
function arabicToRoman (number) {
  let romanNumber = "";
  const arabicDigits = number.split("");
  const romanOnes = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  if (arabicDigits.length === 1) {
    return romanNumber + romanOnes[parseInt(arabicDigits[arabicDigits.length - 1] - 1)];
    // // return "I";
    // for (i = 1; i <= number; i++) {
    //   let romanNumber = 0;
    // }
  }
  else if (number === "5") {
    return "V";
  }
  else if (number === "10") {
    return "X";
  }
  else if (number === "50") {
    return "L";
  }
  else if (number === "100") {
    return "C";
  }
  else if (number === "500") {
    return "D";
  }
  else if (number === "1000") {
    return "M";
  }
}