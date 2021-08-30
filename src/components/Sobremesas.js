import Cardapio from "../shared/Cardapio";

const sobremesas = [
    {
        srcImagem: "images/pudim.jpg",
        nome: "Pudim",
        descricao: "Sabor original. Tamanho família",
        valor: "20,99"
    },
    {
        srcImagem: "images/bolo.jpeg",
        nome: "Bolo Chocolate",
        descricao: "Recheio: Café - 1 fatia",
        valor: "9,99"
    },
    {
        srcImagem: "images/cupcake.jfif",
        nome: "Cupcake",
        descricao: "Sabor: chocolate - 5 unidades.",
        valor: "23,99"
    },
    {
        srcImagem: "images/cookies.jpeg",
        nome: "Cookies",
        descricao: "5 unidades. Chocolatudo",
        valor: "21,99"
    },
    {
        srcImagem: "images/donuts.jpeg",
        nome: "Donuts",
        descricao: "Sabor: chocolate. 2 unidades",
        valor: "9,99"
    }
];

export default function Sobremesas({ sobremesasSelecionados, setSobremesasSelecionados }) {
    return (
        <div class="escolher-sobremesa">
            <h2>Por fim, sua sobremesa</h2>
            <div class="cardapio">
                {sobremesas.map((sobremesa) => (<Cardapio srcImagem={sobremesa.srcImagem} nome={sobremesa.nome} descricao={sobremesa.descricao} valor={sobremesa.valor}/>))}
            </div>
        </div>
        
    )
}