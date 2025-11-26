import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.model';
import { MongoRepository, ObjectId } from 'typeorm';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  constructor(@InjectRepository(User) private userrepo:MongoRepository<User>){}

    create(data:User){
      return this.userrepo.save(data)
    }

       findall(){
      return this.userrepo.find()
    }

          findone(id:ObjectId){
      return this.userrepo.findOneBy(id)
    }

             deleteuser(id:ObjectId){
      return this.userrepo.delete(id)
    }

                 updateuser(id:ObjectId,data:User){
      return this.userrepo.update(id,data)
    }
  /***************************************** */
}
