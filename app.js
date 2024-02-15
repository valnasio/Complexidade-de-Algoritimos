//Criando a classe livro, utilizando orientação a objeto
class Livro {
    constructor(titulo, autor, id) {
        this.titulo = titulo;
        this.autor = autor;
        this.id = id;
    }
}

//Criando o Roadmap de Livros usando lista
const roadmapLivros = [
    new Livro("O Senhor das Moscas", "William Golding", 1),
    new Livro("A Revolução dos Bichos", "George Orwell", 2),
    new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", 3),
    new Livro("Dom Quixote", "Miguel de Cervantes", 4),
    new Livro("Matar um Rouxinol", "Harper Lee", 5),
    new Livro("1984", "George Orwell", 6),
    new Livro("Cem Anos de Solidão", "Gabriel Garcia Márquez", 7),
    new Livro("Orgulho e Preconceito", "Jane Austen", 8),
    new Livro("Crime e Castigo", "Fiódor Dostoiévski", 9),
    new Livro("O Apanhador no Campo de Centeio", "J.D. Salinger", 10),
    new Livro("O Hobbit", "J.R.R. Tolkien", 11),
    new Livro("Harry Potter e a Pedra Filosofal", "J.K. Rowling", 12),
    new Livro("A Menina que Roubava Livros", "Markus Zusak", 13),
    new Livro("O Grande Gatsby", "F. Scott Fitzgerald", 14),
    new Livro("Ulisses", "James Joyce", 15),
    new Livro("O Médico", "Noah Gordon", 16),
    new Livro("O Iluminado", "Stephen King", 17),
    new Livro("O Código Da Vinci", "Dan Brown", 18),
    new Livro("As Crônicas de Nárnia", "C.S. Lewis", 19),
    new Livro("Cinquenta Tons de Cinza", "E.L. James", 20),
    new Livro("O Silmarillion", "J.R.R. Tolkien", 21),
    new Livro("Memórias Póstumas de Brás Cubas", "Machado de Assis", 22),
    new Livro("Guerra e Paz", "Lev Tolstói", 23),
    new Livro("A Revolta de Atlas", "Ayn Rand", 24),
    new Livro("Paraíso Perdido", "John Milton", 25),
    new Livro("A Insustentável Leveza do Ser", "Milan Kundera", 26),
    new Livro("Anna Karenina", "Lev Tolstói", 27),
    new Livro("O Sol é para Todos", "Harper Lee", 28),
    new Livro("O Nome do Vento", "Patrick Rothfuss", 29),
    new Livro("O Morro dos Ventos Uivantes", "Emily Brontë", 30),
    new Livro("O Retrato de Dorian Gray", "Oscar Wilde", 31),
    new Livro("O Jardim Secreto", "Frances Hodgson Burnett", 32),
    new Livro("As Vinhas da Ira", "John Steinbeck", 33),
    new Livro("A Máquina do Tempo", "H.G. Wells", 34),
    new Livro("Os Miseráveis", "Victor Hugo", 35),
    new Livro("A Arte da Guerra", "Sun Tzu", 36),
    new Livro("O Poderoso Chefão", "Mario Puzo", 37),
    new Livro("A Hospedeira", "Stephenie Meyer", 38),
    new Livro("Duna", "Frank Herbert", 39),
    new Livro("O Alquimista", "Paulo Coelho", 40),
];

function buscarLivroPorId(id) {
    const livroEncontrado = roadmapLivros.find(livro => livro.id === id);
    return livroEncontrado ? livroEncontrado : null;
}

// Obter entrada do usuário para o ID do livro
const idProcurado = parseInt(prompt("Digite o ID do livro que deseja procurar de 1 a 40:"), 10);

// Verificar se a entrada é um número inteiro válido
if (!isNaN(idProcurado) && Number.isInteger(idProcurado) && idProcurado >= 1 && idProcurado <= 40) {
    const livroEncontrado = buscarLivroPorId(idProcurado);

    if (livroEncontrado) {
        alert(`Livro encontrado: ${livroEncontrado.titulo} por ${livroEncontrado.autor}`);
    } else {
        alert("Livro não encontrado. Verifique o ID inserido.");
    }
} else {
    alert("Por favor, insira um ID válido entre 1 e 40.");
}
function reiniciarPagina() {
    location.reload();
}

// Adicionar um ouvinte de evento de clique ao botão
document.getElementById('reiniciarPagina').addEventListener('click', function () {

    reiniciarPagina();
});