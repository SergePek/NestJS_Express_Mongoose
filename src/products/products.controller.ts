import { Body, Controller, Delete, Get, Param, Post, Put, Redirect } from '@nestjs/common';
import { DefaultDeserializer } from 'v8';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';
import { Product } from './schemas/product.schema';

@Controller('products')
export class ProductsController {

    constructor(private readonly productService: ProductService){
    }

    @Get()
    getAll(): Promise<Product[]> {
        return this.productService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id: string): Promise<Product[]>  {
        return this.productService.getById(id)
    }

    @Post()
    create(@Body() createProductDto: CreateProductDto):Promise<Product>  {
        return this.productService.create(createProductDto)
    }
    @Delete(':id')
    remove(@Param('id') id: string):Promise<Product>  {
        return this.productService.remove(id)
    }

    @Put(':id')
    update(@Body() createProductDto:CreateProductDto, @Param('id') id: string): Promise<Product> {
        return this.productService.update(id,createProductDto)
    }


}
