import chalk from 'chalk';
import qr from 'qrcode-terminal'
export function handle(err, result) {
  if (err) {
    console.log(err)
    return
  }
  const isSmall = result.type == 2;
  qr.generate(result.link, { small: isSmall }, (qrCode) => {
    console.log(chalk.green("QR Code gerado com sucesso \n"))
    console.log(qrCode)
  })
}