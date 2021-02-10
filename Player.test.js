const Player = require('./Player');

describe('Player', () => {
  describe('betRequest', () => {
    it('should bet when a face card with a big card exist', () => {
      const gameState = {
        players: [
          {
            'name': 'Fish Tank',
            hole_cards: [
              {rank: 'A', suit: 'spades'},
              {rank: '5', suit: 'spades'},
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

    it('should bet when a face card with a big card exist', () => {
      const gameState = {
        players: [
          {
            'name': 'Fish Tank',
            hole_cards: [
              {rank: '5', suit: 'diamonds'},
              {rank: '5', suit: 'spades'},
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

    it('should not bet when a face card with a lower card exist', () => {
      const gameState = {
        players: [
          {
            'name': 'Fish Tank',
            hole_cards: [
              {rank: 'A', suit: 'spades'},
              {rank: '2', suit: 'spades'},
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
    it('should bet when all are face cards', () => {
      const gameState = {
        players: [
          {
            'name': 'Fish Tank',
            hole_cards: [
              {rank: 'A', suit: 'spades'},
              {rank: 'Q', suit: 'spades'},
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

      expect(bet).toHaveBeenCalledWith(1000);

    });

    it('should not bet when no face cards exist', () => {
      const gameState = {
        players: [
          {
            'name': 'Fish Tank',
            hole_cards: [
              {rank: '2', suit: 'spades'}
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
