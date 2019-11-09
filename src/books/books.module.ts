import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
@Module({
  controllers: [BooksController],
  providers: [],
  imports: [
    InMemoryDBModule
  ],

})
export class BooksModule {}
