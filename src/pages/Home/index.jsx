import  './styles.css'

import Card from '../../components/Card'

function Home() {
  
  return (
    <div className="container">
   <h1>Lista de presença</h1>
   <input type="text" placeholder="Digite um nome..." />
   <button type="button">Adicionar</button>
   
   <Card />
   </div>
  )
}

export default Home
