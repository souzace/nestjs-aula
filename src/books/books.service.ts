import { Injectable, HttpException } from '@nestjs/common';
import { BOOKS } from './books.mock';



@Injectable()
export class BooksService {

    books = BOOKS;

    getBooks() : Promise<any> {
        return new Promise(resolve => {
            resolve(this.books);
        });
    }


    getBook(bookID) : Promise<any> {
        let id = Number(bookID);

        return new Promise(resolve => {
            const book = this.books.find(book => book.id === id);

            if (!book) {
                throw new HttpException('O Livro não existe!', 404);
            }

            resolve(book);
        })
    }


    addBook(book): Promise<any> {
        return new Promise(resolve => {
            this.books.push(book);
            resolve(this.books);
        });
    }

    removeBook(bookID): Promise<any> {
        let id = Number(bookID);
        return new Promise(resolve => {
            console.log(this.books);
            //this.books.slice(book, 0, 1);
        })
    }
}