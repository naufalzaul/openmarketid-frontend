import apiBash from "@/api/apiBash";
import axiosInstance from "@/api/axiosInstance";

export async function createCustomer(customer) {
  const response = await axiosInstance.post(apiBash.customer, customer);
  return response.data;
}

export async function getAllCustomers() {
  const response = await axiosInstance.get(apiBash.customer);
  return response.data;
}

export async function updateCustomer(customer) {
  const response = await axiosInstance.put(apiBash.customer, customer);
  return response.data;
}

export async function deleteCustomer(id) {
  const response = await axiosInstance.delete(`${apiBash.customer}/${id}`);
  return response.data;
}
