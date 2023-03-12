import axios from "axios";
import { popularGamesURL , upComingGamesURL , newGamesURL , SearchedGameURL } from "../api";


// action creator

export const loadGames = () => async (dispatch) =>{
  // fetch axios
  const popularData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const upcomingData = await axios.get(upComingGamesURL());
  dispatch({
      type: "FETCH_GAMES",
      payload: {
       popular: popularData.data.results,
       upComing: upcomingData.data.results,
       newGames: newGamesData.data.results
      }
  })
};

export const FetchSearch = (game_name) => async (dispatch) =>{
   const searchGames = await axios.get(SearchedGameURL(game_name));
   dispatch({
     type: 'FETCH_SEARCHED',
     payload: {
       searched: searchGames.data.results,
     },
   })
}