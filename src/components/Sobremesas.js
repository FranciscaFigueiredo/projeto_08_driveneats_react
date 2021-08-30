import React, { useState } from "react";

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

export default function Sobremesas({sobremesasPedidas, setSobremesasPedidas, habilitarBotao }) {

    const [ sobremesasSelecionadas, setSobremesasSelecionadas ] = useState([]);
    
    function listarPedido(produto) {
        if (!(sobremesasSelecionadas.find((prod) => (prod.nome === produto.nome)))) {
            setSobremesasSelecionadas([...sobremesasSelecionadas, produto]);
        }
    }

    function aumentarQuantidade(produto) {
        if (sobremesasSelecionadas.find((prod) => (prod.nome === produto.nome))){
            sobremesasSelecionadas.find((prod) => {
                if (prod.nome === produto.nome) {
                    prod.quant = produto.quant + 1;
                }
            })
        }
    }

    function removerPedido(produto) {
        setSobremesasSelecionadas(sobremesasSelecionadas.filter((prod) => prod.nome !== produto.nome));
    }

    modificarEstado()
    
    function modificarEstado() {
        habilitarBotao();
        setSobremesasPedidas(sobremesasSelecionadas);
    }

    return (
        <div className="escolher-sobremesa">
            <h2>Por fim, sua sobremesa</h2>
            <div className="cardapio">
                {sobremesas.map((sobremesa, index) => (<Cardapio key={index} srcImagem={sobremesa.srcImagem} nome={sobremesa.nome} descricao={sobremesa.descricao} valor={sobremesa.valor} listarPedido = {listarPedido} removerPedido = {removerPedido} aumentarQuantidade = {aumentarQuantidade} />))}
            </div>
        </div>
        
    )
}