const Player = require('./Player');

describe('Player', () => {
  describe('betRequest', () => {
    it('should bet when a face card A with a big card exist', () => {
      const gameState = {
        big_blind: 4,
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

      expect(bet).toHaveBeenCalledWith(9);

    });

    it('should bet with off-suit A and 2', () => {
      const gameState = {
        big_blind: 4,
        players: [
          {
            'name': 'Fish Tank',
            hole_cards: [
              {rank: 'A', suit: 'diamonds'},
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

      expect(bet).toHaveBeenCalledWith(9);
    });

    it('should bet when a face card J with a big card exist', () => {
      const gameState = {
        big_blind: 4,
        players: [
          {
            'name': 'Fish Tank',
            hole_cards: [
              {rank: 'J', suit: 'spades'},
              {rank: '10', suit: 'spades'},
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

      expect(bet).toHaveBeenCalledWith(9);

    });

    it('should bet when a face card with a big card exist', () => {
      const gameState = {
        big_blind: 4,
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

      expect(bet).toHaveBeenCalledWith(9);

    });

    it('should bet when all are face cards', () => {
      const gameState = {
        big_blind: 4,
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

      expect(bet).toHaveBeenCalledWith(9);

    });

    it('should not bet when no face cards exist', () => {
      const gameState = {
        big_blind: 4,
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

    it('should bet when same suit and value > 16', () => {
      const gameState = {
        big_blind: 4,
        players: [
          {
            'name': 'Fish Tank',
            hole_cards: [
              {rank: '2', suit: 'spades'},
              {rank: 'A', suit: 'spades'},
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

      expect(bet).toHaveBeenCalledWith(9);

    });
  });
});
