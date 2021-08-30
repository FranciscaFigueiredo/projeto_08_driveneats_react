import React, { useState } from "react";
// listarPedido, removerPedido
export default function Cardapio({ index, srcImagem, nome, descricao, valor, listarPedido, removerPedido }) {
    const [classe, setClasse] = useState("escolher-pedido");
    const [quantidade, setQuantidade] = useState("setar-quantidade hidden");
    const [quant, setQuant] = useState(1);

    let produto = {
        nome,
        valor,
        quant
    }

    function selecionarPedido() {
        if(classe === "escolher-pedido") {
            setClasse("escolher-pedido prato-selecionado");
            setQuantidade("setar-quantidade");
            listarPedido(produto)
            // setPratosSelecionados([...pratosSelecionados, {
            //     nome,
            //     valor
            // }]),
            // console.log(pratosSelecionados)
        } else {
            setClasse("escolher-pedido");
            setQuantidade("setar-quantidade hidden");
            setQuant(1);
            removerPedido(produto)
        }
    }

    return (
        <div className={classe} key={index} >
            <div className="click" onClick={selecionarPedido}>
                <img src={srcImagem} alt="" />
                <h4><strong>{nome}</strong></h4>
                <h5>{descricao}</h5>
            </div>
            <div className="rodape-alimento">
                <p><span>R$ <span className="valor-prato">{valor}</span></span></p>
                <div className={quantidade}>
                    <span className="diminuir-quantidade" onClick={() => (quant > 1 ? (setQuant(quant - 1)) : (setClasse("escolher-pedido"), setQuantidade("setar-quantidade hidden")))}>-</span> <span>{quant}</span> <span onClick={() => (setQuant(quant + 1))}><strong> +</strong></span>
                </div>
            </div>              
        </div>
    )
}