/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert('./serviceAccountKey.json'),
      storageBucket: 'chatapp-309b9.appspot.com',
    });
  }

  app.enableCors();

  await app.listen(3000);

}
bootstrap();
