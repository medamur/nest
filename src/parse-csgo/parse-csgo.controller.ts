import { Body, Controller, Get, Param, Post } from '@nestjs/common'
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

	@Get('get-team-by-name/:name')
	async getTeamByName(@Param('name') name: string) {
		return this.parseCsgoService.getTeamByName(name)
	}

	@Get('get-player-by-nik/:nik')
	async getPlayerByNik(@Param('nik') nik: string) {
		return this.parseCsgoService.getPlayerByNik(nik)
	}
}
