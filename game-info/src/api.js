// BASE URL
const base_url = "https://api.rawg.io/api/"


// getting the date

//current month
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    console.log(month);
    if (month < 10) {
        return `0${month}`
    }

    else {
        return month
    }
}


// current day
const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
        return `0${day}`;
    }

    else {
        return day;
    }
}

//current year day month
const CurrentYear = new Date().getFullYear();
const CurrentMonth = getCurrentMonth();
const CurrentDay = getCurrentDay();
const CurrentDate = `${CurrentYear}-${CurrentMonth}-${CurrentDay}`
const lastYear = `${CurrentYear - 1}-${CurrentMonth}-${CurrentDay}`
const nextYear = `${CurrentYear + 1}-${CurrentMonth}-${CurrentDay}`

// popular games
const popular_games = `games?key=1f8d4be785cb4491bc5eca5dddaff087&dates=${lastYear},${CurrentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=1f8d4be785cb4491bc5eca5dddaff087&dates=${CurrentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games   =    `games?key=1f8d4be785cb4491bc5eca5dddaff087&dates${lastYear},${CurrentDate}&ordering=-released&page_size=10`;

// final url

export const popularGamesURL = () => `${base_url}${popular_games}`
export const upComingGamesURL = () => `${base_url}${upcoming_games}`
export const newGamesURL = () => `${base_url}${new_games}`
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}?key=1f8d4be785cb4491bc5eca5dddaff087`
export const gameScreenshotURL = (game_id) =>  `${base_url}games/${game_id}/screenshots?key=1f8d4be785cb4491bc5eca5dddaff087`
export const SearchedGameURL = (game_name) => `${base_url}games?key=1f8d4be785cb4491bc5eca5dddaff087&search=${game_name}&page_size=9`

