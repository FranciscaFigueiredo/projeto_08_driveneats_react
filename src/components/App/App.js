import { useState } from "react";

import "./app.css"

import PratosPrincipais from "../PratosPrincipais";
import Bebidas from "../Bebidas";
import Sobremesas from "../Sobremesas";
import Rodape from "../Footer/Rodape";

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
        p();
        b();
        s();

        pedido.map((item) => (pedir += `${item.nome}  *(${item.quant}x)*\n`))
        pedido.forEach((item) => {
            valorTotal += Number((item.valor).replace(',', '.')) * item.quant;
        });
        valorTotal = valorTotal.toFixed(2);
        let linkEnvioWhats = encodeURIComponent((`*Pedido:*\n${pedir}*Total:* ${valorTotal}`))
        
        //link para envio direto no WhatsApp com número fake
        window.location.href = "https://wa.me/1111111111111?text=" + linkEnvioWhats;
    }

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