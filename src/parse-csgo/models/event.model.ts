import { modelOptions, prop, Severity } from '@typegoose/typegoose'
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'

export class TeamsresultsEntityOrTeamsEntity {
	@prop()
	id: number

	@prop()
	event_id: number

	@prop()
	team_id: number

	@prop()
	rank: string

	@prop()
	points: number

	@prop()
	status: string

	@prop()
	activePlayersPoints?: null

	@prop()
	activePlayers?: null
}

export class Organizer {
	@prop()
	id: number

	@prop()
	name: string

	@prop()
	url: string

	@prop()
	country: string
}

export class ESLEvent {
	@prop()
	id: number

	@prop()
	begin: string

	@prop()
	end: string

	@prop()
	resultsadded: string

	@prop()
	resultsaddedts: number

	@prop()
	name: string

	@prop()
	category: number

	@prop()
	qualitymultiplier: number

	@prop()
	qualityname: string

	@prop()
	offlinemultiplier: number

	@prop()
	regionalmultiplier: number

	@prop()
	regionalmultiplier_percent: number

	@prop()
	category_name: string

	@prop()
	grandslam: number

	@prop()
	alwaysinclude: number

	@prop()
	protour: number

	@prop()
	age_multiplier: number

	@prop()
	age_multiplier_club: number

	@prop()
	age_multiplier_power: number

	@prop()
	teamsresults?: TeamsresultsEntityOrTeamsEntity[] | null

	@prop()
	organizer: Organizer

	@prop()
	organizer_id: number

	@prop()
	product: string

	@prop()
	numpreviewrecords: number

	@prop()
	homepage: string

	@prop()
	teams?: TeamsresultsEntityOrTeamsEntity[] | null
}

export interface ModelEvent extends Base {}

@modelOptions({ options: { allowMixed: Severity.ALLOW } })
export class ModelEvent extends TimeStamps {
	@prop()
	name: string

	@prop()
	esl: ESLEvent
}
