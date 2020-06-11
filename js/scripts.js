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
  if (number === "1") {
    return "I";
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