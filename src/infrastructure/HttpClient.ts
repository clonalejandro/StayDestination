import { config } from '../../config';

class HttpClient {
  async get<T>(url: string): Promise<T> {
    const apiUrl = `${config.API_URL}/establishments/${url}?apikey=${config.API_KEY}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
}

export default HttpClient;
