import { Module } from '@nestjs/common';
import { PriceUpdateService } from './price-update.service';
import { PriceUpdateController } from './price-update.controller';

@Module({
  controllers: [PriceUpdateController],
  providers: [PriceUpdateService],
})
export class PriceUpdateModule {}
