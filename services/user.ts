import { AuthResponse } from "@/types/user";
import { Api } from "./api";

export type Credentials = {
  email: string;
  password: string;
};

async function login(
  credentials: Credentials
): Promise<AuthResponse> {
  return Api.post("/auth/login", credentials);
}

async function register(
  credentials: Credentials
): Promise<AuthResponse> {
  return Api.post("/auth/register", credentials);
}

const userService = {
  login,
  register,
};

export { userService };
