// Criando a classe Heroi
class Heroi {
    // Construtor da classe, recebe o nome, a idade e o tipo do herói
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método atacar, exibe a mensagem conforme o tipo do herói
    atacar() {
      // Variável que armazena o ataque do herói
      let ataque;
      // Usando uma estrutura de decisão switch para definir o ataque conforme o tipo
      switch (this.tipo) {
        case "mago":
          ataque = "usou magia";
          break;
        case "guerreiro":
          ataque = "usou espada";
          break;
        case "monge":
          ataque = "usou artes marciais";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
        default:
          ataque = "usou algo desconhecido";
      }
      // Exibindo a mensagem com o tipo e o ataque do herói
      console.log(`O ${this.tipo} atacou, ${ataque}.`);
    }
  }
  
  // Criando alguns objetos da classe Heroi
  let heroi1 = new Heroi("Arthur", 25, "guerreiro");
  let heroi2 = new Heroi("Gondor", 21, "mago");
  let heroi3 = new Heroi("Lee", 28, "monge");
  let heroi4 = new Heroi("Akira", 23, "ninja");
  
  // Chamando o método atacar de cada objeto
  heroi1.atacar(); // O guerreiro atacou usando espada
  heroi2.atacar(); // O mago atacou usando magia
  heroi3.atacar(); // O monge atacou usando artes marciais
  heroi4.atacar(); // O ninja atacou usando shuriken
  