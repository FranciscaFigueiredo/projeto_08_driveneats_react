export default function Cardapio(props) {
    const {
        srcImagem,
        nome,
        descricao,
        valor
    } = props;
    
    return (
        <div class="escolher-pedido" onclick="selecionarPrato(this);">
            <img src={srcImagem} alt="" />
            <h4><strong>{nome}</strong></h4>
            <h5>{descricao}</h5>
            <p>R$ <span class="valor-prato">{valor}</span></p>
            <div class="icone">
                <ion-icon name='checkmark-circle'></ion-icon>
            </div>                
        </div>
    )
}