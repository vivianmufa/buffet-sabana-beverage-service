import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from "@nestjs/typeorm"
import { CreateBeverageDto } from './dto/create-beverage.dto';
import { UpdateBeverageDto } from './dto/update-beverage.dto';
import { Beverage } from './entities/beverage.entity';

@Injectable()
export class BeveragesService extends TypeOrmCrudService<Beverage>{
  constructor(@InjectRepository(Beverage) repo){
    super(repo);
  }

}
