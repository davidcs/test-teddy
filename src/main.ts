import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

    // Habilitar CORS com configuração personalizada
    app.enableCors({
      origin: 'http://localhost:5173', // Permitir apenas o frontend Vite
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      credentials: true, // Permitir cookies ou autenticação baseada em credenciais
    });
    
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
