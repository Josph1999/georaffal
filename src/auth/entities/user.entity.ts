import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Users {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'text' })
  public first_name: string;

  @Column()
  public last_name: string;

  @Column({ type: 'text', nullable: true })
  public email?: string;

  @Column({ type: 'text', nullable: true })
  public phone_number?: string;

  @Column({
    type: 'timestamptz',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  public created_at: Date;

  @Column({
    type: 'timestamptz',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  public updated_at: Date;

  @Column({ type: 'text' })
  public address: string;

  @Column({ type: 'text' })
  public username: string;

  @Column({ type: 'money', default: 0.0 })
  public balance: number;

  @Column({ type: 'text' })
  public role: string;

  @Column({ type: 'text', nullable: true })
  public country: string;

  @Column({ type: 'text', nullable: true })
  public city: string;
}

export default Users;
