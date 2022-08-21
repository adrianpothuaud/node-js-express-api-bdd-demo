const {
  After, AfterStep, Before, BeforeStep, Status,
} = require('@cucumber/cucumber')
const chalk = require('chalk')

const John = require('../src/personas/John')

After(function () {
  console.log('\n')
})

AfterStep(function ({ result }) {
  if (result.status === Status.FAILED) {
    console.log(chalk.redBright('STEP FAILURE !!!'))
  } else {
    console.log(chalk.greenBright('STEP SUCCESS !!!'))
  }
})

Before(function (scenario) {
  console.log(
    '\n\n\n',
    chalk.greenBright('[Feature]'),
    chalk.bold(scenario.gherkinDocument.feature.name),
    '\n',
    chalk.greenBright('[Scenario]'),
    chalk.bold(scenario.pickle.name),
  )
})

BeforeStep(function (step) {
  console.log(
    '\n',
    chalk.greenBright('[Step]'),
    step.pickleStep.text,
  )
})
