export var pattern = {
  phoneNumber: '^((\\+91-?)|0)?[0-9]{10}$',
  indiaPhoneNumber: '^((\\+91-?)|0)?[6-9][0-9]{9}$',
  password:
    '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])(?!.* ).{6,50}$',
  email: '[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}',
  alphabate: '[a-zA-Z ]*$',
  alphabateSpace: '^[a-zA-Z s.-]+$',
  nickName: '^(?=.*[a-zA-Z])([a-zA-Z0-9 s]+)$',
  alphaNumeric: '^[a-zA-Z0-9]+$',
  alphaNumericTag: '^[a-zA-Z0-9#]+$',
  numeric: '^[0-9]+$',
  alphaNumericSpace: '^[a-zA-Z0-9 ]*$',
  decimalNumeric: '^(\\d*\\.)?\\d+$',
  emailOrPhone: '/^(d{10}|w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3}))$/',
  tenDigitPhonePattern: '^[0-9]{10}$',
  indianMobilePattern: '[6-9][0-9]{9}$',
  sapce: '^(?!d+$)(?:[a-zA-Z0-9][a-zA-Z0-9 @&$]*)?$',
  facebook: '/^(https?://){0,1}(www.){0,1}facebook.com/',
  twitter: '/^(?:https?://)?(?:www.)?twitter.com/(#!/)?[a-zA-Z0-9_]+$/i',
  instagram: '^(https\\:\\/\\/)?(www\\.)?(instagram\\.com)\\/.+$',
  linkedin:
    '((https?://)?((www|ww).)?linkedin.com/)((([w]{2,3})?)|([^/]+/(([w|d-&#?=])+/?){1,}))$',
  youtube:
    '/^(?:https?://)?(?:m.|www.)?(?:youtu.be/|youtube.com/(?:embed/|v/|watch?v=|watch?.+&v=))((w|-){11})(?:S+)?$/',
  pintrest: '|^http(s)?://pinterest.com/(.*)?$|i',
  url: '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?',
};
