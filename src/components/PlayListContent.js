import React, { useContext, useRef } from "react";
import styled from "styled-components";
import { Songs } from "../Context";
function PlayListContent() {
  const { data, song, setSong } = useContext(Songs);
  const refTimeDisplay = useRef();
  return (
    <PlayListStyle>
      <Banner>
        <div className="content">
          <div className="subcontent">
            <img
              src="https://mosaic.scdn.co/300/ab67616d0000b2730ac09baba508700ed0b5d4e3ab67616d0000b273501e021bc6b314f504e78bbdab67616d0000b2735a85b345cb9461f3aa400dc1ab67616d0000b273e7c076e33f37083bf0d027a9"
              alt=""
              className=""
            />
            <div className="flex-dir">
              <p className="">PLAYLIST</p>
              <p className="title">My Playlist#1</p>
              <p>Bai hat</p>
            </div>
          </div>
        </div>
      </Banner>
      <Content>
        <div className="button">
          <div className="primary">
            <ion-icon name="pause-outline"></ion-icon>
          </div>
          <div className="">
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Tiêu đề</th>
              <th>Album</th>
              <th>Ngày theme</th>
              <th>
                <ion-icon name="alarm-outline"></ion-icon>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr>
                <td>{index}</td>
                <td className="title">
                  <img src={item.links.images[0].url} alt="" className="" />
                  <div className="more">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setSong(item.url);
                      }}
                    >
                      {item.name}
                    </a>
                    <a href="#">{item.author}</a>
                  </div>
                </td>
                <td>Hãy trao cho anh</td>
                <td>2021</td>
                <td>
                  {refTimeDisplay.current && refTimeDisplay.current.duration}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
    </PlayListStyle>
  );
}
const Content = styled.div`
  /* margin-top: 10px; */
  padding: 30px;
  background-color: #121419;
  color: white;
  .button {
    display: flex;
    gap: 20px;
    align-items: center;
    margin-bottom: 20px;
    margin-left: 10px;
    cursor: pointer;
    .primary {
      width: 40px;
      height: 40px;
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: #20e3b2;
    }
  }

  table {
    width: 100%;
    th {
      height: 32px;
      text-align: left;
    }
    td {
      text-align: left;
      height: 56px;
    }
    .title {
      display: flex;
      img {
        width: 40px;
        height: 40px;
        object-fit: cover;
      }
      .more {
        /* display: block; */
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: 20px;
        a {
          color: white;
        }
        a:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
const PlayListStyle = styled.div`
  position: relative;
  top: 0;
  left: 241px;
  width: 100%;
  width: calc(100% - 241px);
`;
const Banner = styled.div`
  background-color: #1b202e;
  height: 340px;
  padding: 0 30px;
  /* padding-bottom: 20px; */
  .content {
    position: absolute;
    top: 80px;
    left: 30px;
  }
  .subcontent {
    display: flex;
    height: 250px;
    img {
      width: 232px;
      height: 232px;
      object-fit: cover;
    }
    .flex-dir {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      color: white;
      margin-left: 20px;
      text-align: left;
      .title {
        font-size: 50px;
        font-weight: bold;
        /* margin-left: 30px;   */
      }
    }
  }
`;
export default PlayListContent;
