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

/***/ "./pages/certification.jsx":
/*!*********************************!*\
  !*** ./pages/certification.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Certification; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_functionStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/functionStore */ \"./store/functionStore.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Certification() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), certificat = ref[0], setCertificat = ref[1];\n    var certs = (0,_store_functionStore__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().certs;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), isHover = ref1[0], setIsHover = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setCertificat(certs);\n    }, [\n        certs\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"py-4 md:px-4\",\n        id: \"certs\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-2xl text-white font-semibold my-2\",\n                children: \"Certification\"\n            }, void 0, false, {\n                fileName: \"/Users/zerka/Desktop/projects/pages/certification.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-2\",\n                children: certificat.map(function(x) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onMouseOver: function() {\n                            return setIsHover(x === null || x === void 0 ? void 0 : x._id);\n                        },\n                        onMouseOut: function() {\n                            return setIsHover(\"\");\n                        },\n                        className: \"\".concat(isHover !== \"\" && isHover !== (x === null || x === void 0 ? void 0 : x._id) ? \"bg opacity-50 scale-90\" : \"bg-[#202022] bg-opacity-100 \", \" p-2 ease-in-out duration-300 cursor-default select-none\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"font-semibold\",\n                                    children: x === null || x === void 0 ? void 0 : x.provider\n                                }, void 0, false, {\n                                    fileName: \"/Users/zerka/Desktop/projects/pages/certification.jsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/zerka/Desktop/projects/pages/certification.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-[3rem] flex items-center gap-2 \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineArrowRight, {\n                                        className: \"text-orange-400\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zerka/Desktop/projects/pages/certification.jsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-2xl\",\n                                        children: x === null || x === void 0 ? void 0 : x.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zerka/Desktop/projects/pages/certification.jsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/zerka/Desktop/projects/pages/certification.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center gap-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__.BiCertification, {\n                                        className: \"text-green-400\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zerka/Desktop/projects/pages/certification.jsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"\",\n                                        children: x === null || x === void 0 ? void 0 : x.certId\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zerka/Desktop/projects/pages/certification.jsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/zerka/Desktop/projects/pages/certification.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"my-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: x === null || x === void 0 ? void 0 : x.link,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"flex items-center gap-2 opacity-70 hover:opacity-100 ease-in-out duration-300\",\n                                        children: [\n                                            \"See it \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__.BiLinkExternal, {}, void 0, false, {\n                                                fileName: \"/Users/zerka/Desktop/projects/pages/certification.jsx\",\n                                                lineNumber: 47,\n                                                columnNumber: 26\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/zerka/Desktop/projects/pages/certification.jsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/zerka/Desktop/projects/pages/certification.jsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/zerka/Desktop/projects/pages/certification.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, x._id, true, {\n                        fileName: \"/Users/zerka/Desktop/projects/pages/certification.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/zerka/Desktop/projects/pages/certification.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zerka/Desktop/projects/pages/certification.jsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n};\n_s(Certification, \"TCwfZQXq4H2mXAv+ZdJKXnP104o=\");\n_c = Certification;\nvar _c;\n$RefreshReg$(_c, \"Certification\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUVXLElBQUk7OENBQ2QsNEVBQUNDLFFBQU07d0NBQUNmLFNBQVMsRUFBQywrRUFBK0U7OzRDQUFDLFNBQ3pGOzBEQUFBLDhEQUFDUiwwREFBYzs7OztxREFBRzs7Ozs7OzZDQUNsQjs7Ozs7eUNBQ1A7Ozs7O3FDQUNBOzt1QkFuQkRXLENBQUMsQ0FBQ0UsR0FBRzs7Ozs2QkFvQk47aUJBQ1AsQ0FBQzs7Ozs7b0JBQ0U7Ozs7OztZQUNGLENBQ047Q0FDSDtHQWpEdUJaLGFBQWE7QUFBYkEsS0FBQUEsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jZXJ0aWZpY2F0aW9uLmpzeD8wNjg5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZnVuY3Rpb25TdG9yZSBmcm9tIFwiLi4vc3RvcmUvZnVuY3Rpb25TdG9yZVwiO1xuaW1wb3J0IHsgQmlDZXJ0aWZpY2F0aW9uIH0gZnJvbSBcInJlYWN0LWljb25zL2JpXCI7XG5pbXBvcnQgeyBBaU91dGxpbmVBcnJvd1JpZ2h0IH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XG5pbXBvcnQgeyBCaUxpbmtFeHRlcm5hbCB9IGZyb20gXCJyZWFjdC1pY29ucy9iaVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDZXJ0aWZpY2F0aW9uKCkge1xuICBjb25zdCBbY2VydGlmaWNhdCwgc2V0Q2VydGlmaWNhdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IHsgY2VydHMgfSA9IGZ1bmN0aW9uU3RvcmUoKTtcbiAgY29uc3QgW2lzSG92ZXIsIHNldElzSG92ZXJdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDZXJ0aWZpY2F0KGNlcnRzKTtcbiAgfSwgW2NlcnRzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTQgbWQ6cHgtNFwiIGlkPVwiY2VydHNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC13aGl0ZSAgZm9udC1zZW1pYm9sZCBteS0yXCI+XG4gICAgICAgIENlcnRpZmljYXRpb25cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0yXCI+XG4gICAgICAgIHtjZXJ0aWZpY2F0Lm1hcCgoeCkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiBzZXRJc0hvdmVyKHg/Ll9pZCl9XG4gICAgICAgICAgICBvbk1vdXNlT3V0PXsoKSA9PiBzZXRJc0hvdmVyKFwiXCIpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgaXNIb3ZlciAhPT0gXCJcIiAmJiBpc0hvdmVyICE9PSB4Py5faWRcbiAgICAgICAgICAgICAgICA/IFwiYmcgb3BhY2l0eS01MCBzY2FsZS05MFwiXG4gICAgICAgICAgICAgICAgOiBcImJnLVsjMjAyMDIyXSBiZy1vcGFjaXR5LTEwMCBcIlxuICAgICAgICAgICAgfSBwLTIgZWFzZS1pbi1vdXQgZHVyYXRpb24tMzAwIGN1cnNvci1kZWZhdWx0IHNlbGVjdC1ub25lYH1cbiAgICAgICAgICAgIGtleT17eC5faWR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj57eD8ucHJvdmlkZXJ9PC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVszcmVtXSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBcIj5cbiAgICAgICAgICAgICAgPEFpT3V0bGluZUFycm93UmlnaHQgY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2UtNDAwXCIgLz5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsXCI+e3g/Lm5hbWV9PC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICA8QmlDZXJ0aWZpY2F0aW9uIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNDAwXCIgLz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+e3g/LmNlcnRJZH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMlwiPlxuICAgICAgICAgICAgICA8YSBocmVmPXt4Py5saW5rfT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIG9wYWNpdHktNzAgaG92ZXI6b3BhY2l0eS0xMDAgZWFzZS1pbi1vdXQgZHVyYXRpb24tMzAwXCI+XG4gICAgICAgICAgICAgICAgICBTZWUgaXQgPEJpTGlua0V4dGVybmFsIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJmdW5jdGlvblN0b3JlIiwiQmlDZXJ0aWZpY2F0aW9uIiwiQWlPdXRsaW5lQXJyb3dSaWdodCIsIkJpTGlua0V4dGVybmFsIiwiQ2VydGlmaWNhdGlvbiIsImNlcnRpZmljYXQiLCJzZXRDZXJ0aWZpY2F0IiwiY2VydHMiLCJpc0hvdmVyIiwic2V0SXNIb3ZlciIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwibWFwIiwieCIsIm9uTW91c2VPdmVyIiwiX2lkIiwib25Nb3VzZU91dCIsImgxIiwicHJvdmlkZXIiLCJuYW1lIiwicCIsImNlcnRJZCIsImEiLCJocmVmIiwibGluayIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/certification.jsx\n"));

/***/ })

});