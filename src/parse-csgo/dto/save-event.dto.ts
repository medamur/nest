export class ESLEvent {
	id: number

	begin: string

	end: string

	resultsadded: string

	resultsaddedts: number

	name: string

	category: number

	qualitymultiplier: number

	qualityname: string

	offlinemultiplier: number

	regionalmultiplier: number

	regionalmultiplier_percent: number

	category_name: string

	grandslam: number

	alwaysinclude: number

	protour: number

	age_multiplier: number

	age_multiplier_club: number

	age_multiplier_power: number

	teamsresults?: TeamsresultsEntityOrTeamsEntity[] | null

	organizer: Organizer

	organizer_id: number

	product: string

	numpreviewrecords: number

	homepage: string

	teams?: TeamsresultsEntityOrTeamsEntity[] | null
}
class TeamsresultsEntityOrTeamsEntity {
	id: number

	event_id: number

	team_id: number

	rank: string

	points: number

	status: string

	activePlayersPoints?: null

	activePlayers?: null
}
class Organizer {
	id: number

	name: string

	url: string

	country: string
}

export class SaveEventDTO  {
	name: string

	esl: ESLEvent
}
