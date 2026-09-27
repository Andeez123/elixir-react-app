import {useEffect, useState} from 'react'
import axios from 'axios'

export function Home() {
    const apiUrl = import.meta.env.VITE_API_URL
    const [message, setMessage] = useState('');
    useEffect(() => {
        axios.get(`${apiUrl}/api/hello`).then(response => {
            console.log(response.data)
            setMessage(response.data.message)
        }).catch(error => {
            console.error('Error fetching data:', error)
        });
    }, []);

  return (
    <div>
      <p>{message}</p>
    </div>
  )
}