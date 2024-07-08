import { Module } from '@nestjs/common';
import { TempDataController } from './controller/temp-data.controller';
import { TempDataService } from './service/temp-data.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TempDataSyncEntity } from '@/databases/entities/temp-data-sync.entity';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [TypeOrmModule.forFeature([TempDataSyncEntity]), HttpModule],
  controllers: [TempDataController],
  providers: [TempDataService],
  exports: [TypeOrmModule, TempDataService],
})
export class TempDataModule {}
