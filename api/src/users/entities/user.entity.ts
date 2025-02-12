import { Annonce } from 'src/annonce/entities/annonce.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: false, nullable: false })
  first_name: string;

  @Column({ unique: false, nullable: false })
  last_name: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false, select: false })
  password: string;

  @Column({ default: "USER" })
  role: string;
  
  @OneToMany(() => Annonce, (annonce) => annonce.user, { cascade: true })
  annonces: Annonce[];
  
  @Column({ unique: true, nullable: false })
  phone: String;

  @Column({ nullable: true })
  image: String;
}