export class SavePlayerDto {
	name: string

	nik: string

	teams: [
		{
			dateStart: string

			dateEnd: string

			team: string
		}
	]

	ranking: string
}
