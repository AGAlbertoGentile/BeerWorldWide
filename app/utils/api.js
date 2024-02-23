import axios from 'axios';

const baseUrl = 'http://192.168.1.2:3000'

export const getAllBreweries = async () => {
    try {
        const response = await axios.get(`${baseUrl}`);
        return response.data
    } catch (error) {
        throw error;
    }
};

export const getBreweryDetails = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/${id}`);
        return response.data
    } catch (error) {
        throw error;
    }
};