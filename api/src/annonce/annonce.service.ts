import { Injectable } from '@nestjs/common';
import { CreateAnnonceDto } from './dto/create-annonce.dto';
import { UpdateAnnonceDto } from './dto/update-annonce.dto';
import { Annonce } from './entities/annonce.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AnnonceService {
  constructor(
    @InjectRepository(Annonce)
    private annonceRepository: Repository<Annonce>,
  ){}
  create(createAnnonceDto: CreateAnnonceDto) {
    const annonce =  this.annonceRepository.create(createAnnonceDto);
    return this.annonceRepository.save(annonce);
  }

  findAll() {
    return this.annonceRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} annonce`;
  }

  update(id: number, updateAnnonceDto: UpdateAnnonceDto) {
    return `This action updates a #${id} annonce`;
  }

  remove(id: number) {
    return `This action removes a #${id} annonce`;
  }
}
