import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('/:ean')
  getProduct(@Param('ean') ean: string) {
    return this.productService.getProduct(ean);
  }

  @Get('/receipt/:query')
  getReceipt(@Param('query') query: string) {
    return this.productService.getReceipt(query);
  }
}
