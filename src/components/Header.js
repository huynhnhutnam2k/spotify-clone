import React from 'react'
import styled from 'styled-components'
function Header() {
  return (
    <HeaderContent>
        <ListIcon>
            <Icon><ion-icon name="chevron-back-outline"></ion-icon></Icon>
            <Icon><ion-icon name="chevron-forward-outline"></ion-icon></Icon>
        </ListIcon>
        <ListButton>
            <a href="#">sign up</a>
            <a href="#" className='login'>log in</a>
        </ListButton>
    </HeaderContent>
  )
}

const HeaderContent = styled.div`
    
    position: fixed;
    top: 0;
    left: 241px;
    /* background-color: rgb(83, 83, 83);
     */
    background-color: black;
    width:calc(100% - 241px);
    display:flex;
    justify-content: space-between;
    height: 80px;
    align-items: center;
    z-index: 10;
`
const ListIcon = styled.div`
    display: flex;
    margin-left: 30px;
`
const Icon = styled.div`
    /* padding: 0 10px; */
    color:white;
    font-size: 20px;
    cursor: pointer;
    background: black;
    width: 40px;
    height: 40px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
`
const ListButton = styled.div`
    display: flex;
    margin-right: 10px;
    a{
        width: 100px;
        height: 50px;
        background-color: black;
        padding:0 10px;
        color:white;
        border-radius: 30px;
        margin-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
    }
    .login{
        background-color: white;
        color: black;
    }
`
export default Header