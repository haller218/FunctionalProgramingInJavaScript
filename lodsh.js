// Load the full build.
var _ = require('lodash')
// Load the core build.
// var _ = require('lodash/core')
// Load the FP build for immutable auto-curried iteratee-frist data-last methods.
var fp = require('lodash/fp')


// Load method categories.
var arry = require('lodash/array')
var object = require('lodash/fp/object')

// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at')
var curryN = require('lodash/fp/curryN')

// console.log ( _ )


///
// testing Lodash Methods

// ADD
const add = ( ) => {
    _.add(3,4)

    result = _.add(_.add(3,5),5)

    console.log ( result )
}



const after = (  ) => {

    var saves = ['profile','settings']

    var done = _.after(saves.length, () => {
	console.log('done saving!')
    })

    _.forEach (saves, type => {

	console.log({'type': type, 'complete':done})
    })

    
} 


const meth = (  ) => {

} 


const main = (() => {


    //    add ()
    after()
})()
