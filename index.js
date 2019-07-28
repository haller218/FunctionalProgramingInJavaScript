const beging = () => {

    console.log('Hello.')

    const mkpt = (eng, body, midw) => msg => {

	eng(body(midw(msg)))
    }


    const log = msg => console.log ( msg )
    const body = patter => lithe => patter + lithe + patter

    const cat = something => something

    const repet = times => dot => arg => {

	if (times != 1) {
	    dot(arg)
	    repet (times - 1)(dot)(arg)
	}
    }

    tritimes = repet ( 55 )

    run = mkpt( tritimes ( log ) , body('<h3>'), cat)

    run ('Hello, World!')

}

const powerthow = () => {

    var array = [0,1,2,3,4,5,6,7,8,9];

    for (let i = 0; i < array.length; i++)
	array[i] = Math.pow(array[i], 2)

    console.log(array)

    // functional aprotch

    console.log([0,1,2,3,4,5,6,7,8,9].map( r => Math.pow(r, 2)))
}

const counterSideEfeects = (  ) => {

    var counter = 0 // side effects because the state global of counter is change in
    // any call function increment
    function incrementN (  ) {
	
	return ++counter;
    }

    var incrementF = counter => counter + 1

    incrementN()
    incrementN()
    console.log(counter) // -> ?

    const repet = times => dot => arg => { // new change to return the some of
	// value to itself

	if (times != 0) {
	    
	    return dot ( arg ) +
		repet ( times - 1 )( dot )( arg )
	} return arg
    }

    const run = (func1, func2) => arg => {
	
	return func1 ( func2 ( arg ) )
    }
    
//    var plus2increment = repet ( 2 )( incrementF ) // works!
    var plus2 = run ( incrementF, incrementF )
    
//    console.log ( plus2increment ( 0 ) ) 

    console.log ( plus2 ( 0 ) ) // -> 2
}


const showStudentBehavior = () => {

    function showStudent (ssn) {

	var student = db.get (ssn);

	if (student !== null) {

	    console.log(student.ssn)
	    console.log(student.fristname)
	    console.log(student.lastname)
	} else {

	    throw new Error ('Student not Found')
	}
    }

    showStudent('444-44-4444')


    // decomposing the show student program

    var find = curry ( function(db, id) {
	var obj = db.get(id)
	if (obj === null) {
	    throw new Error ('Object not found')
	}
	return obj
    })

    var csv = student => {

	return `student.ssn, 
	student.fristname, 
	student.lastname`
    }


    var append = curry (function (elementId, info) {

	console.log (elementId + '=' +info)
    })

    var showStudent = run =>  {

	append('#student-info')
	cvs
	find(db)
    }

    showStudent ('444-44-4444')

}

const ReferentialTransparency = (  ) => {
    // Referencial Transparency and substitutability

    // if a function consistently yields the same result on the same input, its said to be
    // referentially transparent.

    /*

      Program = [Input] + [func1, func2, func3, ... ] -> Output

    */

    counterSideEfeects (  )
}

const averageBreakPaces = (  ) => {

    const some = ( ac, n ) => ac + n

    const total = arr => arr.reduce ( some ) 

    const size = arr => arr.reduce ( ( ac, n, i ) => i + 1 )

    const divide = ( divident, divesor ) => divident / divesor

    var input = [ 80, 90, 100 ]

    var average = arr => divide ( total ( arr ), size ( arr ) )

    console.log ( average ( input ) )

    var average = divide ( 270, 3 ) // -> 90

    console.log ( average ) 
}

const sortSideefects = (  ) => {

    var sortDesc = function ( arr ) {

	return arr.sort( function ( a, b ) {

	    return b - a
	} )
    }

    var arr = [1,2,3,4,5,6,7,8,9]

    console.log ( arr )

    console.log ( sortDesc ( arr ) )

    console.log ( arr )
}

let enrollment = [
    {enrolled: 2, grade: 100},
    {enrolled: 2, grade: 80},
    {enrolled: 1, grade: 89},
]


var totalGrades = 0

var totalStudentsFound = 0
for ( let i = 0; i < enrollment.length; i ++ ) {

    let student = enrollment [ i ]
    if ( student !== null ) {

	if ( student.enrolled > 1 ) {

	    totalGrades += student.grade
	    totalStudentsFound++
	}
    }
}

var average = totalGrades / totalStudentsFound ; // -> 90

console.log ( average )


// functional aprotch

const takeElementFromObject = att => obj => obj[att]

const grathen = frist => second => frist > second

const find = arr => func => arr.filter ( func )

const applyGrtToObj = att => tested => obj =>
      grathen ( takeElementFromObject ( att )( obj ) )( tested )

const findElemtByRequirement = arr => field => requirement =>
      find ( arr )( applyGrtToObj ( field )( requirement ) )

const some = arr => arr.reduce ( ( ac , n ) => ac + n )

const divide = frist => second => frist / second

const totalElements = arr => arr.reduce( (_, __, i) => i + 1 )

const recreateArrayOfObjects = arr => att => validate => arr.map ( el =>
								   validate ( el ) )

const averigeFromListObjects = list => att => 
      list.reduce ( ( ac, now ) => divide ( some (
	  recreateArrayOfObjects ( list )( att )( takeElementFromObject ( att ) ) ) )
		    ( totalElements ( list ) ) )

result = averigeFromListObjects ( findElemtByRequirement ( enrollment )
				  ( 'enrolled' )( 1 ) )( 'grade' )

console.log ( result )




