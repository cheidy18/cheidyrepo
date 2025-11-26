import { Controller, Get, Post,Body, Param, Delete, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.model';
import { ObjectId } from 'typeorm';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('showall')
  getHello() {
    return this.appService.findall();
  }
  @Post('adduser')
  createuser(@Body() data:User){
    return this.appService.create(data)
    
  }


    @Get('showone/:id')
  findonebyid(@Param('id') id:ObjectId) {
    return this.appService.findone(id);
  }

      @Delete('delete/:id')
  deleteuser(@Param('id') id:ObjectId) {
    return this.appService.deleteuser(id);
  }

        @Put('update/:id')
  updateuser(@Param('id') id:ObjectId,@Body() data:User) {
     this.appService.updateuser(id,data);
        return this.appService.findone(id);
  }
}
