import { PRODUCRION_SERVER_URL } from "./constants";

export function getHostUrl(): string {
  return process.env.NODE_ENV == "development"
    ? "http://localhost:3000"
    : PRODUCRION_SERVER_URL;
}
