const Player = require('./Player');
describe('Player', () => {
  describe('betRequest', () => {
    it('calls bet', () => {
      const betMock = jest.fn()
      const gameState = {}
      Player.betRequest(gameState, betMock)
      expect(betMock).toHaveBeenCalled()
    });
  });
});
