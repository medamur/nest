import { Injectable } from '@nestjs/common'
import { SavePlayerDto } from './dto/save-player.dto'
import { ModelPlayer } from './models/player.model'
import { IObjectWithTypegooseName, ModelType } from '@typegoose/typegoose/lib/types'
import { InjectModel } from 'nestjs-typegoose'
import { SaveTeamDto } from './dto/save-team.dto'
import { ModelTeam } from './models/team.model'
import { Error } from 'mongoose'

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
				}
			])
			.exec()
	}

	async getPlayerByNik(nik: string): Promise<ModelPlayer[]> {
		return this.player.aggregate([
			{
				$match: {
					nik
				}
			},
			{
				$unwind: {
					path: '$teams'
				}
			},
			{
				$lookup: {
					from: 'Team',
					localField: 'teams.teamId',
					foreignField: '_id',
					as: 'teams.teamInfo'
				}
			},
			{
				$unwind: {
					path: '$teams.teamInfo'
				}
			},
			{
				$group: {
					_id: '$_id',
					teams: {
						$push: '$teams'
					}
				}
			},
			{
				$lookup: {
					from: 'Player',
					localField: '_id',
					foreignField: '_id',
					as: 'playerDetail'
				}
			},
			{
				$unwind: {
					path: '$playerDetail'
				}
			},
			{
				$addFields: {
					'playerDetail.teams': '$teams'
				}
			},
			{
				$replaceRoot: {
					newRoot: '$playerDetail'
				}
			}
		])
	}
}
