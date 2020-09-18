const { expect } = require('chai')
let dbClient

describe('Redis', () => {
  
  before(() =>{
    dbClient = require('../src/dbClient')
  })
  
  after(() => {
    dbClient.quit()
  })
  
  it('should connect to Redis', () => {
    expect(dbClient.connected).to.eql(true)
  })
})
