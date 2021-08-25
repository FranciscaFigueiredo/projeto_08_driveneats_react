import PratosPrincipais from "./PratosPrincipais";
import Bebidas from "./Bebidas";
import Sobremesas from "./Sobremesas";

export default function App() {
    return (
        <>
            <header>
                <div className="logo">
                    <h1>DrivenEats</h1>
                    <h3>Sua comida em 6 minutos</h3>
                </div>
            </header>

            <PratosPrincipais />
            
            <Bebidas />
            
            <Sobremesas />

            <footer>
                <button class="fechar-pedido" type="submit" onclick="confirmarPedido(this);" disabled>Selecione os 3 itens para fechar o pedido</button>
            </footer>
        </>
    )
}