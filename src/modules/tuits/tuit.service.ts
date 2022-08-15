import { Injectable, NotFoundException } from "@nestjs/common";
import { Tuit } from "./tuit.entity";

@Injectable()
export class TuitService {
  private tuits: Tuit[] = [
    {
      id: '1',
      message: 'Hello world from Nest.js!',
    }
  ];

  getTuits(): Tuit[] {
    return this.tuits;
  }
  getTuit(id: string): Tuit {
    const tuit = this.tuits.find((item) => item.id === id);
    if (!tuit){
      throw new NotFoundException('Resource not found');
    }
    return tuit;
  }

  createTuit(message: string) {
    this.tuits.push({
      id: (Math.floor(Math.random() * 2000) + 1).toString(),
      message,
    })
  }

  updateTuit(id: string, message: any) {
    const tuit: Tuit = this.getTuit(id);
    tuit.message = message;
    return tuit;
  }

  removeTuit(id: string) {
    const index = this.tuits.findIndex((tuit) => tuit.id === id);
    if (index>=0){
      this.tuits.slice(index, 1);
    }
  }
}
