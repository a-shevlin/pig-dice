import $ from 'jquery';
import Die from './die.js';
import Player from './player.js';
import Game from './game.js';
import './css/styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

// User Interface Logic

$(document).ready(function () {
  const numberOfSides = 6;
  const die = new Die(numberOfSides);

  $('form#enterName').submit(function (event) {
    event.preventDefault();
    const name1 = $('#playerOneNameInput').val();
    const name2 = $('#playerTwoNameInput').val();

    let player1 = new Player(name1, 0);
    let player2 = new Player(name2, 0);
    // let player3 = new Player('Seung', 0);

    // initializing game
    const lastTurn = 10;
    let gameOne = new Game(1, lastTurn);
    gameOne.addPlayer(player1);
    gameOne.addPlayer(player2);

    $('#name1').text(player1.name);
    $('#name2').text(player2.name);
    $('#totalPoints1').text(player1.totalPoints);
    $('#totalPoints2').text(player2.totalPoints);
    $('#currentTotal1').text(player1.currentTotal);
    $('#currentTotal2').text(player2.currentTotal);

    updateRoundNumber(gameOne);
    updateCurrentPlayer(gameOne);

    if (!$('#main-content').is(':visible')) {
      $('#main-content').slideDown();
    }

    if ($('#main-content').is(':visible')) {
      $('#game-setup').slideUp();
    }

    // when player1 clicks roll
    $('#roll1').click(function (event) {
      event.preventDefault();
      if (player1.currentTotal[0] === 0) {
        player1.clearCurrentTotal();
      }
      // only allow rolling if player1 is the active player
      if (gameOne.getActivePlayer().name === player1.name) {
        const isOne = gameOne.roll(die, player1);

        // check if this is the first roll
        const firstRoll = player1.currentTotal.length === 1;
        if (firstRoll) {
          removeImage();
        }

        // get the most recent roll
        const currentRoll =
          player1.currentTotal[player1.currentTotal.length - 1];

        // check if player rolled 1
        if (currentRoll === undefined) {
          removeImage();
          showImage('img/dice1.png', 100, 100, 'roll1');
          $('#roll1').prop('disabled', true);
          $('#roll2').removeAttr('disabled');
        } else {
          showDice(currentRoll);
        }
        $('#currentTotal1').text(player1.currentTotal);
        updateRoundNumber(gameOne);
        updateCurrentPlayer(gameOne);
      }
    });

    // when player2 clicks roll
    $('#roll2').click(function (event) {
      event.preventDefault();
      if (player2.currentTotal[0] === 0) {
        player2.clearCurrentTotal();
      }
      // only allow rolling if player2 is the active player
      if (gameOne.getActivePlayer().name === player2.name) {
        gameOne.roll(die, player2);

        // check if this is the first roll
        const firstRoll = player2.currentTotal.length === 1;
        if (firstRoll) {
          removeImage();
        }

        // get the most recent roll
        const currentRoll =
          player2.currentTotal[player2.currentTotal.length - 1];

        // check if player rolled 1
        if (currentRoll === undefined) {
          removeImage();
          showImage('img/dice1.png', 100, 100, 'roll1');
          $('#roll2').prop('disabled', true);
          $('#roll1').removeAttr('disabled');
        } else {
          showDice(currentRoll);
        }
        $('#currentTotal2').text(player2.currentTotal);
        updateRoundNumber(gameOne);
        updateCurrentPlayer(gameOne);
      }
    });

    // when player1 clicks hold
    $('#hold1').click(function (event) {
      event.preventDefault();
      gameOne.hold(player1, player2);
      const currentRoll = player1.currentTotal[player1.currentTotal.length - 1];
      removeImage();
      $('#totalPoints1').text(player1.totalPoints);
      $('#currentTotal1').text('');
      $('#roll1').prop('disabled', true);
      $('#roll2').removeAttr('disabled');
      updateRoundNumber(gameOne);
      updateCurrentPlayer(gameOne);
    });
    // when player2 clicks hold
    $('#hold2').click(function (event) {
      event.preventDefault();
      gameOne.hold(player2, player1);
      removeImage();
      $('#totalPoints2').text(player2.totalPoints);
      $('#currentTotal2').text('');
      $('#roll2').prop('disabled', true);
      $('#roll1').removeAttr('disabled');
      updateRoundNumber(gameOne);
      updateCurrentPlayer(gameOne);
    });
  });
});

// show dice image depending on what roll
function showDice(currentRoll) {
  switch (currentRoll) {
    case 1:
      showImage('img/dice1.png', 100, 100, 'roll1');
      break;
    case 2:
      showImage('img/dice2.png', 100, 100, 'roll2');
      break;
    case 3:
      showImage('img/dice3.png', 100, 100, 'roll3');
      break;
    case 4:
      showImage('img/dice4.png', 100, 100, 'roll4');
      break;
    case 5:
      showImage('img/dice5.png', 100, 100, 'roll5');
      break;
    case 6:
      showImage('img/dice6.png', 100, 100, 'roll6');
      break;
    default:
      console.log("You rolled a number that's not between 1 and 6");
  }
}

// update round #
function updateRoundNumber(gameObj) {
  let roundNumber = Math.round(gameObj.turnNumber / 2);
  $('#currentRoundNumber').text(roundNumber);
}

// update current player
function updateCurrentPlayer(gameObj) {
  $('#currentPlayer').text(gameObj.getActivePlayer().name);
}

// show image in the dice div
function showImage(src, width, height, alt) {
  let img = document.createElement('img');
  img.src = src;
  img.width = width;
  img.height = height;
  img.alt = alt;

  let dice = document.getElementById('dice');
  //$('#dice');
  dice.appendChild(img);
}

// remove images in the dice div
function removeImage() {
  let dice = document.getElementById('dice');
  while (dice.firstChild) {
    dice.removeChild(dice.firstChild);
  }
}
