import { Module } from '@nestjs/common'
import { TypegooseModule } from 'nestjs-typegoose'
import { ModelPlayer } from './models/player.model'
import { ModelTeam } from './models/team.model'
import { ParseCsgoController } from './parse-csgo.controller'
import { ParseCsgoService } from './parse-csgo.service'
import { ModelEvent } from './models/event.model'

@Module({
	controllers: [ParseCsgoController],
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: ModelPlayer,
				schemaOptions: {
					collection: 'Player'
				}
			},
			{
				typegooseClass: ModelTeam,
				schemaOptions: {
					collection: 'Team'
				}
			},
			{
				typegooseClass: ModelEvent,
				schemaOptions: {
					collection: 'Event'
				}
			}
		])
	],
	providers: [ParseCsgoService]
})
export class ParseCsgoModule {}
