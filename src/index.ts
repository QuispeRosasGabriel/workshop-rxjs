import { interval, timer } from "rxjs";

const observer = {
    next: (val) => console.log(val),
    err: (err) => console.log(err),
    complete: () => console.log('complete')
};

const obs1$ = interval(1000);
const obs2$ = timer(2000);

console.log('inicio');
//obs1$.subscribe(observer);
obs2$.subscribe(observer);
console.log('fin');
