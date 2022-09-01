import { useState, useEffect } from 'react'

import  './styles.css'

import Card from '../../components/Card'

function Home() {

  const [studentName, setStudentName] = useState('')
  const [students, setStudents] = useState([])
  const [user, setUser] = useState({ name: '', avatar: '' })

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    }

    setStudents( prevState => [...prevState, newStudent])
  }

  useEffect(() => {
    // corpo do useEffect
    async function fetchData() {
      const resp = await fetch('https://api.github.com/users/juliuscaezarff')
      const data = await resp.json()
    
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      })
    }
    
    fetchData()
  }, [])
  
  return (
    <div className="container">
      <header>
      <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil" />
        </div>
      </header>
      <input type="text" 
      placeholder="Digite um nome..." 
      onChange={(e) => setStudentName(e.target.value)}
      />
      <button onClick={handleAddStudent} type="button">Adicionar</button>

   
    {students.map((student) => (
      <Card 
      key={student.time}
      name={student.name} 
      time={student.time}
      />
    ) )}
   
   
   </div>
  )
}

export default Home
