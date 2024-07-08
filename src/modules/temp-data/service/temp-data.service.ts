import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { InjectRepository } from '@nestjs/typeorm';
import { TempDataSyncEntity } from '@/databases/entities/temp-data-sync.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TempDataService {
  constructor(
    @InjectRepository(TempDataSyncEntity)
    private readonly repoTempData: Repository<TempDataSyncEntity>,
  ) {}

  getAllTempData() {
    return this.repoTempData
      .createQueryBuilder('repo')
      .orderBy('tgl_po', 'ASC')
      .getMany();
  }

  generateSampleData() {
    return {
      id_po: faker.string.numeric({ length: 5 }),
      nama_po: faker.word.sample(),
      tgl_po: faker.date.future(),
      list_barang: [
        {
          id_barang: faker.string.uuid(),
          nama_barang: faker.vehicle.bicycle(),
          qty: faker.number.int({ max: 100 }),
        },
        {
          id_barang: faker.string.uuid(),
          nama_barang: faker.vehicle.bicycle(),
          qty: faker.number.int({ max: 100 }),
        },
        {
          id_barang: faker.string.uuid(),
          nama_barang: faker.vehicle.bicycle(),
          qty: faker.number.int({ max: 100 }),
        },
      ],
    };
  }
}
