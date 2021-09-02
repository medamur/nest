export class SavePlayerDto {
	name: string

	nik: string

	teams: [
		{
			dateStart: string

			dateEnd: string

			teamId: string
		}
	]

	ranking: string
}
