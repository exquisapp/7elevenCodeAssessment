import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { HelperService } from './helper.service';

describe('HelperService', () => {
  let service: HelperService;

  beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports:[HttpModule],
      providers: [HelperService],
    }).compile();

    service = module.get<HelperService>(HelperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
