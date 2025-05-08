import apiBash from "@/api/apiBash";
import axiosInstance from "@/api/axiosInstance";

export async function login(email, password) {
  const response = await axiosInstance.post(apiBash.login, {
    email,
    password,
  });

  return response.data; // pastikan hasilnya bisa di-handle di luar
}
