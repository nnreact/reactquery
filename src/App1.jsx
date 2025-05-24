import { useQuery } from '@tanstack/react-query'
import React from 'react'

function App() {

  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: () =>{
        return fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json())
    },
    staleTime: 1000 * 10,
    // refetchOnWindowFocus: true,
    // refetchOnMount: true,
    // refetchOnReconnect: true,
    // refetchInterval: 1000 ,
    // refetchIntervalInBackground: true,
  });

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      {data.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
}

export default App
