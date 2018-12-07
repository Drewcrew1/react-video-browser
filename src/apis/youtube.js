import axios from 'axios';

const KEY = 'AIzaSyA1-SVcyIL5TWM_CBneI2lu9GIXlgk77sw';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
       part: 'snippet',
        maxResults: 5,
        key: `${KEY}`
    }
});