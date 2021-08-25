export default function ConfirmarPedido() {
    <div class="confirmar-pedido hidden">
        <div class="card-confirmacao">
            <br/>
            <p><strong>Confirme seu pedido</strong></p>
            <br/>
            <div class="pedido-prato">
                <p class="prato"></p>
                <p class="valor"></p>
            </div>
            <br/>
            <div class="pedido-bebida">
                <p class="bebida"></p>
                <p class="valor"></p>
            </div>
            <br/>
            <div class="pedido-sobremesa">
                <p class="sobremesa"></p>
                <p class="valor"></p>
            </div>
            <br/>
            <div class="total">
                <p><strong>TOTAL</strong></p>
                <p class="valor"></p>
            </div>
            <br/>
            <button class="pedir" onclick="enviarPedido();">Tudo certo, pode pedir!</button>
            <button onclick="fecharCarrinho();">Cancelar</button>
        </div>
    </div>
}