const axios = require("axios").default;

const api = axios.create({
    baseURL: "https://islomapi.uz/api"
});

const getPrayerTime = async (region="Toshkent") => {
    try {
        const {status, data} = await axios.get(`https://islomapi.uz/api/present/day?region=${region}`);

        if(status !== 200) return null;
        return data;

    } catch (err) {
        console.log(err);
        return null;
    };
}; 

module.exports = {
    getPrayerTime,
};