import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Get('/verses')
  async getverses(@Query('book') book:string, @Query('chapter') chapter:string, @Query('start') start:string|undefined, @Query('end') end:string|undefined){
    return await this.appService.getVerses(parseInt(book), parseInt(chapter), start, end)
  }
}
