"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/tweets";
exports.ids = ["pages/api/tweets"];
exports.modules = {

/***/ "./pages/api/tweets/index.ts":
/*!***********************************!*\
  !*** ./pages/api/tweets/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n//api/users/index.ts\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n  log: ['query', 'info']\n});\nasync function handler(req, res) {\n  const tweets = await prisma.tweet.findMany({\n    include: {\n      user: true\n    }\n  });\n  res.status(200).json(tweets);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdHdlZXRzL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNQyxNQUFNLEdBQUcsSUFBSUQsd0RBQUosQ0FBaUI7QUFBRUUsRUFBQUEsR0FBRyxFQUFFLENBQUMsT0FBRCxFQUFVLE1BQVY7QUFBUCxDQUFqQixDQUFmO0FBRWUsZUFBZUMsT0FBZixDQUF1QkMsR0FBdkIsRUFBNENDLEdBQTVDLEVBQWtFO0FBQzdFLFFBQU1DLE1BQU0sR0FBRyxNQUFNTCxNQUFNLENBQUNNLEtBQVAsQ0FBYUMsUUFBYixDQUFzQjtBQUN2Q0MsSUFBQUEsT0FBTyxFQUFFO0FBQUVDLE1BQUFBLElBQUksRUFBRTtBQUFSO0FBRDhCLEdBQXRCLENBQXJCO0FBR0FMLEVBQUFBLEdBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCTixNQUFyQjtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHdlZXRhcHAvLi9wYWdlcy9hcGkvdHdlZXRzL2luZGV4LnRzPzRkNTEiXSwic291cmNlc0NvbnRlbnQiOlsiLy9hcGkvdXNlcnMvaW5kZXgudHNcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KHsgbG9nOiBbJ3F1ZXJ5JywgJ2luZm8nXSB9KTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICAgIGNvbnN0IHR3ZWV0cyA9IGF3YWl0IHByaXNtYS50d2VldC5maW5kTWFueSh7XG4gICAgICAgIGluY2x1ZGU6IHsgdXNlcjogdHJ1ZSB9XG4gICAgfSk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24odHdlZXRzKTtcbn0iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwibG9nIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInR3ZWV0cyIsInR3ZWV0IiwiZmluZE1hbnkiLCJpbmNsdWRlIiwidXNlciIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/tweets/index.ts\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/tweets/index.ts"));
module.exports = __webpack_exports__;

})();