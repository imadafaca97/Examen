import axios from 'axios';

export default {
  async getPhotos() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    let { data } = await axios.get(
      'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY'
    );

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data;
  },
};
