import  './styles.css'

import Card from '../../components/Card'

function Home() {
  
  return (
    <div className="container">
   <h1>Lista de presença</h1>
   <input type="text" placeholder="Digite um nome..." />
   <button type="button">Adicionar</button>

   <Card name="Rodrigo" time="10:55:25"/>
   <Card name="João" time="15:25:15"/>
   </div>
  )
}

export default Home
