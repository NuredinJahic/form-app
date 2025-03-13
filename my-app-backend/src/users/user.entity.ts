import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users') // Explicitly specify the table name
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'first_name' }) // Map to the "first_name" column
  firstName: string;

  @Column({ name: 'last_name' }) // Map to the "last_name" column
  lastName: string;
}
