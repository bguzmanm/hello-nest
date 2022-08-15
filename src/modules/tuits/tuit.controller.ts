import {
  Body, Controller, Delete, Get, HttpCode,
  HttpStatus, Param, Patch, Post, Query
} from "@nestjs/common";
import { TuitService } from "./tuit.service";
import { Tuit } from "./tuit.entity";

@Controller('tuits')
export class TuitController {

  constructor(private readonly tuitService: TuitService) {

  }

  @Get()
  getTuits(@Query() filterQuery): Tuit[] {
    const {searchTerms, orderBy } = filterQuery;
    //return `Hola desde tuiter: filtrando por ${searchTerms} y ordenado por ${orderBy}`;
    return this.tuitService.getTuits();
  }
  @Get(':id')
  getTuit(@Param('id') id: string): Tuit {
    //return `Tu tuit id ${id}`;
    return this.tuitService.getTuit(id);
  }

  @Post()
  //@HttpCode(HttpStatus.NO_CONTENT)
  createTuit(@Body('message') message: string): void {
    //return body;
    return this.tuitService.createTuit(message);
  }

  @Patch(':id')
  updateTuit(@Param('id') id: string, @Body('message') tuit): Tuit {
    //return `Tu tuit ${id} ha sido actualizado: ${tuit.message}`;
    return this.tuitService.updateTuit(id, tuit);
  }

  @Delete(':id')
  deleteTuit(@Param('id') id: string): void {
    //return `Tu tuit ${id} ha sido eliminado`;
    return this.tuitService.removeTuit(id);
  }
}
