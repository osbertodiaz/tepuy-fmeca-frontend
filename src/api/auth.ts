import { apiFetch } from "./client";

export async function login(username: string, password: string) {
  const body = new URLSearchParams({
    username,
    password,
  });

  return apiFetch(
    "/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    },
    "test"
  );
}
