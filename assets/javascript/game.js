var targetNumber = Math.floor((Math.random() * 100) + 20);
//replicate this for every counter
$("#number-to-guess").text(targetNumber);

var counter = 0;
var wins = 0;
var losses = 0;
//generate random number and assign value to crystal number one
var randomnum1 = Math.floor(Math.random() * 12) + 1;
$("#crystalPicOne").attr("data-crystalvalue", randomnum1);

var randomnum2 = Math.floor(Math.random() * 12) + 1;
$("#crystalPicTwo").attr("data-crystalvalue", randomnum2);

var randomnum3 = Math.floor(Math.random() * 12) + 1;
$("#crystalPicThree").attr("data-crystalvalue", randomnum3);

var randomnum4 = Math.floor(Math.random() * 12) + 1;
$("#crystalPicFour").attr("data-crystalvalue", randomnum4);
console.log(counter);

$(".image").on("click", function () {
    console.log(counter);
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    console.log(counter);
    //alert("New score: " + counter);
    $("#currentScore").text(counter);

    if (counter === targetNumber) {
        wins++;
        $("#wins").text(wins);
        var targetNumber = Math.floor((Math.random() * 100) + 20);
        //replicate this for every counter
        $("#number-to-guess").text(targetNumber);

        counter = 0;

        //generate random number and assign value to crystal number one
        var randomnum1 = Math.floor(Math.random() * 12) + 1;
        $("#crystalPicOne").attr("data-crystalvalue", randomnum1);

        var randomnum2 = Math.floor(Math.random() * 12) + 1;
        $("#crystalPicTwo").attr("data-crystalvalue", randomnum2);

        var randomnum3 = Math.floor(Math.random() * 12) + 1;
        $("#crystalPicThree").attr("data-crystalvalue", randomnum3);

        var randomnum4 = Math.floor(Math.random() * 12) + 1;
        $("#crystalPicFour").attr("data-crystalvalue", randomnum4);
    }

    else if (counter >= targetNumber) {
        losses++;
        $("#losses").text(losses);
        var targetNumber = Math.floor((Math.random() * 100) + 20);
        //replicate this for every counter
        $("#number-to-guess").text(targetNumber);

        counter = 0;

        //generate random number and assign value to crystal number one
        var randomnum1 = Math.floor(Math.random() * 12) + 1;
        $("#crystalPicOne").attr("data-crystalvalue", randomnum1);

        var randomnum2 = Math.floor(Math.random() * 12) + 1;
        $("#crystalPicTwo").attr("data-crystalvalue", randomnum2);

        var randomnum3 = Math.floor(Math.random() * 12) + 1;
        $("#crystalPicThree").attr("data-crystalvalue", randomnum3);

        var randomnum4 = Math.floor(Math.random() * 12) + 1;
        $("#crystalPicFour").attr("data-crystalvalue", randomnum4);
    }

});