import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    credentials: true,
    origin: [
      process.env.CLIENT_URL as string,
      // MEMO: add production
    ],
  });
  await app.listen(process.env.PORT || 3300);
}
bootstrap();
