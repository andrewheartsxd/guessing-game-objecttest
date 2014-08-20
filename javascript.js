// var oldBalanceOne = Number(document.getElementById("oldBalanceOne").textContent);
var oldBalanceOne = Number($('#oldBalanceOne').text());
// var oldRollCountOne = Number(document.getElementById("oldRollCountOne").textContent);
var oldRollCountOne = Number($('#oldRollCountOne').text());
// var oldBalanceTwo = Number(document.getElementById("oldBalanceTwo").textContent);
var oldBalanceTwo = Number($('#oldBalanceTwo').text());
// var oldRollCountTwo = Number(document.getElementById("oldRollCountTwo").textContent);
var oldRollCountTwo = Number($('#oldRollCountTwo').text());


var dice = {
  die1: function () {
    return Math.floor((Math.random() * 6) + 1);
  },
  die2: function () {
    return Math.floor((Math.random() * 6) + 1);
  },
  updateBalOne: function (dice1, dice2) {
    if (dice1 + dice2 === 7 || dice1 + dice2 === 11) {
        oldBalanceOne += 1;
    } else if (dice1 + dice2 === 2) {
        oldBalanceOne -= 1;
    }
    // oldBalanceOne = Number($('#oldBalanceOne').text());
    document.getElementById("oldBalanceOne").innerHTML = oldBalanceOne;
    // $('#diceOneImage').prop('src') = "http://www.wpclipart.com/recreation/games/dice/die_face_" + dice1 + ".png";
    document.getElementById("diceOneImage").src = "http://www.wpclipart.com/recreation/games/dice/die_face_" + dice1 + ".png";
    document.getElementById("diceTwoImage").src = "http://www.wpclipart.com/recreation/games/dice/die_face_" + dice2 + ".png";
  },
  updateBalTwo: function (dice1, dice2) {
    if (dice.winCheck()) {
      dice.winCalc();
    } else {
      if (dice1 + dice2 === 7 || dice1 + dice2 === 11) {
          oldBalanceTwo += 1;
      } else if (dice1 + dice2 === 2) {
          oldBalanceTwo -= 1;
      }
      document.getElementById("oldBalanceTwo").innerHTML = oldBalanceTwo;
      document.getElementById("diceOneImage").src = "http://www.wpclipart.com/recreation/games/dice/die_face_" + dice1 + ".png";
      document.getElementById("diceTwoImage").src = "http://www.wpclipart.com/recreation/games/dice/die_face_" + dice2 + ".png";
      if(dice.winCheck()) {
        dice.winCalc();
      }
    }
  },
  updateRollsOne: function(roll) {
    oldRollCountOne += roll;
    document.getElementById("oldRollCountOne").innerHTML = oldRollCountOne;
  },
  updateRollsTwo: function(roll) {
    if (dice.winCheck()) {
      document.getElementById("playerTwoRollButton").disabled = 'disabled';
    } else {
    oldRollCountTwo += roll;
    document.getElementById("oldRollCountTwo").innerHTML = oldRollCountTwo;
    if (dice.winCheck()) {
      dice.winCalc();
      document.getElementById("playerTwoRollButton").disabled = 'disabled';
      document.getElementById("playerOneRollButton").disabled = 'disabled';
    } else {
    }
    }
  },
  winCheck: function() {
    if (oldRollCountTwo === oldRollCountOne) {
      return true;
    } else {
      return false;
    }
  },
  winCalc: function() {
    var winnings = oldBalanceOne - oldBalanceTwo;
      if (winnings > 0) {
        document.getElementById("winMessage").innerHTML = ("<b>Player Two owes Player One $" + Math.abs(winnings) + "</b>");
      }
      else if (winnings < 0) {
        document.getElementById("winMessage").innerHTML = ("<b>Player One owes Player Two $" + Math.abs(winnings) + "</b>");
      }
      else {
        document.getElementById("winMessage").innerHTML = ("<b>Player One and Player Two are even!</b>");
      }
    },
  reset: function () {
    location.reload();
  }
};

$('#playerOneRollButton').click(function() {

  dice.updateBalOne(dice.die1(), dice.die2());
  dice.updateRollsOne(1);

  $('.diceImageContainer').animate({top: "-=1000px"}, 0)
  $('.diceImageContainer').animate({top: "+=1000px"}, 'slow');


  // for(i = 0; i < 500; i++) {

  //   $('#diceOneImage').attr("src", "http://www.wpclipart.com/recreation/games/dice/die_face_" + Math.floor((Math.random() * 6) + 1) + ".png")

  // }

  // $('#diceOneImage').attr("src", "http://www.wpclipart.com/recreation/games/dice/die_face_" + dice1 + ".png")
  // $('.diceImageContainer').effect('bounce', {times:3}, 1000);

})

$('#playerTwoRollButton').click(function() {
  $('.diceImageContainer').animate({top: "-=1000px"}, 0)
  $('.diceImageContainer').animate({top: "+=1000px"}, 'slow');

  dice.updateBalTwo(dice.die1(), dice.die2());
  dice.updateRollsTwo(1);

})

$(".rollButton").click(function() {
  $(this).addClass("red");
  $(this).removeClass("red");
  });


