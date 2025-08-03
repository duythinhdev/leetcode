const ps1 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 'promiseResolver 01'))
const ps2 = new Promise((resolve, reject) => setTimeout(reject, 1000, 'promiseReject 02'))
const ps3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'promiseResolver 03'))

// Promise.all([ps1, ps3]).then(values => console.log(`result promise.all ${values}`))
//   .catch(err => console.error(`result promise.all err ${err}`)) failed first

// Promise.any([ps2, ps1, ps2]).then(values => console.log(`result promise.any1 ${values}`))
//   .catch(err => console.error(`result promise.any1 err ${err}`)) success first

// Promise.race([ps1, ps2, ps3]).then(values => console.log(`result promise.race ${values}`))
//   .catch(err => console.error(`result promise.race err ${err}`)) speed first

Promise.allSettled([ps1, ps2, ps3]).then(values => {
    values.forEach(ps => {
        console.log(`result promise.allSettled ${JSON.stringify(ps)}`)
    })
}).catch(err => console.error(`result promise.allSettled err ${err}`))

// all run