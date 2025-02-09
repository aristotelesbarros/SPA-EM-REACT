import { Link } from "react-router-dom"
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
              
              
              <Link to={`/products/${product.id}`}>  
                <button>Ver</button>
              </Link> 
              <button>Comprar</button> 
            </li> /* acima tire os link entre os botao ver para que ele fique bem alinhado, porem a nova funçao de rota nao ira funcionar
            , temos que arrumar isso*/ 
            
          ))}
        </ul>
      </section>
    </section>
  )
}
