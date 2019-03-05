let val;

// Number to string {number & sum}

val = String(555)
console.log('String(555)',val)

val = String(444)
console.log('String(555)',val)
// Bool to string

val = String(true)
console.log('true',val)

val = String(false)
console.log('false',val)

val = String(null)
console.log('null',val)
// Date to string

val = String(new Date())
console.log('String(new Date())',val)
// Array to string

val=String(['1','2','3'])
console.log('String(["1","2","3"])',val)
// toString() {number & bool}

val = (5).toString()
console.log('(5).toString()',val)

val = (true).toString()
console.log('(true).toString()',val)
// String to number {char & bool & null & string & array}
val = Number('5')
console.log(' (Number"5")',val)
val = Number(true)
console.log('Number(true)',val)
val = Number(null)
console.log('Number(null)',val)
val = Number('is a big')
console.log('Number("is a big")',val)
val=Number(['1','2','3'])
console.log('Number(["1","2","3"])',val)
// parseInt & parseFloat
val = parseInt('100.30')
console.log('parseInt("100.30")',val)
val = parseFloat('100.30')
console.log('parseFloat("100.30")',val)
// Output {consol val & typeof val & val.length & val.to Fixed(2)}

val = 'index'
console.log('index',val.length)

val = 100.123156
console.log(val+" tofix: " ,val.toFixed(2))


const val1 = String(5);

const val2 = 6;

const sum = Number(val1 + val2);

//consol.log {sum & typeof sum}

console.log(sum)
console.log(typeof sum)


