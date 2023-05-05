let dataCustumers = [ 
    {
        Nome:"Victhor", 
        Telefone:"41999174342",
        Cidade:"Curitiba",
        Estado:"PR"
    },
    {
        Nome:"Rodrigo", 
        Telefone:"999999999",
        Cidade:"Ponta Grossa",
        Estado:"PR"
    },
    {
        Nome:"Loreta", 
        Telefone:"999999999",
        Cidade:"Toledo",
        Estado:"PR"},
    {
        Nome:"Sogra", 
        Telefone:"999999999",
        Cidade:"Cascavel",
        Estado:"PR"}
];


const tabela = document.getElementById("table")
const tbody = document.getElementsByTagName("tbody")[0]

for(let i = 0 ; i < dataCustumers.length ; i ++){
    const linha = document.createElement("tr");
    const nome = document.createElement("td");
    nome.textContent = dataCustumers[i].Nome;
    linha.appendChild(nome);

    tbody.appendChild(linha);
    
    
    const Telefone = document.createElement("td");
    Telefone.textContent = dataCustumers[i].Telefone;
    linha.appendChild(Telefone);

    tbody.appendChild(linha);

    const Cidade = document.createElement("td");
    Cidade.textContent = dataCustumers[i].Cidade;
    linha.appendChild(Cidade);

    tbody.appendChild(linha);

    const Estado = document.createElement("td");
    Estado.textContent = dataCustumers[i].Estado;
    linha.appendChild(Estado);


    const acoes = document.createElement("td");
    const excluirBtn = document.createElement("button");
    const edBtn = document.createElement("button");
    excluirBtn.textContent = "Excluir";
    edBtn.innerHTML = "<img src ='edit.svg' width='15' heighy='20'/>" ;
    acoes.appendChild(excluirBtn);
    acoes.appendChild(edBtn);
    linha.appendChild(acoes);


    tbody.appendChild(linha);}

    
