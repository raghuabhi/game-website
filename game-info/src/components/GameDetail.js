import React from 'react'

//redux
import { useSelector } from 'react-redux'


// styling and animation
import styled from "styled-components"
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom';


// star image
import StarE from "../img/StarE.png"
import StarF from "../img/StarF.png"

const GameDetail = ({ pathId }) => {
  const navigate = useNavigate();
  // exit detail

  const exitHandler = (e) =>{
         const elementA = e.target;
           if(elementA.classList.contains('shadow')){
             document.body.style.overflow = 'auto'
             navigate("/")
           }
         console.log(elementA);
       
  }

 


  const { game, screen, isLoading } = useSelector((state) => state.detail);

   // star logic
   const getStars = () =>{
     const stars = [];
     const rating = Math.floor(game.rating);
     for(let i=1;i<=5;i++){
       if(i<=rating){
         stars.push(<img key={i} alt="star" src={StarF}></img>)
       }else{
        stars.push(<img key={i} alt="star" src={StarE}></img>)
       }
     }
     return stars;
   }
  return (
    <>
      {!isLoading && (
        <CardShadow className='shadow' onClick={exitHandler}>
          <Detail layout = {pathId}>
            <Stats>
              <div className="rating">
                <h3>{game.name}</h3>
                <p>Rating: {game.rating}</p>
                {getStars()}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                    { game.platforms.map((data) => (
                  <h3 key={data.platform.id}>{data.platform.name}</h3>
                ))}   
                </Platforms>
              </Info>
            </Stats>

            <Media>
              <img src={game.background_image} />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
                { screen.results.map((data) => (
              <img src={data.image} key={data.id} />
            ))}   
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  )
}

const CardShadow = styled(motion.div)`
width: 100%;
min-height: 100vh;
overflow-y: scroll;
background: rgba(0,0,0,0.5);
position: fixed;
top: 0;
left: 0;
z-index: 5;
&::-webkit-scrollbar{
   width: 0.5rem;
}

&::-webkit-scrollbar-thumb{
  background-color: #ff7676;
}

&::-webkit-scrollbar-track{
  background: white;
}
`

const Detail = styled(motion.div)`
width: 80%;
border-radius: 1rem;
padding: 2rem 5rem;
background: white;
position: absolute;
left: 10%;
color: black;
z-index: 10;
img{
  width: 100%;
}
`

const Stats = styled(motion.div)`
display: flex;
align-items: center;
justify-content: space-between;
img{
  width: 2rem;
  height: 2rem;
  display: inline;
}
`

const Info = styled(motion.div)`
text-align: center;
`

const Platforms = styled(motion.div)`
display: flex;
justify-content: space-around;
align-items: center;
img{
  margin-left: 3rem;
}
`

const Media = styled(motion.div)`
margin-top: 5rem;
img{
  width: 100%;
}
`

const Description = styled(motion.div)`
margin: 5rem 0rem;

`



export default GameDetail;