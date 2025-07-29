import * as jose from "jose";
import { config } from "@/core/config";

const JWT_SECRET = new TextEncoder().encode(config.JWT_SECRET);

export type AuthPayloadToken = jose.JWTPayload & {
  userId?: string;
};

export async function generateToken(payload: AuthPayloadToken) {
  const token: string = await new jose.SignJWT(payload)
    .setProtectedHeader({ alg: config.JWT_ALG })
    .setIssuedAt()
    .setExpirationTime(config.JWT_EXPIRATION)
    .sign(JWT_SECRET);

  return token;
}

export async function verifyToken(token: string) {
  const { payload } = await jose.jwtVerify<AuthPayloadToken>(token, JWT_SECRET);

  return payload;
}
