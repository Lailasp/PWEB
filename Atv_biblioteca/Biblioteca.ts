export interface IBiblioteca {
  titulo: string;
  autor: string;
  ano: number;
  isbn: number;
  preço: number;
  estoque: number;

  exibirLivro(): void;
  atualizarEstoque(estoque: number): void;
}
