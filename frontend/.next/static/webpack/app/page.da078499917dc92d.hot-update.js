"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_particles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/particles */ \"(app-pages-browser)/./app/components/particles.tsx\");\n/* harmony import */ var _components_Cursor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Cursor */ \"(app-pages-browser)/./app/components/Cursor.tsx\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer */ \"(app-pages-browser)/./app/components/footer.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst navigation = [\n    {\n        name: \"Projects\",\n        href: \"/projects\"\n    },\n    {\n        name: \"Experiences\",\n        href: \"/experience\"\n    },\n    {\n        name: \"Contact\",\n        href: \"/contact\"\n    }\n];\nfunction Home() {\n    _s();\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const updateCounter = async ()=>{\n            try {\n                const response = await fetch(\"https://your-backend-url/api/viewcount\");\n                const data = await response.json();\n                setCount(data.count);\n            } catch (error) {\n                console.error(\"Error fetching counter:\", error);\n            }\n        };\n        updateCounter();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Cursor__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/maz/Documents/Projects/portfolio/frontend/app/page.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center w-screen min-h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"my-7 animate-fade-in\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"flex items-center justify-center gap-4\",\n                            children: navigation.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: item.href,\n                                    className: \"text-sm md:text-xl lg:text-xl duration-500 text-zinc-500 hover:text-zinc-300\",\n                                    children: item.name\n                                }, item.href, false, {\n                                    fileName: \"/home/maz/Documents/Projects/portfolio/frontend/app/page.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/home/maz/Documents/Projects/portfolio/frontend/app/page.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/maz/Documents/Projects/portfolio/frontend/app/page.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0\"\n                    }, void 0, false, {\n                        fileName: \"/home/maz/Documents/Projects/portfolio/frontend/app/page.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_particles__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        className: \"absolute inset-0 -z-10 animate-fade-in\",\n                        quantity: 100\n                    }, void 0, false, {\n                        fileName: \"/home/maz/Documents/Projects/portfolio/frontend/app/page.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \" text-zinc-500 mb-4 text-sm md:text-xl lg:text-xl\",\n                        children: \"Hi I'm\"\n                    }, void 0, false, {\n                        fileName: \"/home/maz/Documents/Projects/portfolio/frontend/app/page.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-8xl whitespace-nowrap bg-clip-text \",\n                        children: \"Avhi Mazumder\"\n                    }, void 0, false, {\n                        fileName: \"/home/maz/Documents/Projects/portfolio/frontend/app/page.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-zinc-500 text-sm md:text-xl lg:text-xl mt-5\",\n                        children: [\n                            \"building\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"https://viralxpost.xyz\",\n                                target: \"_\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"backdrop-blur duration-200 cursor-pointer hover:text-zinc-300\",\n                                        children: \"@viralxpost\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/maz/Documents/Projects/portfolio/frontend/app/page.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 13\n                                    }, this),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/maz/Documents/Projects/portfolio/frontend/app/page.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, this),\n                            \"+\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"backdrop-blur duration-200 cursor-pointer hover:text-zinc-300\",\n                                    children: \"@fitnesspergram\"\n                                }, void 0, false, {\n                                    fileName: \"/home/maz/Documents/Projects/portfolio/frontend/app/page.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/maz/Documents/Projects/portfolio/frontend/app/page.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/maz/Documents/Projects/portfolio/frontend/app/page.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0\"\n                    }, void 0, false, {\n                        fileName: \"/home/maz/Documents/Projects/portfolio/frontend/app/page.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/maz/Documents/Projects/portfolio/frontend/app/page.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-zinc-500 text-sm md:text-xl lg:text-xl mt-5\",\n                        children: [\n                            \"Profile views: \",\n                            count\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/maz/Documents/Projects/portfolio/frontend/app/page.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"my-5 mx-4 text-center animate-fade-in\"\n                    }, void 0, false, {\n                        fileName: \"/home/maz/Documents/Projects/portfolio/frontend/app/page.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/maz/Documents/Projects/portfolio/frontend/app/page.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"XeM2Swa48AXpsYvvdoNmFufJfaQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUU2QjtBQUNzQjtBQUNKO0FBQ047QUFDQTtBQUV6QyxNQUFNTyxhQUFhO0lBQ2pCO1FBQUVDLE1BQU07UUFBWUMsTUFBTTtJQUFZO0lBQ3RDO1FBQUVELE1BQU07UUFBZUMsTUFBTTtJQUFjO0lBQzNDO1FBQUVELE1BQU07UUFBV0MsTUFBTTtJQUFXO0NBQ3JDO0FBRWMsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBZ0I7SUFFbERELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVcsZ0JBQWdCO1lBQ3BCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO2dCQUM3QixNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7Z0JBQ2hDTCxTQUFTSSxLQUFLTCxLQUFLO1lBQ3JCLEVBQUUsT0FBT08sT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLDJCQUEyQkE7WUFDM0M7UUFDRjtRQUVBTDtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFOzswQkFDRSw4REFBQ1IsMERBQU1BOzs7OzswQkFDUCw4REFBQ2U7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBSUQsV0FBVTtrQ0FDYiw0RUFBQ0U7NEJBQUdGLFdBQVU7c0NBQ1hkLFdBQVdpQixHQUFHLENBQUMsQ0FBQ0MscUJBQ2YsOERBQUN6QixrREFBSUE7b0NBRUhTLE1BQU1nQixLQUFLaEIsSUFBSTtvQ0FDZlksV0FBVTs4Q0FFVEksS0FBS2pCLElBQUk7bUNBSkxpQixLQUFLaEIsSUFBSTs7Ozs7Ozs7Ozs7Ozs7O2tDQVN0Qiw4REFBQ1c7d0JBQUlDLFdBQVU7Ozs7OztrQ0FDZiw4REFBQ2pCLDZEQUFTQTt3QkFDUmlCLFdBQVU7d0JBQ1ZLLFVBQVU7Ozs7OztrQ0FFWiw4REFBQ0M7d0JBQUtOLFdBQVU7a0NBQW9EOzs7Ozs7a0NBR3BFLDhEQUFDTzt3QkFBR1AsV0FBVTtrQ0FBNEs7Ozs7OztrQ0FHMUwsOERBQUNRO3dCQUFFUixXQUFVOzs0QkFBbUQ7NEJBQ3JEOzBDQUNULDhEQUFDckIsa0RBQUlBO2dDQUFDUyxNQUFLO2dDQUF5QnFCLFFBQU87O2tEQUN6Qyw4REFBQ0g7d0NBQUtOLFdBQVU7a0RBQWdFOzs7Ozs7b0NBRXhFOzs7Ozs7OzRCQUNIOzRCQUNMOzBDQUNGLDhEQUFDckIsa0RBQUlBO2dDQUFDUyxNQUFLOzBDQUNULDRFQUFDa0I7b0NBQUtOLFdBQVU7OENBQWdFOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLcEYsOERBQUNEO3dCQUFJQyxXQUFVOzs7Ozs7a0NBQ2YsOERBQUNmLDBEQUFNQTs7Ozs7a0NBQ1AsOERBQUN1Qjt3QkFBRVIsV0FBVTs7NEJBQW1EOzRCQUM5Q1Y7Ozs7Ozs7a0NBR2xCLDhEQUFDUzt3QkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7QUFJdkI7R0FyRXdCWDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQYXJ0aWNsZXMgZnJvbSBcIi4vY29tcG9uZW50cy9wYXJ0aWNsZXNcIjtcbmltcG9ydCBDdXJzb3IgZnJvbSBcIi4vY29tcG9uZW50cy9DdXJzb3JcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vY29tcG9uZW50cy9mb290ZXJcIjtcblxuY29uc3QgbmF2aWdhdGlvbiA9IFtcbiAgeyBuYW1lOiBcIlByb2plY3RzXCIsIGhyZWY6IFwiL3Byb2plY3RzXCIgfSxcbiAgeyBuYW1lOiBcIkV4cGVyaWVuY2VzXCIsIGhyZWY6IFwiL2V4cGVyaWVuY2VcIiB9LFxuICB7IG5hbWU6IFwiQ29udGFjdFwiLCBocmVmOiBcIi9jb250YWN0XCIgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1cGRhdGVDb3VudGVyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly95b3VyLWJhY2tlbmQtdXJsL2FwaS92aWV3Y291bnQnKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgc2V0Q291bnQoZGF0YS5jb3VudCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBjb3VudGVyOicsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdXBkYXRlQ291bnRlcigpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEN1cnNvciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LXNjcmVlbiBtaW4taC1zY3JlZW4gb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYWRpZW50LXRvLXRsIGZyb20tYmxhY2sgdmlhLXppbmMtNjAwLzIwIHRvLWJsYWNrXCI+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibXktNyBhbmltYXRlLWZhZGUtaW5cIj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICAgIHtuYXZpZ2F0aW9uLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGtleT17aXRlbS5ocmVmfVxuICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0uaHJlZn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1kOnRleHQteGwgbGc6dGV4dC14bCBkdXJhdGlvbi01MDAgdGV4dC16aW5jLTUwMCBob3Zlcjp0ZXh0LXppbmMtMzAwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiB3LXNjcmVlbiBoLXB4IGFuaW1hdGUtZ2xvdyBtZDpibG9jayBhbmltYXRlLWZhZGUtbGVmdCBiZy1ncmFkaWVudC10by1yIGZyb20temluYy0zMDAvMCB2aWEtemluYy0zMDAvNTAgdG8temluYy0zMDAvMFwiIC8+XG4gICAgICAgIDxQYXJ0aWNsZXNcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIC16LTEwIGFuaW1hdGUtZmFkZS1pblwiXG4gICAgICAgICAgcXVhbnRpdHk9ezEwMH1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiIHRleHQtemluYy01MDAgbWItNCB0ZXh0LXNtIG1kOnRleHQteGwgbGc6dGV4dC14bFwiPlxuICAgICAgICAgIEhpIEknbVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ6LTEwIHRleHQtNHhsIHRleHQtdHJhbnNwYXJlbnQgZHVyYXRpb24tMTAwMCBiZy13aGl0ZSBjdXJzb3ItZGVmYXVsdCB0ZXh0LWVkZ2Utb3V0bGluZSBhbmltYXRlLXRpdGxlIGZvbnQtZGlzcGxheSBzbTp0ZXh0LTZ4bCBtZDp0ZXh0LTh4bCB3aGl0ZXNwYWNlLW5vd3JhcCBiZy1jbGlwLXRleHQgXCI+XG4gICAgICAgICAgQXZoaSBNYXp1bWRlclxuICAgICAgICA8L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXppbmMtNTAwIHRleHQtc20gbWQ6dGV4dC14bCBsZzp0ZXh0LXhsIG10LTVcIj5cbiAgICAgICAgICBidWlsZGluZ3tcIiBcIn1cbiAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly92aXJhbHhwb3N0Lnh5elwiIHRhcmdldD1cIl9cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhY2tkcm9wLWJsdXIgZHVyYXRpb24tMjAwIGN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtemluYy0zMDBcIj5cbiAgICAgICAgICAgICAgQHZpcmFseHBvc3RcbiAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICt7XCIgXCJ9XG4gICAgICAgICAgPExpbmsgaHJlZj1cIlwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFja2Ryb3AtYmx1ciBkdXJhdGlvbi0yMDAgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC16aW5jLTMwMFwiPlxuICAgICAgICAgICAgICBAZml0bmVzc3BlcmdyYW1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gdy1zY3JlZW4gaC1weCBhbmltYXRlLWdsb3cgbWQ6YmxvY2sgYW5pbWF0ZS1mYWRlLXJpZ2h0IGJnLWdyYWRpZW50LXRvLXIgZnJvbS16aW5jLTMwMC8wIHZpYS16aW5jLTMwMC81MCB0by16aW5jLTMwMC8wXCIgLz5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXppbmMtNTAwIHRleHQtc20gbWQ6dGV4dC14bCBsZzp0ZXh0LXhsIG10LTVcIj5cbiAgICAgICAgICBQcm9maWxlIHZpZXdzOiB7Y291bnR9XG4gICAgICAgIDwvcD5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTUgbXgtNCB0ZXh0LWNlbnRlciBhbmltYXRlLWZhZGUtaW5cIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUGFydGljbGVzIiwiQ3Vyc29yIiwiRm9vdGVyIiwibmF2aWdhdGlvbiIsIm5hbWUiLCJocmVmIiwiSG9tZSIsImNvdW50Iiwic2V0Q291bnQiLCJ1cGRhdGVDb3VudGVyIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwibmF2IiwidWwiLCJtYXAiLCJpdGVtIiwicXVhbnRpdHkiLCJzcGFuIiwiaDEiLCJwIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});