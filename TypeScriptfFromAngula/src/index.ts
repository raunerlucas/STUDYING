//  Tipos primitivos Var
let texto: string = "tipo string"
let num: number = 1
let boolea: boolean = true || false

// Especiais
let nula: null = null
let indefinidad: undefined = undefined

// Tipos abstra qualquer e nada
let qualquer: any = 2 //qualquer coisa que pasar aqui ele vai aceitar
let semRetorn: void //não retonar nada o void de sempre

// tipo Objeto sem previsibilidade
let objeto: object = {} // tem que receber um oojeto

// criando um obj
type ProdutoLoja ={
    nome: string,
    quantidade: number,
    preco: number,
}

let arroz: ProdutoLoja = {
    nome: "Arroz",
    quantidade:  2,
    preco: 5,
}


// Arrays
let dados: number[] = [1, 2, 3, 4, 5]
let dados2: Array<boolean> = [true, false]

let infos: (number | string)[] = [1, 2, "", ""]


// tuplas

let boleto:[string, number, number] = ["",1,2]


// Arrays metodos
/*     
// 1. forEach - Iterando pelos elementos do array
dados.forEach((elemento, index) => {
  console.log(`Elemento ${index}: ${elemento}`);
});

// 2. map - Criando um novo array baseado em transformações
const dobrados = dados.map(elemento => elemento * 2);
console.log("Array dobrado:", dobrados);

// 3. filter - Filtrando elementos que atendem a uma condição
const pares = dados.filter(elemento => elemento % 2 === 0);
console.log("Números pares:", pares);

// 4. find - Encontrando o primeiro elemento que atende a uma condição
const primeiroMaiorQueTres = dados.find(elemento => elemento > 3);
console.log("Primeiro número maior que 3:", primeiroMaiorQueTres);

// 5. reduce - Reduzindo o array a um único valor
const somaTotal = dados.reduce((acumulador, elemento) => acumulador + elemento, 0);
console.log("Soma total:", somaTotal);

// 6. some - Verificando se pelo menos um elemento atende a uma condição
const temMaiorQueCinco = dados.some(elemento => elemento > 5);
console.log("Tem algum número maior que 5?", temMaiorQueCinco);



// 7. every - Verificando se todos os elementos atendem a uma condição
const saoMaioresQueZero = dados.every(elemento => elemento > 0);
console.log("Todos os números são maiores que 0?", saoMaioresQueZero);

// 8. indexOf - Encontrando o índice de um elemento
const indiceDoTres = dados.indexOf(3);
console.log("Índice do número 3:", indiceDoTres);

// 9. includes - Verificando se um elemento está no array
const temDois = dados.includes(2);
console.log("Tem o número 2 no array?", temDois);

// 10. sort - Ordenando os elementos do array
const ordenados = dados.slice().sort((a, b) => a - b);
console.log("Array ordenado:", ordenados);

// 11. slice - Criando um novo array a partir de uma fatia do array original
const subArray = dados.slice(1, 4); // Cria um subarray de índice 1 a 3 (não inclui o índice 4)
console.log("Subarray:", subArray);

// 12. splice - Modificando o array removendo ou substituindo elementos
dados.splice(2, 1); // Remove 1 elemento a partir do índice 2
console.log("Array após remover elemento:", dados);

// 13. push - Adicionando um elemento ao final do array
dados.push(6);
console.log("Array após push:", dados);

// 14. pop - Removendo o último elemento do array
const elementoRemovido = dados.pop();
console.log("Array após pop:", dados);

// 15. unshift - Adicionando um elemento ao início do array
dados.unshift(0);
console.log("Array após unshift:", dados);

// 16. shift - Removendo o primeiro elemento do array
const primeiroElemento = dados.shift();
console.log("Array após shift:", dados);

// 17. join - Criando uma string a partir dos elementos do array
const stringArray = dados.join(" - ");
console.log("String do array:", stringArray);

// 18. reverse - Revertendo a ordem dos elementos do array
const arrayReverso = dados.slice().reverse();
console.log("Array revertido:", arrayReverso);


// 22. fill - Preenchendo elementos do array com um valor
const arrayPreenchido = new Array(5).fill(0); // Preenche com zeros
console.log("Array preenchido:", arrayPreenchido);

// 23. findIndex - Encontrando o índice do primeiro elemento que atende a uma condição
const indicePrimeiroMaiorQueTres = dados.findIndex(elemento => elemento > 3);
console.log("Índice do primeiro número maior que 3:", indicePrimeiroMaiorQueTres);
 */

// tipo data
let anirversario: Date = new Date("2023-12-01 05:00");
console.log(anirversario.toISOString());


// funcoes

function somarNum(x: number,y:number): number {
    return x + y;
}

let result: number = somarNum(2,2)

// funcoes de mutiType

function callPhone(phone: string | number): number | string {
    return phone;
}
console.log(callPhone(21221112));

// funcoes Asincronas

async function getDataBase(id: number): Promise<String | number> {
    return "felip"
}

// insterfaces 

interface Produto {
    readonly id: number,
    // o readonly faz que essa variavel so possar ser atribuida quando instido o obj e nunca depois,  
    // id: number,
    nome: string
}

let arroz2: Produto = {
    id: 1,
    nome: "arroz"
}

// Clases

class Personagem{
    name?: string;// retira a obrigatoriedade de ser recenida(Avisa que não precisa ser recebidada)
    stregth: number;
    skill: number;

    constructor(Forca: number, Abilidade: number,Nome: string){
        this.name = Nome;
        this.stregth= Forca;
        this.skill= Abilidade;
    }

    attack():void {
        console.log(`Attack with ${this.stregth} points`);
    }
        
}

// modificadores de Acesso Public, Private Protected exention

class Magia extends Personagem{
    tipo: string;
    mp: number;

    constructor(Forca: number, Abilidade: number, name: string, Tipo: string){
        super(Forca, Abilidade, name)   
        this.mp = 100
        this.tipo = Tipo
    }
}

const p1 = new Personagem(10, 15,"Ryul")
const p2 = new Magia(12,35,"Foxs","Fire")

 // generics
    // Os três pontinhos (espredi) siguinifica que posso trabalhar com varios itens daquele tipo
 function concatArray<T>(...itens: T[]): T[] {
    return new Array().concat(...itens)
 }

 const numArray = concatArray<number[]>([1,5], [3])
 const stringArray = concatArray<String[]>(["rauner","Lucas"], ["muit"])
 console.log(numArray);
 console.log(stringArray);
 

 //decorators
function ExibirNome(target: any) {
    console.log(target);
}

@ExibirNome
class Funcionario{}

function ApiVersion(version:string){
    return (target:any) => {
        Object.assign(target.prototype, {__version:version})
    }
}


@ApiVersion("1.0")
class Api{}

const apiTeste = new Api();
console.log(apiTeste.__version);


// attribute decorator
function minLength(length:number){
    return (target: any, key: string) => {
        let _value = target[key];
        
        const getter =() => _value;
        const setter =(value: string) => {if (value.length < length) {
            throw new Error(`Tamanho menor do que ${value.length}`);
        }   else {_value = value}
        };

        Object.defineProperty(target, key, {get: getter,set: setter});
    }
}


class Api2{
    @minLength(3)
    name: string;

    constructor(name:string){
        this.name = name;
    }
}

const apiTeste2 = new Api2("produto");
