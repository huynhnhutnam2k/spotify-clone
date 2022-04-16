import React from 'react'
import Content from '../components/Content'
function Home({song,setSong}) {
  return (
    <Content song={song}
    setSong={setSong}/>
  )
}

export default Home