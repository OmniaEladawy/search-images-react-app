import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 2FkywHXrekwggGhDUzScBiiNbII9tDOD4EGQ7z_vgWU'
    }
})