import {Observable, Observer, Subscriber} from 'rxjs';

const obs$ = new Observable<string>((subscriber) => {
    subscriber.next('Hola');
    subscriber.complete();
});

const observer: Observer<any> = {
    next: value => console.log('siguiente', value),
    error: error => console.info('error', error),
    complete: () => console.log('completado')
} 

obs$.subscribe(observer);
/*obs$.subscribe(
    valor => console.log('next', valor),
    error => console.log('error', error),
    () => console.info('completado')
);*/