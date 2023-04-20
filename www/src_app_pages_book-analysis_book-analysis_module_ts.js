"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_book-analysis_book-analysis_module_ts"],{

/***/ 24362:
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ 80287:
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ 3846);
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ 67492);
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ 74740);
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ 15079);
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ 24615);
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ 24362);
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ 97215);







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ 97215:
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ 24362);

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ 34362:
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ 64172:
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ 3846:
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ 93537);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 69014);


var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ 67492:
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ 93537);
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ 44026);
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ 25480);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 69014);




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ 74740:
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ 93537);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 69014);
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ 44026);


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ 15079:
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ 93537);
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ 68920);
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ 42258);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 69014);




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ 24615:
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ 93537);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 69014);
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ 68920);
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ 39354);



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ 83974:
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}

/***/ }),

/***/ 69014:
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ 44026:
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ 93537);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 69014);

 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ 25480:
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ 74740);
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ 44026);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 69014);


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ 68920:
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../toDate/index.js */ 93537);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 69014);
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ 39354);


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ 42258:
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ 24615);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 69014);
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ 68920);
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ 39354);



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.firstWeekContainsDate);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeek, dirtyOptions);
  return date;
}

/***/ }),

/***/ 39354:
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ 78089:
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 39354);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 93537);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 69014);



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ 97889:
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;

/***/ }),

/***/ 39079:
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isValid/index.js */ 77628);
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ 5015);
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subMilliseconds/index.js */ 19176);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ 93537);
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ 80287);
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ 34362);
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ 64172);
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ 83974);
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 39354);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 69014);









 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      if (!options.useAdditionalDayOfYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ 92891:
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 69014);

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ 77628:
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ 92891);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ 93537);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 69014);



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ 53833:
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ 47168:
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ 62970:
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ 32215:
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ 50321:
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function (token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ 64856:
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ 53833);

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ 91045:
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function (token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ 25902:
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ 47168);

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function (dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ 45380:
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ 62970);
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ 32215);


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ 5015:
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ 50321);
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ 64856);
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ 91045);
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ 25902);
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ 45380);






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ 68097:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ 97889);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 69014);
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 39354);



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The previous `parse` implementation was renamed to `parseISO`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward
 *   parseISO('2016-01-01')
 *   ```
 *
 * - `parseISO` now validates separate date and time values in ISO-8601 strings
 *   and returns `Invalid Date` if the date is invalid.
 *
 *   ```javascript
 *   parseISO('2018-13-32')
 *   //=> Invalid Date
 *   ```
 *
 * - `parseISO` now doesn't fall back to `new Date` constructor
 *   if it fails to parse a string argument. Instead, it returns `Invalid Date`.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? 2 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.additionalDigits);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ 19176:
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 39354);
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ 78089);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 69014);



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ 93537:
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 69014);

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ 57832:
/*!*********************************************************************!*\
  !*** ./src/app/pages/book-analysis/book-analysis-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookAnalysisPageRoutingModule": () => (/* binding */ BookAnalysisPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _book_analysis_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book-analysis.page */ 90054);




const routes = [
    {
        path: '',
        component: _book_analysis_page__WEBPACK_IMPORTED_MODULE_0__.BookAnalysisPage
    }
];
let BookAnalysisPageRoutingModule = class BookAnalysisPageRoutingModule {
};
BookAnalysisPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BookAnalysisPageRoutingModule);



/***/ }),

/***/ 95933:
/*!*************************************************************!*\
  !*** ./src/app/pages/book-analysis/book-analysis.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookAnalysisPageModule": () => (/* binding */ BookAnalysisPageModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _book_analysis_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book-analysis-routing.module */ 57832);
/* harmony import */ var _book_analysis_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book-analysis.page */ 90054);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ 30610);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var _register_register_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../register/register.module */ 60207);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ionic-selectable */ 2710);
/* harmony import */ var _components_share_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/share-component-module */ 99663);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 93740);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 80779);















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let BookAnalysisPageModule = class BookAnalysisPageModule {
};
BookAnalysisPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_10__.IonicSelectableModule,
            _components_share_component_module__WEBPACK_IMPORTED_MODULE_3__.ShareComponentModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient],
                },
            }),
            _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicModule,
            _book_analysis_routing_module__WEBPACK_IMPORTED_MODULE_0__.BookAnalysisPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _register_register_module__WEBPACK_IMPORTED_MODULE_2__.RegisterPageModule,
        ],
        declarations: [_book_analysis_page__WEBPACK_IMPORTED_MODULE_1__.BookAnalysisPage],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__.InAppBrowser]
    })
], BookAnalysisPageModule);



/***/ }),

/***/ 90054:
/*!***********************************************************!*\
  !*** ./src/app/pages/book-analysis/book-analysis.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookAnalysisPage": () => (/* binding */ BookAnalysisPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _book_analysis_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book-analysis.page.html?ngResource */ 6630);
/* harmony import */ var _book_analysis_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book-analysis.page.scss?ngResource */ 37595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 78394);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utility/message */ 34410);
/* harmony import */ var src_app_utility_pattern__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utility/pattern */ 18434);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 39079);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ 68097);
/* harmony import */ var src_app_utility_phone_number_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utility/phone-number-validator */ 59800);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/browser */ 65821);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 93740);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 80779);




















let BookAnalysisPage = class BookAnalysisPage {
    constructor(router, navController, fb, utility, apiService, modalController, domSanit, datepipe, theInAppBrowser, platform, config, calendars, dateAdapter) {
        this.router = router;
        this.navController = navController;
        this.fb = fb;
        this.utility = utility;
        this.apiService = apiService;
        this.modalController = modalController;
        this.domSanit = domSanit;
        this.datepipe = datepipe;
        this.theInAppBrowser = theInAppBrowser;
        this.platform = platform;
        this.config = config;
        this.calendars = calendars;
        this.dateAdapter = dateAdapter;
        this.doberror = '';
        this.birthday = false;
        this.deliveryAddress = true;
        this.private = false;
        this.company = false;
        this.countires = [];
        this.ionModelOpen = false;
        this.paymentInti = false;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'no',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes', //Windows only    
        };
        this.eventSource = [];
        this.submitted = false;
        this.maxDate = new Date(new Date().setFullYear(new Date().getFullYear())).toISOString();
        this.dateValue = '';
        this.dateValue2 = '';
        this.calendar = {
            mode: 'week',
            currentDate: new Date()
        };
        this.event = {
            title: '',
            desc: '',
            startTime: null,
            endTime: '',
            allDay: true
        };
        this.modalReady = false;
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
    }
    get formControl() {
        return this.form.controls;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.initForm();
            // this.minAge();
        });
    }
    // onClick(e) {
    //   this.dp.open();
    // }
    // handleOutsideClick(e) {
    //   if (!this.dp.isOpen() || e.target.id == this.controlName
    //     || (e.target.offsetParent && e.target.offsetParent.localName.includes('ngb-datepicker'))
    //     || !(e.target.parentElement && e.target.parentElement.parentElement && !e.target.parentElement.parentElement.localName.includes('ngb-datepicker'))) {
    //     return;
    //   }
    //   if (this.dp.isOpen() && e.target.id != this.controlName) {
    //     this.dp.close();
    //   }
    // }
    // onDateChange(dt: any) {
    //   console.log(dt.month + '/' + dt.day + '/' + dt.year);
    //  //this.dob= dt.day + '-' +dt.month +'-'+ dt.year
    //  // this.form.get('dob').setValue({ year: dt.year, month: dt.month, day: dt.day });
    //   this.notify.emit(dt.month + '/' + dt.day + '/' + dt.year);
    // }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.paymentInti = false;
            yield this.getProfile();
        });
    }
    getCountries() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let result = yield this.apiService.getCountryList();
            this.countires = result.countries;
            this.selectedCountry = this.countires.filter(item => item.phoneCode == this.profile.phoneCode)[0];
            // await this.getProfile();
            console.log(this.selectedCountry);
            this.form.get("phoneCode").setValue(this.selectedCountry.phoneCode);
            this.form
                .get("phone")
                .setValidators((0,src_app_utility_phone_number_validator__WEBPACK_IMPORTED_MODULE_6__.PhoneNumberValidator)(this.selectedCountry.countryCode));
            this.form.get("phone").updateValueAndValidity();
            let country = this.countires.filter(item => item.countryId == this.profile.countryId)[0];
            this.form.get("country").setValue(country.countryName);
        });
    }
    getProfile() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let dob;
            this.selectedPlan = yield this.utility.getStorage(src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.session.SELECTED_PLAN);
            let loading = yield this.utility.presentLoading('yes');
            let result = yield this.apiService.getProfile();
            loading.dismiss();
            let selectedCountry;
            if (result.status == 1) {
                this.profile = result.data.profile ? result.data.profile : null;
                console.log(this.profile, "this.profile");
                if (this.profile) {
                    this.form.get("email").setValue(this.profile.userEmail);
                    this.form.get("phone").setValue(this.profile.phone);
                    this.form.get("streetname").setValue(this.profile.streetname);
                    this.form.get("nr").setValue(this.profile.nr);
                    this.form.get("city").setValue(this.profile.city);
                    this.form.get("zipCode").setValue(this.profile.zipCode);
                    // var date: NgbDateStruct = { year: 1789, month: 7, day: 14 };
                    // console.log(date, "date");
                    // this.form.get('dob').setValue({ year: 1989, month: 7, day: 14 });
                    this.changeDobFormat(this.profile.dob, 'profile');
                    // this.dateAdapter.toModel(this.ngbCalendar.getToday())!;
                    yield this.getCountries();
                }
            }
        });
    }
    changeDobFormat(selectedDate, type) {
        if (selectedDate != '') {
            let dob = selectedDate;
            if (type == 'profile' && selectedDate.indexOf('-') > -1) {
                dob = selectedDate.split('-');
                // console.log(dob[1] + '/' + dob[0] + '/' + dob[2])
                this.dob = { day: parseInt(dob[0]), month: parseInt(dob[1]), year: parseInt(dob[2]) }; //new date picker code
                //  this.dob = { year: parseInt(dob[0]), month: parseInt(dob[1]), day: parseInt(dob[2]) };
                this.form.get("dd").setValue(parseInt(dob[0]));
                this.form.get("mm").setValue(parseInt(dob[1]));
                this.form.get("yyyy").setValue(parseInt(dob[2]));
                // this.form.get("dob").setValue(this.dob);
                // console.log(this.dob)
                // let dobReg = new Date(dob[1] + '/' + dob[0] + '/' + dob[2]).toLocaleString('en-us', {
                //   year: 'numeric',
                //   month: 'short',
                //   day: 'numeric',
                // })
                // this.form.get('dob').setValue(dobReg);
                //  this.mydob = dobReg;
                //  console.log(this.mydob)
            }
            // else {
            //   console.log(dob[2] + '/' + dob[1] + '/' + dob[0])
            //  // this.form.get('dob').setValue({ year: 1989, month: 7, day: 14 });
            //   let dobReg = new Date(dob[2] + '/' + dob[1] + '/' + dob[0]).toLocaleString('en-us', {
            //     year: 'numeric',
            //     month: 'short',
            //     day: 'numeric',
            //   });
            //   return dobReg;
            // }
        }
    }
    // minAge() {
    //   var yearMS = 365 * (1000 * 60 * 60 * 24); // 365 days
    //   var now = new Date().getTime();
    //   var maxDobMS = now - (18 * yearMS);
    //   var minDobMS = now - (100.5 * yearMS);
    //   this.maxDobString = new Date(maxDobMS).toISOString().slice(0, 10);
    //   this.minDobString = new Date(minDobMS).toISOString().slice(0, 10);
    //   let maxDate = this.maxDobString.split('-');
    //   let minDate = this.minDobString.split('-')
    //   this.maxDobString = { year: parseInt(maxDate[0]), month: parseInt(maxDate[1]), day: parseInt(maxDate[2]) };
    //   this.dob = { year: parseInt(maxDate[0]), month: parseInt(maxDate[1]), day: parseInt(maxDate[2]) };
    //   this.form.get("dob").setValue(this.dob);
    //   this.minDobString = { year: parseInt(minDate[0]), month: parseInt(minDate[1]), day: parseInt(minDate[2]) };
    //   // console.log(this.config.maxDate, this.config.minDate)
    //   // this.maxDobString =  this.changeDobFormat(this.maxDobString,"max");
    //   // this.minDobString = this.changeDobFormat(this.minDobString,"min");
    //   //  this.mydob =new Date(this.maxDobString).toISOString() ;
    //   console.log(this.maxDobString, this.minDobString);
    // }
    initForm() {
        this.form = this.fb.group({
            selected_plan: ["", []],
            role: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern(src_app_utility_pattern__WEBPACK_IMPORTED_MODULE_5__.pattern.email)]],
            streetname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(100)]],
            nr: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(50)]],
            city: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(100)]],
            zipCode: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern(src_app_utility_pattern__WEBPACK_IMPORTED_MODULE_5__.pattern.numeric),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(10),
                ],
            ],
            country: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            phone: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            phoneCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            dd: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            mm: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            yyyy: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            additionalAddressInfo: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(200)]],
            delivery_address_added: [true],
            paymentId: [""],
            companyName: [""],
            taxId: [""],
            deliveryFirstName: [""],
            deliveryLastName: [""],
            deliveryCompanyName: [""],
            deliveryStreetName: [""],
            deliveryHouseNumber: [""],
            deliveryAdditionalAddressInfo: [""],
            deliveryZipcode: [""],
            deliveryCity: [""],
            deliveryCountry: [""],
            private: [false],
            company: [false],
        });
        this.submitted = false;
        this.deliveryAddress = true;
        this.private = true;
        this.form.get("private").setValue(this.private);
        this.form.get("role").setValue("Private Person");
        this.company = false;
        console.log(this.form);
        let messages = this.utility.translateText('MSG');
        this.validationMessage = {
            selected_plan: [{ type: "required", message: messages.required }],
            role: [{ type: "required", message: messages.required }],
            email: [
                { type: "required", message: messages.required },
                { type: "pattern", message: messages.email },
            ],
            streetname: [
                { type: "required", message: messages.required },
                { type: "maxlength", message: src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.message.maxLength(100, messages.maxLength, messages.characters) },
            ],
            nr: [
                { type: "required", message: messages.required },
                { type: "maxlength", message: src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.message.maxLength(50, messages.maxLength, messages.characters) },
            ],
            city: [
                { type: "required", message: messages.required },
                { type: "maxlength", message: src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.message.maxLength(100, messages.maxLength, messages.characters) },
            ],
            zipCode: [
                { type: "required", message: messages.required },
                { type: "maxlength", message: src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.message.maxLength(10, messages.maxLength, messages.characters) },
                { type: "pattern", message: messages.numeric },
            ],
            country: [{ type: "required", message: messages.required }],
            phone: [
                { type: "required", message: messages.required },
                // { type: "pattern", message: message.phoneNumber },
                { type: "wrongNumber", message: messages.phoneNumber },
            ],
            phoneCode: [
                { type: "required", message: messages.required },
                { type: "pattern", message: messages.numeric },
            ],
            dob: [{ type: "required", message: messages.required }],
            dd: [{ type: "required", message: messages.required }, { type: "pattern", message: src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.message.dobFilter(1, 31, this.form.get("dd").value, "date") }
            ],
            mm: [{ type: "required", message: messages.required }, { type: "pattern", message: src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.message.dobFilter(1, 12, this.form.get("mm").value, "date") }
            ],
            yyyy: [{ type: "required", message: messages.required }, { type: "pattern", message: src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.message.dobFilter(1992, 2005, this.form.get("yyyy").value, "year") }
            ],
            additionalAddressInfo: [
                { type: "required", message: messages.required },
                { type: "maxlength", message: src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.message.maxLength(200, messages.maxLength, messages.characters) },
            ],
            delivery_address_added: [{ type: "required", message: messages.required }],
            paymentId: [{ type: "required", message: messages.required }],
            companyName: [
                { type: "required", message: messages.required },
                { type: "maxlength", message: src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.message.maxLength(200, messages.maxLength, messages.characters) },
            ],
            taxId: [
                { type: "required", message: messages.required },
                { type: "maxlength", message: src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.message.maxLength(200, messages.maxLength, messages.characters) },
            ],
            deliveryFirstName: [
                { type: "required", message: messages.required },
                // { type: "pattern", message: messages.alphabate },
                { type: "maxlength", message: src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.message.maxLength(100, messages.maxLength, messages.characters) },
            ],
            deliveryLastName: [
                { type: "required", message: messages.required },
                // { type: "pattern", message: messages.alphabate },
                { type: "maxlength", message: src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.message.maxLength(100, messages.maxLength, messages.characters) },
            ],
            deliveryCompanyName: [
                { type: "maxlength", message: src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.message.maxLength(200, messages.maxLength, messages.characters) },
            ],
            deliveryStreetName: [
                { type: "required", message: messages.required },
                { type: "maxlength", message: src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.message.maxLength(100, messages.maxLength, messages.characters) },
            ],
            deliveryHouseNumber: [
                { type: "required", message: messages.required },
                { type: "maxlength", message: src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.message.maxLength(50, messages.maxLength, messages.characters) },
            ],
            deliveryAdditionalAddressInfo: [
                { type: "required", message: messages.required },
                { type: "maxlength", message: src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.message.maxLength(200, messages.maxLength, messages.characters) },
            ],
            deliveryZipcode: [
                { type: "required", message: messages.required },
                { type: "maxlength", message: src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.message.maxLength(10, messages.maxLength, messages.characters) },
                { type: "pattern", message: messages.numeric },
            ],
            deliveryCity: [
                { type: "required", message: messages.required },
                { type: "maxlength", message: src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.message.maxLength(100, messages.maxLength, messages.characters) },
            ],
            deliveryCountry: [
                { type: "required", message: messages.required },
                { type: "maxlength", message: src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.message.maxLength(100, messages.maxLength, messages.characters) },
            ],
        };
    }
    // confirm() {
    //   this.datetime.confirm();
    // }
    // reset1() {
    //   this.datetime.reset();
    // }
    // calculate_age(dob) {
    //   var month_diff = Date.now() - dob.getTime();
    //   //convert the calculated difference in date format
    //   var age_dt = new Date(month_diff);
    //   //extract year from date    
    //   var year = age_dt.getUTCFullYear();
    //   //now calculate the age of the user
    //   var age = Math.abs(year - 1970);
    //   console.log(age)
    //   if (age >= 18) {
    //     this.doberror = "";
    //     return true;
    //   }
    //   else {
    //     this.doberror = this.utility.translateText('BOOKING_ANALYSIS').AGE_ERROR;
    //     return false;
    //   }
    // }
    formatDate(value) {
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_13__["default"])(value), 'MMM dd yyyy');
    }
    openCart() {
        this.utility.goNext("/tabs/cart");
    }
    reset() {
        this.submitted = false;
        // this.private = true;
        // this.company = false;
        this.deliveryAddress = true;
    }
    searchCountry(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.utility.searchData(event, this.countires, 'countryName');
        });
    }
    selectCountry(event, type, addType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let loading = yield this.utility.presentLoading();
            console.log(this.form.get("phone"));
            let phValue = this.form.get("phone").value;
            if (type === "countryname" && addType == 'billing') {
                this.form.get("country").setValue(event.value.countryName);
            }
            else if (type === "countryname" && addType == 'delivery') {
                this.form.get("deliveryCountry").setValue(event.value.countryName);
            }
            if (type === "phonecode") {
                this.selectedCountry = event.value;
                this.form.get("phoneCode").setValue(event.value.phoneCode);
                this.form
                    .get("phone")
                    .setValidators((0,src_app_utility_phone_number_validator__WEBPACK_IMPORTED_MODULE_6__.PhoneNumberValidator)(event.value.countryCode));
                this.form.get("phone").updateValueAndValidity();
            }
            loading.dismiss();
        });
    }
    companyChange(event) {
        if (this.company == true) {
            this.form.get("company").setValue(this.company);
            this.private = false;
            this.form.get("private").setValue(this.private);
            this.form.get("role").setValue("Company");
            this.form.get("private").updateValueAndValidity();
            this.form.get("role").updateValueAndValidity();
            this.form.get("taxId").setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(200)]);
            this.form.get("taxId").updateValueAndValidity();
            // this.form.get("dd").clearValidators();
            // this.form.get("dd").setValue('')
            // this.form.get("dd").updateValueAndValidity();
            // this.form.get("mm").clearValidators();
            // this.form.get("mm").setValue('')
            // this.form.get("mm").updateValueAndValidity();
            // this.form.get("yyyy").clearValidators();
            // this.form.get("yyyy").setValue('')
            // this.form.get("yyyy").updateValueAndValidity();
            this.form
                .get("deliveryLastName")
                .setValidators([
                // Validators.pattern(pattern.alphabate),
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(100),
            ]);
            this.form.get("deliveryLastName").updateValueAndValidity();
            this.form
                .get("deliveryLastName")
                .setValidators([
                // Validators.pattern(pattern.alphabate),
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(100),
            ]);
            this.form.get("deliveryFirstName").updateValueAndValidity();
            this.form
                .get("companyName")
                .setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(200)]);
            this.form.get("companyName").updateValueAndValidity();
        }
        else {
            this.private = true;
            this.form.get("private").setValue(this.private);
            this.form.get("role").setValue("Private Person");
            this.form.get("private").updateValueAndValidity();
            this.form.get("role").updateValueAndValidity();
            this.form.get("taxId").clearValidators();
            this.form.get("taxId").updateValueAndValidity();
            this.form.get("companyName").clearValidators();
            this.form.get("companyName").updateValueAndValidity();
        }
    }
    deliveryChange(event) {
        this.form.get("delivery_address_added").setValue(this.deliveryAddress);
        if (!this.deliveryAddress) {
            this.form
                .get("deliveryFirstName")
                .setValidators([
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required,
                // Validators.pattern(pattern.alphabate),
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(100),
            ]);
            this.form.get("deliveryFirstName").updateValueAndValidity();
            this.form
                .get("deliveryLastName")
                .setValidators([
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required,
                // Validators.pattern(pattern.alphabate),
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(100),
            ]);
            this.form.get("deliveryLastName").updateValueAndValidity();
            this.form
                .get("deliveryStreetName")
                .setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(100)]);
            this.form.get("deliveryStreetName").updateValueAndValidity();
            this.form
                .get("deliveryHouseNumber")
                .setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(50)]);
            this.form.get("deliveryHouseNumber").updateValueAndValidity();
            this.form
                .get("deliveryAdditionalAddressInfo")
                .setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(200)]);
            this.form.get("deliveryAdditionalAddressInfo").updateValueAndValidity();
            this.form
                .get("deliveryZipcode")
                .setValidators([
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern(src_app_utility_pattern__WEBPACK_IMPORTED_MODULE_5__.pattern.numeric),
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(10),
            ]);
            this.form.get("deliveryZipcode").updateValueAndValidity();
            this.form
                .get("deliveryCity")
                .setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(100)]);
            this.form.get("deliveryCity").updateValueAndValidity();
            this.form
                .get("deliveryCountry")
                .setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(100)]);
            this.form.get("deliveryCountry").updateValueAndValidity();
        }
        else {
            this.form.get("deliveryFirstName").clearValidators();
            this.form.get("deliveryFirstName").updateValueAndValidity();
            this.form.get("deliveryLastName").clearValidators();
            this.form.get("deliveryLastName").updateValueAndValidity();
            this.form.get("deliveryStreetName").clearValidators();
            this.form.get("deliveryStreetName").updateValueAndValidity();
            this.form.get("deliveryHouseNumber").clearValidators();
            this.form.get("deliveryHouseNumber").updateValueAndValidity();
            this.form.get("deliveryAdditionalAddressInfo").clearValidators();
            this.form.get("deliveryAdditionalAddressInfo").updateValueAndValidity();
            this.form.get("deliveryZipcode").clearValidators();
            this.form.get("deliveryZipcode").updateValueAndValidity();
            this.form.get("deliveryCity").clearValidators();
            this.form.get("deliveryCity").updateValueAndValidity();
            this.form.get("deliveryCountry").clearValidators();
            this.form.get("deliveryCountry").updateValueAndValidity();
        }
    }
    submit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.submitted = true;
            this.doberror = '';
            if (this.form.get("company").value) {
                if (this.form.get("deliveryFirstName").value != "" && this.form.get("deliveryFirstName").value != undefined && this.form.get("deliveryFirstName").value != null && this.form.get("deliveryLastName").value != "" && this.form.get("deliveryLastName").value != undefined && this.form.get("deliveryLastName").value != null) {
                    this.form
                        .get("companyName")
                        .setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(200)]);
                    this.form.get("companyName").updateValueAndValidity();
                }
                else if (this.form.get("companyName").value != "" && this.form.get("companyName").value != undefined && this.form.get("companyName").value != null) {
                    this.form
                        .get("deliveryLastName")
                        .setValidators([
                        // Validators.pattern(pattern.alphabate),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(100),
                    ]);
                    this.form.get("deliveryLastName").updateValueAndValidity();
                    this.form
                        .get("deliveryFirstName")
                        .setValidators([
                        // Validators.pattern(pattern.alphabate),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(100),
                    ]);
                    this.form.get("deliveryFirstName").updateValueAndValidity();
                }
            }
            console.log(this.form.valid);
            console.log(this.form, this.form.get("dd").value);
            // if(!this.form.get("company").value){
            if (this.form.get("dd").value < 1 || this.form.get("dd").value > 31 || this.form.get("mm").value < 1 || this.form.get("mm").value > 12 || this.form.get("yyyy").value < 1922 || this.form.get("yyyy").value > 2005) {
                this.doberror = 'Error';
            }
            else {
                this.doberror = '';
            }
            // }
            if (this.form.valid && this.doberror == '') {
                this.submitted = false;
                let formData = this.form.getRawValue();
                formData.countryId = this.countires.filter(item => item.countryName == formData.country)[0].countryId;
                if (this.profile.userEmail != formData.email) {
                    let checkEmail = yield this.apiService.checkEmail(formData.email);
                    if (checkEmail.status == 0) {
                        this.utility.presentToast(checkEmail.msg, "bottom");
                        return false;
                    }
                }
                if (formData.taxId) {
                    let checkTaxId = yield this.apiService.checkTaxId(this.profile.countryId, formData.taxId);
                    if (checkTaxId.status == 0) {
                        this.utility.presentToast(checkTaxId.msg, "bottom");
                        return false;
                    }
                }
                (formData.selected_plan = formData.selected_plan
                    ? formData.selected_plan
                    : "body analysis"),
                    console.log(formData);
                this.utility.setStorage(src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.session.BOOKING, JSON.stringify(formData));
                this.reset();
                this.buyCart(formData);
            }
        });
    }
    // openDate() {
    //   this.birthday = !this.birthday;
    // }
    // changeDate(val: any) {
    //   this.selectedDate = val;
    //   console.log(val);
    //   let slectedDate = val.split('T')[0].split('-');
    //   console.log(slectedDate[1] + '/' + slectedDate[2] + '/' + slectedDate[0])
    //   slectedDate = new Date(slectedDate[1] + '/' + slectedDate[2] + '/' + slectedDate[0])
    //   var age = this.calculate_age(slectedDate);
    //   console.log(age);
    //   this.form.get("dob").setValue(format(parseISO(val), "MMM dd yyyy"));
    //   this.birthday = false;
    // }
    buyCart(formdata) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.profile, "this.profile");
            console.log(formdata, "this.formdata");
            this.latest_date = '';
            if (!formdata) {
                this.utility.presentToast(this.utility.translateText("BOOKING_ANALYSIS").NO_BOOKING, "bottom");
                return false;
            }
            else {
                this.latest_date = formdata.dd + "-" + formdata.mm + "-" + formdata.yyyy;
                // if (formdata.dob) {
                //   // let dob = new Date(formdata.dob);
                //   console.log(formdata.dob)
                //   // console.log(dob)
                //   this.latest_date = this.dob.day+"-"+this.dob.month+"-"+this.dob.year;
                //   //this.datepipe.transform(dob, 'dd-MM-yyyy');
                // }
                var params = {
                    selected_plan: this.selectedPlan ? this.selectedPlan : '',
                    email: formdata.email ? formdata.email : '',
                    countryId: formdata.countryId ? Number(formdata.countryId) : 0,
                    nr: formdata.nr ? formdata.nr : '',
                    streetname: formdata.streetname ? formdata.streetname : '',
                    city: formdata.city ? formdata.city : '',
                    zipCode: formdata.zipCode ? Number(formdata.zipCode) : '',
                    dob: this.latest_date,
                    paymentId: this.paymentId,
                    role: formdata.role,
                    country: formdata.country,
                    countryName: formdata.country,
                    phone: formdata.phone,
                    phoneCode: formdata.phoneCode,
                    companyName: formdata.companyName,
                    taxId: formdata.taxId,
                    additionalAddressInfo: formdata.additionalAddressInfo,
                    delivery_address_added: !formdata.delivery_address_added
                };
                if (!formdata.delivery_address_added) {
                    params["deliveryFirstName"] = formdata.deliveryFirstName,
                        params["deliveryLastName"] = formdata.deliveryLastName,
                        params["deliveryCompanyName"] = formdata.deliveryCompanyName,
                        params["deliveryStreetName"] = formdata.deliveryStreetName,
                        params["deliveryHouseNumber"] = formdata.deliveryHouseNumber,
                        params["deliveryAdditionalAddressInfo"] = formdata.deliveryAdditionalAddressInfo,
                        params["deliveryZipcode"] = formdata.deliveryZipcode,
                        params["deliveryCity"] = formdata.deliveryCity,
                        params["deliveryCountry"] = formdata.deliveryCountry;
                }
                console.log(params, "this.params");
                let promoCode = yield this.utility.getStorage('promocode');
                if (promoCode != null && promoCode != undefined) {
                    params["promoCode"] = promoCode;
                }
                let res = yield this.apiService.cartPayment(params);
                this.utility.upadteApp = false;
                if (res.status) {
                    this.paymentId = res.paymentId;
                    if (promoCode != null && promoCode != undefined) {
                        this.utility.removeStorage('promocode');
                        this.paymentUrl = res.response.return_url;
                    }
                    else {
                        this.paymentUrl = res.response.result.redirect_url;
                    }
                    params['paymentId'] = res.paymentId;
                    if (this.paymentUrl) {
                        //this.paymentUrl = this.domSanit.bypassSecurityTrustResourceUrl(this.paymentUrl)
                    }
                    this.validatePayment(params, 0);
                    // this.paymentInti = true;
                    this.inAppBrowser(this.paymentUrl);
                    // let url:any = await this.utility.changeMenu();
                    //   this.router.navigate([url]);
                }
                else {
                    this.utility.presentToast(this.utility.translateText('MSG').someissueInNetwork, "bottom");
                    return false;
                }
            }
        });
    }
    inAppBrowser(paymentUrl) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            // if (this.platform.is('android')) {
            let target = "_blank";
            this.openPage = this.theInAppBrowser.create(paymentUrl, target, this.options);
            this.openPage.on('exit').subscribe(event => {
                console.log(event, 'exit');
                this.onManualClose();
                // this.paymentInti = false;
            });
            this.openPage.on('loadstart').subscribe(event => {
                console.log(event);
                // this.paymentInti = false;
            });
            this.openPage.on('loadstop').subscribe(event => {
                console.log(event);
                // this.paymentInti = false;
            });
            // } else {
            //   Browser.open({ url: paymentUrl });
            //   Browser.addListener('browserPageLoaded', () => { }).then((info) => {
            //     console.log(info);
            //   })
            //   Browser.addListener('browserFinished', () => { }).then((info) => {
            //     console.log(info);
            //     this.paymentInti = false;
            //   })
            // }
        });
    }
    loaderHide() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.paymentInti = false;
        });
    }
    closeBrowser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            // if (this.platform.is('android')) {
            this.openPage.close();
            // } else {
            //   Browser.close()
            // }
        });
    }
    getPayment() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let getLastPayments = yield this.apiService.getLastPayments();
            if (getLastPayments === null || getLastPayments === void 0 ? void 0 : getLastPayments.status) {
                this.utility.getLastPayments = getLastPayments === null || getLastPayments === void 0 ? void 0 : getLastPayments.data;
            }
        });
    }
    onManualClose() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            console.log(_capacitor_browser__WEBPACK_IMPORTED_MODULE_7__.Browser);
            // if (this.platform.is('android')) {
            // this.openPage.on('loadstop').subscribe(event => {
            //   console.log(event);
            //   // this.paymentInti = false;
            // })
            //  this.openPage.on('exit').subscribe(event => {
            //   console.log(event, 'exit');
            //   // this.paymentInti = false;
            // })
            if (this.apiPaymentStatus.toLowerCase() == "payment not completed") {
                this.validatePayment(this.userBillingAddress, 0);
                this.utility.paymnetCompleted = false;
            }
            else if (this.apiPaymentStatus.toLowerCase() == "payment completed") {
                this.buyNow(this.userBillingAddress, this.apiPaymentStatus, this.paymentId);
                this.utility.paymnetCompleted = true;
            }
            else if (this.apiPaymentStatus.toLowerCase() == "payment cancelled") {
                this.utility.presentAlert("", "", [], this.utility.translateText("BOOKING_ANALYSIS").payment_cancelled, [{
                        text: this.utility.translateText("MODALS").BUTTONS.OK,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            this.paymentInti = false;
                            //this.router.navigate([url]);
                        }
                    }]);
            }
            else {
                // this.paymentInti =false;
            }
            // } else {
            // Browser.addListener('browserPageLoaded', () => { }).then((info) => {
            //   console.log(info);
            //   this.paymentInti = false;
            // })
            // Browser.addListener('browserFinished', () => { }).then((info) => {
            //   console.log(info);
            //   this.paymentInti = false;
            // })
            //  }
        });
    }
    validatePayment(userBillingData, redirections) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let redirection = redirections;
            this.userBillingAddress = userBillingData;
            let result = yield this.apiService.paymentStatus({
                paymentId: this.paymentId
            });
            this.apiPaymentStatus = result === null || result === void 0 ? void 0 : result.msg;
            if (this.apiPaymentStatus.toLowerCase() == "payment not completed") {
                setTimeout(() => {
                    // if (this.router.url == '/tabs/book-analysis') {
                    this.utility.paymnetCompleted = false;
                    console.log(this.paymentUrl);
                    if ((result === null || result === void 0 ? void 0 : result.returned) == '1') {
                        this.closeBrowser();
                        // this.getPayment();
                        if (!redirection) {
                            this.redirectPage(result);
                            redirection++;
                        }
                    }
                    // else{
                    this.validatePayment(userBillingData, redirection);
                    // }
                    // }
                }, 2000);
            }
            else if (this.apiPaymentStatus.toLowerCase() == "payment completed") {
                this.apiPaymentStatus = "completed";
                // this.buyNow(this.userBillingAddress, this.apiPaymentStatus, this.paymentId);
                this.utility.paymnetCompleted = true;
                if (result.redirect_to_questionnaire.toLowerCase() == 'no') {
                    let result = yield this.apiService.getProfile();
                    if (result.status == 1) {
                        let profile = result.data.profile ? result.data.profile : null;
                        this.utility.setStorage('userRole', profile.userType);
                        this.utility.setStorage('CHANGE_DASH', profile.userType);
                    }
                    let url = yield this.utility.changeMenu();
                    this.router.navigate([url]);
                }
                else {
                    // this.router.navigate(["/questionare"])
                }
            }
            else if (this.apiPaymentStatus.toLowerCase() == "payment cancelled") {
                this.apiPaymentStatus = "cancelled";
                this.closeBrowser();
                // this.getPayment();
                this.utility.presentAlert("", "", [], this.utility.translateText("BOOKING_ANALYSIS").payment_cancelled, [{
                        text: this.utility.translateText("MODALS").BUTTONS.OK,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            this.paymentInti = false;
                        }
                    }]);
            }
        });
    }
    redirectPage(result) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if ((result === null || result === void 0 ? void 0 : result.redirect_to_questionnaire.toLowerCase()) == 'no') {
                let result = yield this.apiService.getProfile();
                if (result.status == 1) {
                    let profile = result.data.profile ? result.data.profile : null;
                    this.utility.setStorage('userRole', profile.userType);
                    this.utility.setStorage('CHANGE_DASH', profile.userType);
                }
                let url = yield this.utility.changeMenu();
                this.router.navigate([url]);
            }
            else {
                this.router.navigate(["/questionare"]);
            }
        });
    }
    buyNow(userBillingData, paymentStatus, paymentId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.closeBrowser();
            // this.ionModelOpen = false;
            this.profile.paymentId = this.paymentId;
            let params;
            // if (this.profile.role == 'Prospect') {
            params = userBillingData;
            params.paymentId = paymentId;
            // }
            // else {
            //   params = {
            //     paymentId: this.paymentId
            //   }
            //  };
            console.log(params, "finalData");
            let data = yield this.apiService.buyNow(params);
            if (data.status == 1) {
                this.utility.upadteApp = true;
                this.utility.cartNo = 0;
                let memberShipPurachsed = yield this.utility.getStorage('memberShipPurachsed');
                this.utility.presentToast(this.utility.translateText('MSG').paymentIntiated, "bottom");
                //this.navController.
                if (data.redirect_to_questionnaire.toLowerCase() == 'no') {
                    let result = yield this.apiService.getProfile();
                    if (result.status == 1) {
                        let profile = result.data.profile ? result.data.profile : null;
                        this.utility.setStorage('userRole', profile.userType);
                        this.utility.setStorage('CHANGE_DASH', profile.userType);
                    }
                    let url = yield this.utility.changeMenu();
                    this.router.navigate([url]);
                }
                else {
                    this.router.navigate(["/questionare"]);
                }
                this.paymentInti = false;
            }
            else {
                this.utility.presentToast(this.utility.translateText('MSG').someissueInNetwork, "bottom");
                return false;
            }
        });
    }
};
BookAnalysisPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.NavController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.DomSanitizer },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__.InAppBrowser },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.Platform },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbInputDatepickerConfig },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbCalendar },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbDateAdapter }
];
BookAnalysisPage.propDecorators = {
    datetime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonDatetime, { static: true },] }],
    controlName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    dp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['dp',] }],
    notify: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output }]
};
BookAnalysisPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: "app-book-analysis",
        template: _book_analysis_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbInputDatepickerConfig],
        styles: [_book_analysis_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BookAnalysisPage);



/***/ }),

/***/ 37595:
/*!************************************************************************!*\
  !*** ./src/app/pages/book-analysis/book-analysis.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".register-img-layer {\n  display: block;\n  margin-top: 30px;\n}\n.register-img-layer img {\n  width: 180px;\n  margin: auto;\n  display: block;\n}\n.register-img {\n  display: block;\n  background: url('register.jpeg');\n  width: 285px;\n  height: 145px;\n  border-radius: 15px;\n  margin: 30px auto 20px auto;\n  background-position: center;\n}\n.register-header {\n  padding-top: 15px !important;\n}\n.register-header h1 {\n  margin: 0px;\n  font-size: 24px;\n  color: #666666;\n  font-style: normal;\n  font-weight: normal;\n  text-align: left;\n  margin-left: 20px;\n}\n.filled-data {\n  margin-left: 20px;\n  padding-top: 20px !important;\n}\n.filled-data h3 {\n  margin: 5px;\n}\n.filled-data p {\n  margin: 5px;\n}\n.dont-know {\n  color: #6d6d6d;\n  font-size: 15px;\n  font-weight: 700;\n  text-decoration: none;\n  text-align: center;\n  width: 100%;\n  display: block;\n  margin-top: 20px;\n  margin-bottom: 15px;\n}\n.dont-know span {\n  color: #a9d5c1;\n  font-weight: 400;\n}\nform {\n  padding: 5px;\n  padding-top: 0px;\n}\nform .form-group {\n  position: relative;\n  --inner-padding-end: 5px !important;\n  margin-top: 10px;\n}\nform ion-input,\nform ion-select,\nform ionic-selectable {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  border: 1px solid #d6d6d6 !important;\n  height: 45px;\n  width: 100%;\n  max-width: 100%;\n  border-radius: 5px !important;\n  padding: 0px 11px !important;\n  --padding-bottom: 0px;\n  --padding-top: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0 !important;\n}\nform ion-label.label-floating {\n  position: relative;\n  top: 3px;\n  left: 10px;\n  font-size: 12px !important;\n  color: gray !important;\n}\nform .password-input {\n  position: relative;\n}\nform .password-input ion-input {\n  --padding-bottom: 0px;\n  --padding-top: 0px;\n  --padding-start: 0px;\n  --padding-end: 40px;\n}\nform .password-input ion-icon {\n  position: absolute;\n  bottom: 10px;\n  right: 20px;\n  font-size: 25px;\n  z-index: 9999;\n}\nform .forgot-password {\n  color: #6d6d6d;\n  font-size: 12px;\n  font-weight: 400;\n  text-decoration: none;\n}\nform .dont-know {\n  color: #6d6d6d;\n  font-size: 12px;\n  font-weight: 400;\n  text-decoration: none;\n  text-align: center;\n  width: 100%;\n  display: block;\n  margin-top: 20px;\n}\nform .dont-know span {\n  color: #ff662a;\n}\nform .btns {\n  height: 40px;\n  font-size: 12px;\n  font-weight: 600;\n  --border-radius: 4px;\n  margin: 20px;\n}\nform ion-item.form-group.country-group {\n  top: 2px;\n  position: relative;\n  width: 70px;\n  border: 1px solid #d4d4d4;\n  height: 40px;\n  border-radius: 4px;\n  color: #727272;\n  font-size: 12px;\n}\nform .activation-code {\n  top: 32px;\n  position: absolute;\n  border-radius: 4px;\n  color: #6d6d6d;\n  font-size: 12px;\n}\nform .activation-code p {\n  margin: 0px;\n}\nform .activation-code p.find-label {\n  width: 100%;\n  color: #a9d5c1;\n}\nform .phone-code-div {\n  padding: 0px !important;\n  display: flex;\n  margin-right: 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\nform .phone-code-div span {\n  width: 20px;\n}\nform .phone-ion {\n  width: 82px;\n  border: 0px !important;\n}\nform .phone-ion .ionic-selectable-icon {\n  display: none !important;\n}\nform div {\n  padding: 1px 10px;\n}\nform .check-div {\n  display: flex;\n  padding-right: 20px;\n}\nform .check-div ion-checkbox {\n  margin-left: 2px;\n  margin-top: 0px;\n}\n.my-search-class {\n  --height: 500px;\n  --width: 80%;\n}\nion-datetime {\n  position: absolute !important;\n  bottom: 20% !important;\n  max-width: none !important;\n  left: 10%;\n  right: 10%;\n}\n.birthday {\n  --box-shadow:none;\n  margin: auto;\n  --background: transparent !important;\n  align-items: unset;\n}\n.hidden {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2stYW5hbHlzaXMucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vaXBybyUyMDIvc3JjL2FwcC9wYWdlcy9ib29rLWFuYWx5c2lzL2Jvb2stYW5hbHlzaXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDQ0Y7QURBRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0VKO0FEQ0E7RUFDRSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtBQ0VGO0FEQ0E7RUFDRSw0QkFBQTtBQ0VGO0FERUU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FKO0FER0E7RUFDRSxpQkFBQTtFQUNBLDRCQUFBO0FDQUY7QURDRTtFQUNFLFdBQUE7QUNDSjtBRENFO0VBQ0UsV0FBQTtBQ0NKO0FERUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNFSjtBRENBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDRUY7QURERTtFQUNFLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQ0dKO0FEREU7OztFQUdFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQ0dKO0FEV0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtBQ1RKO0FEV0U7RUFDRSxrQkFBQTtBQ1RKO0FEVUk7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQ1JOO0FEVUk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNSTjtBRFdFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDVEo7QURXRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ1RKO0FEVUk7RUFDRSxjQUFBO0FDUk47QURXRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNUSjtBRFdFO0VBQ0UsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNUSjtBRFdFO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ1RKO0FEVUk7RUFDRSxXQUFBO0FDUk47QURVSTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FDUk47QURZRTtFQUVFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ1hKO0FEY0U7RUFDRSxXQUFBO0FDWko7QURnQkU7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7QUNkSjtBRGlCRTtFQUNDLHdCQUFBO0FDZkg7QURpQkM7RUFDQyxpQkFBQTtBQ2ZGO0FEaUJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDZkY7QURpQkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNmRjtBRG9CQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDakJGO0FEb0JBO0VBQ0UsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNqQkY7QUR5QkE7RUFHRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FDeEJGO0FENkJBO0VBQ0UsYUFBQTtBQzFCRiIsImZpbGUiOiJib29rLWFuYWx5c2lzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3Rlci1pbWctbGF5ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG4ucmVnaXN0ZXItaW1nIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9yZWdpc3Rlci5qcGVnKTtcclxuICB3aWR0aDogMjg1cHg7XHJcbiAgaGVpZ2h0OiAxNDVweDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIG1hcmdpbjogMzBweCBhdXRvIDIwcHggYXV0bztcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZWdpc3Rlci1oZWFkZXIge1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgLy8gd2lkdGg6IDE3MnB4OyBcclxuICAvLyBoZWlnaHQ6IDQ4cHg7XHJcblxyXG4gIGgxIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIH1cclxufVxyXG4uZmlsbGVkLWRhdGF7XHJcbiAgbWFyZ2luLWxlZnQ6MjBweDtcclxuICBwYWRkaW5nLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG4gIGgze1xyXG4gICAgbWFyZ2luOjVweFxyXG4gIH1cclxuICBwe1xyXG4gICAgbWFyZ2luOjVweFxyXG4gIH1cclxufVxyXG4uZG9udC1rbm93IHtcclxuICBjb2xvcjogIzZkNmQ2ZDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBzcGFuIHtcclxuICAgIGNvbG9yOiAjYTlkNWMxO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbn1cclxuZm9ybSB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgLmZvcm0tZ3JvdXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICBpb24taW5wdXQsXHJcbiAgaW9uLXNlbGVjdCAsXHJcbiAgaW9uaWMtc2VsZWN0YWJsZSB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZDZkNiAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDBweCAxMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC8vIGlvbi1pdGVtLml0ZW0taGFzLXZhbHVlIGlvbi1sYWJlbCxcclxuICAvLyBpb24taXRlbS5pdGVtLWhhcy1mb2N1cyBpb24tbGFiZWwge1xyXG4gIC8vICAgdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgLy8gICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAvLyAgIHotaW5kZXg6IDk5OTtcclxuICAvLyAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgLy8gICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAvLyAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gIC8vICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIC8vIH1cclxuXHJcbiAgaW9uLWxhYmVsLmxhYmVsLWZsb2F0aW5nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogM3B4O1xyXG4gICAgbGVmdDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IGdyYXkgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnBhc3N3b3JkLWlucHV0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgICAgLS1wYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogNDBweDtcclxuICAgIH1cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDEwcHg7XHJcbiAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5mb3Jnb3QtcGFzc3dvcmQge1xyXG4gICAgY29sb3I6ICM2ZDZkNmQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICAuZG9udC1rbm93IHtcclxuICAgIGNvbG9yOiAjNmQ2ZDZkO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGNvbG9yOiAjZmY2NjJhO1xyXG4gICAgfVxyXG4gIH1cclxuICAuYnRucyB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgfVxyXG4gIGlvbi1pdGVtLmZvcm0tZ3JvdXAuY291bnRyeS1ncm91cCB7XHJcbiAgICB0b3A6IDJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDRkNDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGNvbG9yOiAjNzI3MjcyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAuYWN0aXZhdGlvbi1jb2RlIHtcclxuICAgIHRvcDogMzJweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGNvbG9yOiAjNmQ2ZDZkO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgfVxyXG4gICAgcC5maW5kLWxhYmVsIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGNvbG9yOiAjYTlkNWMxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBob25lLWNvZGUtZGl2e1xyXG4gICAgLy8gd2lkdGg6IDQwJTtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gIH1cclxuICAucGhvbmUtY29kZS1kaXYgc3BhbntcclxuICAgIHdpZHRoOjIwcHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgLnBob25lLWlvbntcclxuICAgIHdpZHRoOjgycHg7IFxyXG4gICAgYm9yZGVyOjBweCAhaW1wb3J0YW50O1xyXG5cclxuICB9XHJcbiAgLnBob25lLWlvbiAuaW9uaWMtc2VsZWN0YWJsZS1pY29uIHtcclxuICAgZGlzcGxheTpub25lICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBkaXZ7XHJcbiAgcGFkZGluZzogMXB4IDEwcHg7XHJcbn1cclxuLmNoZWNrLWRpdntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuLmNoZWNrLWRpdiBpb24tY2hlY2tib3h7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcblxyXG59XHJcbi5teS1zZWFyY2gtY2xhc3Mge1xyXG4gIC0taGVpZ2h0OiA1MDBweDtcclxuICAtLXdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbmlvbi1kYXRldGltZXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICBib3R0b206IDIwJSAhaW1wb3J0YW50O1xyXG4gIG1heC13aWR0aDpub25lICFpbXBvcnRhbnQ7XHJcbiAgbGVmdDogMTAlO1xyXG4gIHJpZ2h0OiAxMCU7XHJcbiAvLyBtYXgtd2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcbiAgLy8gcmlnaHQ6IDIwJTtcclxuICAvLyAgIGxlZnQ6IDIwJTtcclxufVxyXG5cclxuLy8gc2hvdy1tb250aC1hbmQteWVhclxyXG4gXHJcbi5iaXJ0aGRheXtcclxuICAvL3dpZHRoOiAzNTBweDtcclxuICAvLyAgaGVpZ2h0OiAzNTBweDtcclxuICAtLWJveC1zaGFkb3c6bm9uZTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGFsaWduLWl0ZW1zOiB1bnNldDtcclxuIC8vIC0tYmFja2Ryb3Atb3BhY2l0eTogdmFyKC0taW9uLWJhY2tkcm9wLW9wYWNpdHksIDApO1xyXG59XHJcblxyXG5cclxuLmhpZGRlbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuXHJcbiIsIi5yZWdpc3Rlci1pbWctbGF5ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5yZWdpc3Rlci1pbWctbGF5ZXIgaW1nIHtcbiAgd2lkdGg6IDE4MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucmVnaXN0ZXItaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL3JlZ2lzdGVyLmpwZWcpO1xuICB3aWR0aDogMjg1cHg7XG4gIGhlaWdodDogMTQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIG1hcmdpbjogMzBweCBhdXRvIDIwcHggYXV0bztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4ucmVnaXN0ZXItaGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDE1cHggIWltcG9ydGFudDtcbn1cbi5yZWdpc3Rlci1oZWFkZXIgaDEge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzY2NjY2NjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmZpbGxlZC1kYXRhIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG4uZmlsbGVkLWRhdGEgaDMge1xuICBtYXJnaW46IDVweDtcbn1cbi5maWxsZWQtZGF0YSBwIHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5kb250LWtub3cge1xuICBjb2xvcjogIzZkNmQ2ZDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmRvbnQta25vdyBzcGFuIHtcbiAgY29sb3I6ICNhOWQ1YzE7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmZvcm0ge1xuICBwYWRkaW5nOiA1cHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5mb3JtIC5mb3JtLWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiA1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbmZvcm0gaW9uLWlucHV0LFxuZm9ybSBpb24tc2VsZWN0LFxuZm9ybSBpb25pYy1zZWxlY3RhYmxlIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ2ZDYgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHB4IDExcHggIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDAgIWltcG9ydGFudDtcbn1cbmZvcm0gaW9uLWxhYmVsLmxhYmVsLWZsb2F0aW5nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDNweDtcbiAgbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG59XG5mb3JtIC5wYXNzd29yZC1pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmZvcm0gLnBhc3N3b3JkLWlucHV0IGlvbi1pbnB1dCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogNDBweDtcbn1cbmZvcm0gLnBhc3N3b3JkLWlucHV0IGlvbi1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDI1cHg7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5mb3JtIC5mb3Jnb3QtcGFzc3dvcmQge1xuICBjb2xvcjogIzZkNmQ2ZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5mb3JtIC5kb250LWtub3cge1xuICBjb2xvcjogIzZkNmQ2ZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuZm9ybSAuZG9udC1rbm93IHNwYW4ge1xuICBjb2xvcjogI2ZmNjYyYTtcbn1cbmZvcm0gLmJ0bnMge1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbjogMjBweDtcbn1cbmZvcm0gaW9uLWl0ZW0uZm9ybS1ncm91cC5jb3VudHJ5LWdyb3VwIHtcbiAgdG9wOiAycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDcwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogIzcyNzI3MjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuZm9ybSAuYWN0aXZhdGlvbi1jb2RlIHtcbiAgdG9wOiAzMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6ICM2ZDZkNmQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbmZvcm0gLmFjdGl2YXRpb24tY29kZSBwIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5mb3JtIC5hY3RpdmF0aW9uLWNvZGUgcC5maW5kLWxhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjYTlkNWMxO1xufVxuZm9ybSAucGhvbmUtY29kZS1kaXYge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5mb3JtIC5waG9uZS1jb2RlLWRpdiBzcGFuIHtcbiAgd2lkdGg6IDIwcHg7XG59XG5mb3JtIC5waG9uZS1pb24ge1xuICB3aWR0aDogODJweDtcbiAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcbn1cbmZvcm0gLnBob25lLWlvbiAuaW9uaWMtc2VsZWN0YWJsZS1pY29uIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuZm9ybSBkaXYge1xuICBwYWRkaW5nOiAxcHggMTBweDtcbn1cbmZvcm0gLmNoZWNrLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5mb3JtIC5jaGVjay1kaXYgaW9uLWNoZWNrYm94IHtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4ubXktc2VhcmNoLWNsYXNzIHtcbiAgLS1oZWlnaHQ6IDUwMHB4O1xuICAtLXdpZHRoOiA4MCU7XG59XG5cbmlvbi1kYXRldGltZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICBib3R0b206IDIwJSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcbiAgbGVmdDogMTAlO1xuICByaWdodDogMTAlO1xufVxuXG4uYmlydGhkYXkge1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbiAgbWFyZ2luOiBhdXRvO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiB1bnNldDtcbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */";

/***/ }),

/***/ 6630:
/*!************************************************************************!*\
  !*** ./src/app/pages/book-analysis/book-analysis.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n<app-header *ngIf=\"selectedPlan == 'automated trading'\"  [headerTitle]=\"'PAGES.ITRADE' | translate\"  [headerBack]=true  ></app-header>\n<app-header *ngIf=\"selectedPlan == 'body analysis'\"  [headerTitle]=\"'PAGES.BOOKANALYSIS' | translate\"  [headerBack]=true  ></app-header>\n<app-header *ngIf=\"selectedPlan == 'affiliate program'\"  [headerTitle]=\"'PAGES.PARTNERSHIP' | translate\"  [headerBack]=true  ></app-header>\n<app-header *ngIf=\"selectedPlan == 'basket'\"  [headerTitle]=\"'Checkout'\"  [headerBack]=true  ></app-header>\n<ion-content>\n  <!-- <ion-modal [isOpen]=\"ionModelOpen\" [swipeToClose]=\"false\" [backdropDismiss]=\"false\" [keyboardClose]=\"false\" class=\"paymentModal\">\n    <ng-template>\n      <ion-content>\n        <iframe #iframe id=\"iframe\"  class=\"webPage\" style=\"height: 100% !important;\" frameborder=\"0\" name=\"eventsPage\" [src]=\"paymentUrl\"  sandbox=\"allow-popups allow-top-navigation allow-presentation allow-scripts allow-pointer-lock allow-same-origin allow-forms\">\n        </iframe>\n      </ion-content>\n    </ng-template>\n  </ion-modal> -->\n  <div *ngIf=\"paymentInti\">\n    <img src=\"assets/img/loader.gif\"> \n  </div>\n  <div *ngIf=\"!paymentInti\">\n\n  \n\n \n \n \n    \n  <form [formGroup]=\"form\">\n    \n   <div *ngIf=\"profile?.city == '' || profile?.nr == '' ||  profile?.phone == '' || profile?.streetname == '' || profile?.zipCode == '' \">\n    <div class=\"register-header\">\n      <h1>{{'BOOKING_ANALYSIS.TITLE' | translate}}</h1>\n    </div>\n    <ion-item lines=\"none\" class=\"form-group ion-no-padding\" >\n      <div class=\"check-div\">\n        <ion-checkbox (ionChange)=\"companyChange($event)\" [(ngModel)]=\"private\" slot=\"start\" formControlName=\"private\">\n        </ion-checkbox>\n        <ion-label>{{'BOOKING_ANALYSIS.PRIVATE' | translate}}</ion-label>\n      </div>\n      <div class=\"check-div\">\n        <ion-checkbox (ionChange)=\"companyChange($event)\" [(ngModel)]=\"company\" slot=\"start\" formControlName=\"company\">\n        </ion-checkbox>\n        <ion-label>{{'BOOKING_ANALYSIS.COMPANY' | translate}}</ion-label>\n      </div>\n\n    </ion-item>\n    <div *ngFor=\"let validation of validationMessage.role\">\n      <div *ngIf=\"submitted && formControl['role'].errors\" class=\"validation-message\">\n        <div class=\"error-message text-red\" *ngIf=\"formControl['role'].errors[validation.type]\">\n          {{ validation.message }}\n        </div>\n      </div>\n    </div>\n\n    <p style=\"padding: 0px 25px; margin:0px;\">{{profile?.firstName}} {{profile?.lastName}}</p>\n    <ion-item lines=\"none\" class=\"form-group ion-no-padding\"*ngIf=\"company\" >\n      <ion-input type=\"text\" placeholder=\"Company\" formControlName=\"companyName\" id=\"companyName\" autocapitalize=\"off\">\n      </ion-input>\n    </ion-item>\n    <div *ngFor=\"let validation of validationMessage.companyName\">\n      <div *ngIf=\"submitted && formControl['companyName'].errors\" class=\"validation-message\">\n        <div class=\"error-message text-red\" *ngIf=\"formControl['companyName'].errors[validation.type]\">\n          {{ validation.message }}\n        </div>\n      </div>\n    </div>\n    <ion-item lines=\"none\" class=\"form-group ion-no-padding\" *ngIf=\"company\">\n      <ion-input type=\"text\" placeholder=\"Tax ID\" formControlName=\"taxId\" id=\"taxId\" autocapitalize=\"off\">\n      </ion-input>\n    </ion-item>\n    <div *ngFor=\"let validation of validationMessage.taxId\">\n      <div *ngIf=\"submitted && formControl['taxId'].errors\" class=\"validation-message\">\n        <div class=\"error-message text-red\" *ngIf=\"formControl['taxId'].errors[validation.type]\">\n          {{ validation.message }}\n        </div>\n      </div>\n    </div>\n\n    <ion-item lines=\"none\" class=\"form-group ion-no-padding\">\n     \n      <ion-input type=\"email\" placeholder=\"{{'BOOKING_ANALYSIS.EMAIL' | translate}}\" formControlName=\"email\" id=\"email\"\n        autocapitalize=\"off\"></ion-input>\n    </ion-item>\n    <div *ngFor=\"let validation of validationMessage.email\">\n      <div *ngIf=\"submitted && formControl['email'].errors\" class=\"validation-message\">\n        <div class=\"error-message text-red\" *ngIf=\"formControl['email'].errors[validation.type]\">\n          {{ validation.message }}\n        </div>\n      </div>\n    </div>\n    <ion-item lines=\"none\" class=\"form-group ion-no-padding\">\n\n      <div class=\"phone-code-div\">\n        <span class=\"flag-icon flag-icon-{{selectedCountry?.countryCode.toLowerCase()}}\"\n          style=\"font-size: 17px; top: -2px;    margin-left: 10px;\"></span>\n        <ionic-selectable item-content class=\"phone-ion \" formControlName=\"phoneCode\" id=\"code\" [items]=\"countires\"\n          [canSearch]=\"true\" (onChange)=\"selectCountry($event,'phonecode','')\" (onSearch)=\"searchCountry($event)\">\n          <ng-template ionicSelectableItemTemplate let-con=\"item\">\n            <span class=\"flag-icon flag-icon-{{ con.countryCode.toLowerCase() }}\"\n              style=\"font-size: 17px; top: 0px\"></span>\n            {{con.countryName}}\n          </ng-template>\n        </ionic-selectable>\n      </div>\n      <ion-input formControlName=\"phone\" type=\"tel\" id=\"mobile-number\" autocapitalize=\"off\"\n        placeholder=\"{{'BOOKING_ANALYSIS.MOBILE' | translate}}\" autofocus=\"false\"></ion-input>\n    </ion-item>\n    <div *ngFor=\"let validation of validationMessage.phoneCode\">\n      <div *ngIf=\"submitted && formControl['phoneCode'].errors\" class=\"validation-message\">\n        <div class=\"error-message text-red\" *ngIf=\"formControl['phoneCode'].errors[validation.type]\">\n          {{ validation.message }}\n        </div>\n      </div>\n    </div>\n    <div *ngFor=\"let validation of validationMessage.phone\">\n      <div *ngIf=\"submitted && formControl['phone'].errors\" class=\"validation-message\">\n        <div class=\"error-message text-red\" *ngIf=\"formControl['phone'].errors[validation.type]\">\n          {{ validation.message }}\n        </div>\n      </div>\n    </div>\n      <div >\n        <!-- <ion-button fill=\"clear\" style=\"width:20%\">\n          <ion-icon icon=\"calendar\"></ion-icon>\n        </ion-button> -->\n        <!-- (click)=\"d.toggle()\" -->\n        <ion-row style=\"padding:0px 10px\">\n          <ion-col>\n            {{'BOOKING_ANALYSIS.BIRTHDAY' | translate}}\n            </ion-col>\n          </ion-row>\n\n\n        <ion-row style=\"padding:0px 10px\">\n          \n\n          <ion-col class=\"col-2\">\n            <ion-input type=\"number\"  id=\"dd\" autocapitalize=\"off\"\n            placeholder=\"dd\"  formControlName=\"dd\" autofocus=\"false\" maxlength=\"2\" name=\"dd\" ></ion-input>\n            <div *ngFor=\"let validation of validationMessage.dd\">\n              <div *ngIf=\"submitted && formControl['dd'].errors\" class=\"validation-message\">\n                <div class=\"error-message text-red\" *ngIf=\"formControl['dd'].errors[validation.type]\">\n                  {{ validation.message }}\n                </div>\n              </div>\n            </div>\n            <div class=\"error-message text-red\" *ngIf=\"(formControl['dd'].value < 1 || formControl['dd'].value > 31) &&  formControl['dd'].touched\">\n              {{'BOOKING_ANALYSIS.dateError' | translate}}\n             </div>\n          </ion-col>\n          <ion-col>\n            <ion-input type=\"number\"   id=\"mm\" autocapitalize=\"off\"\n            placeholder=\"mm\"  formControlName=\"mm\" autofocus=\"false\" maxlength=\"2\"  name=\"mm\" ></ion-input>\n            <div *ngFor=\"let validation of validationMessage.dd\">\n              <div *ngIf=\"submitted && formControl['mm'].errors\" class=\"validation-message\">\n                <div class=\"error-message text-red\" *ngIf=\"formControl['mm'].errors[validation.type]\">\n                  {{ validation.message }}\n                </div>\n              </div>\n            </div>\n            <div class=\"error-message text-red\" *ngIf=\"(formControl['mm'].value  < 1 || formControl['mm'].value  > 12 ) &&  formControl['mm'].touched\">\n              {{'BOOKING_ANALYSIS.monthError' | translate}}\n             </div>\n          </ion-col>\n          <ion-col>\n            <ion-input type=\"number\"  id=\"yyyy\" autocapitalize=\"off\"\n        placeholder=\"yyyy\"  formControlName=\"yyyy\" autofocus=\"false\"  maxlength=\"4\" name=\"yyyy\" ></ion-input>\n        <div *ngFor=\"let validation of validationMessage.yyyy\">\n          <div *ngIf=\"submitted && formControl['yyyy'].errors\" class=\"validation-message\">\n            <div class=\"error-message text-red\" *ngIf=\"formControl['yyyy'].errors[validation.type]\">\n              {{ validation.message }}\n            </div>\n          </div>\n        </div>  \n        <div class=\"error-message text-red\" *ngIf=\"(formControl['yyyy'].value  < 1922 || formControl['yyyy'].value  > 2005) &&  formControl['yyyy'].touched\">\n          {{'BOOKING_ANALYSIS.yearError' | translate}}\n         </div>\n      </ion-col>\n     \n        </ion-row>\n       \n       \n           \n      </div>\n    \n   \n   \n   \n  \n    <ion-item lines=\"none\" class=\"form-group ion-no-padding\">\n    \n      <ion-input type=\"text\" id=\"street name\" autofocus=\"on\" formControlName=\"streetname\"\n        placeholder=\"{{'BOOKING_ANALYSIS.STREET_NAME' | translate}}\"></ion-input>\n        \n    </ion-item>\n    <div *ngFor=\"let validation of validationMessage.streetname\">\n      <div *ngIf=\"submitted && formControl['streetname'].errors\" class=\"validation-message\">\n        <div class=\"error-message text-red\" *ngIf=\"formControl['streetname'].errors[validation.type]\">\n          {{ validation.message }}\n        </div>\n      </div>\n    </div>\n    <ion-item lines=\"none\" class=\"form-group ion-no-padding\">\n    \n      <ion-input formControlName=\"nr\" placeholder=\"{{'BOOKING_ANALYSIS.HOUSE_NUMBER' | translate}}\" type=\"text\"\n        id=\"house-number\" autocapitalize=\"off\"></ion-input>\n    </ion-item>\n    <div *ngFor=\"let validation of validationMessage.nr\">\n      <div *ngIf=\"submitted && formControl['nr'].errors\" class=\"validation-message\">\n        <div class=\"error-message text-red\" *ngIf=\"formControl['nr'].errors[validation.type]\">\n          {{ validation.message }}\n        </div>\n      </div>\n    </div>\n    <ion-item lines=\"none\" class=\"form-group ion-no-padding\">\n    \n      <ion-input type=\"text\" id=\"additional-adress\" autocapitalize=\"off\" formControlName=\"additionalAddressInfo\"\n        placeholder=\"{{'BOOKING_ANALYSIS.ADDITION_ADDRESS' | translate}}\"></ion-input>\n    </ion-item>\n    <div *ngFor=\"let validation of validationMessage.additionalAddressInfo\">\n      <div *ngIf=\"submitted && formControl['additionalAddressInfo'].errors\" class=\"validation-message\">\n        <div class=\"error-message text-red\" *ngIf=\"formControl['additionalAddressInfo'].errors[validation.type]\">\n          {{ validation.message }}\n        </div>\n      </div>\n    </div>\n    <ion-item lines=\"none\" class=\"form-group ion-no-padding\">\n     \n      <ion-input formControlName=\"zipCode\" placeholder=\"{{'BOOKING_ANALYSIS.ZIP' | translate}}\" type=\"text\" id=\"zip\"\n        autocapitalize=\"off\"></ion-input>\n    </ion-item>\n    <div *ngFor=\"let validation of validationMessage.zipCode\">\n      <div *ngIf=\"submitted && formControl['zipCode'].errors\" class=\"validation-message\">\n        <div class=\"error-message text-red\" *ngIf=\"formControl['zipCode'].errors[validation.type]\">\n          {{ validation.message }}\n        </div>\n      </div>\n    </div>\n    <ion-item lines=\"none\" class=\"form-group ion-no-padding\">\n\n      <ion-input formControlName=\"city\" placeholder=\"{{'BOOKING_ANALYSIS.CITY' | translate}}\" type=\"text\" id=\"city\"\n        autocapitalize=\"off\"></ion-input>\n    </ion-item>\n    <div *ngFor=\"let validation of validationMessage.city\">\n      <div *ngIf=\"submitted && formControl['city'].errors\" class=\"validation-message\">\n        <div class=\"error-message text-red\" *ngIf=\"formControl['city'].errors[validation.type]\">\n          {{ validation.message }}\n        </div>\n      </div>\n    </div>\n    <ion-item lines=\"none\" class=\"form-group ion-no-padding\">\n      <ionic-selectable item-content formControlName=\"country\" id=\"country\" [items]=\"countires\" [canSearch]=\"true\"\n        (onChange)=\"selectCountry($event,'countryname','billing')\" (onSearch)=\"searchCountry($event)\">\n        <ng-template ionicSelectableItemTemplate let-con=\"item\">\n          <span class=\"flag-icon flag-icon-{{ con.countryCode.toLowerCase() }}\"\n            style=\"font-size: 17px; top: 0px\"></span>\n          {{con.countryName}}\n        </ng-template>\n      </ionic-selectable>\n    </ion-item>\n\n    <div *ngFor=\"let validation of validationMessage.country\">\n      <div *ngIf=\"submitted && formControl['country'].errors\" class=\"validation-message\">\n        <div class=\"error-message text-red\" *ngIf=\"formControl['country'].errors[validation.type]\">\n          {{ validation.message }}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"filled-data\" *ngIf=\"profile?.city != '' && profile?.nr != '' &&  profile?.phone != '' && profile?.streetname != '' && profile?.zipCode != '' \">\n   <h3><strong>{{'BOOKING_ANALYSIS.billingAddress' | translate}}</strong></h3>\n   <p><strong>{{'BOOKING_ANALYSIS.NAME' | translate}} :</strong><span *ngIf=\"profile?.companyName == ''\">{{profile?.firstName}} {{profile?.lastName}}</span> <span *ngIf=\"profile?.companyName != ''\">{{profile?.companyName}} </span></p>\n   <p><strong>{{'BOOKING_ANALYSIS.ADDRESS' | translate}} :</strong>{{profile?.nr}},{{profile?.streetname}}</p>\n   <p><strong>{{'BOOKING_ANALYSIS.ZIP' | translate}} :</strong>{{profile?.zipCode}} </p>\n   <p><strong>{{'BOOKING_ANALYSIS.CITY' | translate}}: </strong>{{profile?.city}} </p>\n   <p><strong>{{'BOOKING_ANALYSIS.COUNTRY' | translate}}: </strong>{{profile?.countryName}} </p>\n   <!-- <p><strong>Edit Address</strong></p> -->\n  </div>\n\n\n\n    <ion-item lines=\"none\" class=\"form-group ion-no-padding\">\n      <ion-checkbox slot=\"start\" [(ngModel)]=\"deliveryAddress\" (ionChange)=\"deliveryChange($event)\" mode=\"md\"\n        formControlName=\"delivery_address_added\"></ion-checkbox>\n      <ion-label class=\"ion-text-wrap check-label\">{{'BOOKING_ANALYSIS.DELIVERY_ADDRESS_SAME' | translate}}</ion-label>\n    </ion-item>\n\n\n    <div *ngIf=\"!deliveryAddress\">\n      <ion-item lines=\"none\" class=\"form-group ion-no-padding\">\n        <ion-input type=\"text\" placeholder=\"Delivery FirstName\" formControlName=\"deliveryFirstName\"\n          id=\"deliveryFirstName\" autocapitalize=\"off\">\n        </ion-input>\n      </ion-item>\n      <div *ngFor=\"let validation of validationMessage.deliveryFirstName\">\n        <div *ngIf=\"submitted && formControl['deliveryFirstName'].errors\" class=\"validation-message\">\n          <div class=\"error-message text-red\" *ngIf=\"formControl['deliveryFirstName'].errors[validation.type]\">\n            {{ validation.message }}\n          </div>\n        </div>\n      </div>\n      <ion-item lines=\"none\" class=\"form-group ion-no-padding\">\n        <ion-input type=\"text\" placeholder=\"Delivery Lastname\" formControlName=\"deliveryLastName\" id=\"deliveryLastName\"\n          autocapitalize=\"off\">\n        </ion-input>\n      </ion-item>\n      <div *ngFor=\"let validation of validationMessage.deliveryLastName\">\n        <div *ngIf=\"submitted && formControl['deliveryLastName'].errors\" class=\"validation-message\">\n          <div class=\"error-message text-red\" *ngIf=\"formControl['deliveryLastName'].errors[validation.type]\">\n            {{ validation.message }}\n          </div>\n        </div>\n      </div>\n      <ion-item lines=\"none\" class=\"form-group ion-no-padding\" >\n        <ion-input type=\"text\" placeholder=\"Company Name\" formControlName=\"deliveryCompanyName\" id=\"deliveryCompanyName\"\n          autocapitalize=\"off\">\n        </ion-input>\n      </ion-item>\n      <div *ngFor=\"let validation of validationMessage.deliveryCompanyName\">\n        <div *ngIf=\"submitted && formControl['deliveryCompanyName'].errors\" class=\"validation-message\">\n          <div class=\"error-message text-red\" *ngIf=\"formControl['deliveryCompanyName'].errors[validation.type]\">\n            {{ validation.message }}\n          </div>\n        </div>\n      </div>\n      <ion-item lines=\"none\" class=\"form-group ion-no-padding\">\n        <ion-input type=\"text\" placeholder=\"Delivery StreetName\" formControlName=\"deliveryStreetName\"\n          id=\"deliveryStreetName\" autocapitalize=\"off\">\n        </ion-input>\n      </ion-item>\n      <div *ngFor=\"let validation of validationMessage.deliveryStreetName\">\n        <div *ngIf=\"submitted && formControl['deliveryStreetName'].errors\" class=\"validation-message\">\n          <div class=\"error-message text-red\" *ngIf=\"formControl['deliveryStreetName'].errors[validation.type]\">\n            {{ validation.message }}\n          </div>\n        </div>\n      </div>\n      <ion-item lines=\"none\" class=\"form-group ion-no-padding\">\n        <ion-input type=\"text\" placeholder=\"Delivery House Number\" formControlName=\"deliveryHouseNumber\"\n          id=\"deliveryHouseNumber\" autocapitalize=\"off\">\n        </ion-input>\n      </ion-item>\n      <div *ngFor=\"let validation of validationMessage.deliveryHouseNumber\">\n        <div *ngIf=\"submitted && formControl['deliveryHouseNumber'].errors\" class=\"validation-message\">\n          <div class=\"error-message text-red\" *ngIf=\"formControl['deliveryHouseNumber'].errors[validation.type]\">\n            {{ validation.message }}\n          </div>\n        </div>\n      </div>\n      <ion-item lines=\"none\" class=\"form-group ion-no-padding\">\n        <ion-input type=\"text\" placeholder=\"Delivery Additional Address Info\"\n          formControlName=\"deliveryAdditionalAddressInfo\" id=\"deliveryAdditionalAddressInfo\" autocapitalize=\"off\">\n        </ion-input>\n      </ion-item>\n      <div *ngFor=\"let validation of validationMessage.deliveryAdditionalAddressInfo\">\n        <div *ngIf=\"submitted && formControl['deliveryAdditionalAddressInfo'].errors\" class=\"validation-message\">\n          <div class=\"error-message text-red\"\n            *ngIf=\"formControl['deliveryAdditionalAddressInfo'].errors[validation.type]\">\n            {{ validation.message }}\n          </div>\n        </div>\n      </div>\n      <ion-item lines=\"none\" class=\"form-group ion-no-padding\">\n        <ion-input type=\"text\" placeholder=\"Delivery Zipcode\" formControlName=\"deliveryZipcode\" id=\"deliveryZipcode\"\n          autocapitalize=\"off\">\n        </ion-input>\n      </ion-item>\n      <div *ngFor=\"let validation of validationMessage.deliveryZipcode\">\n        <div *ngIf=\"submitted && formControl['deliveryZipcode'].errors\" class=\"validation-message\">\n          <div class=\"error-message text-red\" *ngIf=\"formControl['deliveryZipcode'].errors[validation.type]\">\n            {{ validation.message }}\n          </div>\n        </div>\n      </div>\n      <ion-item lines=\"none\" class=\"form-group ion-no-padding\">\n        <ion-input type=\"text\" placeholder=\"Delivery City\" formControlName=\"deliveryCity\" id=\"deliveryCity\"\n          autocapitalize=\"off\">\n        </ion-input>\n      </ion-item>\n      <div *ngFor=\"let validation of validationMessage.deliveryCity\">\n        <div *ngIf=\"submitted && formControl['deliveryCity'].errors\" class=\"validation-message\">\n          <div class=\"error-message text-red\" *ngIf=\"formControl['deliveryCity'].errors[validation.type]\">\n            {{ validation.message }}\n          </div>\n        </div>\n      </div>\n      <ion-item lines=\"none\" class=\"form-group ion-no-padding\">\n        <!-- <ion-input type=\"text\" placeholder=\"Delivery Country\" formControlName=\"deliveryCountry\" id=\"deliveryCountry\"\n          autocapitalize=\"off\">\n        </ion-input> -->\n       \n          <ionic-selectable item-content formControlName=\"deliveryCountry\" placeholder=\"Select Country\" id=\"deliveryCountry\" [items]=\"countires\" [canSearch]=\"true\"\n            (onChange)=\"selectCountry($event,'countryname','delivery')\" (onSearch)=\"searchCountry($event)\">\n            <ng-template ionicSelectableItemTemplate let-con=\"item\">\n              <span class=\"flag-icon flag-icon-{{ con.countryCode.toLowerCase() }}\"\n                style=\"font-size: 17px; top: 0px\"></span>\n              {{con.countryName}}\n            </ng-template>\n          </ionic-selectable>\n       \n      </ion-item>\n\n      <div *ngFor=\"let validation of validationMessage.deliveryCountry\">\n        <div *ngIf=\"submitted && formControl['deliveryCountry'].errors\" class=\"validation-message\" >\n          <div class=\"error-message text-red\" *ngIf=\"formControl['deliveryCountry'].errors[validation.type]\">\n            {{ validation.message }}\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    <ion-button   *ngIf=\"selectedPlan == 'body analysis'\" (click)=\"submit()\" class=\"btns\" color=\"danger\" expand=\"block\">\n      {{'BOOKING_ANALYSIS.SUBMIT_BUTTON' | translate}}</ion-button>\n\n      <ion-button   *ngIf=\"selectedPlan == 'automated trading'\" (click)=\"submit()\" class=\"btns\" color=\"danger\" expand=\"block\">\n        {{'INTELIGENT_TRADING.GET_TRADE' | translate}}</ion-button>\n\n        <ion-button   *ngIf=\"selectedPlan == 'affiliate program'\" (click)=\"submit()\" class=\"btns\" color=\"danger\" expand=\"block\">\n          {{'IPRO_PARTNERSHIP.BECOME_PARTNER' | translate}}</ion-button>\n         \n            <ion-button   *ngIf=\"selectedPlan == 'basket'\" (click)=\"submit()\" class=\"btns\" color=\"danger\" expand=\"block\">\n              {{'CART.BUYNOW' | translate}}</ion-button>\n        \n      \n\n  </form>\n</div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_book-analysis_book-analysis_module_ts.js.map