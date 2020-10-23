const BASE_URL = process.env.REACT_APP_SERVER_URL;

export default {

  getLogs: async() => {
    const logData = await fetch(`${BASE_URL}/logs`)
    .then(res => res.json())
    return logData;
  },

  postLog: async (logData) => {
    await fetch(`${BASE_URL}/logs`, {
      method: 'POST',
      body: logData
    })
  },

  getPhotos: async (diveSite) => {
    const photos = await fetch(`${BASE_URL}/photos?country=${diveSite.country}&region=${diveSite.region}&diveSite=${diveSite.diveSite}`)
      .then(res => res.json())
    return photos;
  }

}