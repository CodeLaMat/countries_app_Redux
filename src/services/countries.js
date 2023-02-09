import axios from "axios";

const baseURL = "https://restcountries.com/v3.1/all";

const getAll = async () => {
  const response = await axios.get(baseURL);
  return response.data.sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  );
};

export default { getAll };
