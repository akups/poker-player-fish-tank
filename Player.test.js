const Player = require('./Player');
<<<<<<< HEAD

describe('Player', () => {
  describe('betRequest', () => {
    it('should bet when a face card exist', () => {
      const gameState = {
        players: [
          {
            'name': 'Fish Tank',
            hole_cards: [
              {rank: 'A', suit: 'spades'}
            ],
            bet: 0
          },
          {
            'name': 'Team A',
            hole_cards: [
              {rank: 'A', suit: 'spades'}
            ],
            bet: 5
          }
        ]
      }

      const bet = jest.fn();

      Player.betRequest(gameState, bet);

      expect(bet).toHaveBeenCalledWith(105);

    });

    it('should not bet when no face cards exist', () => {
      const gameState = {
        players: [
          {
            'name': 'Fish Tank',
            hole_cards: [
              {rank: '1', suit: 'spades'}
            ],
            bet: 0
          },
          {
            'name': 'Team A',
            hole_cards: [
              {rank: 'A', suit: 'spades'}
            ],
            bet: 5
          }
        ]
      }

      const bet = jest.fn();

      Player.betRequest(gameState, bet);

      expect(bet).toHaveBeenCalledWith(0);

    });
  });

=======
describe('Player', () => {
  describe('betRequest', () => {
    it('calls bet', () => {
      const betMock = jest.fn()
      const gameState = {}
      Player.betRequest(gameState, betMock)
      expect(betMock).toHaveBeenCalled()
    });
  });
>>>>>>> 8b96f37c94a9e9132f262dcf40cecda419cbdc0d
});
