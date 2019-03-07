var computerNum = Math.floor((Math.random() * 120) + 19);
var userNum = 0;
var wins = 0;
var losses = 0;

var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "assets/images/crystal1.jpg");
    imageCrystal.attr("data-crystalvalue", Math.floor((Math.random() * 12) + 1));
    $("#crystals").append(imageCrystal);

var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "assets/images/crystal2.jpg");
    imageCrystal.attr("data-crystalvalue", Math.floor((Math.random() * 12) + 1));
    $("#crystals").append(imageCrystal);

var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "assets/images/crystal3.jpg");
    imageCrystal.attr("data-crystalvalue", Math.floor((Math.random() * 12) + 1));
    $("#crystals").append(imageCrystal);

var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "assets/images/crystal4.jpg");
    imageCrystal.attr("data-crystalvalue", Math.floor((Math.random() * 12) + 1));
    $("#crystals").append(imageCrystal);

  $(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    userNum += crystalValue;

    if (userNum === computerNum) {
      wins++;
      userNum = 0; 
    }

    else if (userNum > computerNum) {
      losses++;
      userNum = 0; 
    }
    $("#userNum").text(userNum);
    $("#computerNum").text(computerNum);
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
});
   



  

  