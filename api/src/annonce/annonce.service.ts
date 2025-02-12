import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
    return this.annonceRepository.findOneBy({id});
  }

  async update(id: number, updateAnnonceDto: UpdateAnnonceDto) {
    const previous = await this.annonceRepository.findOneBy({id});
    if(!previous){
      throw new HttpException({ message: 'Drink not found.' }, HttpStatus.NOT_FOUND);
    } else {
      await this.annonceRepository.update(id, { ...updateAnnonceDto });
    return this.annonceRepository.findOneBy({ id });
    }
  }

  remove(id: number) {
    return this.annonceRepository.delete(id);
  }

  findAllByPlace(place: string){
    return this.annonceRepository.findBy({
      localisation : place
    });
  }
}
