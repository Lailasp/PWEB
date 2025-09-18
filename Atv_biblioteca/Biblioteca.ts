import { IBiblioteca } from './IBiblioteca';

export class Biblioteca {
  livros: IBiblioteca[] = [];

  adicionarLivro(livro: IBiblioteca): void {
    this.livros.push(livro);
    console.log(`Livro "${livro.titulo}" adicionado à biblioteca.`);
  }

  excluirLivro(isbn: number): void {
    const livroIndex = this.livros.findIndex(livro => livro.isbn === isbn);
    if (livroIndex > -1) {
      const livroRemovido = this.livros.splice(livroIndex, 1);
      console.log(`Livro "${livroRemovido[0].titulo}" removido da biblioteca.`);
    } else {
      console.log(`Livro com ISBN ${isbn} não encontrado.`);
    }
  }

  venderLivro(isbn: number): void {
    const livro = this.livros.find(livro => livro.isbn === isbn);
    if (livro && livro.estoque > 0) {
      livro.atualizarEstoque(-1); // Reduz o estoque em 1
      console.log(`Livro "${livro.titulo}" vendido! Estoque atualizado: ${livro.estoque}`);
    } else {
      console.log(`Livro com ISBN ${isbn} não disponível em estoque.`);
    }
  }

  exibirLivros(): void {
    if (this.livros.length === 0) {
      console.log('Nenhum livro na biblioteca.');
    } else {
      console.log('Livros na biblioteca:');
      this.livros.forEach(livro => livro.exibirLivro());
    }
  }
}
