import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TuitController } from "./tuit.controller";
import { Tuit } from './tuit.entity';
import { TuitService } from "./tuit.service";

@Module({
  imports: [TypeOrmModule.forFeature([Tuit])],
  controllers: [TuitController],
  providers: [TuitService],
})
export class TuitsModule {}
