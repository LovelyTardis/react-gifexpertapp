export const getGifs = async (category) => {
    const api_key = 'G5MdWOJGu1ghFllMX77UHKoTJir3Q1FW';
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${api_key}`;
    const res = await fetch(url);
    const {data} = await res.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    return gifs;
}