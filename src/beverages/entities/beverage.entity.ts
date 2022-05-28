import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Beverage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false})
  name: string;

  @Column({nullable: true})
  description: string;

  @Column({nullable: false})
  type: string;

  @Column({default: false})
  sugar: boolean;

  @Column({nullable: false})
  price: number;
}
