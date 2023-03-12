import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Logo from "../img/Logo.svg"
import { FetchSearch } from '../actions/gamesAction'
import {useDispatch} from "react-redux"
 
const Nav = () => {
    const dispatch = useDispatch();
    const [textInput , setTextInput] = useState("");

    const inputHandler = (e) =>{
           setTextInput(e.target.value)
    }

    const submitSearch = (e) =>{
        e.preventDefault();
        dispatch(FetchSearch(textInput))
        setTextInput("");
    }

    const clearSearch = () =>{
        dispatch({
            type: "CLEAR_SEARCHED"
        })
    }
    return (
        <>
            <StyledNav>
                <LogoA onClick={clearSearch}>
                    <img src={Logo} alt="" />
                    <h1>Ignite</h1>
                </LogoA>
                <form className="search">
                    <input value = {textInput} type="text" onChange={inputHandler} placeholder="type any game..." />
                    <button type='submit' onClick={submitSearch}>Search</button>
                </form>
            </StyledNav>
        </>
    )
}

const StyledNav = styled(motion.nav)`
padding: 3rem 5rem;
text-align: center;
input{
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0 0 30px rgba(0,0,0,0.2);
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
}

button{
       font-size: 1.5rem;
       border: none;
       padding: 0.5rem 2rem;
       cursor: pointer;
       background: #ff7676;
       color: white;
   
       cursor: pointer;
      
   }

`

const LogoA = styled(motion.div)`
   display: flex;
   justify-content: center;
   cursor: pointer;
   img{
           height: 2rem;
           width: 2rem;
       }
`

export default Nav