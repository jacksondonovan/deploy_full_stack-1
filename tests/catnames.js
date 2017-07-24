const chai = require('chai')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)
const should = chai.should();

describe('cat names API',function(){
  it('should return all cats',function(done){
    api.get('/catnames')
    .expect(200)
    .end((err,res)=>{
      if(err) return done(err)

      res.body[0].name.should.be.a('string')

      done()
    })
  })
  it('should post a cat name',function(done){
    api.post('/catnames')
    .send({name: 'my awesome new cat name'})
    .expect(200,done)
  });
})
