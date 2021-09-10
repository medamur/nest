import { Body, Controller, Get, Post } from '@nestjs/common'
import { ParseCsgoService } from './parse-csgo.service'
import { IObjectWithTypegooseName } from '@typegoose/typegoose/lib/types'
import { SaveTeamDTO } from './dto/save-team.dto'

@Controller('parse-csgo')
export class ParseCsgoController {
	constructor(private readonly parseCsgoService: ParseCsgoService) {}

	@Get('save-players-esl')
	async savePlayersESL() {
		return this.parseCsgoService.savePlayersESL()
	}

	@Post('save-team')
	async saveTeam(@Body() dto: SaveTeamDTO & IObjectWithTypegooseName) {
		return this.parseCsgoService.saveTeam(dto)
	}

	@Get('get-json')
	async getJson() {
		return this.parseCsgoService.getJson()
	}

	// @Get('get-team-by-name/:name')
	// async getTeamByName(@Param('name') name: string) {
	// 	return this.parseCsgoService.getTeamByName(name)
	// }
	//
	// @Get('get-player-by-nik/:nik')
	// async getPlayerByNik(@Param('nik') nik: string) {
	// 	return this.parseCsgoService.getPlayerByNik(nik)
	// }
}
