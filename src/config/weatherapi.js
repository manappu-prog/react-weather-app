
export const getWeatherData = async (city) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=9603a1d793f54176b5433636232101&q=${city}&aqi=no`;
    const data = await fetch(url);
    return await data.json();
}