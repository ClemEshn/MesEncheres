import { Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn, Column, CreateDateColumn } from "typeorm";
import { Annonce } from "../../annonce/entities/annonce.entity"; 
import { User } from "../../users/entities/user.entity"; 

import { IsDate, IsNumber, IsUUID } from "class-validator";
@Entity()
export class PriceUpdate {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Annonce, { nullable: false, onDelete: "CASCADE" })
    @JoinColumn()
    annonce: Annonce;

    @ManyToOne(() => User, { nullable: false, onDelete: "CASCADE" })
    @JoinColumn()
    @IsUUID()
    bider : String;

    @Column('decimal')
    @IsNumber()
    price : number;

    @CreateDateColumn()
    @IsDate()
    date: Date;
}