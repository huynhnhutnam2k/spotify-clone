import React, { useContext } from 'react'
import PlayListContent from '../components/PlayListContent'
import { Songs } from '../Context'
function PlayList() {
  const {song,setSong}  = useContext(Songs)
  return (
    <PlayListContent song={song}
    setSong={setSong}/>
  )
}

export default PlayList