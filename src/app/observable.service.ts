import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class ObservableService {

    constructor() {}

    /** GET heroes from the server */
    callObserver() {
        // Create simple observable that emits three values
        const myObservable = Observable.of(1, 2, 3);

        // Create observer object
        const myObserver = {
            next: x => console.log('Observer got a next value: ' + x),
            error: err => console.error('Observer got an error: ' + err),
            complete: () => console.log('Observer got a complete notification')
        };

        // Execute with the observer object
        myObservable.subscribe(myObserver);
        // Logs: Observer got a next value: 1 Observer got a next value: 2 Observer got
        // a next value: 3 Observer got a complete notification
    }
}