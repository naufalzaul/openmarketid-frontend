import apiBash from "@/api/apiBash";
import axiosInstance from "@/api/axiosInstance";

export async function createTransaction(transaction) {
  const response = await axiosInstance.post(apiBash.transaction, transaction);
  return response.data;
}

export async function getAllTransactions(transaction) {
  const response = await axiosInstance.get(apiBash.transaction);
  return response.data;
}