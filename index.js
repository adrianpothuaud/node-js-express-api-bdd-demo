const chalk = require("chalk")
const server = require("./server")

server.listen(8080, 'localhost', 50, () => {
    console.log(
        chalk.bold("🖖"),
        chalk.blueBright("http server greets you"),
        chalk.italic("He is running on HTTP port :8080")
    )
})