import { Injectable } from '@nestjs/common';
import { CreatePriceUpdateDto } from './dto/create-price-update.dto';
import { UpdatePriceUpdateDto } from './dto/update-price-update.dto';

@Injectable()
export class PriceUpdateService {
  create(createPriceUpdateDto: CreatePriceUpdateDto) {
    return 'This action adds a new priceUpdate';
  }

  findAll() {
    return `This action returns all priceUpdate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} priceUpdate`;
  }

  update(id: number, updatePriceUpdateDto: UpdatePriceUpdateDto) {
    return `This action updates a #${id} priceUpdate`;
  }

  remove(id: number) {
    return `This action removes a #${id} priceUpdate`;
  }
}
