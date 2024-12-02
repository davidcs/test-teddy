import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

    // Habilitar CORS com configuração personalizada
    app.enableCors({
      origin: 'http://localhost:5173', // Permitir apenas o frontend Vite
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      credentials: true, // Permitir cookies ou autenticação baseada em credenciais
    });

    const config = new DocumentBuilder()
    .setTitle('Documentação com Swagger - Teste Teddy')
    .setDescription(
      'Documentação da aplicação de teste.',
    )
    .setVersion('1.0')
    .addTag('users')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
