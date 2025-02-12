import { Test, TestingModule } from '@nestjs/testing';
import { PriceUpdateController } from './price-update.controller';
import { PriceUpdateService } from './price-update.service';

describe('PriceUpdateController', () => {
  let controller: PriceUpdateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PriceUpdateController],
      providers: [PriceUpdateService],
    }).compile();

    controller = module.get<PriceUpdateController>(PriceUpdateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
