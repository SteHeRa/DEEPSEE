const BASE_URL = 'http://localhost:3001';

export default {

  getLogs: async() => {
    const logData = await fetch(`${BASE_URL}/logs`)
    .then(res => res.json())
    return logData;
  },

  postLog: async (logData) => {
    const postedLog = await fetch(`${BASE_URL}/logs`, {
      method: 'POST',
      body: logData
    })
    .then(res => res.json())
    .then(json => console.log(json));
    console.log(postedLog);
  }

}