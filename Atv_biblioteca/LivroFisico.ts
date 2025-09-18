import { Livro } from './Livro';

export class LivroFisico extends Livro {

  constructor(titulo: string, autor: string, isbn: number, preço: number, estoque: number, ano: number) {
    super(titulo, autor, isbn, preço, estoque, ano);
  }
}
