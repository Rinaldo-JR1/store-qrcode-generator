import prompt from "prompt";
import { mainPrompt } from "./utils/prompts/prompt-main.js";

async function main() {
  prompt.get(mainPrompt, async (err, choice) => {
    if (err) {
      console.error(err);
      return;
    }
    if (choice.select === '1') {
      console.log('QRCODE')
    } else {
      console.log('Senha')
    }
  })
  prompt.start()
}
main()