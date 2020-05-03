import last from 'lodash/last';
import { fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

export function getInputStream(element: HTMLInputElement) {
    return fromEvent(element, 'keyup').pipe(
        debounceTime(500),
        map(event => event && (<HTMLInputElement>event.target).value),
        map(value => {
            const characters = value.split('');

            if (last(characters) === '^') {
                return value + '{ }';
            } else {
                return value;
            }
        })
    );
}
