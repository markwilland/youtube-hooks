import axios from 'axios';

const KEY = 'AIzaSyBrJawHY3qmn5eBejJIbpNtiGJr7_y5nsI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

