import React, { useState } from "react";

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

export default function Bebidas({ bebidasPedidas, setBebidasPedidas, habilitarBotao }) {

    const [ bebidasSelecionadas, setBebidasSelecionadas ] = useState([]);
    console.log(bebidasSelecionadas);
    function listarPedido(produto) {
        console.log(produto);
        console.log(bebidasSelecionadas);
        if (!(bebidasSelecionadas.find((prod) => (prod.nome === produto.nome)))) {
            setBebidasSelecionadas([...bebidasSelecionadas, produto]);
        }
        
    }

    function removerPedido(produto) {
        console.log(produto);
        console.log(bebidasSelecionadas);
        setBebidasSelecionadas(bebidasSelecionadas.filter((prod) => prod.nome !== produto.nome));
    }
    modificarEstado()
    
    function modificarEstado() {
        habilitarBotao();
        setBebidasPedidas(bebidasSelecionadas);
    }

    return (
        <div className="escolher-bebida">
            <h2>Agora, sua bebida</h2>
            <div className="cardapio">
                {bebidas.map((bebida, index) => (<Cardapio key={index} srcImagem={bebida.srcImagem} nome={bebida.nome} descricao={bebida.descricao} valor={bebida.valor} listarPedido = {listarPedido} removerPedido = {removerPedido} />))}
            </div>
        </div>
    )
}