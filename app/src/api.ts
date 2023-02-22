const apiUrl = import.meta.env.VITE_API_URL;

const fetchData = async <T>(url: string) => {
  const response = await fetch(`${apiUrl}${url}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json() as T;
};

export default fetchData;
