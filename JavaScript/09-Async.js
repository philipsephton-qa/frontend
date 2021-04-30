`use strict`;

// Asynchronous - 

const test = async () => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("done");
        }, 5000)
    });
    let result = await promise;
    console.log(result);
};
test();

const async1 = () => {
    return new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log(`Async 1 - after 3 seconds`);
    }, 3000);
})
}
const async2 = () => {
    return new Promise((resolve, reject) =>{

    setTimeout(() => {
        console.log(`Async 2 - after 2 seconds`);
    }, 2000);
});
}
const async3 = () => {
    return new Promise((resolve, reject) =>{

    setTimeout(() => {
        console.log(`Async 3 - after 1 seconds`);
    }, 1000);
});
}
// async1();
// async2();
// async3();

console.log(`--------------------`);
const doThings = async () => {
    await async1();
    await async2();
    await async3();
}
doThings();