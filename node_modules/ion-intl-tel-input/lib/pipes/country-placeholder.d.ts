import { PipeTransform } from '@angular/core';
import { CountryI } from './../models/country.model';
import * as ɵngcc0 from '@angular/core';
export declare class CountryPlaceholder implements PipeTransform {
    transform(country: CountryI, inputPlaceholder: string, separateDialCode: boolean, fallbackPlaceholder: string): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<CountryPlaceholder, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDeclaration<CountryPlaceholder, "countryPlaceholder">;
}

//# sourceMappingURL=country-placeholder.d.ts.map