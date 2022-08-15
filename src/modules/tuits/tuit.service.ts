import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from 'typeorm';


import { Tuit } from "./tuit.entity";
import { CreateTuitDto, UpdateTuitDto } from "./dto";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class TuitService {

  constructor(@InjectRepository(Tuit) private readonly tuitRepository: Repository<Tuit>) {
  }

  async getTuits(): Promise<Tuit[]> {
    return await this.tuitRepository.find();
  }
  async getTuit(id: number): Promise<Tuit> {
    const tuit: Tuit = await this.tuitRepository.findOneById(id);
    if (!tuit){
      throw new NotFoundException('Resource not found');
    }
    return tuit;
  }

  async createTuit({ message }: CreateTuitDto){
    const tuit: Tuit = await this.tuitRepository.create({message});
    return this.tuitRepository.save(tuit);
  }

  async updateTuit(id: number, { message }: UpdateTuitDto) {
    const tuit: Tuit = await this.tuitRepository.preload({
      id, message
    });
    if (!tuit){
      throw new NotFoundException("Resource not found");
    }

    return tuit;
  }

  async removeTuit(id: number): Promise<void> {
    const tuit: Tuit = await this.tuitRepository.findOneById(id);
    if (!tuit){
      throw new NotFoundException("Resource not found");
    }
    this.tuitRepository.remove(tuit);
  }
}
