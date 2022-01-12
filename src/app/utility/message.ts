export var message = {
  deleteConfirm: 'Are you sure that you want to delete this record?',
  activeConfirm: 'Are you sure that you want to active this record?',
  inactiveConfirm: 'Are you sure that you want to active this record?',
  required: 'This field is required',
  email: 'Please enter valid email address',
  facebook: 'Please enter valid facebook url',
  twitter: 'Please enter valid twitter url',
  instagram: 'Please enter valid instagram url',
  linkedin: 'Please enter valid linkedin url',
  youtube: 'Please enter valid youtube url',
  pintrest: 'Please enter valid pintrest url', 
  phoneNumber: 'Please enter valid phone number.',
  alphabate: 'Please enter only alphabate.',
  alphaNumeric: 'Please enter only alphanumeric.',
  numeric: 'Please enter only numeric.',
  password:
    'Please define a password that meets the following criteria: <br>1] Atleast 8 characters in total. <br>2] Atleast 1 special charater. <br>3] Atleast 1 number. <br>4] Atleast 1 upper case alphabet. <br>5] Atleast 1 lower case alphabet.',
  confirmPassword: 'Password & Confirm Password must be same.',
  acceptTerms: 'Please accpet terms and conditions.',
  changePassword: 'Password changed successfully.',
  forgetPassword: 'Please check your email.',
  onlyImageType: 'Only allow jpg, jpeg, gif & png.',
  maxLength: maxLength,
  minLength: minLength,
  fixLength: fixLength,
};

export function maxLength(number: number) {
  return 'You cannot enter more than ' + number + ' characters';
}

export function minLength(number: number) {
  return 'This must contain at least ' + number + ' characters';
}

export function fixLength(number: number) {
  return 'This must contain ' + number + ' characters';
}

export var session = {
  AUTH_TOKEN: 'AUTH_TOKEN',
  AUTH_STATUS: 'AUTH_STATUS',
  AUTH_USER: 'AUTH_USER',
};