// import selenium
const { Builder, Capabilities } = require('selenium-webdriver');

// require chromedriver
require('chromedriver');

//import driver
const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

// Write a beforeAll that connects to that URL
beforeAll(async () => {
  await driver.get(
    "http://localhost:5500/exercises/automation/movieList/index.html")
})

// Write an afterAll that quits the driver
afterAll(async () => {
  await driver.quit()
})

// Test crossing off a movie
test('Cross off a movie', async () => {
  
})

// Test notifications that are displayed across the page
describe('Notifications', () => {

  await driver.findElement({ id: 'message' }).getText().then(text => {
    expect(text).toBe('Movie added!')
  })

  await driver.findElement({ id: 'message' }).getText().then(text => {
    expect(text).toBe('Movie watched!')
  })

  await driver.findElement({ id: 'message' }).getText().then(text => {
    expect(text).toBe('Movie deleted!')
  })

  await driver.findElement({ id: 'message' }).getText().then(text => {
    expect(text).toBe('Movie added back!')
  })

  await driver.findElement({ id: 'message' }).getText().then(text => {
    expect(text).toBe('Movie watched!')
  })
})

// Test movie deletion btn
test('Delete a movie', async () => {
  await driver.findElement({ id: 'movie-list' }).findElement({ tagName: 'li' }).findElement({ tagName: 'button' }).click() // click delete btn
})



