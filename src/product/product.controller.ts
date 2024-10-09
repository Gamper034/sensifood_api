import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

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
}
