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

const tabela = document.getElementById("table");
const tbody = document.getElementsByTagName("tbody")[0];

dataCustumers.map((item) => {
    const row = tbody.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    const cell3 = row.insertCell();
    const cell4 = row.insertCell();
    const cell5 = row.insertCell();
    cell1.innerHTML = item.Nome;
    cell2.innerHTML = item.Telefone;
    cell3.innerHTML = item.Cidade;
    cell4.innerHTML = item.Estado;
    const btn = document.createElement("button");
    btn.textContent = "Exluir";
    btn.addEventListener("click", () => {
        if (confirm("Tem certeza que deseja excluir?")){
            const row = btn.closest("tr");
            row.remove();
        }
    });
cell5.appendChild(btn);
}
);

let btnAnterior = document.getElementById("btn-anterior");
btnAnterior.addEventListener("click", emiteAlerta);
let btnProximo = document.getElementById("btn-proximo");
btnProximo.addEventListener("click", emiteAlerta);

function emiteAlerta(){

    alert("burro pra caralho");

};