import { PartialType } from '@nestjs/mapped-types';
import { CreatePriceUpdateDto } from './create-price-update.dto';

export class UpdatePriceUpdateDto extends PartialType(CreatePriceUpdateDto) {}
