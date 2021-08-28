import { prop, Ref } from '@typegoose/typegoose'
import { ModelPlayer } from './player.model'
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'

export interface ModelTeam extends Base {}
export class ModelTeam extends TimeStamps {
	@prop({ unique: true, required: true })
	name: string

	@prop({ ref: () => ModelPlayer })
	currentPlayers: Ref<ModelPlayer>[]

	@prop()
	ranking: string
}
