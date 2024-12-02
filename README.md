<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```
# Sistema de Gerenciamento de Clientes

## 📋 Estimativa do Projeto

### 1. Tempo de Desenvolvimento
**Estimativa total: 6-8 semanas**

Detalhamento:
- Configuração inicial do projeto: 1 semana
- Desenvolvimento do back-end: 2-3 semanas
- Desenvolvimento do front-end: 2-3 semanas
- Testes e ajustes: 1 semana
- Documentação e preparação para deploy: 1 semana

### 2. Equipe de Desenvolvimento
**Total: 3 desenvolvedores**
- 1 Desenvolvedor Pleno/Sênior de Back-end
- 1 Desenvolvedor Pleno/Sênior de Front-end
- 1 Desenvolvedor Júnior para suporte e testes

### 3. Senioridade dos Desenvolvedores
- **Back-end**: Desenvolvedor Sênior (Nível III)
- **Front-end**: Desenvolvedor Pleno (Nível II)
- **DevOps ou Especialista AWS**: Desenvolvedor Júnior (Nível I)

## 🚀 Arquitetura Proposta

### Arquitetura de Tecnologias
- **Front-end**: React + Vite
- **Back-end**: NestJS
- **Banco de Dados**: PostgreSQL
- **ORM**: TypeORM
- **Linguagem**: TypeScript
- **Conteinerização**: Docker e Docker Compose
- **Mensageria**: RabbitMQ
- **Cloud**: AWS (ECS, RDS, S3)

### Arquitetura de Infraestrutura AWS
1. **Computação**: 
   - ECS (Elastic Container Service) para containers
   - EC2 para instâncias adicionais, se necessário

2. **Banco de Dados**:
   - RDS PostgreSQL
   - Configurações de backup e alta disponibilidade

3. **Armazenamento**:
   - S3 para armazenamento de assets
   - Configuração de CDN com CloudFront

4. **Observabilidade**:
   - CloudWatch para logs
   - X-Ray para rastreamento de serviços
   - CloudTrail para auditoria

## 🔧 Configurações e Tecnologias

### Back-end
- Framework: NestJS
- ORM: TypeORM
- Banco de Dados: PostgreSQL
- Documentação: Swagger
- Testes: Jest
- Observabilidade: OpenTelemetry

### Front-end
- Framework: React + Vite
- Gerenciamento de Estado: Context API / Redux
- Testes: Cypress (E2E)
- Estilização: Tailwind CSS

### Infraestrutura
- Docker
- Docker Compose
- CI/CD: GitHub Actions
- Mensageria: RabbitMQ

## 🛠 Configuração do Projeto

### Pré-requisitos
- Node.js (v18+)
- Docker
- Docker Compose
- PostgreSQL

## 📝 Documentação
- Swagger disponível em: `/api/docs`
- Documentação técnica no diretório `/docs`

## 🔍 Melhorias Futuras
- Implementar autenticação JWT
- Adicionar more testes de integração
- Melhorar performance com caching
- Implementar monitoramento avançado

# Plano de Entregas por Sprints

## Sprint 1 (15 dias)

- Configuração do ambiente de desenvolvimento
- Definição da arquitetura e tecnologias
- Implementação do back-end com Nest.js
  - Definição dos modelos e entidades
  - Criação dos endpoints de CRUD de clientes
  - Integração com o banco de dados PostgreSQL usando TypeORM
- Configuração da infraestrutura com Docker e Docker Compose
- Configuração do pipeline de CI/CD com GitHub Actions

## Sprint 2 (15 dias)

- Desenvolvimento do front-end com React + Vite
  - Criação dos componentes para exibir a lista de clientes
  - Implementação das funcionalidades de cadastro, edição e exclusão de clientes
  - Integração com a API do back-end
- Implementação da paginação e filtros na listagem de clientes
- Configuração da infraestrutura na AWS
  - Implantação do back-end no AWS ECS
  - Configuração do banco de dados no RDS
  - Armazenamento de assets no S3

## Sprint 3 (15 dias)

- Implementação da tela de visualização de clientes selecionados
- Adição de observabilidade com OpenTelemetry
  - Integração com CloudWatch e X-Ray
- Documentação da API usando Swagger
- Escrita de testes unitários para o back-end

## Sprint 4 (15 dias)

- Implementação de testes end-to-end com Cypress
- Criação do vídeo demonstrativo da aplicação
- Finalização da documentação no README
- Ajustes finais e testes de homologação
- Implantação da aplicação no ambiente de produção