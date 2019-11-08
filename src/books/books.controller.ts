import { Controller, Get, Param, Body, Post, Delete, Put } from '@nestjs/common';
//import { BooksService } from './books.service';
import { InMemoryDBService, InMemoryDBEntity } from '@nestjs-addons/in-memory-db';
import { get } from 'http';

interface BookEntity extends InMemoryDBEntity {
    title: string,
    description: string,
    author: string
};

@Controller('books')
export class BooksController {
    constructor(public bookService: InMemoryDBService<BookEntity>){

    }


    @Get()
    findAll(): BookEntity[] {
        return this.bookService.getAll();
    }

    @Get('seed')
    seed() {
        this.bookService.create({ title: 'Title1', description: "Book1", author: 'Author1' });
        this.bookService.create({ title: 'Title2', description: "Book2", author: 'Author2' });
        this.bookService.create({ title: 'Title3', description: "Book3", author: 'Author3' });
        this.bookService.create({ title: 'Title4', description: "Book4", author: 'Author4' });
        this.bookService.create({ title: 'Title5', description: "Book5", author: 'Author5' });
    }

    @Get(':id')
    findOne(@Param('id') id: number): BookEntity {
        // using Active Record style
        return this.bookService.get(id);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        // using Active Record style
        return this.bookService.delete(id);
    }

    @Post()
    create(@Body() book: BookEntity) {
       return this.bookService.create(book);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() book: BookEntity) {
       return this.bookService.update(book);
    }
}
