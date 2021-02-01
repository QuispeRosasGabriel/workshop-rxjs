import { Observable, Observer, Subject} from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente', value),
    error: error => console.info('error', error),
    complete: () => console.log('completado')
} 

const intervalo$ = new Observable<number>(subs => {
    const intervalID = setInterval(() => {
        subs.next(Math.random());

    }, 1000);

    return () => clearInterval(intervalID);
    
});

const subject$ = new Subject();
intervalo$.subscribe(subject$);
const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
}, 3500);