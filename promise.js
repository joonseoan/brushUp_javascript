
const fetchData = () => {

    console.log('when');
    
    const promise = new Promise((resolve, reject) => {
    
        setTimeout(() => {

            // resolve => callback, "text => { console.log(text) }"
            resolve('Done');
            
        }, 1500);

    });

    return promise;
} 

setTimeout(() => {
    
    console.log('Timer is done');

    fetchData()
        // when it gains resolve, 'resolve' turns out to be a callback 
        .then(text => {
            console.log(text);
            return fetchData(); // must exist to chain
        })
        .then(text2 => {
            console.log(text2);
            return fetchData(); // // must exist to chain
        })
        .then(text3 => {
            console.log(text3);
        });

}, 2000);

console.log('Hello');
console.log('working');