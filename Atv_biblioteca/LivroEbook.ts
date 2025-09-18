import { Livro } from './Livro';

export class LivroEbook extends Livro {
  tamanho: number; // Tamanho do arquivo do Ebook (em MB)

  constructor(titulo: string, autor: string, isbn: number, preço: number, estoque: number, tamanho: number, ano: number) {
    super(titulo, autor, isbn, preço, estoque, ano);
    this.tamanho = tamanho;
  }

  exibirLivro(): void {
    super.exibirLivro();
    console.log(`Tamanho do Ebook: ${this.tamanho}MB`);
  }
}
