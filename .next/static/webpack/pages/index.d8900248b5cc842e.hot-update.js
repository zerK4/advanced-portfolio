"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/projects.jsx":
/*!****************************!*\
  !*** ./pages/projects.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_functionStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/functionStore */ \"./store/functionStore.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Projects() {\n    var _this = this;\n    _s();\n    var projects = (0,_store_functionStore__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().projects;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), proj = ref[0], setProj = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), isHover = ref1[0], setIsHover = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setProj(projects);\n        console.log(projects);\n    }, [\n        projects\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full mb-20 flex flex-col gap-2 md:px-4\",\n        id: \"projects\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-2xl text-white font-semibold\",\n                children: \"Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/zerka/Desktop/projects/pages/projects.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            proj.map(function(x) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onMouseOver: function() {\n                        return setIsHover(x === null || x === void 0 ? void 0 : x._id);\n                    },\n                    onMouseOut: function() {\n                        return setIsHover(\"\");\n                    },\n                    className: \"\".concat(isHover !== \"\" && isHover !== (x === null || x === void 0 ? void 0 : x._id) ? \"bg opacity-50 scale-90\" : \"bg-[#202022] bg-opacity-100 \", \" p-2 ease-in-out duration-300 cursor-default select-none\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"font-semibold\",\n                                children: x === null || x === void 0 ? void 0 : x.projectFramework\n                            }, void 0, false, {\n                                fileName: \"/Users/zerka/Desktop/projects/pages/projects.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/zerka/Desktop/projects/pages/projects.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-[3rem] flex items-center gap-2 \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineArrowRight, {\n                                    className: \"text-orange-400\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/zerka/Desktop/projects/pages/projects.jsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-2xl\",\n                                    children: x === null || x === void 0 ? void 0 : x.projectName\n                                }, void 0, false, {\n                                    fileName: \"/Users/zerka/Desktop/projects/pages/projects.jsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/zerka/Desktop/projects/pages/projects.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center gap-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"\",\n                                children: x === null || x === void 0 ? void 0 : x.projectDescription\n                            }, void 0, false, {\n                                fileName: \"/Users/zerka/Desktop/projects/pages/projects.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/zerka/Desktop/projects/pages/projects.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full flex justify-between px-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: x === null || x === void 0 ? void 0 : x.projectCode,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"flex items-center gap-2 py-2 opacity-50 hover:opacity-100 ease-in-out duration-300\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsCodeSlash, {}, void 0, false, {\n                                                fileName: \"/Users/zerka/Desktop/projects/pages/projects.jsx\",\n                                                lineNumber: 44,\n                                                columnNumber: 17\n                                            }, _this),\n                                            \"Code\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/zerka/Desktop/projects/pages/projects.jsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/zerka/Desktop/projects/pages/projects.jsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: x === null || x === void 0 ? void 0 : x.projectLive,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"flex items-center gap-2 py-2 opacity-50 hover:opacity-100 ease-in-out duration-300\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiLinkExternal, {}, void 0, false, {\n                                                fileName: \"/Users/zerka/Desktop/projects/pages/projects.jsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 17\n                                            }, _this),\n                                            \"Live\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/zerka/Desktop/projects/pages/projects.jsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/zerka/Desktop/projects/pages/projects.jsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/zerka/Desktop/projects/pages/projects.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, x._id, true, {\n                    fileName: \"/Users/zerka/Desktop/projects/pages/projects.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zerka/Desktop/projects/pages/projects.jsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n};\n_s(Projects, \"TCwfZQXq4H2mXAv+ZdJKXnP104o=\");\n_c = Projects;\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLG9GQUFvRjs7MERBQ3BHLDhEQUFDWix1REFBVzs7OztxREFBRzs0Q0FBQSxNQUVqQjs7Ozs7OzZDQUFTOzs7Ozt5Q0FDUDs4Q0FDSiw4REFBQ3dCLEdBQUM7b0NBQUNDLElBQUksRUFBRVYsQ0FBQyxhQUFEQSxDQUFDLFdBQWEsR0FBZEEsS0FBQUEsQ0FBYyxHQUFkQSxDQUFDLENBQUVhLFdBQVc7OENBQ3JCLDRFQUFDRCxRQUFNO3dDQUFDZixTQUFTLEVBQUMsb0ZBQW9GOzswREFDcEcsOERBQUNWLDBEQUFjOzs7O3FEQUFHOzRDQUFBLE1BRXBCOzs7Ozs7NkNBQVM7Ozs7O3lDQUNQOzs7Ozs7aUNBQ0E7O21CQXpCRGEsQ0FBQyxDQUFDRSxHQUFHOzs7O3lCQTBCTjthQUNQLENBQUM7Ozs7OztZQUNFLENBQ047Q0FDSDtHQXBEdUJkLFFBQVE7QUFBUkEsS0FBQUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9qZWN0cy5qc3g/MjRhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGZ1bmN0aW9uU3RvcmUgZnJvbSBcIi4uL3N0b3JlL2Z1bmN0aW9uU3RvcmVcIjtcbmltcG9ydCB7IEJzQ29kZVNsYXNoIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5pbXBvcnQgeyBBaU91dGxpbmVBcnJvd1JpZ2h0IH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XG5pbXBvcnQgeyBCaUxpbmtFeHRlcm5hbCB9IGZyb20gXCJyZWFjdC1pY29ucy9iaVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0cygpIHtcbiAgY29uc3QgeyBwcm9qZWN0cyB9ID0gZnVuY3Rpb25TdG9yZSgpO1xuICBjb25zdCBbcHJvaiwgc2V0UHJval0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtpc0hvdmVyLCBzZXRJc0hvdmVyXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UHJvaihwcm9qZWN0cyk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuICB9LCBbcHJvamVjdHNdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1iLTIwIGZsZXggZmxleC1jb2wgZ2FwLTIgbWQ6cHgtNFwiIGlkPVwicHJvamVjdHNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkXCI+UHJvamVjdHM8L2Rpdj5cbiAgICAgIHtwcm9qLm1hcCgoeCkgPT4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHNldElzSG92ZXIoeD8uX2lkKX1cbiAgICAgICAgICBvbk1vdXNlT3V0PXsoKSA9PiBzZXRJc0hvdmVyKFwiXCIpfVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICBpc0hvdmVyICE9PSBcIlwiICYmIGlzSG92ZXIgIT09IHg/Ll9pZFxuICAgICAgICAgICAgICA/IFwiYmcgb3BhY2l0eS01MCBzY2FsZS05MFwiXG4gICAgICAgICAgICAgIDogXCJiZy1bIzIwMjAyMl0gYmctb3BhY2l0eS0xMDAgXCJcbiAgICAgICAgICB9IHAtMiBlYXNlLWluLW91dCBkdXJhdGlvbi0zMDAgY3Vyc29yLWRlZmF1bHQgc2VsZWN0LW5vbmVgfVxuICAgICAgICAgIGtleT17eC5faWR9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj57eD8ucHJvamVjdEZyYW1ld29ya308L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bM3JlbV0gZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgXCI+XG4gICAgICAgICAgICA8QWlPdXRsaW5lQXJyb3dSaWdodCBjbGFzc05hbWU9XCJ0ZXh0LW9yYW5nZS00MDBcIiAvPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsXCI+e3g/LnByb2plY3ROYW1lfTwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+e3g/LnByb2plY3REZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWJldHdlZW4gcHgtNFwiPlxuICAgICAgICAgICAgPGEgaHJlZj17eD8ucHJvamVjdENvZGV9PlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHB5LTIgb3BhY2l0eS01MCBob3ZlcjpvcGFjaXR5LTEwMCBlYXNlLWluLW91dCBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgICAgICA8QnNDb2RlU2xhc2ggLz5cbiAgICAgICAgICAgICAgICBDb2RlXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj17eD8ucHJvamVjdExpdmV9PlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHB5LTIgb3BhY2l0eS01MCBob3ZlcjpvcGFjaXR5LTEwMCBlYXNlLWluLW91dCBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgICAgICA8QmlMaW5rRXh0ZXJuYWwgLz5cbiAgICAgICAgICAgICAgICBMaXZlXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJmdW5jdGlvblN0b3JlIiwiQnNDb2RlU2xhc2giLCJBaU91dGxpbmVBcnJvd1JpZ2h0IiwiQmlMaW5rRXh0ZXJuYWwiLCJQcm9qZWN0cyIsInByb2plY3RzIiwicHJvaiIsInNldFByb2oiLCJpc0hvdmVyIiwic2V0SXNIb3ZlciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsIm1hcCIsIngiLCJvbk1vdXNlT3ZlciIsIl9pZCIsIm9uTW91c2VPdXQiLCJoMSIsInByb2plY3RGcmFtZXdvcmsiLCJwcm9qZWN0TmFtZSIsInAiLCJwcm9qZWN0RGVzY3JpcHRpb24iLCJhIiwiaHJlZiIsInByb2plY3RDb2RlIiwiYnV0dG9uIiwicHJvamVjdExpdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/projects.jsx\n"));

/***/ })

});