import axios from 'axios';
import config from '../config';

const API_URL = config.AUTH_API_URL + '/';

class AuthService {
    login(username: string, password: string) {
        return axios
            .post(API_URL + 'signin', {
                username,
                password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(username: string, email: string, password: string, fullName: string) {
        return axios.post(API_URL + 'signup', {
            username,
            email,
            password,
            fullName
        });
    }

    getCurrentUser() {
        const userStr = localStorage.getItem('user');
        if (userStr) return JSON.parse(userStr);

        return null;
    }

    getAuthHeader() {
        const user = this.getCurrentUser();
        if (user && user.accessToken) {
            return { Authorization: 'Bearer ' + user.accessToken };
        } else {
            return { Authorization: '' };
        }
    }
}

export default new AuthService();
