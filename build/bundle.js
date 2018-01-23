/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Team = /** @class */ (function () {
    function Team(team) {
        this.key = team.key;
        this.name = team.name;
        this.code = team.code;
    }
    Object.defineProperty(Team.prototype, "teamName", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    return Team;
}());
exports.Team = Team;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var football_service_1 = __webpack_require__(2);
var service = new football_service_1.FootballService();
service.getMatch().then(function (matchDays) {
    console.log(matchDays);
});
service.getTeam(function (teams) {
    console.log(teams);
});


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var team_1 = __webpack_require__(0);
var round_1 = __webpack_require__(3);
var FootballService = /** @class */ (function () {
    function FootballService() {
        this.url = {
            match: "https://raw.githubusercontent.com/opendatajson/football.json/master/2017-18/it.1.json",
            team: "https://raw.githubusercontent.com/opendatajson/football.json/master/2017-18/it.1.clubs.json"
        };
    }
    FootballService.prototype.getJSON = function (url, callBack) {
        this.xhr = new XMLHttpRequest;
        this.xhr.open("get", url);
        this.xhr.onload = function (ev) {
            var data = JSON.parse(ev.target.response);
            callBack(data);
        };
        this.xhr.send();
    };
    FootballService.prototype.getMatch = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getJSON(_this.url.match, function (data) {
                var matchArray = [];
                for (var _i = 0, _a = data.rounds; _i < _a.length; _i++) {
                    var round = _a[_i];
                    matchArray.push(new round_1.Round(round));
                }
                resolve(matchArray);
            });
        });
    };
    FootballService.prototype.getTeam = function (callBack) {
        this.getJSON(this.url.team, function (data) {
            var teamArray = [];
            for (var _i = 0, _a = data.clubs; _i < _a.length; _i++) {
                var team = _a[_i];
                teamArray.push(new team_1.Team(team));
            }
            callBack(teamArray);
        });
    };
    return FootballService;
}());
exports.FootballService = FootballService;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var match_1 = __webpack_require__(4);
var Round = /** @class */ (function () {
    function Round(round) {
        this.name = round.name;
        this.matches = [];
        for (var _i = 0, _a = round.matches; _i < _a.length; _i++) {
            var match = _a[_i];
            this.matches.push(new match_1.Match(match));
        }
    }
    return Round;
}());
exports.Round = Round;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var team_1 = __webpack_require__(0);
var Match = /** @class */ (function () {
    function Match(match) {
        this.matchDate = new Date(match.date);
        this.score1 = match.score1;
        this.score2 = match.score2;
        this.team1 = new team_1.Team(match.team1);
        this.team2 = new team_1.Team(match.team2);
    }
    return Match;
}());
exports.Match = Match;


/***/ })
/******/ ]);