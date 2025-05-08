import apiBash from "@/api/apiBash";
import axiosInstance from "@/api/axiosInstance";

export async function getAllTaxes() {
  const response = await axiosInstance.get(apiBash.tax);
  return response.data;
}

export async function deleteTax(id) {
  const response = await axiosInstance.delete(`${apiBash.tax}/${id}`);
  return response.data;
}