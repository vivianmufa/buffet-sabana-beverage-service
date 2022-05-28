import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { BeveragesService } from './beverages.service';
import { CreateBeverageDto } from './dto/create-beverage.dto';
import { UpdateBeverageDto } from './dto/update-beverage.dto';
import { Beverage } from './entities/beverage.entity';

@Crud({
  model: {
    type: Beverage,
  },
})

@Controller('beverages')
export class BeveragesController implements CrudController<Beverage>{
  constructor(public service: BeveragesService) {}
}
