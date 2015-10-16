let Colonel   = require('../../Colonel')
let bootstrap = require('../bootstrap')

describe('bootstrap plugin', function() {

  it ('can serialize an input', function(done) {
    let app   = new Colonel({ el: document.createElement('div') })
    let input = document.createElement('textarea')

    input.value = JSON.stringify([{
      blocks  : [],
      content : {},
      type    : 'section'
    }])

    bootstrap.register(app, { blocks: input, blockTypes: [] }, function() {
      app.state.blocks[0].should.have.property('type', 'section')
      done()
    })
  })

  it ('filter block types given a list', function(done) {
    let app = new Colonel({ el : document.createElement('div') })

    bootstrap.register(app, {
      allow: [ 'list' ],
      blockTypes : [{ id: 'list' }, { id: 'text' }]
    }, function() {
      let types = app.state.blockTypes

      types.length.should.equal(1)
      types[0].id.should.equal('list')

      done()
    })
  })

  it ('allows all block types if given no allow option', function(done) {
    let app = new Colonel({ el : document.createElement('div') })

    bootstrap.register(app, {
      blockTypes : [{ id: 'list' }, { id: 'text' }]
    }, function() {
      app.state.blockTypes.length.should.equal(2)
      done()
    })
  })
})
