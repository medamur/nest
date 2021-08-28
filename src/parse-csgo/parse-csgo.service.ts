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

	async saveTeam(dto: SaveTeamDto): Promise<ModelTeam> {
		return this.team.create(dto)
	}

	async getTeamByName(name: string): Promise<ModelTeam | null> {
		return this.team
			.aggregate([
				{
					$match: { name }
				},
				{
					$lookup: {
						from: 'Player',
						localField: 'currentPlayers',
						foreignField: '_id',
						as: 'currentPlayers'
					}
				},
				{
					$limit: 1
				}
			])
			.exec()
	}

	async getPlayerByNik(nik: string): Promise<ModelPlayer | null> {
		return this.player
			.aggregate([
				{
					$unwind: { includeArrayIndex: [0] }
				},
				{
					$lookup: {
						from: 'Team',
						localField: 'teams.team',
						foreignField: '_id',
						as: 'teams.team'
					}
				}
			])
			.exec()
	}
}
