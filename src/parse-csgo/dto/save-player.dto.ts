import { ESLTeam } from './save-team.dto'
import { ESLEvent } from './save-event.dto'

export class ESlPlayer {
	id: string

	name: string

	country: string

	points: string

	points_aged: string

	deleted: string

	rank: string

	ranktendency: string

	prodbkey: string

	photo_body: string

	photo_square: string

	photo_portrait: string

	team: ESLTeam | null

	events?: ESLEvent[] | null
}

export class SavePlayerDTO {
	name: string

	nik: string

	country: string

	esl: ESlPlayer
}
