const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://dilmaa-api.go7.ir";

export const get_token = `${API_BASE}/api/auth/sms/get_token`;
export const verify_code = `${API_BASE}/api/auth/sms/verify_token`;
export const refreshTokenApi = `${API_BASE}/api/auth/token/refresh/`;
export const getConfigApi = `${API_BASE}/api/order/config/`;