import {Player} from './Player';
import {Card} from './Card';

export interface GameState {
  "tournament_id": string
  "game_id": string
  "round": number
  "players": Player[]
  "small_blind": number
  "big_blind": number
  "orbits": number
  "dealer": number
  "community_cards": Card[]
  "current_buy_in": number
  "pot": number
}
