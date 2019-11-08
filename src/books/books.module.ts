import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
@Module({
  controllers: [BooksController],
  providers: [BooksService],
  imports: [
    InMemoryDBModule
  ],

})
export class BooksModule {}
