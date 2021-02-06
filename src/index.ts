import { range, of, asyncScheduler } from "rxjs";

const obs1$ = of(1,2,3,4,5);
// el asyncscheduler nos ayuda a trasfromar los metodos sincronos en asincronos
const obs2$ = range(-5,10, asyncScheduler);

console.log('inicio');
obs1$.subscribe(console.log);
obs2$.subscribe(console.log);
console.log('fin');
