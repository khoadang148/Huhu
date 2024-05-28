import axios from "axios";
const request = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/",
    params: {
        key: "AIzaSyBEBc8TElDKon0rT4uVoLH8KzY1YnGHlwE"
    },
})

export default request