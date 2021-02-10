import {Card} from './Card';

export enum Status {
  'Active' = 'active',
  'Out' = 'out'
}

export interface Player {
  'name': string
  'stack': number
  'status': Status
  'bet': number
  'hole_cards': Card[]
  'time_used': number
  'version': string
  'id': number
}
