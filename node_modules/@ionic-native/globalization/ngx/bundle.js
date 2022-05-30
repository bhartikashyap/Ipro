'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var Globalization = /** @class */ (function (_super) {
    tslib.__extends(Globalization, _super);
    function Globalization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Globalization.prototype.getPreferredLanguage = function () { return core.cordova(this, "getPreferredLanguage", {}, arguments); };
    Globalization.prototype.getLocaleName = function () { return core.cordova(this, "getLocaleName", {}, arguments); };
    Globalization.prototype.dateToString = function (date, options) { return core.cordova(this, "dateToString", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Globalization.prototype.stringToDate = function (dateString, options) { return core.cordova(this, "stringToDate", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Globalization.prototype.getDatePattern = function (options) { return core.cordova(this, "getDatePattern", { "callbackOrder": "reverse" }, arguments); };
    Globalization.prototype.getDateNames = function (options) { return core.cordova(this, "getDateNames", { "callbackOrder": "reverse" }, arguments); };
    Globalization.prototype.isDayLightSavingsTime = function (date) { return core.cordova(this, "isDayLightSavingsTime", {}, arguments); };
    Globalization.prototype.getFirstDayOfWeek = function () { return core.cordova(this, "getFirstDayOfWeek", {}, arguments); };
    Globalization.prototype.numberToString = function (numberToConvert, options) { return core.cordova(this, "numberToString", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Globalization.prototype.stringToNumber = function (stringToConvert, options) { return core.cordova(this, "stringToNumber", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Globalization.prototype.getNumberPattern = function (options) { return core.cordova(this, "getNumberPattern", { "callbackOrder": "reverse" }, arguments); };
    Globalization.prototype.getCurrencyPattern = function (currencyCode) { return core.cordova(this, "getCurrencyPattern", {}, arguments); };
    Globalization.pluginName = "Globalization";
    Globalization.plugin = "cordova-plugin-globalization";
    Globalization.pluginRef = "navigator.globalization";
    Globalization.repo = "https://github.com/apache/cordova-plugin-globalization";
    Globalization.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows"];
    Globalization.decorators = [
        { type: core$1.Injectable }
    ];
    return Globalization;
}(core.IonicNativePlugin));

exports.Globalization = Globalization;
