import { permittedChars } from "./utils/permittedChars.js"

export async function handle() {
  let chars = await permittedChars()
  let password = ''

  for (let i = 0; i < process.env.PASSWORD_LENGTH; i++) {
    password += chars[Math.floor(Math.random() * chars.length)]
  }
  return password
}