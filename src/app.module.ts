import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5433,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      // autoLoadEntities will automatically load all entities registered through the forFeature() method in your modules.
      autoLoadEntities: true,
      // For development purposes, you can set synchronize to true. In production, it's recommended to use migrations instead.
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
