const express = require("express")

const setupApplicationMiddlewares = (app) => {
    app.use(express.json())
}

const exoticMiddlewares = {

}

module.exports = {
    setupApplicationMiddlewares,
    exoticMiddlewares
}