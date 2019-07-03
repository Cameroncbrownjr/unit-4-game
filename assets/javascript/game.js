var targetNumber = Math.floor((Math.random() * 100) + 20);
//replicate this for every counter
$("#number-to-guess").text(targetNumber);

var counter = 0;
//var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//var randomItem = numberOptions[Math.floor(Math.random() * numberOptions.length)];
//for (var i = 0; i < numberOptions.length; i++) {
    //var imageCrystal = $("<img>");
    //imageCrystal.addClass("crystalPic");
    //imageCrystal.attr("src", "https://i.vimeocdn.com/video/469249664_640.jpg");
    //imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    //$("#crystals").append(imageCrystal);
//}

//generate random number and assign value to crystal number one
var randomnum1 = Math.floor(Math.random() * 12) + 1;
$("#crystalPicOne").attr("data-crystalvalue", randomnum1);

var randomnum2 = Math.floor(Math.random() * 12) + 1;
$("#crystalPicTwo").attr("data-crystalvalue", randomnum2);

var randomnum3 = Math.floor(Math.random() * 12) + 1;
$("#crystalPicThree").attr("data-crystalvalue", randomnum3);

var randomnum4 = Math.floor(Math.random() * 12) + 1;
$("#crystalPicFour").attr("data-crystalvalue", randomnum4);


$(".crystalPic").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    }

  });