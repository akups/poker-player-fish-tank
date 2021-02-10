function isFaceCard(card) {
  if (['a', 'k', 'q', 'j'].includes(card.rank.toLowerCase())) {
    return true;
  }
  return false;
}

function hasASpecificValue(card, value) {
  if (card.rank.toLowerCase() === value) {
    return true;
  }
  return false;
}

function hasAnAce(card) {
  return hasASpecificValue(card, 'a');
}


function hasAKing(card) {
  return hasASpecificValue(card, 'k');
}

function hasAQueen(card) {
  return hasASpecificValue(card, 'q');
}


function hasAJack(card) {
  return hasASpecificValue(card, 'j');
}

function isABigNumberCard(card) {
  if (['5', '6', '7', '8', '9', '10', 't'].includes(card.rank.toLowerCase())) {
    return true;
  }
  return false;
}

function hasAtLeastOneBigCard (ourTeam) {
  return ourTeam && ourTeam.hole_cards.some(function (c) { return isABigNumberCard(c) })
}


function hasAtLeastOneFaceCard (ourTeam) {
  return ourTeam && ourTeam.hole_cards.some(function (c) { return isFaceCard(c) })
}

function hasAllFaceCards (ourTeam) {
  return ourTeam && ourTeam.hole_cards.every(function (c) { return isFaceCard(c) })
}

function isAPair (ourTeam) {
  return ourTeam && ourTeam.hole_cards.length === 2 && ourTeam.hole_cards[0].rank === ourTeam.hole_cards[1].rank;
}

function betMax(players) {
  const max = players.reduce(function (previous, player) {
    return Math.max(previous, player.bet);
  }, 0);
  return max + 100;
}

const rules = [
  {
    name: 'all faces',
    conditions: [hasAllFaceCards],
    getBet: function(){return 1000},
  },
  {
    name: 'at least one face with a big number',
    conditions: [hasAtLeastOneFaceCard, hasAtLeastOneBigCard],
    getBet: betMax,
  },
  {
    name: 'a pair of same values',
    conditions: [isAPair],
    getBet: betMax,
  },  
  {
    name: 'default: just fold',
    conditions: [function (){return true}],
    getBet: function () {return 0},
  }
]

class Player {
  static ofSameSuit(cardA, cardB) {
    if (cardA.suit === cardB.suit) {
      return true;
    }
    return;
  }
  static get VERSION() {
    return '0.1';
  }

  /**
   * @param gameState {import('./GameState').GameState}
   * @param bet
   */
  static betRequest(gameState, bet) {
    const players = gameState.players;
    if(!players){
      bet(300);
      return 
    }
    
    const ourTeam = players.find(function (p) { return p.name === 'Fish Tank' });

    for(let i = 0; i < rules.length; i++){
      const rule = rules[i];
      if(rule.conditions.every(function (c) {return c(ourTeam)})){
        bet(rule.getBet(players));
        return;
      }
    }

    bet(0);
  }

  static showdown(gameState) {
  }
}
module.exports = Player;
