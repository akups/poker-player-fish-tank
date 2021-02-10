class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    console.log('Hello')
    const players = gameState.players;
    if (players) {
      const max = players.reduce((previous, player
      ) => {
        return Math.max(previous, player.bet);
      }, 0);
      bet(max + 100);
    } else {
      bet(400);
    }

  }

  static showdown(gameState) {
  }
}

module.exports = Player;