import {supabase} from "../Components/Profile/supabaseClient";
import Nav from "../Components/Nav/Nav";
import {useEffect, useState} from 'react'

const Home = () => {
  const [fetchError, setFetchError] = useState(null)
  const [ArrayCryto, setArrCrypto]= useState(null)

  useEffect( () => {
    const fetchCrypto = async () => {
      const { data, error}= await supabase
      .from('cryptocurrency')
      .select('*')

      if (error){
        setFetchError('Could not fetch the list of cryptocurrencies')
        setArrCrypto(null)
      }
      if (data) {
        setArrCrypto(data)
        setFetchError(null)
        
      }
    }
    fetchCrypto()
    
  }
  
  )

  return (
    <div className="page home">
      <Nav></Nav>
      <h2>Crypto Web App</h2>
      {fetchError && (<h2>{fetchError}</h2>)}

      {ArrayCryto && (
      <div className="crypto">
           {ArrayCryto.map(crypto => (
            <h1>{crypto.name}</h1>
           ))}
      </div>
      
      )}




    </div>
  )
}

export default Home