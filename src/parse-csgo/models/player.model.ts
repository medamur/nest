import { prop, Ref } from '@typegoose/typegoose'
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses'
import { ModelTeam } from './team.model'

export class ModelTeamPlayer {
	@prop()
	dateStart: string

	@prop()
	dateEnd: string

	@prop({ ref: () => ModelTeam })
	teamId: Ref<ModelTeam>
}

export interface ModelPlayer extends Base {}
export class ModelPlayer extends TimeStamps {
	@prop()
	name: string

	@prop({ unique: true, required: true })
	nik: string

	@prop({ type: () => [ModelTeamPlayer], _id: false })
	teams: ModelTeamPlayer[]

	@prop()
	ranking: string
}
