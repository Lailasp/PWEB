import { IBiblioteca } from './IBiblioteca';

export abstract class Livro implements IBiblioteca {
  titulo: string;
  autor: string;
  isbn: number;
  preço: number;
  estoque: number;
  ano: number;

  constructor(titulo: string, autor: string, isbn: number, preço: number, estoque: number, ano: number) {
    this.titulo = titulo;
    this.autor = autor;
    this.isbn = isbn;
    this.preço = preço;
    this.estoque = estoque;
    this.ano = ano;
  }

  exibirLivro(): void {
    console.log(`Dados do livro`);
    console.log(`Título: ${this.titulo}`);
    console.log(`Isbn: ${this.isbn}`);
    console.log(`Autor: ${this.autor}`);
    console.log(`Preço: ${this.preço}`);
    console.log(`Estoque: ${this.estoque}`);
    console.log(`Ano: ${this.ano}`);
  }

  atualizarEstoque(estoque: number): void {
    this.estoque += estoque;
  }
}
