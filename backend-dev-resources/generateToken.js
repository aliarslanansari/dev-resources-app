const fs = require("fs")
const shell = require("shelljs")

shell.exec(`npx cognito-cli createConfig --region=ap-south-1 --userPoolId=ap-south-1_lHO1gS0BO --userPoolWebClientId=3dvs78dg6f9u1ul9tv7pmete9c \
    --email=mac@wednesday.is --password=Wednesday@123`)
shell.exec(`npx cognito-cli signin > tokens.json`)

const tokenFile = fs.readFileSync(`./tokens.json`, { encoding: "utf-8" })

const accessToken = JSON.parse(tokenFile).accessToken.jwtToken
console.log(accessToken)
// const envFile = JSON.parse(
//   fs.readFileSync(`./msp-sls-dev.postman_environment.json`, {
//     encoding: "utf-8",
//   })
// )

// envFile.values = envFile.values.map((value) => {
//   if (value.key === "access_token") {
//     value.value = accessToken
//   }
//   return value
// })

// fs.writeFileSync(
//   `./msp-sls-dev.postman_environment.json`,
//   JSON.stringify(envFile)
// )
