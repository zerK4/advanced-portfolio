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
exports.id = "pages/api/projects";
exports.ids = ["pages/api/projects"];
exports.modules = {

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "(api)/./pages/api/projects/index.js":
/*!*************************************!*\
  !*** ./pages/api/projects/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/client */ \"(api)/./utils/client.js\");\n/* harmony import */ var _utils_queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/queries */ \"(api)/./utils/queries.js\");\n\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        const query = (0,_utils_queries__WEBPACK_IMPORTED_MODULE_1__.allProjectsQuery)();\n        const data = await _utils_client__WEBPACK_IMPORTED_MODULE_0__.client.fetch(query);\n        console.log(\"sent projects\");\n        res.status(200).json(data);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvamVjdHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStDO0FBQ1c7QUFFM0MsZUFBZUUsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDeEIsTUFBTUMsS0FBSyxHQUFHTCxnRUFBZ0IsRUFBRTtRQUVoQyxNQUFNTSxJQUFJLEdBQUcsTUFBTVAsdURBQVksQ0FBQ00sS0FBSyxDQUFDO1FBQ3RDRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3Qk4sR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0wsSUFBSSxDQUFDLENBQUM7S0FDNUI7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3BlcnNvbmFsLy4vcGFnZXMvYXBpL3Byb2plY3RzL2luZGV4LmpzPzEzYTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xpZW50IH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2NsaWVudFwiO1xuaW1wb3J0IHsgYWxsUHJvamVjdHNRdWVyeSB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9xdWVyaWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICBjb25zdCBxdWVyeSA9IGFsbFByb2plY3RzUXVlcnkoKTtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnkpO1xuICAgIGNvbnNvbGUubG9nKFwic2VudCBwcm9qZWN0c1wiKTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImNsaWVudCIsImFsbFByb2plY3RzUXVlcnkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwicXVlcnkiLCJkYXRhIiwiZmV0Y2giLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/projects/index.js\n");

/***/ }),

/***/ "(api)/./utils/client.js":
/*!*************************!*\
  !*** ./utils/client.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n    projectId: \"11ok4el6\",\n    dataset: \"production\",\n    apiVersion: \"2022-08-17\",\n    useCdn: false,\n    token: process.env.NEXT_PUBLIC_SANITY_TOKEN\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9jbGllbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBDO0FBRW5DLE1BQU1DLE1BQU0sR0FBR0QscURBQVksQ0FBQztJQUNqQ0UsU0FBUyxFQUFFLFVBQVU7SUFDckJDLE9BQU8sRUFBRSxZQUFZO0lBQ3JCQyxVQUFVLEVBQUUsWUFBWTtJQUN4QkMsTUFBTSxFQUFFLEtBQUs7SUFDYkMsS0FBSyxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0Msd0JBQXdCO0NBQzVDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BlcnNvbmFsLy4vdXRpbHMvY2xpZW50LmpzPzZlMTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNhbml0eUNsaWVudCBmcm9tIFwiQHNhbml0eS9jbGllbnRcIjtcblxuZXhwb3J0IGNvbnN0IGNsaWVudCA9IHNhbml0eUNsaWVudCh7XG4gIHByb2plY3RJZDogXCIxMW9rNGVsNlwiLFxuICBkYXRhc2V0OiBcInByb2R1Y3Rpb25cIixcbiAgYXBpVmVyc2lvbjogXCIyMDIyLTA4LTE3XCIsXG4gIHVzZUNkbjogZmFsc2UsXG4gIHRva2VuOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfVE9LRU4sXG59KTtcbiJdLCJuYW1lcyI6WyJzYW5pdHlDbGllbnQiLCJjbGllbnQiLCJwcm9qZWN0SWQiLCJkYXRhc2V0IiwiYXBpVmVyc2lvbiIsInVzZUNkbiIsInRva2VuIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NBTklUWV9UT0tFTiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/client.js\n");

/***/ }),

/***/ "(api)/./utils/queries.js":
/*!**************************!*\
  !*** ./utils/queries.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allCertsQuery\": () => (/* binding */ allCertsQuery),\n/* harmony export */   \"allProjectsQuery\": () => (/* binding */ allProjectsQuery)\n/* harmony export */ });\nconst allProjectsQuery = ()=>{\n    const query = `*[_type == 'project'] | order(_createdAt desc) {\n          _id,\n        projectName,\n        projectImage{\n          asset->{\n            _id,\n            url,\n          },\n        },\n        projectCode,\n        projectLive,\n        projectFramework,\n        projectDescription,\n      }`;\n    return query;\n};\nconst allCertsQuery = ()=>{\n    const query = `*[_type == 'certs'] | order(_createdAt desc) {\n          _id,\n        name,\n        link,\n        provider,\n        certId,\n        date,\n      }`;\n    return query;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9xdWVyaWVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sTUFBTUEsZ0JBQWdCLEdBQUcsSUFBTTtJQUNwQyxNQUFNQyxLQUFLLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7OztPQWFWLENBQUM7SUFDTixPQUFPQSxLQUFLLENBQUM7Q0FDZCxDQUFDO0FBQ0ssTUFBTUMsYUFBYSxHQUFHLElBQU07SUFDakMsTUFBTUQsS0FBSyxHQUFHLENBQUM7Ozs7Ozs7T0FPVixDQUFDO0lBQ04sT0FBT0EsS0FBSyxDQUFDO0NBQ2QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BlcnNvbmFsLy4vdXRpbHMvcXVlcmllcy5qcz8yNTZmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhbGxQcm9qZWN0c1F1ZXJ5ID0gKCkgPT4ge1xuICBjb25zdCBxdWVyeSA9IGAqW190eXBlID09ICdwcm9qZWN0J10gfCBvcmRlcihfY3JlYXRlZEF0IGRlc2MpIHtcbiAgICAgICAgICBfaWQsXG4gICAgICAgIHByb2plY3ROYW1lLFxuICAgICAgICBwcm9qZWN0SW1hZ2V7XG4gICAgICAgICAgYXNzZXQtPntcbiAgICAgICAgICAgIF9pZCxcbiAgICAgICAgICAgIHVybCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBwcm9qZWN0Q29kZSxcbiAgICAgICAgcHJvamVjdExpdmUsXG4gICAgICAgIHByb2plY3RGcmFtZXdvcmssXG4gICAgICAgIHByb2plY3REZXNjcmlwdGlvbixcbiAgICAgIH1gO1xuICByZXR1cm4gcXVlcnk7XG59O1xuZXhwb3J0IGNvbnN0IGFsbENlcnRzUXVlcnkgPSAoKSA9PiB7XG4gIGNvbnN0IHF1ZXJ5ID0gYCpbX3R5cGUgPT0gJ2NlcnRzJ10gfCBvcmRlcihfY3JlYXRlZEF0IGRlc2MpIHtcbiAgICAgICAgICBfaWQsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGxpbmssXG4gICAgICAgIHByb3ZpZGVyLFxuICAgICAgICBjZXJ0SWQsXG4gICAgICAgIGRhdGUsXG4gICAgICB9YDtcbiAgcmV0dXJuIHF1ZXJ5O1xufTtcbiJdLCJuYW1lcyI6WyJhbGxQcm9qZWN0c1F1ZXJ5IiwicXVlcnkiLCJhbGxDZXJ0c1F1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/queries.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/projects/index.js"));
module.exports = __webpack_exports__;

})();