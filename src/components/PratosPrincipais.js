import React, { useState } from "react";

import Cardapio from "../shared/Cardapio";

const pratos = [
    {
        srcImagem: "images/ratatouille.jpg",
        nome: "Ratatouille",
        descricao: "Veja as verduras com outro olhar",
        valor: "29,99"
    },
    {
        srcImagem: "images/comida-caseira.jpg",
        nome: "Prato Caseiro",
        descricao: "Gostinho caseiro, produtos naturais",
        valor: "14,99"
    },
    {
        srcImagem: "images/lasanha.jpg",
        nome: "Lasanha p/2",
        descricao: "Muito queijo e molho especial",
        valor: "24,99"
    },
    {
        srcImagem: "images/lasanha.jpg",
        nome: "Lasanha p/4",
        descricao: "Muito queijo e molho especial",
        valor: "39,99"
    },
    {
        srcImagem: "images/lamen.jpg",
        nome: "Lámen",
        descricao: "O Japão na sua mesa",
        valor: "19,99"
    }
];

export default function PratosPrincipais() {
    const [ pratosSelecionados, setPratosSelecionados ] = useState([]);
    console.log(pratosSelecionados);
    function listarPedido(produto) {
        console.log(produto);
        console.log(pratosSelecionados);

        setPratosSelecionados([...pratosSelecionados, produto]);
    }

    function removerPedido(produto) {
        console.log(produto);
        setPratosSelecionados(pratosSelecionados.filter((prod) => prod === produto));
    }

    return (
        <div className="prato-principal">
            <h2>Primeiro, Seu prato</h2>
            <div class="cardapio">
                {pratos.map((prato, index) => (<Cardapio key={index} srcImagem={prato.srcImagem} nome={prato.nome} descricao={prato.descricao} valor={prato.valor} listarPedido = {listarPedido} removerPedido = {removerPedido} />))}
            </div>
        </div>
    );
}