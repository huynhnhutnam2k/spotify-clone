import React, { useContext } from 'react'
import styled from 'styled-components'
import { Songs } from '../Context'
import {Link} from 'react-router-dom'
function Content() {
    const {data} = useContext(Songs)
    console.log(data);
  return (
    <ContentStyle>
        <ContentList>
            <p className="title">Lựa chọn của Spotify</p>
            <ContentPlaylist>
                <ContentItem>
                    <img src="https://i.scdn.co/image/ab67706f000000024893d0bdd9babb1bbc1a67c4" alt="" />
                    <p className="name">Hot hit Viet Nam</p>
                    <p className='desc'>Đông tới Tây, đây là những ca khúc thịnh hành nhất ở Việt Nam. Ảnh bìa: Binz</p>
                </ContentItem>
                <ContentItem>
                    <img src="https://i.scdn.co/image/ab67706f000000024893d0bdd9babb1bbc1a67c4" alt="" />
                    <p className="name">Hot hit Viet Nam</p>
                    <p className='desc'>Đông tới Tây, đây là những ca khúc thịnh hành nhất ở Việt Nam. Ảnh bìa: Binz</p>
                </ContentItem>
                <ContentItem>
                    <img src="https://i.scdn.co/image/ab67706f000000024893d0bdd9babb1bbc1a67c4" alt="" />
                    <p className="name">Hot hit Viet Nam</p>
                    <p className='desc'>Đông tới Tây, đây là những ca khúc thịnh hành nhất ở Việt Nam. Ảnh bìa: Binz</p>
                </ContentItem>
                <ContentItem>
                    <img src="https://i.scdn.co/image/ab67706f000000024893d0bdd9babb1bbc1a67c4" alt="" />
                    <p className="name">Hot hit Viet Nam</p>
                    <p className='desc'>Đông tới Tây, đây là những ca khúc thịnh hành nhất ở Việt Nam. Ảnh bìa: Binz</p>
                </ContentItem>
                <ContentItem>
                    <img src="https://i.scdn.co/image/ab67706f000000024893d0bdd9babb1bbc1a67c4" alt="" />
                    <p className="name">Hot hit Viet Nam</p>
                    <p className='desc'>Đông tới Tây, đây là những ca khúc thịnh hành nhất ở Việt Nam. Ảnh bìa: Binz</p>
                </ContentItem>
                <ContentItem>
                    <img src="https://i.scdn.co/image/ab67706f000000024893d0bdd9babb1bbc1a67c4" alt="" />
                    <p className="name">Hot hit Viet Nam</p>
                    <p className='desc'>Đông tới Tây, đây là những ca khúc thịnh hành nhất ở Việt Nam. Ảnh bìa: Binz</p>
                </ContentItem>
                
            </ContentPlaylist>
        </ContentList>
        
        <ContentList>
            <p className="title">Da phat gan day</p>
            <ContentPlaylist>
                <ContentItem>
                    <img src="https://daily-mix.scdn.co/covers/time-capsule/time-capsule-blue_DEFAULT-en.jpg" alt="" />
                    <Link to='/playlist' className="name">Your time</Link>
                    <p className='desc'>Chúng tôi đã tạo cho bạn một danh sách phát cho riêng bạn gồm các bài hát giúp sống lại ký ức xưa.</p>
                </ContentItem>
            </ContentPlaylist>
        </ContentList>
    </ContentStyle>
  )
}
const ContentStyle = styled.div`
    position: relative;
    top: 0;
    left: 241px;
    /* background-color: yellow; */
    background-color: #121212;
    width: 100%;
    /* height: 100%; */
    padding: 30px;
    
`
const ContentList = styled.div`
    display: flex;
    margin-bottom: 30px;
    flex-direction: column;
    .title{
        margin-top: 0;
        text-align: left;
        color: white;
        font-size: 25px;
    }
`
const ContentPlaylist = styled.div`
        /* --columns: 6; */
        /* --gap: 10px; */
        display: flex;
        gap: 25px;
  
`
const ContentItem = styled.div`
    /* padding: 10px; */
    height: 260px;
    width: 185px;
    /* border: 1px solid white;
     */
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    color: white;
    border-radius: 4px;
    img{
        width: 153px;
        margin-top: 10px;
        height: 153px;
        object-fit: cover;
        border-radius: 4px;
    }
    .desc{
        display:-webkit-box;
        -webkit-line-clamp:2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-word;
        text-align: left;
        margin-left: 15px;
        color: gray;
    }
    .name{
        text-align: left;
        margin-left: 15px;
        color:white;
        display: block;
        margin-top: 10px;
    }
`
export default Content