import { useQuery } from 'react-query';

const organizationId = import.meta.env.VITE_ORGANIZATION_ID;
const appId = import.meta.env.VITE_APP_ID;
const apiKey = import.meta.env.VITE_API_KEY;

const fetchProducts = async () => {
  const response = await fetch(`https://api.timbu.cloud/products?organization_id=${organizationId}&reverse_sort=false&page=1&size=10&Appid=${appId}&Apikey=${apiKey}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.items;
};

const useFetchProducts = () => {
  return useQuery('productDetails', fetchProducts);
};

export default useFetchProducts;
