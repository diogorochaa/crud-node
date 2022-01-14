import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";

@Entity("categories")
export class Category {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  create_at: Date;
}
