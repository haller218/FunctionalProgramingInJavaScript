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

const counterSideEfeects = () => {

    var counter = 0 // side effects because the state global of counter is change in
    // any call function increment
    function increment () {
	return ++counter;
    }
}




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
