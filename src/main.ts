import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configSerivce = app.get(ConfigService);

  const port = configSerivce.get('app.port');
  await app.listen(port);
}
bootstrap();
