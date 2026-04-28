import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
    selector: 'app-hero-page',
    templateUrl: './hero-page.html',
    imports: [UpperCasePipe],
})
export class HeroPage {
    name = signal('Ironman');
    age = signal(45);

    heroDescription = computed(() => {
        const descriptions = `${this.name()} - ${this.age()}`;
        return descriptions;
    });

    capitalizedName = computed(() => this.name().toUpperCase());

    changeHero(): void {
        this.name.set('Spiderman');
        this.age.set(22);
    }

    changeAge(): void {
        this.age.set(60);
    }

    resetForm(): void {
        this.name.set('Ironman');
        this.age.set(45);
    }
}