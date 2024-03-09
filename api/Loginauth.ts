// api.ts
// api.ts
const API_URL = 'http://192.168.1.121:8000';  // replace with your Django server URL

interface RegisterResponse {
    status: string;
}

export interface LoginResponse {
    status: string;
    token: string;  // Add token property
    error?: string;
}

interface AddDeviceResponse {
    status: string;
}

let token: string | null = null;  // Add a variable to store the token


export async function register(username: string, email: string, password: string): Promise<RegisterResponse |undefined> {
    try {
        const response = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, email, password}),
        });
        if (!response.ok) {
            console.error('HTTP error', response.status);
        } else {
            const data: RegisterResponse = await response.json();
            console.log('Response data:', data);
            return data;
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
}



export async function login(email: string, password: string): Promise<LoginResponse | undefined> {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password}),
        });

        if (!response.ok) {
            console.error('HTTP error', response.status);
            const text = await response.text();
            console.error('Response data:', text);
            return;
        }

        const data: LoginResponse = await response.json();
        console.log('Response data:', data);
        token = data.token;  // Store the token
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

export async function addDevice(name: string, type: string): Promise<AddDeviceResponse> {
    const response = await fetch(`${API_URL}/add_device`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`  // Include the token in the Authorization header
        },
        body: JSON.stringify({name, type}),
    });

    if (!response.ok) {
        console.error('HTTP error', response.status);
        const text = await response.text();
        console.error('Response data:', text);
        throw new Error(`HTTP error ${response.status}: ${text}`);
    }

    const data: AddDeviceResponse = await response.json();
    return data;
}