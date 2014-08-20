// var oldBalanceOne = Number(document.getElementById("oldBalanceOne").textContent);
var oldBalanceOne = Number($('#oldBalanceOne').text());
// var oldRollCountOne = Number(document.getElementById("oldRollCountOne").textContent);
var oldRollCountOne = Number($('#oldRollCountOne').text());
// var oldBalanceTwo = Number(document.getElementById("oldBalanceTwo").textContent);
var oldBalanceTwo = Number($('#oldBalanceTwo').text());
// var oldRollCountTwo = Number(document.getElementById("oldRollCountTwo").textContent);
var oldRollCountTwo = Number($('#oldRollCountTwo').text());

var dice1Val = 0
var dice2Val = 0

var dice = {
  die1: function () {
    dice1Val = Math.floor((Math.random() * 6) + 1);
    console.log(dice1Val);
    return dice1Val;
  },
  die2: function () {
    dice2Val = Math.floor((Math.random() * 6) + 1);
    console.log(dice2Val);
    return dice2Val;
  },
  updateBalOne: function (dice1, dice2) {
    if (dice1 + dice2 === 7 || dice1 + dice2 === 11) {
        oldBalanceOne += 1;
    } else if (dice1 + dice2 === 2) {
        oldBalanceOne -= 1;
    }
    Number($('#oldBalanceOne').text(oldBalanceOne))
    // document.getElementById("oldBalanceOne").innerHTML = oldBalanceOne;
    // $('#diceOneImage').attr('src', "http://www.wpclipart.com/recreation/games/dice/die_face_" + dice1 + ".png");
    // document.getElementById("diceOneImage").src = "http://www.wpclipart.com/recreation/games/dice/die_face_" + dice1 + ".png";
    // $('#diceTwoImage').attr('src', "http://www.wpclipart.com/recreation/games/dice/die_face_" + dice2 + ".png");
    // document.getElementById("diceTwoImage").src = "http://www.wpclipart.com/recreation/games/dice/die_face_" + dice2 + ".png";
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
      Number($('#oldBalanceTwo').text(oldBalanceTwo))
      // document.getElementById("oldBalanceTwo").innerHTML = oldBalanceTwo;
      // $('#diceOneImage').attr('src', "http://www.wpclipart.com/recreation/games/dice/die_face_" + dice1 + ".png");
      // document.getElementById("diceOneImage").src = "http://www.wpclipart.com/recreation/games/dice/die_face_" + dice1 + ".png";
      // $('#diceTwoImage').attr('src', "http://www.wpclipart.com/recreation/games/dice/die_face_" + dice2 + ".png");
      // document.getElementById("diceTwoImage").src = "http://www.wpclipart.com/recreation/games/dice/die_face_" + dice2 + ".png";

      if(dice.winCheck()) {
        dice.winCalc();
      }
    }
  },
  updateRollsOne: function(roll) {
    oldRollCountOne += roll;
    // document.getElementById("oldRollCountOne").innerHTML = oldRollCountOne;
    $('#oldRollCountOne').text(oldRollCountOne);
  },
  updateRollsTwo: function(roll) {
    if (dice.winCheck()) {
      // $('#playerOneRollButton').prop('disabled', true).addClass("grey")
      $('#playerTwoRollButton').prop('disabled', true).addClass("grey")
      // document.getElementById("playerOneRollButton").disabled = 'disabled';
      // document.getElementById("playerTwoRollButton").disabled = 'disabled';
    }
    else {
      oldRollCountTwo += roll;
      // document.getElementById("oldRollCountTwo").innerHTML = oldRollCountTwo;
      $('#oldRollCountTwo').text(oldRollCountTwo);
      if(dice.winCheck()) {
        dice.winCalc();
        // $('#playerOneRollButton').prop('disabled', true).addClass("grey")
        $('#playerTwoRollButton').prop('disabled', true).addClass("grey")
        // document.getElementById("playerOneRollButton").disabled = 'disabled';
        // document.getElementById("playerTwoRollButton").disabled = 'disabled';
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
        $('#winMessage').text("Player Two owes Player One $" + Math.abs(winnings) + "!")
        // document.getElementById("winMessage").innerHTML = ("<b>Player Two owes Player One $" + Math.abs(winnings) + "</b>");
      }
      else if (winnings < 0) {
        $('#winMessage').text("Player One owes Player Two $" + Math.abs(winnings) + "!")
        // document.getElementById("winMessage").innerHTML = ("Player One owes Player Two $" + Math.abs(winnings) + "!");
      }
      else {
        $('#winMessage').text("Player One and Player Two are even!")
        // document.getElementById("winMessage").innerHTML = ("<b>Player One and Player Two are even!</b>");
      }
    },
  reset: function () {
    location.reload();
  }
};

$('#playerOneRollButton').click(function() {

  dice.updateBalOne(dice.die1(), dice.die2());
  dice.updateRollsOne(1);

  $('.diceImageContainer').animate({top: "-=1000px"}, 0);
  $('.diceImageContainer').animate({top: "+=1000px"}, 'fast')
  // .fadeOut('fast', function() {
  //   for(i = 0; i < 10000; i++) {
  //     $('#diceOneImage').attr("src", "http://www.wpclipart.com/recreation/games/dice/die_face_" + Math.floor((Math.random() * 6) + 1) + ".png").fadeIn('slow')
  //     $('#diceTwoImage').attr("src", "http://www.wpclipart.com/recreation/games/dice/die_face_" + Math.floor((Math.random() * 6) + 1) + ".png").fadeIn('slow')
  //   }
  // })
  // .fadeIn('fast')

  // $('.diceImageContainer').effect("bounce", {times: 3}, 500);

  $('#diceOneImage').attr("src", "http://www.wpclipart.com/recreation/games/dice/die_face_" + dice1Val + ".png");
  $('#diceTwoImage').attr("src", "http://www.wpclipart.com/recreation/games/dice/die_face_" + dice2Val + ".png");
  $('.diceImageContainer').effect('bounce', {times:3}, 500);

})

$('#playerTwoRollButton').click(function() {

  $('#playerOneRollButton').prop('disabled', true).addClass("grey");

  dice.updateBalTwo(dice.die1(), dice.die2());
  dice.updateRollsTwo(1);

  $('.diceImageContainer').animate({top: "-=1000px"}, 0);
  $('.diceImageContainer').animate({top: "+=1000px"}, 'fast');
  $('#diceOneImage').attr("src", "http://www.wpclipart.com/recreation/games/dice/die_face_" + dice1Val + ".png");
  $('#diceTwoImage').attr("src", "http://www.wpclipart.com/recreation/games/dice/die_face_" + dice2Val + ".png");
  $('.diceImageContainer').effect('bounce', {times:3}, 500);

})

