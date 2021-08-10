import { Test, TestingModule } from '@nestjs/testing';
import { ParseCsgoService } from './parse-csgo.service';

describe('ParseCsgoService', () => {
  let service: ParseCsgoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParseCsgoService],
    }).compile();

    service = module.get<ParseCsgoService>(ParseCsgoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
