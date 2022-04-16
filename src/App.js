import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Nav from "./components/Nav";
import Control from "./components/Control";
import { Songs } from "./Context";
import data from "./data/songs.json";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PlayList from "./pages/PlayList";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  // useEffect(()=>{
  //   return axios.get('https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?album_type=SINGLE&offset=20&limit=10')
  //   .then(function (response) {
  //     // handle success
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })
  //   .then(function () {
  //     // always executed
  //   });

  // },[])
  const [song, setSong] = useState(null);

  return (
    // console.log();
    <div className="App">
      <Songs.Provider value={{ data, song, setSong }}>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playlist" element={<PlayList />} />
        </Routes>
        <Nav />

        <Control />
      </Songs.Provider>
    </div>
  );
}

export default App;
