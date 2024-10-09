import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
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
}
