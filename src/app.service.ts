import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma:PrismaService){}
  getHello(): string {
    return 'Hello World! there';
  }

  async getVerses(book:number,chapter:number, start:string|undefined, end:string|undefined){
    return await this.prisma.bible_verses_kjv.findMany({where:{book:book,chapter:chapter,verse: {
      // Using the range operator to filter verses within the range
      // If start or end is undefined, it will be considered as negative infinity or positive infinity respectively
      gte: start !== undefined ? parseInt(start) : 1,
      lte: end !== undefined ? parseInt(end) : undefined
    }}})

    // const res = await this.prisma.$queryRaw`
    // SELECT 
    //     book,
    //     chapter,
    //     COUNT(verse) AS total_verses
    // FROM 
    //     bible_verses_kjv
    // GROUP BY 
    //     book, 
    //     chapter
    // ORDER BY 
    //     book,
    //     chapter;
    // `;

    // console.log(res)  
    // return {res:res}
  }

}
