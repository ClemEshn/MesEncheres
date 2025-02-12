import { Module } from '@nestjs/common';
import { AnnonceService } from './annonce.service';
import { AnnonceController } from './annonce.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Annonce } from './entities/annonce.entity';

@Module({
  controllers: [AnnonceController],
  imports: [TypeOrmModule.forFeature([Annonce])],
  providers: [AnnonceService],
})
export class AnnonceModule {}
