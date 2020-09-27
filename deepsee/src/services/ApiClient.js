const BASE_URL = 'http://localhost:3001';

export default {

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