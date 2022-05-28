import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BeveragesModule } from './beverages/beverages.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host:config.get<string>('DATABASE_HOST'),
        port:config.get<number>('DATABASE_PORT'),
        username:config.get<string>('DATABASE_USERNAME'),
        password:config.get<string>('DATABASE_PASSWORD'),
        database:config.get<string>('DATABASE_NAME'),
        entities:["dist/**/*.entity{.ts,.js}"],
        synchronize: true,
        logging: true,
        autoLoadEntities: true
      }),
      inject: [ConfigService]
    }),
    BeveragesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
