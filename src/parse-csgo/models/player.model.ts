import { prop, Ref } from '@typegoose/typegoose'
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses'
import { Team } from './team.model'

export class TeamPlayer {
	@prop()
	dateStart: string

	@prop()
	dateEnd: string

	@prop({ ref: () => Team })
	team: Ref<Team>
}

export interface Player extends Base {}
export class Player extends TimeStamps {
	@prop()
	name: string

	@prop({ unique: true, required: true })
	nik: string

	@prop({ type: () => [TeamPlayer] })
	teams: TeamPlayer[]

	@prop()
	ranking: string
}
