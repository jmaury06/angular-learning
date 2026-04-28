import { Component, signal } from "@angular/core";

@Component({
    selector: 'app-counter-page',
    templateUrl: './counter-page.html',
})
export class CounterPage {
    counter = signal(10);

    increaseBy(value: number) {
        this.counter.update(current => current + value);
    }

    resetCounter() {
        this.counter.set(10);
    }
}