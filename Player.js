class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
console.log(gameState)
    bet(100);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
