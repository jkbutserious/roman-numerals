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