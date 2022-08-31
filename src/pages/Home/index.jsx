import { useState } from 'react'

import  './styles.css'

import Card from '../../components/Card'

function Home() {

  const [studentName, setStudentName] = useState('')
  const [students, setStudents] = useState([])
  
  return (
    <div className="container">
   <h1>Lista de Presença</h1>
   <input type="text" 
   placeholder="Digite um nome..." 
   onChange={(e) => setStudentName(e.target.value)}
   />
   <button type="button">Adicionar</button>

   
    {students.map((student) => (
      <Card name={student.name} time={student.time}/>
    ) )}
   
   
   </div>
  )
}

export default Home
