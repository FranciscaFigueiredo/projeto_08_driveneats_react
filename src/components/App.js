import { useState } from "react";

import PratosPrincipais from "./PratosPrincipais";
import Bebidas from "./Bebidas";
import Sobremesas from "./Sobremesas";

export default function App() {

    // let valorTotal = 0;

    // const pratosSelecionados = [];
    // const bebidasSelecionados = [];
    // const sobremesasSelecionados = [];

    // const { pratosSelecionados, setPratosSelecionados } = useState([]);
    const { bebidasSelecionados, setBebidasSelecionados } = useState([]);
    const { sobremesasSelecionados, setSobremesasSelecionados } = useState([]);

    // function listarPedido(produto) {
    //     console.log(produto);
    //     console.log(pratosSelecionados);
    //     // setPratosSelecionados([...pratosSelecionados, produto]);
    // }

    // function removerPedido(produto) {
    //     console.log(produto);
    //     // setPratosSelecionados(pratosSelecionados.filter((prod) => prod === produto));
    // }

    function imprimir() {
        console.log(imprimir)
    }

    return (
        <>
            <header>
                <div className="logo">
                    <h1>DrivenEats</h1>
                    <h3>Sua comida em 6 minutos</h3>
                </div>
            </header>

            <PratosPrincipais />
            
            <Bebidas bebidasSelecionados = {bebidasSelecionados} setBebidasSelecionados = {setBebidasSelecionados} />
            
            <Sobremesas sobremesasSelecionados = {sobremesasSelecionados} setSobremesasSelecionados = {setSobremesasSelecionados} />

            <footer>
                <button class="fechar-pedido" type="submit" onClick={imprimir} disabled>Selecione os 3 itens para fechar o pedido</button>
            </footer>
        </>
    )
}