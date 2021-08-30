import { useState } from "react";

import PratosPrincipais from "./PratosPrincipais";
import Bebidas from "./Bebidas";
import Sobremesas from "./Sobremesas";
import Rodape from "./Rodape";
import FazerPedido from "./FazerPedido";

export default function App() {

    let valorTotal = 0;
    const [ pedido, setPedido ] =  useState([]);
    let pedir = "";
    const [ habilitar, setHabilitar ] = useState("disabled");
    const [ pratosPedidos, setPratosPedidos ] = useState([]);
    const [ bebidasPedidas, setBebidasPedidas ] = useState([]);
    const [ sobremesasPedidas, setSobremesasPedidas] = useState([]);



    function habilitarBotao() {
        if (pratosPedidos.length > 0 && bebidasPedidas.length > 0 && sobremesasPedidas.length > 0) {
            console.log(pratosPedidos)
            setHabilitar("enable");
        } else {
            setHabilitar("disable");
        }
    }

    function p () {
        pratosPedidos.forEach((prato) => {
            pedido.push(prato)
        });
    }
    function b () {
        bebidasPedidas.forEach((bebida) => {
            pedido.push(bebida)
        });
    }
    function s () {
        sobremesasPedidas.forEach((sobremesa) => {
            pedido.push(sobremesa)
        });
    }

    function fazerPedido() {
        console.log("enable");
        p();
        b();
        s();

        console.log(pedido.map((item) => (item.nome + "\n")))
        pedido.map((item) => (pedir += `${item.nome}  *(${item.quant}x)*\n`))
        pedido.forEach((item) => {
            valorTotal += Number((item.valor).replace(',', '.'));
        });
        let linkEnvioWhats = encodeURIComponent((`*Pedido:*\n${pedir}*Total:* ${valorTotal}`))
        
        console.log(linkEnvioWhats);
        //link para envio direto no WhatsApp com número fake
        window.location.href = "https://wa.me/1111111111111?text=" + linkEnvioWhats;
    }
    console.log(pedido)

    return (
        <>
            <header>
                <div className="logo">
                    <h1>DrivenEats</h1>
                    <h3>Sua comida em 6 minutos</h3>
                </div>
            </header>

            <PratosPrincipais pratosPedidos = {pratosPedidos} setPratosPedidos = {setPratosPedidos} habilitarBotao = {habilitarBotao} />
            
            <Bebidas bebidasPedidas = {bebidasPedidas} setBebidasPedidas = {setBebidasPedidas} habilitarBotao = {habilitarBotao} />
            
            <Sobremesas sobremesasPedidas = {sobremesasPedidas} setSobremesasPedidas = {setSobremesasPedidas} habilitarBotao = {habilitarBotao} />

            <Rodape habilitar = {habilitar} fazerPedido = {fazerPedido} />
        </>
    )
}