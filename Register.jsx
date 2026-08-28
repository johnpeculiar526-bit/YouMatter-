import { useState } from 'react'
import { supabase } from '../supabaseClient'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSignup(e) {
    e.preventDefault()
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: { name: name }
      }
    })
    if (error) alert(error.message)
    else alert('Check your email to confirm!')
  }

  return (
    <form onSubmit={handleSignup}>
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required 
      />
      <button type="submit">Sign Up</button>
    </form>
  )
}
