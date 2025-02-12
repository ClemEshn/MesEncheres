import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnnonceModule } from './annonce/annonce.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Annonce } from './annonce/entities/annonce.entity';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'mesencheres',
      entities: [Annonce, User],
      synchronize: true,
    }),
  AnnonceModule, UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
