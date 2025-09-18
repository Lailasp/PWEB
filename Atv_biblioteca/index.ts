import { LivroEbook } from './LivroEbook';
import { LivroFisico } from './LivroFisico';
import { Biblioteca } from './Biblioteca';

// Criando a biblioteca
const biblioteca = new Biblioteca();

// Criando livros
const livroEbook = new LivroEbook("Pequeno Príncipe", "Antoine de Saint-Exupéry", 123456, 30.0, 10, 15, 1943);
const livroFisico = new LivroFisico("1984", "George Orwell", 654321, 40.0, 5, 1949);

// Adicionando livros à biblioteca
biblioteca.adicionarLivro(livroEbook);
biblioteca.adicionarLivro(livroFisico);

// Exibindo livros na biblioteca
biblioteca.exibirLivros();

// Vender livros
biblioteca.venderLivro(123456); // Vende "Pequeno Príncipe"
biblioteca.venderLivro(654321); // Vende "1984"

// Excluindo um livro
biblioteca.excluirLivro(123456);

// Exibindo novamente após as operações
biblioteca.exibirLivros();
