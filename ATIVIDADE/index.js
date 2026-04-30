import fs from "fs/promises"; 

async function pegadados() {
    const dados = JSON.parse(await fs.readFile("./times.json"));
    //console.log(dados);
    return dados;
   
}
pegadados();

async function times() {
    const dados = await pegadados();

    dados.forEach(function(time) {
        const nome = time.nome
        console.log(nome);
    })
}
//times();

async function iniciados() {
    const dados = await pegadados();

    dados.forEach((time) => {
        if(time.detalhes.nome_oficial.startsWith("S")) {
            console.log(time.detalhes.nome_oficial);
        }
    })
} 
//iniciados();

async function estadios() {
    const dados = await pegadados();
    const ordemLetra = dados.sort((t1, t2) => {
        if(t1.detalhes.estadio.nome.length !== t2.detalhes.estadio.nome.length) {
            return t1.detalhes.estadio.nome.length - t2.detalhes.estadio.nome.length
        }
        return t1.detalhes.estadio.nome.localeCompare(t2.detalhes.estadio.nome)
    })

    .map((time) => {
        return {
            "nome": time.detalhes.estadio.nome
            
        }
    });
    console.log(ordemLetra);
}
estadios();

async function local() {
    const dados = await pegadados();

    const saopaulo = dados.filter((time) => {
        return time.detalhes.localizacao.estado == "SP"
    })
    .map((time) =>{
        return {
          "nomeestadio": time.detalhes.estadio.nome,
          "capacidade": time.detalhes.estadio.capacidade,
          "cidade": time.detalhes.localizacao.cidade
        }
    });
    console.log(saopaulo);
}
//local();

async function RS() {
    const dados = await pegadados();

    const picota = dados.filter((time) => {
        return time.detalhes.localizacao.estado == "RS"
    })
}