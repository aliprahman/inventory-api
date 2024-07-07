import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
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
