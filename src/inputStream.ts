import { fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

export function getInputStream(element: HTMLInputElement) {
    return fromEvent(element, 'keyup').pipe(
        map(event => event && (<HTMLInputElement>event.target).value),
        debounceTime(500)
    );
}
