import axios from 'axios';

// Create a function to get headers with token
export const getAuthHeaders = (token) => {
    if (!token) {
        return {};
    }
    return {
        'token': token
    };
};

// Create a custom axios instance for authenticated requests
export const createAuthConfig = (token) => {
    return {
        headers: getAuthHeaders(token)
    };
};
