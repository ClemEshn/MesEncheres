import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PriceUpdateService } from './price-update.service';
import { CreatePriceUpdateDto } from './dto/create-price-update.dto';
import { UpdatePriceUpdateDto } from './dto/update-price-update.dto';

@Controller('price-update')
export class PriceUpdateController {
  constructor(private readonly priceUpdateService: PriceUpdateService) {}

  @Post()
  create(@Body() createPriceUpdateDto: CreatePriceUpdateDto) {
    return this.priceUpdateService.create(createPriceUpdateDto);
  }

  @Get()
  findAll() {
    return this.priceUpdateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.priceUpdateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePriceUpdateDto: UpdatePriceUpdateDto) {
    return this.priceUpdateService.update(+id, updatePriceUpdateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.priceUpdateService.remove(+id);
  }
}
