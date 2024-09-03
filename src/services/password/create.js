import chalk from "chalk"
import { handle } from "./handler.js"

export async function createPassword(params) {
  const password = await handle()
  console.log(chalk.green(`Password: ${password}`))
}