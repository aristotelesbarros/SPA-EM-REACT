export default function Home() {
  return (
    <section className="container">
     
      <h2>Seja bem-vindo(a) à nossa loja.</h2>

      <div className="cards-container">
        <div className="card">  
          <h3>Sobre a Loja</h3>
          <p>Bem-vindo à nossa loja! Aqui você encontra os melhores jogos com preços incríveis.</p>
        </div>
        <div className="card">
          <h3>Contato</h3>
          <p>Tem dúvidas? Entre em contato pelo e-mail suporte@lojagames.com ou pelo WhatsApp (99) 99999-9999.</p>
        </div>
      </div>

      <div className="cards-container">
        <div className="card">
          <h3>Suporte</h3>
          <p>Nosso suporte está disponível 24h para ajudá-lo em qualquer problema relacionado às compras.</p>
        </div>
        <div className="card">
          <h3>Entrega</h3>
          <p>Receba seus jogos de forma digital imediatamente após a compra. Rápido e seguro!</p>
        </div>
      </div>

      <div className="payment-card">
        <h3>Formas de Pagamento</h3>
        <p>Aceitamos cartões de crédito, boleto, Pix e PayPal para sua maior comodidade.</p>
      </div>
    </section>
  )
}
