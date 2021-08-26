import React, { useState } from "react";

export default function Cardapio(props) {
    const [classe, setClasse] = useState("escolher-pedido");
    const [quantidade, setQuantidade] = useState("setar-quantidade hidden");
    const [quant, setQuant] = useState(1);

    function selecionarPedido() {
        if(classe === "escolher-pedido") {
            setClasse("escolher-pedido prato-selecionado");
            setQuantidade("setar-quantidade");
        } else {
            setClasse("escolher-pedido");
            setQuantidade("setar-quantidade hidden");
        }
    }

    const {
        srcImagem,
        nome,
        descricao,
        valor
    } = props;

    
    return (
        <div className={classe}>
            <div className="click" onClick={selecionarPedido}>
                <img src={srcImagem} alt="" />
                <h4><strong>{nome}</strong></h4>
                <h5>{descricao}</h5>
            </div>
            <div className="rodape-alimento">
                <p><span>R$ <span className="valor-prato">{valor}</span></span></p>
                <div className={quantidade}>
                    <span className="diminuir-quantidade" onClick={() => (quant > 1 ? (setQuant(quant - 1)) : (setClasse("escolher-pedido"), setQuantidade("setar-quantidade hidden")))}>-</span> <span>{quant}</span> <span onClick={() => setQuant(quant + 1)}><strong> +</strong></span>
                </div>
            </div>              
        </div>
    )
}