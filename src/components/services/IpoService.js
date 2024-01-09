import axios from 'axios';

const API_KEY = 'sk_bbb36825282345aaa31c506d9339a38e';


const IpoService = {
  getIpoList: async () => {
    try {
      const response = await axios.get(`https://api.iex.cloud/v1/data/CORE/UPCOMING_IPOS/market?token=${API_TOKEN}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching stock list:', error);
      throw error;
    }
  },
};

export default IpoService;