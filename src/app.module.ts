import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.model';
import { ProductController } from './product/product/product.controller';
import { ProductService } from './product/product/product.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forRoot({
      type:'mongodb',
      host:'localhost',
      port:27017,
      database:'mydatabase',
      entities:[User],
      synchronize:true
    })
  ],
  controllers: [AppController,ProductController],
  providers: [AppService,ProductService],
})
export class AppModule {}
