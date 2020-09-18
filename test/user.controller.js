const { expect } = require('chai')
const user = require('../src/controllers/user')

// let dbClient

describe('User', () => {
  
  // before(() =>{
  //   dbClient = require('../src/dbClient')
  // })
  //
  
  it('should create user', (done) => {
    const user = {
      username: 'sergkudinov',
      firstname: 'sergei',
      lastname: 'kudinov'
    }
    user.create(user, (err, result) => {
      expect(err).to.be.equal(null)
      expect(result).to.be.equal('OK')
      done()
    })
  })
})
