import {interval, Observable, Observer} from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente', value),
    error: error => console.info('error', error),
    complete: () => console.log('completado')
} 

const intervalo$ = new Observable<number>(subscriber => {
    let count = 0;
    const interval = setInterval(() => {
        count ++;
        subscriber.next(count);
        subscriber.complete();
    }, 1000);
    
    return () => {
        clearInterval(interval);
        console.log('intervalo terminado');
        
    }
});

const subs = intervalo$.subscribe(console.log);

setTimeout(() => {
    subs.unsubscribe();
}, 3000);