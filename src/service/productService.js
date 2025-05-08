import apiBash from "@/api/apiBash";
import axiosInstance from "@/api/axiosInstance";

export async function createProduct(product) {
  const response = await axiosInstance.post(apiBash.product, product);
  return response.data;
}

export async function getAllProducts() {
  const response = await axiosInstance.get(apiBash.product);
  return response.data;
}

export async function updateProduct(product) {
  const response = await axiosInstance.put(apiBash.product, product);
  return response.data;
}

export async function deleteProduct(id) {
  const response = await axiosInstance.delete(`${apiBash.product}/${id}`);
  return response.data;
}
