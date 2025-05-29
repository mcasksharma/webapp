import axios from 'axios';
import AuthService from './AuthService';
import config from '../config';

const API_URL = config.COMPANY_API_URL + '/';

class CompanyService {
    getCompanyInfo() {
        return axios.get(API_URL + 'info', {
            headers: AuthService.getAuthHeader()
        });
    }

    getServices() {
        return axios.get(API_URL + 'services', {
            headers: AuthService.getAuthHeader()
        });
    }
}

export default new CompanyService();
