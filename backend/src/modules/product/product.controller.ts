import { Controller, Get, Query } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll(
    @Query('name') name?: string,
    @Query('sortBy') sortBy?: 'name' | 'price_usd' | 'expiration',
    @Query('order') order: 'asc' | 'desc' = 'asc',
    @Query('uploadId') uploadId?: string, 
  ) {
    return this.productService.findAll({ name, sortBy, order, uploadId });
  }
}
