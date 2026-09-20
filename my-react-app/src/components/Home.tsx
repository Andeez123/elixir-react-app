import {useEffect, useState} from 'react'
import axios from 'axios'

export function Home() {
    const [message, setMessage] = useState('');
    useEffect(() => {
        axios.get('http://127.0.0.1:4000/hello').then(response => {
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