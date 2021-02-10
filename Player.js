const OUR_TEAM_NAME = 'Fish Tank';

function convertToNumber(card) {
  switch (card.rank.toLowerCase()) {
    case 'a':
      return 14;
    case 'k':
      return 13;
    case 'q':
      return 12;
    case 'j':
      return 11;
    default:
      return Number.parseInt(card.rank)
  }
}

function totalValue(hole_cards){
  return hole_cards.reduce(function(previous, current) {
    return previous + convertToNumber(current);
  }, 0);
}

function areOfSameSuit (ourTeam) {
  return ourTeam.hole_cards.length === 2 && ourTeam.hole_cards[0].suit === ourTeam.hole_cards[1].suit;
}

function areEqualRanks (ourTeam) {
  return ourTeam && ourTeam.hole_cards.length === 2 && ourTeam.hole_cards[0].rank === ourTeam.hole_cards[1].rank;
}

function isAPair (ourTeam) {
  return ourTeam && ourTeam.hole_cards.length === 2 && areEqualRanks(ourTeam);
}

function hasAnAce (ourTeam) {
  return ourTeam && ourTeam.hole_cards.length === 2 && (ourTeam.hole_cards[0].rank === 'A' || ourTeam.hole_cards[1].rank === 'A')
}

/**
 * @param gameState {import('./GameState').GameState}
*/
function betMax(gameState) {
  const players = gameState.players
  const max = players.reduce(function (previous, player) {
    if (player.name === OUR_TEAM_NAME) {
      return previous
    }
    return Math.max(previous, player.bet);
  }, 0);
  return max + gameState.big_blind;
}

function numericCondition(condition) {
  return function (ourTeam) {
    return ourTeam && ourTeam.hole_cards && (totalValue(ourTeam.hole_cards) >= condition)
  }
}

function fold() {return 0;}

const rules = [
  {
    name: '>=19',
    conditions: [numericCondition(22)],
    getBet: betMax,
  },
  {
    name: 'a pair of same values',
    conditions: [isAPair],
    getBet: betMax,
  },
  {
    name: 'same suit and >= 16',
    conditions: [numericCondition(19), areOfSameSuit],
    getBet: betMax,
  },
  {
    name: 'at least one Ace',
    conditions: [hasAnAce],
    getBet: betMax,
  },
  {
    name: 'default: just fold',
    conditions: [function (){return true}],
    getBet: fold,
  }
];

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

    const ourTeam = players.find(function (p) {
      return p.name === OUR_TEAM_NAME });

    for(let i = 0; i < rules.length; i++){
      const rule = rules[i];
      if(rule.conditions.every(function (c) {return c(ourTeam)})){
        const amount = rule.getBet(gameState);
        console.log(`Betting ${amount} due to rule ${rule.name}`)
        bet(amount);
        return;
      }
    }

    bet(0);
  }

  static showdown(gameState) {
  }
}
module.exports = Player;
