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

const difference = (  ) => {

    res = _.difference([2,1],[2,3])

    obj = {'result': res}

    return obj
}

const differenceBy = (  ) => {

    obj = {}
    
    res = _.differenceBy([2.1, 1.2],[2.3,3.4], Math.floor)

    res2 = _.differenceBy([{'x': 2,'x': 1}],[{'x': 1}], 'x')
    
    obj['result'] = res

    obj['result2'] = res2
    
    return obj
}

const differenceWith = (  ) => {

    obj = {}

    objecst = [{ 'x': 2,'y': 1 },{ 'x': 2, 'y': 1 }]

    res = _.differenceWith(objecst, [{ 'x': 1, 'y': 2 }], _.isEqual)
    
    obj['result'] = res

    return obj

}

const drop = (  ) => {

    lis = []
    
    lis.push( _.drop([1,2,3]))
    lis.push( _.drop([1,2,3], 2))
    lis.push( _.drop([1,2,3], 5))
    lis.push( _.drop([1,2,3], 0))

    res = {'list': lis}
    
    return res
} 

const dropRight = (  ) => {

    lis = []
    
    lis.push( _.dropRight([1,2,3]))
    lis.push( _.dropRight([1,2,3], 2))
    lis.push( _.dropRight([1,2,3], 5))
    lis.push( _.dropRight([1,2,3], 0))

    res = {'list': lis}
    
    return res
}

const dropRightWhile = (  ) => {

    var users = [
	{'user': 'barney','active': true},
	{'user': 'fred','active': false},
	{'user': 'pebbles','active': false}
    ]

    list = []
    
    list.push(_.dropRightWhile( users, o => !o.active ))
    list.push(_.dropRightWhile( users, {'users':'pebbles','ative':false}))
    list.push(_.dropRightWhile( users, ['active',false]))
    list.push(_.dropRightWhile( users, 'active'))
    
    obj = list
    
    return obj
} 

const dropWhile = (  ) => {

    var users = [
	{'user': 'barney','active': false},
	{'user': 'fred','active': false},
	{'user': 'pebbles','active': true}
    ]

    list = []
    
    list.push(_.dropWhile( users, o => !o.active ))
    list.push(_.dropWhile( users, {'users':'pebbles','ative':false}))
    list.push(_.dropWhile( users, ['active',false]))
    list.push(_.dropWhile( users, 'active'))
    
    obj = list
    
    return obj
} 

const fill = ( ) => {

    var array = [1,2,3]

    lis = []
    _.fill(array, 'a')

    lis.push (array)

    lis.push(_.fill(Array(3), 2))

    lis.push(_.fill([4,6,8,10],'*',1,3))

    return lis
    
}

const each = ( ) => {


}

const meth = ( ) => {


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
	concat,
	difference,
	differenceBy,
	differenceWith,
	drop,
	dropRight,
	dropRightWhile,
	dropWhile,
	fill
    ]

    const run = func => func (  )

    console.log(run(listFunc[listFunc.length-1]))
})()
