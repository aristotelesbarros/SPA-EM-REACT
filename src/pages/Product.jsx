import { Link, useParams } from "react-router-dom"
import products from "../database.json"

export default function Product() {
  const { productId } = useParams()

  const product = products.find(p => p.id === +productId)

  if (!product) {
    return (
      <h2>Oops... Esse produto não foi encontrado =(</h2>
    )
  }

  return (
    <section>
      <Link to="/products">
        <button>Voltar</button>
      </Link>
      <h2>{product.nome}</h2>
      <p>{product.descricao}</p>
      <p>R$ {product.preco}</p>
      <button>Comprar</button>
    </section>
  )
}