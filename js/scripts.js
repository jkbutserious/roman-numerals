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
  const romanOnes = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  const romanTens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const romanHundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const romanThousands = ["", "M", "MM", "MMM"];

  const romanDigits = [romanOnes, romanTens, romanHundreds, romanThousands];

  for (i = 0; i < arabicDigits.length; i++) {
    romanNumber = romanDigits[i][parseInt(arabicDigits[arabicDigits.length - 1 - i])] + romanNumber;
    }
  return romanNumber;

  // if (arabicDigits.length === 1) {
  //   return romanNumber + 
  //   romanOnes[parseInt(arabicDigits[arabicDigits.length] - 1)];
  // }
  // else if (arabicDigits.length === 2) {
  //   return romanNumber + 
  //   romanTens[parseInt(arabicDigits[0])] + 
  //   romanOnes[parseInt(arabicDigits[1])];
  // }
  // else if (arabicDigits.length === 3) {
  //   return romanNumber + 
  //   romanHundreds[parseInt(arabicDigits[0])] + 
  //   romanTens[parseInt(arabicDigits[1])] + 
  //   romanOnes[parseInt(arabicDigits[2])];

  // }
  //   else {
  //   return romanNumber + 
  //   romanThousands[parseInt(arabicDigits[0])] +
  //   romanHundreds[parseInt(arabicDigits[1])] + 
  //   romanTens[parseInt(arabicDigits[2])] + 
  //   romanOnes[parseInt(arabicDigits[3])];
  // }
}






// Refactoring Project
// const romanDigits = [romanOnes, romanTens, romanHundreds, romanThousands];

  // for (i = arabicDigits.length - 1; i > 0; i--) {
  //   romanNumber = romanNumber + romanDigits[i][parseInt(arabicDigits[i])];
  //   }
  // return romanNumber;