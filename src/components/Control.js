import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Songs } from "../Context";
function Control() {
  const { data, song, setSong } = useContext(Songs);
  const [duration, setDuration] = useState(undefined);
  const [time, setTime] = useState(0);
  const [play, setplay] = useState(true);
  const refSong = useRef(null);
  const refPlay = useRef();
  const refProgress = useRef();
  const x = refSong.current;
  x && console.log(x.volume);
  function formatTimer(number) {
    const minutes = Math.floor(number / 60);
    const seconds = Math.floor(number - minutes * 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  }
  useEffect(() => {
    const b = refPlay.current;
    b && console.log(b.textContent);
    if (x) {
      !play ? x.pause() : x.play();
    }
  }, [play]);
  useEffect(() => {
    const progress = refProgress.current;
    progress.max = duration;
    progress.value = time;
  }, [time]);
  const handlePlay = () => {
    setplay(!play);
  };
  const handleNextSecond = () => {
    x.currentTime = x.currentTime + 10;
  };
  const handleNext = () => {
    const index = data.findIndex((item) => item.url === song);
    const newUrl = data[index + 1].url;
    // console.log(newUrl);
    setSong(newUrl);
  };
  const autoNext = () => {
    if (time === duration) {
      const index = data.findIndex((item) => item.url === song);
      const newUrl = data[index + 1].url;
      // console.log(newUrl);
      setSong(newUrl);
    }
  };
  autoNext();
  x &&
    setInterval(() => {
      setTime(x.currentTime);
    }, 500);
  x &&
    setTimeout(() => {
      setDuration(x.duration);
    }, 100);

  return (
    <ControlStyle>
      <SongDetail>
        <img
          src="https://i.scdn.co/image/ab67616d000048515393c5d3cac806092a9bc468"
          alt=""
        />
        <div className="singer">
          <div className="namesong">
            {data.filter((item) => item.url === song).map((item) => item.name)}
          </div>
          <div className="name">
            {data
              .filter((item) => item.url === song)
              .map((item) => item.author)}
          </div>
        </div>
        <div className="more">
          <div className="">
            <ion-icon name="heart-outline"></ion-icon>
          </div>
          <div className="">
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>
      </SongDetail>
      <ControlMain>
        <div className="button">
          <div className="">
            <ion-icon name="repeat-outline"></ion-icon>
          </div>
          <div className="">
            <ion-icon name="play-skip-back-outline"></ion-icon>
          </div>
          <div className="" onClick={handlePlay} ref={refPlay}>
            <ion-icon name="play-outline"></ion-icon>
          </div>
          <div className="" onClick={handleNextSecond}>
            <ion-icon name="play-skip-forward-outline"></ion-icon>
          </div>
          <div className="" onClick={handleNext}>
            <ion-icon name="git-compare-outline"></ion-icon>
          </div>
        </div>
        <div className="time">
          <div className="current-time">{formatTimer(time)}</div>
          <input
            type="range"
            name=""
            id=""
            value={0}
            min={0}
            ref={refProgress}
          />
          <audio src={song} autoPlay ref={refSong}></audio>
          <div className="duration-time">
            {duration ? formatTimer(duration) : "0:00"}
          </div>
        </div>
      </ControlMain>
      <ControlSup>
        <div className="">
          <ion-icon name="mic-outline"></ion-icon>
        </div>
        <div className="">
          <ion-icon name="options-outline"></ion-icon>
        </div>
        <div className="">
          <ion-icon name="open-outline"></ion-icon>
        </div>
        <div className="">
          <ion-icon name="volume-medium-outline"></ion-icon>
        </div>
        <input type="range" name="" id="" />
      </ControlSup>
    </ControlStyle>
  );
}
const ControlSup = styled.div`
  display: flex;
  gap: 10px;
  /* margin-right: 20px; */
`;
const ControlStyle = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
`;
const ControlMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;

  .button {
    display: flex;
    width: 100%;
    justify-content: center;
    font-size: 20px;
    gap: 30px;
    cursor: pointer;
    margin-bottom: 10px;
  }
  .time {
    display: flex;
    /* vertical-align: center; */
    align-items: center;
    height: 20px;
    input {
      -webkit-appearance: none;
      width: 550px;
      height: 5px;
      background: gray;
      outline: none;
      opacity: 0.7;
      -webkit-transition: 0.2s;
      transition: opacity 0.2s;
    }
    input:before {
      position: absolute;
      content: "";
      width: 0px;
      height: 5px;
      background: #eee;
    }
    input::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #4caf50;
      cursor: pointer;
    }
  }
`;
const SongDetail = styled.div`
  display: flex;
  .singer {
    /* display: flex;
    flex-direction: column;
    justify-content: center; */
    margin: auto 15px;
    .namesong,
    .name {
      width: 100px;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-word;
    }
  }
  .more {
    display: flex;
    margin: auto 0;
    cursor: pointer;
  }
`;

export default Control;
