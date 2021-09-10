import { Injectable } from '@nestjs/common'
import { ESlPlayer, SavePlayerDTO } from './dto/save-player.dto'
import { ModelPlayer } from './models/player.model'
import { IObjectWithTypegooseName, ModelType } from '@typegoose/typegoose/lib/types'
import { InjectModel } from 'nestjs-typegoose'
import { SaveTeamDTO } from './dto/save-team.dto'
import { ModelTeam } from './models/team.model'
import { ModelEvent } from './models/event.model'
import * as fs from 'fs'

@Injectable()
export class ParseCsgoService {
	constructor(
		@InjectModel(ModelPlayer) private readonly player: ModelType<ModelPlayer>,
		@InjectModel(ModelTeam) private readonly team: ModelType<ModelTeam>,
		@InjectModel(ModelEvent) private readonly event: ModelType<ModelEvent>
	) {}

	async savePlayersESL(): Promise<ModelPlayer | null> {
		const preparedPlayers: Array<SavePlayerDTO & IObjectWithTypegooseName> | null =
			JSON.parse(fs.readFileSync('static/json/players.json', 'utf-8'))?.items.map((el: ESlPlayer) => ({
				esl: { ...el, team: el?.team?.id || null, events: el.events?.map(item => item.id) || null },
				nik: el.name,
				name: '',
				country: el.country
			})) || null

		if (!preparedPlayers) {
			return null
		}

		// @ts-ignore
		return this.player.create(preparedPlayers)
	}

	async saveTeam(dto: SaveTeamDTO & IObjectWithTypegooseName): Promise<ModelTeam> {
		return this.team.create(dto)
	}

	getJson() {
		console.log(JSON.parse(fs.readFileSync('static/json/player.json', 'utf-8')))
		return fs.readFileSync('static/json/player.json', 'utf-8')
	}

	// async getTeamByName(name: string): Promise<ModelTeam | null> {
	// 	return this.team
	// 		.aggregate([
	// 			{
	// 				$match: { name }
	// 			},
	// 			{
	// 				$lookup: {
	// 					from: 'Player',
	// 					localField: 'currentPlayers',
	// 					foreignField: '_id',
	// 					as: 'currentPlayers'
	// 				}
	// 			}
	// 		])
	// 		.exec()
	// }
	//
	// async getPlayerByNik(nik: string): Promise<ModelPlayer[]> {
	// 	return this.player.aggregate([
	// 		{
	// 			$match: {
	// 				nik
	// 			}
	// 		},
	// 		{
	// 			$unwind: {
	// 				path: '$teams'
	// 			}
	// 		},
	// 		{
	// 			$lookup: {
	// 				from: 'Team',
	// 				localField: 'teams.teamId',
	// 				foreignField: '_id',
	// 				as: 'teams.teamInfo'
	// 			}
	// 		},
	// 		{
	// 			$unwind: {
	// 				path: '$teams.teamInfo'
	// 			}
	// 		},
	// 		{
	// 			$group: {
	// 				_id: '$_id',
	// 				teams: {
	// 					$push: '$teams'
	// 				}
	// 			}
	// 		},
	// 		{
	// 			$lookup: {
	// 				from: 'Player',
	// 				localField: '_id',
	// 				foreignField: '_id',
	// 				as: 'playerDetail'
	// 			}
	// 		},
	// 		{
	// 			$unwind: {
	// 				path: '$playerDetail'
	// 			}
	// 		},
	// 		{
	// 			$addFields: {
	// 				'playerDetail.teams': '$teams'
	// 			}
	// 		},
	// 		{
	// 			$replaceRoot: {
	// 				newRoot: '$playerDetail'
	// 			}
	// 		}
	// 	])
	// }
}
