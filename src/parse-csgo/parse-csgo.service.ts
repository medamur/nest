import { Injectable } from '@nestjs/common'
import { SavePlayerDto } from './dto/save-player.dto'
import { ModelPlayer } from './models/player.model'
import { IObjectWithTypegooseName, ModelType } from '@typegoose/typegoose/lib/types'
import { InjectModel } from 'nestjs-typegoose'
import { SaveTeamDto } from './dto/save-team.dto'
import { ModelTeam } from './models/team.model'

@Injectable()
export class ParseCsgoService {
	constructor(
		@InjectModel(ModelPlayer) private readonly player: ModelType<ModelPlayer>,
		@InjectModel(ModelTeam) private readonly team: ModelType<ModelTeam>
	) {}

	async savePlayer(dto: SavePlayerDto & IObjectWithTypegooseName): Promise<ModelPlayer> {
		return this.player.create(dto)
	}

	async saveTeam(dto: SaveTeamDto & IObjectWithTypegooseName): Promise<ModelTeam> {
		return this.team.create(dto)
	}
}
