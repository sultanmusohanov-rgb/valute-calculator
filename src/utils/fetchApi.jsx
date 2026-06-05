import axios from "axios";

async function getFromApi(baseUrl, setData) {
  const response = await axios.get(baseUrl ? baseUrl : "");

  if (response.status === 200) {
    setData(response.data);
  }
}

export { getFromApi };
