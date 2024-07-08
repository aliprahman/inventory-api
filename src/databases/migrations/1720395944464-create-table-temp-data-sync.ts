import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableTempDataSync1720395944464
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'temp_data_sync',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
            // generationStrategy?: "uuid" | "increment" | "rowid" | "identity";
          },
          {
            name: 'id_po',
            type: 'varchar',
          },
          {
            name: 'nama_po',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'tgl_po',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'list_barang',
            type: 'json',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('temp_data_sync');
  }
}
