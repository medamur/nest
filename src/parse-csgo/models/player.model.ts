import { modelOptions, prop, Severity } from '@typegoose/typegoose'
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses'

export class ESlPlayer {
	@prop()
	id: string

	@prop()
	name: string

	@prop()
	country: string

	@prop()
	points: string

	@prop()
	points_aged: string

	@prop()
	deleted: string

	@prop()
	rank: string

	@prop()
	ranktendency: string

	@prop()
	prodbkey: string

	@prop()
	photo_body: string

	@prop()
	photo_square: string

	@prop()
	photo_portrait: string

	@prop()
	team: string

	@prop()
	events?: string[] | null
}

export interface ModelPlayer extends Base {}

@modelOptions({ options: { allowMixed: Severity.ALLOW } })
export class ModelPlayer extends TimeStamps {
	@prop()
	name: string

	@prop({ unique: true, required: true })
	nik: string

	@prop()
	country: string

	@prop()
	esl: ESlPlayer
}
