import products from "../database.json"


export default function Products() {
  return (
    <section>
      
      <h2>Confira todas as nossas ofertas.</h2>

      <section className="products">
        <h3>Jogos</h3>
        <ul>
          {products.map((product) => (
            <li key={product.id} className="product-card">
              <h4>{product.nome}</h4>
              <img src={product.imagem} alt={product.nome} className="product-image" />
              <p>R${product.preco}</p>
              <button>Ver</button>
              <button>Comprar</button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}
