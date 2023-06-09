import React from 'react'
import { Link } from 'react-router-dom'
import { SmallImage } from '../util'


// styling and animation
import styled from "styled-components"
import { motion } from "framer-motion"

// redux
import { useDispatch } from 'react-redux'
import { LoadDetails } from '../actions/detailAction'


const Game = ({ name, released, image, id }) => {
  const stringPathId = id.toString();
  const dispatch = useDispatch();
  const LoadDetailHandler = () => {
    dispatch(LoadDetails(id));
    document.body.style.overflow = 'hidden'
  }

  return (
    <>
      <StyledGame onClick={LoadDetailHandler} layoutId = {stringPathId}>
        <Link to={`/game/${id}`}>
          <h3>{name}</h3>
          <p>{released}</p>
          <img src={image} alt={name} />
        </Link>
      </StyledGame>
    </>
  )
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img{
      width: 100%;
      height: 40vh;
      object-fit: cover;
  }

  
  
`

export default Game