import axios from "axios";

export const fetchPowerColumn = async (userId: string, deviceId: string) => {
    try {
        const response = await axios.get(`{put you url here }/api/get_power_column/${userId}/${deviceId}`);
        const data = response.data;
        return data.power_column && data.power_column.length > 0 ? data.power_column[0].clicked : '';
    } catch (error) {
        console.error('Error fetching power column:', error);
        return ''; // Return an empty string in case of an error
    }
};
