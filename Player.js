function isFaceCard(card) {
  if (['a', 'k', 'q', 'j'].includes(card.rank.toLowerCase())) {
    return true;
  }
  return false;
}
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
    if (players) {
      const ourTeam = players.find(function (p) { return p.name === 'Fish Tank' });
      if (ourTeam && ourTeam.hole_cards.some(function (c) { return isFaceCard(c) })) {
        const max = players.reduce(function (previous, player) {
          return Math.max(previous, player.bet);
        }, 0);
        bet(max + 100);
      } else {
        bet(0)
      }
    } else {
      bet(300);
    }
  }
  static showdown(gameState) {
  }
}
module.exports = Player;
