import axios from 'axios';

const baseUrl = 'http://10.0.2.2:3000'

export const getAllBreweries = async () => {
    try {
        console.log('1')
        const response = await axios.get(`${baseUrl}/`);
        return response.data
    } catch (error) {
        throw error;
    }
};

export const getBreweryDetail = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/${id}`);
        return response.data
    } catch (error) {
        throw error;
    }
};