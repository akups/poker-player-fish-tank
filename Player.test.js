const Player = require('./Player');

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
});
