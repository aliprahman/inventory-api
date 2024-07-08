import { Controller, Get, Post } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { InjectRepository } from '@nestjs/typeorm';
import { TempDataSyncEntity } from '@/databases/entities/temp-data-sync.entity';
import { Repository } from 'typeorm';
import { TempDataService } from '../service/temp-data.service';
import * as moment from 'moment';

@Controller('/temp-data')
export class TempDataController {
  constructor(
    @InjectRepository(TempDataSyncEntity)
    private readonly repoTempData: Repository<TempDataSyncEntity>,
    private readonly tempDataService: TempDataService,
    private readonly httpService: HttpService,
  ) {}

  @Get('/')
  getData() {
    return this.tempDataService.getAllTempData();
  }

  @Get('/third-party-dummy-data')
  getDataThirdParty() {
    return this.tempDataService.generateSampleData();
  }

  @Post('/syncronize')
  async syncronization(): Promise<any> {
    const { data } = await firstValueFrom(
      this.httpService
        .get('http://localhost:3001/temp-data/third-party-dummy-data')
        .pipe(
          catchError((error: AxiosError) => {
            console.log(error.response.data);
            throw 'An error happened!';
          }),
        ),
    );

    try {
      const temp = new TempDataSyncEntity();
      temp.idPo = data.result.id_po;
      temp.namaPo = data.result.nama_po;
      temp.tglPo = moment(data.result.tgl_po).toDate();
      temp.listBarang = data.result.list_barang;
      await this.repoTempData.save(temp);
    } catch (error) {
      throw new Error(error);
    }

    return 'syncronize data success';
  }
}
