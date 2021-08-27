import { Body, Controller, Post } from '@nestjs/common'
import { SavePlayerDto } from './dto/save-player.dto'
import { ParseCsgoService } from './parse-csgo.service'
import { IObjectWithTypegooseName } from '@typegoose/typegoose/lib/types'
import { SaveTeamDto } from './dto/save-team.dto'

@Controller('parse-csgo')
export class ParseCsgoController {
	constructor(private readonly parseCsgoService: ParseCsgoService) {}

	@Post('save-player')
	async savePlayer(@Body() dto: SavePlayerDto & IObjectWithTypegooseName) {
		return this.parseCsgoService.savePlayer(dto)
	}

	@Post('save-team')
	async saveTeam(@Body() dto: SaveTeamDto & IObjectWithTypegooseName) {
		return this.parseCsgoService.saveTeam(dto)
	}
}
