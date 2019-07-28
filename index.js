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

    console.log ( plus2 ( 0 ) ) 
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


// Referencial Transparency and substitutability

// if a function consistently yields the same result on the same input, its said to be
// referentially transparent.

/*

Program = [Input] + [func1, func2, func3, ... ] -> Output

*/

counterSideEfeects (  )


