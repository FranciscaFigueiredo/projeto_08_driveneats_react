import Cardapio from "../shared/Cardapio";

const bebidas = [
    {
        srcImagem: "images/tubaina.jpg",
        nome: "Itubaína",
        descricao: "A original. 355ml",
        valor: "2,49"
    },
    {
        srcImagem: "images/dolly.jpg",
        nome: "Dolly 2L",
        descricao: "Dollynho, seu amiguinho",
        valor: "4,49"
    },
    {
        srcImagem: "images/frevo.jpg",
        nome: "Frevo",
        descricao: "Refrescantíssimo 2 Litros",
        valor: "5,99"
    },
    {
        srcImagem: "images/suco-laranja.jfif",
        nome: "Cítricos",
        descricao: "Laranja, limão e maracujá. 200ml",
        valor: "3,99"
    },
    {
        srcImagem: "images/suco-verde.jfif",
        nome: "Suco Verde",
        descricao: "Couve, limão, abacaxi, maça. 200ml",
        valor: "4,99"
    }
];

export default function Bebidas() {
    return (
        <div class="escolher-bebida">
            <h2>Agora, sua bebida</h2>
            <div class="cardapio">
                {bebidas.map((bebida) => (<Cardapio srcImagem={bebida.srcImagem} nome={bebida.nome} descricao={bebida.descricao} valor={bebida.valor}/>))}
            </div>
        </div>
    )
}