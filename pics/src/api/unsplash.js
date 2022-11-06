import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID kBj1d65dyd9mOrYLI7vZXFGtoSymSdkenmxlyiJ9mbI",
    },
})
