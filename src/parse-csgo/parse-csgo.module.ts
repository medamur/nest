import { Module } from '@nestjs/common'
import { TypegooseModule } from 'nestjs-typegoose'
import { Player } from './models/player.model'
import { Team } from './models/team.model'
import { ParseCsgoController } from './parse-csgo.controller'
import { ParseCsgoService } from './parse-csgo.service'

@Module({
	controllers: [ParseCsgoController],
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: Player,
				schemaOptions: {
					collection: 'Player'
				}
			},
			{
				typegooseClass: Team,
				schemaOptions: {
					collection: 'Team'
				}
			}
		])
	],
	providers: [ParseCsgoService]
})
export class ParseCsgoModule {}
