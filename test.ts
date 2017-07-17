import throat = require('throat')
import Bluebird = require('bluebird')

const fn1 = throat(2, function (): Bluebird<number> {
  return Bluebird.resolve(1)
})

const fn2 = throat(Bluebird)(2, function () {
  return Bluebird.resolve(2)
})

Bluebird.all([fn1(), fn2()]).then(console.log)

const fn3 = throat(Promise)