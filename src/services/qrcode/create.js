import prompt from "prompt"
import { schemaQrPrompt } from "../../utils/prompts-schema/schema-qrcode.js"
import { handle } from "./handler.js"

async function createQRCode() {
  prompt.get(schemaQrPrompt, handle)
}
export { createQRCode }