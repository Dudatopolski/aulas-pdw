import fs from "fs/promises";

async function pegadados() {
    const dados = JSON.parse(await fs.readFile("./people"));
    console.log(dados);
}

pegadados();