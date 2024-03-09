export interface Device {
    id: string;
    name: string;
    type: string;
    user_id: string;
    // Add more properties as needed
}

export async function GetDevices(token: string, userId: string): Promise<Device[] | undefined> {
    try {
        const response = await fetch(`http://192.168.1.121:8000/get-devices/${userId}`, {
            method: 'GET', // Explicitly specify the GET method
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) {
            console.error('HTTP error', response.status);  // Log the HTTP status if it's not ok
            return undefined;
        } else {
            const data = await response.json();
            console.log('data:', data);  // Debug log
            return data.devices; // Assuming 'data' contains an object with a 'devices' property that is an array of devices
        }
    } catch (error) {
        console.error('Fetch error:', error);  // Log any errors that occur during the fetch request
        return undefined;
    }
};