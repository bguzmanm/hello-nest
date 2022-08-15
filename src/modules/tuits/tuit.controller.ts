import {
  Body, Controller, Delete, Get, Param, Patch, Post, Query
} from '@nestjs/common';

import { TuitService } from './tuit.service';
import { Tuit } from './tuit.entity';
import { CreateTuitDto, UpdateTuitDto } from "./dto";

@Controller('tuits')
export class TuitController {

  constructor(private readonly tuitService: TuitService) {

  }

  @Get()
  getTuits(@Query() filterQuery): Promise<Tuit[]> {
    const {searchTerms, orderBy } = filterQuery;
    //return `Hola desde tuiter: filtrando por ${searchTerms} y ordenado por ${orderBy}`;
    return this.tuitService.getTuits();
  }
  @Get(':id')
  getTuit(@Param('id') id: number): Promise<Tuit> {
    //return `Tu tuit id ${id}`;
    return this.tuitService.getTuit(id);
  }

  @Post()
  //@HttpCode(HttpStatus.NO_CONTENT)
  createTuit(@Body() message: CreateTuitDto): Promise<Tuit> {
    //return body;
    console.log(message instanceof CreateTuitDto);
    return this.tuitService.createTuit(message);
  }

  @Patch(':id')
  updateTuit(@Param('id') id: number, @Body() tuit: UpdateTuitDto): Promise<Tuit> {
    //return `Tu tuit ${id} ha sido actualizado: ${tuit.message}`;
    return this.tuitService.updateTuit(id, tuit);
  }

  @Delete(':id')
  deleteTuit(@Param('id') id: number): Promise<void> {
    //return `Tu tuit ${id} ha sido eliminado`;
    return this.tuitService.removeTuit(id);
  }
}
