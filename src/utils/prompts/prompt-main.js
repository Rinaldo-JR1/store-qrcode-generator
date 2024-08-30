import chalk from "chalk";


const mainPrompt = [
  {
    name: "select",
    description: chalk.yellow("Escolha a ferramenta (1 - QRCODE ou 2 - Senha)"),
    pattern: /^[1-2]$/,
    message: chalk.red("Escolha apenas entre 1 e 2"),
    required: true
  }
]
export { mainPrompt };