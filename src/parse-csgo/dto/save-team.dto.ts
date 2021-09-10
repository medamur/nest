class ESLCountryInfo {
	id: number

	name: string

	code: string

	continent: string
}

export class ESLTeam {
	id: number

	name: string

	country: string

	region: string

	countryinfo: ESLCountryInfo

	playerflag: string

	logo: string

	logo_onwhite: string

	logo_onblack: string

	haslogo: number

	points: number

	teampoints: number

	rank: number

	ranktendency: number

	ranknew: number

	club_points: number

	club_rank: number

	club_ranktendancy: number

	club_rank_change: number

	club_points_change: number

	power_rank_lastevent_change: number

	power_rank_lastevent_type: string

	power_points: number

	power_rank: number

	power_ranktendancy: number

	power_rank_change: number

	power_points_change: number

	power_points_change_date: number

	activePlayers: string[]

	inactivePlayers: string[]

	prodbkey_team: string

	prodbkey_squad: string
}

export class SaveTeamDTO {
	name: string

	country: string

	region: string

	logo: string

	esl: ESLTeam
}
