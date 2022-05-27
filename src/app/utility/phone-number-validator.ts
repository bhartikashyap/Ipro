import { ValidatorFn, AbstractControl } from "@angular/forms";
import { PhoneNumberUtil, PhoneNumber } from "google-libphonenumber";

const phoneNumberUtil = PhoneNumberUtil.getInstance();

export function PhoneNumberValidator(
  regionCode: string = undefined
): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    let validNumber = false;
    console.log(regionCode,control.value);
    try {
      const phoneNumber = phoneNumberUtil.parseAndKeepRawInput(
        control.value,
        regionCode
      );
      validNumber = phoneNumberUtil.isValidNumber(phoneNumber);
    } catch (e) {}
// console.log(validNumber ? null : { wrongNumber: { value: control.value } })
    return validNumber ? null : { wrongNumber: { value: control.value } };
  };
}
