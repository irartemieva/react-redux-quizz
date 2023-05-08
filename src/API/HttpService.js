import axios from "axios";

export default class HttpService {
    static async getAll(limit = 10) {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
            _limit: limit
          }
        });
        return response;
    }
}
