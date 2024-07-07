import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { ResponseInterceptor } from '@interceptor/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const configSerivce = app.get(ConfigService);

  // setup
  app.useGlobalInterceptors(new ResponseInterceptor());

  const port = configSerivce.get('app.port');
  await app.listen(port);
}
bootstrap();
