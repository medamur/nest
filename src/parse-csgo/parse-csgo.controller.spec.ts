import { Test, TestingModule } from '@nestjs/testing';
import { ParseCsgoController } from './parse-csgo.controller';

describe('ParseCsgoController', () => {
	let controller: ParseCsgoController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [ParseCsgoController],
		}).compile();

		controller = module.get<ParseCsgoController>(ParseCsgoController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
