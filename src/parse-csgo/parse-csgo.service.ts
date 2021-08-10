import { Inject, Injectable } from '@nestjs/common'
import { SavePlayerDto } from './dto/save-player.dto'
import { Player } from './models/player.model'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { InjectModel } from 'nestjs-typegoose'

@Injectable()
export class ParseCsgoService {
	constructor(@InjectModel(Player) private readonly player: ModelType<Player>) {}

	async savePlayer(dto: SavePlayerDto): Promise<Player> {
		const res  = await this.player.create(dto)
		console.log(res)
		return res
	}
}
