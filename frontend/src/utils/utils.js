import axios from 'axios';

export const apiCall = (url, key, hook) => {
    axios.get(url).then(response => { 
        let data = response.data;
        hook(statuses => ({...statuses, ...data }));
    })
    .catch(() => {
        hook(statuses => ({...statuses, [key]: false}));
    });
}
