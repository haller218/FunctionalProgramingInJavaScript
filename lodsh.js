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

    listRes = []
    
    _.forEach (saves, type => {

	listRes.push({'type': type, 'complete':done})
    })


    return listRes
} 


const ary = (  ) => {

    resutl = _.map(['6','8','10'], _.ary( parseInt, 1))

    return resutl
} 


const assign = (  ) => {

    function Foo () {
	this.a = 1
    }

    function Bar () {
	this.c = 3
    }

    Foo.prototype.b = 2
    Bar.prototype.d = 4

    res = _.assign({ 'a': 0 }, new Foo, new Bar)

    return res
}

const assignIn = (  ) => {

    function Foo () {
	this.a = 1
    }

    function Bar () {
	this.c = 3
    }

    Foo.prototype.b = 2
    Bar.prototype.d = 4

    res = _.assignIn({ 'a': 0 }, new Foo, new Bar)

    return res
}


const chunk = (  ) => {
    
    tow = _.chunk(['a','b','c','d'], 2)
    tri = _.chunk(['a','b','c','d'], 3)

    return {'thow': tow, 'tri': tri}
} 

const compact = (  ) => {

    result = _.compact([0,1,false, 2, '', 3])

    return result
} 

const concat = (  ) => {

    var array = [1]
    var other = _.concat(array, 2, [3], [[4]])

    res = {}

    res.other = other
    res.arr = array

    return res
} 

const meth = (  ) => {


} 


const main = (() => {

    listFunc = [
	add,
	after,
	ary,
	assign,
	assignIn,
	chunk,
	compact,
	concat
    ]

    const run = func => func (  )

    console.log(run(listFunc[listFunc.length-1]))
})()
