import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { IsUUID, IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

@Entity()
export class Annonce {
    
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    @IsString()
    name: string;

    @Column('decimal')
    @IsNumber()
    basePrice: number;

    @Column()
    @IsString()
    state: string;

    @Column({ nullable: true })
    @IsOptional()
    @IsString()
    imageOne: string;

    @Column({ nullable: true })
    @IsOptional()
    @IsString()
    imageTwo: string;

    @Column({ nullable: true })
    @IsOptional()
    @IsString()
    imageThree: string;

    @Column({ nullable: true })
    @IsOptional()
    @IsString()
    imageFour: string;

    @ManyToOne(() => User, (user) => user.annonces)
    @IsUUID()
    user: User;

    @CreateDateColumn()
    @IsDate()
    date: Date;

    @Column()
    @IsString()
    localisation: string;
}
