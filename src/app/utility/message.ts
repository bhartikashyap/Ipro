export var message = {
  maxLength: maxLength,
  minLength: minLength,
  fixLength: fixLength,
};

export function maxLength(number: number,lengthMsg,characters) {
  return  lengthMsg+ number + characters;
}

export function minLength(number: number,lengthMsg,characters) {
  return lengthMsg+ number + characters;;
}

export function fixLength(number: number,lengthMsg,characters) {
  return lengthMsg+ number + characters;
}

export var session = {
  AUTH_TOKEN: "AUTH_TOKEN",
  AUTH_STATUS: "AUTH_STATUS",
  AUTH_USER: "AUTH_USER",
  BOOKING: "AUTH_BOOKING",
  SELECTED_PLAN:"SELECTED_PLAN"
};
