import "./rodape.css";

export default function Rodape({ habilitar, fazerPedido }) {
    if (habilitar === "enable") {
        return (
            <footer>
                <button className="fechar-pedido botao-ativo" type="submit" onClick={fazerPedido} >Fechar Pedido</button>
            </footer>
        );
    }

    return (
        <footer>
            <button className="fechar-pedido" type="submit" onClick={fazerPedido} disabled >Selecione os 3 itens para fechar o pedido</button>
        </footer>
    );    
}