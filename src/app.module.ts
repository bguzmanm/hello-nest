import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TuitsModule } from './modules/tuits/tuits.module';

@Module({
  imports: [TuitsModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'kupita',
    database: 'tuit',
    autoLoadEntities: true,
    synchronize: true

  })],
  //  controllers: [AppController],
  //  providers: [AppService],
})
export class AppModule {}
