import { Body, Controller, Get, Param, Post, UseGuards, Headers } from '@nestjs/common';
import { ProductService } from './product.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AllergenDtoType } from 'src/dtos/user.dto';
import { AlternativeDtoType } from 'src/dtos/alternative.dto';
import { SetLogDtoType } from 'src/dtos/set-log.dto';

@Controller('product')
@UseGuards(JwtAuthGuard)
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('/:ean')
  findOne(@Param('ean') ean: string) {
    return this.productService.findOne(ean);
  }

  @Get('/search/:product')
  find(@Param('product') product: string) {
    return this.productService.find(product);
  }


  @Get('/receipt/:category')
  findReceipt(@Param('category') category: string) {
    return this.productService.findReceipt(category);
  }

  @Post('/alternative')
  findAlternative(@Body() body: AlternativeDtoType) {
    return this.productService.findAlternative(body);
  }

}
