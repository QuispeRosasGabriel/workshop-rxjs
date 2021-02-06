import { of } from "rxjs";

const obs$ = of<number>(1,2,3,4,5);

obs$.subscribe(
    next => console.log('next', next), 
    error => console.log('error', error),
    () => console.log('Secuencia terminada')
)