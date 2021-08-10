import { Body, Controller, Post } from '@nestjs/common'
import { SavePlayerDto } from './dto/save-player.dto'
import { ParseCsgoService } from './parse-csgo.service'

@Controller('parse-csgo')
export class ParseCsgoController {
	constructor(private ParseCsgoService: ParseCsgoService) {}

	@Post('save-player')
	savePlayer(@Body() dto: SavePlayerDto) {
		return this.ParseCsgoService.savePlayer(dto)
	}
}
