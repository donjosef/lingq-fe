export const API = (url) => {
    return fetch(url).then(res => res.json())
}