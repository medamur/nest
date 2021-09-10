import { prop } from '@typegoose/typegoose'
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'

export class ESLCountryInfo {
	@prop()
	id: number

	@prop()
	name: string

	@prop()
	code: string

	@prop()
	continent: string
}

export class ESLTeam {
	@prop()
	id: number

	@prop()
	name: string

	@prop()
	country: string

	@prop()
	region: string

	@prop()
	countryinfo: ESLCountryInfo

	@prop()
	playerflag: string

	@prop()
	logo: string

	@prop()
	logo_onwhite: string

	@prop()
	logo_onblack: string

	@prop()
	haslogo: number

	@prop()
	points: number

	@prop()
	teampoints: number

	@prop()
	rank: number

	@prop()
	ranktendency: number

	@prop()
	ranknew: number

	@prop()
	club_points: number

	@prop()
	club_rank: number

	@prop()
	club_ranktendancy: number

	@prop()
	club_rank_change: number

	@prop()
	club_points_change: number

	@prop()
	power_rank_lastevent_change: number

	@prop()
	power_rank_lastevent_type: string

	@prop()
	power_points: number

	@prop()
	power_rank: number

	@prop()
	power_ranktendancy: number

	@prop()
	power_rank_change: number

	@prop()
	power_points_change: number

	@prop()
	power_points_change_date: number

	@prop()
	activePlayers: string[]

	@prop()
	inactivePlayers: string[]

	@prop()
	prodbkey_team: string

	@prop()
	prodbkey_squad: string
}

export interface ModelTeam extends Base {}
export class ModelTeam extends TimeStamps {
	@prop({ unique: true, required: true })
	name: string

	@prop()
	country: string

	@prop()
	region: string

	@prop()
	logo: string

	@prop()
	esl: ESLTeam
}
