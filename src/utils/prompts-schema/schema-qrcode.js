import chalk from "chalk";

export const schemaQrPrompt = [
  {
    name: "link",
    description: chalk.yellow("Digite o link para gerar o QR CODE"),
  },
  {
    name: "type",
    description: chalk.yellow(`
      Escolha entre os tipos
      1 - Normal (Imagem)
      2 - Terminal
      `),
    pattern: /^[1-2]+$/,
    message: chalk.italic.red("Escolha apenas entre 1 e 2"),
    required: true,
  }
]