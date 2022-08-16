import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities';

import { TuitController } from "./tuit.controller";
import { Tuit } from './tuit.entity';
import { TuitService } from "./tuit.service";

@Module({
  imports: [TypeOrmModule.forFeature([Tuit, User])],
  controllers: [TuitController],
  providers: [TuitService],
})
export class TuitsModule {}
