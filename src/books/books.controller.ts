import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
    constructor(public bookService: BooksService){

    }

    @Get()
     async list() {
        return await this.bookService.getBooks();
    }

    @Get(':id')
    async edit(@Param('id') id: number) {
        // using Active Record style
        const data = await this.bookService.getBook(id);
        if (!data) return { message: 'Data not found' };
        return data;
    }

    @Post()
    async create(@Body() book) {
        return await this.bookService.addBook(book);
    }
}
