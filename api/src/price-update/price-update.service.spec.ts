import { Test, TestingModule } from '@nestjs/testing';
import { PriceUpdateService } from './price-update.service';

describe('PriceUpdateService', () => {
  let service: PriceUpdateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PriceUpdateService],
    }).compile();

    service = module.get<PriceUpdateService>(PriceUpdateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
