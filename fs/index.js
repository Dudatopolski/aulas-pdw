import fs from "fs/promises";

async function pegadados() {
    const dados = JSON.parse(await fs.readFile("./people.json"));
    return dados;
}

//pegadados(); 

async function exemploforEach() {
    const dados = await pegadados();

    dados.forEach(function(pessoa){

        const juan = pessoa.name.first;
        const duda = pessoa.name.last;
        const juda = pessoa.dob.age

        console.log (juan,duda,juda + " anos")

    });
    
}
//exemploforEach();

//map é um metodo que vai criar uma nova variavel e armazenas nessa variavel os dados "limpos" ou seja vai conter apenas os dados que vc julgar importante para o contexto. No nosso caso isso sera um array de objeto 

async function exemplomap(){
    const dados = await pegadados();

    const dadosLimpos = dados.map((pessoa) => {
        return {
            "nome": pessoa.name.first,
            "email": pessoa.email
        }
    });
    console.log(dadosLimpos)
}

//exemplomap();

async function exercicio() {
    const dados = await pegadados();

    const juan = dados.map((pessoa) => {
        return{
            "nome": `${pessoa.name.first} ${pessoa.name.last}`,
            "idade": pessoa.dob.age,
            "local": `${pessoa.location.street.name} ${pessoa.location.street.number}`,
            "foto": pessoa.picture.medium
}})

console.log(juan)
}
//exercicio();

//filter vai criar uma nova variavel com base nos dados que correspoderem ao filtro buscado

async function exemplofilter() {
    const dados = await pegadados();

    const pernambucanos = dados.filter((pessoa) => {
        return pessoa.location.this.state == "pernambuco"
    })
    .map((pessoa) => {
        return {
            "genero": pessoa.gender,
            "email": pessoa.email,
            "local": pessoa.location.street
        }
    })
//console.log(pernambucanos);
}
//exemplofilter()

//find ele vai retornar em objetos e nao mais em array esse objeto vai retornar o primeiro dado encontrado que atender ao criterio do filtro

async function exemplofind() {
    const dados = await pegadados();

    const mais70 = dados.find((pessoa) => {
        return pessoa.dob.age > 70.    
    })
    console.log(mais70);

};
//exemplofind()
async function desafio(){
    const dados = await pegadados();

     const juan = dados.map ((pessoa) => {
        return {
            "nome": pessoa.name.first,
            "email": pessoa.email,
            "senha": pessoa.login.password,
            "nome-de-usuario": pessoa.login.username
        }
    })
    .find((pessoa) => {
        return pessoa.email == "zeneide.santos@example.com" && pessoa.senha == "namaste"
        
    })
    console.log(juan);
};
//desafio()

//SOME -> ele vai percorrer todos os dados do array e verificar se algum deles corresponde ao filtro informado. Caso sim ele vai retornar true e caso nao ele vai retornar false

async function SOME() {
    const dados = await pegadados();

    const cidade = dados.some ((pessoa) => {
        return pessoa.location.city == "Sobral"
    })
    console.log(cidade);
}
//SOME()

//EVERY vai ser parecido com o some, porem para retornar um boleano verdadeiro TODOS os dados precisam atender ao criterio passado

async function menorquente() {
    const dados = await pegadados();
    
    const PP = dados.every((pessoa) => {
        return pessoa.nat == "Br"
    })
    console.log(PP) 
}
//menorquente();

//SORT vai permitir voce ordenar os dados baseado no criterio informado
//para o sort, agora voce tera que crisar duas variaveisdentro da sua arrow function

async function SORT() {
    const dados = await pegadados();

    const peça = dados.sort((p1, p2) => {
        return p1.dob.age - p2.dob.age
    })
    .map((pessoa) => {
        return{
            "nome": pessoa.name.first,
            "idade": pessoa.dob.age
        }
      })
    console.log(peça)
}
//SORT();

async function SORT2() {
    const dados = await pegadados();

    const peça1 = dados.sort((p1, p2) => {
        return p1.name.first.localeCompare(p2.name.first)
    })
    .map((pessoa) => {
        return{
            "nome": pessoa.name.first,
            "idade": pessoa.dob.age
        }
      })
    console.log(peça1)
}
//SORT2();

async function menorpeça() {
    const dados = await pegadados();

    const peça1 = dados.sort((p1, p2) => {

        if (p1.name.first.length !== p2.name.first.length) {
         return p1.name.first.length - p2.name.first.length
        }
        return p1.name.first.localeCompare(p2.name.first)
    })
    .map((pessoa) => {
        return{
            "nome": pessoa.name.first,
            "idade": pessoa.dob.age
        }
      })
    console.log(peça1)
}
//menorpeça();

//startwith() é um metodo que vai verificar se a string começa com o valor que foi passada como parametro

async function exemplostart() {
    const dados = await pegadados();

    dados.forEach((pessoa) => {
        if (pessoa.name.first.startstWith("A")) {
            console.log(pessoa.name.first);
        }
    })
}
//exemplostart();

async function exemploEnds() {
    const dados = await pegadados();

    dados.forEach((pessoa) => {
        if (pessoa.name.first.toUppercase().endsWith("a".toUppercase())) {
            console.log(pessoa.name.first);
        }
    })
}
//exemploEnds();

async function exemploincluides() {
    const dados = await pegadados();

    dados.forEach((pessoa) => {
        if (pessoa.name.first.toUppercase().incluides("ma".toUppercase())) {
            console.log(pessoa.name.first);
        }
    })
}
//exemploincluides();