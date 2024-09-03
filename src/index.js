import prompt from "prompt";
import { schemaMainPrompt } from "./utils/prompts-schema/schema-main.js";
import { createQRCode } from "./services/qrcode/create.js";
import { createPassword } from "./services/password/create.js";

async function main() {
  prompt.get(schemaMainPrompt, async (err, choice) => {
    if (err) {
      console.error(err);
      return;
    }
    if (choice.select === '1') await createQRCode()
    if (choice.select === '2') await createPassword()
  })
  prompt.start()
}
main()