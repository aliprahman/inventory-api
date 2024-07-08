import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('temp_data_sync')
export class TempDataSyncEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  idPo: string;

  @Column({ nullable: true })
  namaPo: string;

  @Column({ nullable: true })
  tglPo: Date;

  @Column({ type: 'json' })
  listBarang: any;
}
