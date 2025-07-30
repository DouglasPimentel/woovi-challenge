import argon2 from "argon2";
export async function hashPassword(password: string) {
  const hash = await argon2
    .hash(password, {
      type: argon2.argon2id,
      memoryCost: 2 ** 16,
      timeCost: 3,
      parallelism: 1,
    })
    .catch((error: unknown) => {
      console.error("Error hash password: " + error);
    });

  return hash;
}

export async function verifyPassword(password: string, inputPassword: string) {
  const check = await argon2.verify(password, inputPassword).catch((error: unknown) => {
    console.error("Error verify password: " + error);
  });

  return check;
}
