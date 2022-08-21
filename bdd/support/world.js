const { setWorldConstructor, World } = require('@cucumber/cucumber')
const chalk = require('chalk')

/**
 * @typedef {object} CustomWorld
 * @property {object} personasData
 * @property {object} savedApiResponses
 */
class CustomWorld extends World {
  personasData = {}

  /**
   *
   * @param {string} name
   * @returns {PersonaData} personaData
   */
  getPersonaData(name) {
    console.log(chalk.blue('*world*'), chalk.italic('get persona data with name', name))
    return this.personasData[name]
  }

  /**
   *
   * @param {string} name
   * @param {Partial<PersonaData>} data
   */
  updatePersonaData(name, data) {
    console.log(chalk.blue('*world*'), chalk.italic('update persona data with name', name))
    this.personasData[name] = { ...this.personasData[name], data }
  }

  /**
   *
   * @param {string} name
   * @param {PersonaData} data
   */
  savePersonaData(name, data) {
    console.log(chalk.blue('*world*'), chalk.italic('save persona data with name', name))
    this.personasData[name] = data
  }

  savedApiResponses = {}

  /**
   *
   * @param {string} name
   * @param {AxiosResponse} data
   */
  saveApiResponse(name, response) {
    console.log(chalk.blue('*world*'), chalk.italic('save api response with name', name))
    this.saveApiResponse[name] = response
  }

  /**
   *
   * @param {string} name
   * @return {AxiosResponse} response under test
   */
  getApiResponse(name) {
    console.log(chalk.blue('*world*'), chalk.italic('get api response with name', name))
    if (this.saveApiResponse[name]) return this.saveApiResponse[name]
    throw new UndefinedAPIResponse(name)
  }
}

setWorldConstructor(CustomWorld)

module.exports = CustomWorld
