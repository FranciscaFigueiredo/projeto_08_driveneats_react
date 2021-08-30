export default function FazerPedido () {
    return (
        <div className="card-confirmacao">
            <br/>
            <p><strong>Confirme seu pedido</strong></p>
            <br/>
            <div className="pedido-prato">
                <p className="prato"></p>
                <p className="valor"></p>
            </div>
            <br/>
            <div className="pedido-bebida">
                <p className="bebida"></p>
                <p className="valor"></p>
            </div>
            <br/>
            <div className="pedido-sobremesa">
                <p className="sobremesa"></p>
                <p className="valor"></p>
            </div>
            <br/>
            <div className="total">
                <p><strong>TOTAL</strong></p>
                <p className="valor"></p>
            </div>
           <br/>
            <button className="pedir" onclick="enviarPedido();">Tudo certo, pode pedir!</button>
            <button onclick="fecharCarrinho();">Cancelar</button>
        </div>
    )
}