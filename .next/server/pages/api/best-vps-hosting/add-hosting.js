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
exports.id = "pages/api/best-vps-hosting/add-hosting";
exports.ids = ["pages/api/best-vps-hosting/add-hosting"];
exports.modules = {

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fbest-vps-hosting%2Fadd-hosting&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cbest-vps-hosting%5Cadd-hosting%5Cindex.js&middlewareConfigBase64=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fbest-vps-hosting%2Fadd-hosting&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cbest-vps-hosting%5Cadd-hosting%5Cindex.js&middlewareConfigBase64=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_best_vps_hosting_add_hosting_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\best-vps-hosting\\add-hosting\\index.js */ \"(api)/./pages/api/best-vps-hosting/add-hosting/index.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_best_vps_hosting_add_hosting_index_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_best_vps_hosting_add_hosting_index_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/best-vps-hosting/add-hosting\",\n        pathname: \"/api/best-vps-hosting/add-hosting\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_best_vps_hosting_add_hosting_index_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmJlc3QtdnBzLWhvc3RpbmclMkZhZGQtaG9zdGluZyZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTVDYXBpJTVDYmVzdC12cHMtaG9zdGluZyU1Q2FkZC1ob3N0aW5nJTVDaW5kZXguanMmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ0w7QUFDMUQ7QUFDa0Y7QUFDbEY7QUFDQSxpRUFBZSx3RUFBSyxDQUFDLDZFQUFRLFlBQVksRUFBQztBQUMxQztBQUNPLGVBQWUsd0VBQUssQ0FBQyw2RUFBUTtBQUNwQztBQUNPLHdCQUF3QixnSEFBbUI7QUFDbEQ7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsWUFBWTtBQUNaLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aG8taXMtaG9zdGluZy8/ZWFhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlc0FQSVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvcGFnZXMtYXBpL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vcGFnZXNcXFxcYXBpXFxcXGJlc3QtdnBzLWhvc3RpbmdcXFxcYWRkLWhvc3RpbmdcXFxcaW5kZXguanNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IGNvbmZpZy5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9iZXN0LXZwcy1ob3N0aW5nL2FkZC1ob3N0aW5nXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYmVzdC12cHMtaG9zdGluZy9hZGQtaG9zdGluZ1wiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcIlwiXG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLWFwaS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fbest-vps-hosting%2Fadd-hosting&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cbest-vps-hosting%5Cadd-hosting%5Cindex.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./pages/api/best-vps-hosting/add-hosting/index.js":
/*!*********************************************************!*\
  !*** ./pages/api/best-vps-hosting/add-hosting/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multer */ \"multer\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _isLoggedIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../isLoggedIn */ \"(api)/./pages/api/isLoggedIn.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst upload = multer__WEBPACK_IMPORTED_MODULE_0___default()({\n    storage: multer__WEBPACK_IMPORTED_MODULE_0___default().diskStorage({\n        destination: \"./public/images/best-vps-hosting/hosting-logo\",\n        filename: (req, file, cb)=>{\n            cb(null, file.originalname);\n        }\n    }),\n    limits: {\n        fileSize: 10000000000\n    }\n});\nconst filePath = path__WEBPACK_IMPORTED_MODULE_3___default().join(process.cwd(), \"db.json\");\nasync function handler(req, res) {\n    const data = fs__WEBPACK_IMPORTED_MODULE_4___default().readFileSync(filePath, \"utf-8\");\n    const database = JSON.parse(data);\n    const client = new mongodb__WEBPACK_IMPORTED_MODULE_1__.MongoClient(database.db);\n    try {\n        switch(req.method){\n            case \"POST\":\n                upload.single(\"hostingImage\")(req, res, async (err)=>{\n                    await client.connect(); // Connect to the MongoDB Server\n                    const token = JSON.parse(req.body?.token)?.token;\n                    if ((0,_isLoggedIn__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(token)) {\n                        const { id, hostingTag, hostingRating, hostingName, hostingFeatures, buttonText, affiliateLink, hostingImage, whyPicked, prosCons, uniqueId } = req.body;\n                        const files = req?.file?.path;\n                        const updateData = {\n                            id: id,\n                            hostingTag: hostingTag,\n                            hostingName: hostingName,\n                            hostingRating: hostingRating,\n                            hostingFeatures: hostingFeatures,\n                            buttonText: buttonText,\n                            affiliateLink: affiliateLink,\n                            hostingImage: hostingImage,\n                            whyPicked: whyPicked,\n                            prosCons: prosCons,\n                            uniqueId: uniqueId\n                        };\n                        if (files) {\n                            updateData.hostingImage = files;\n                        }\n                        const result = await client.db(database.dbName).collection(\"best-vps-hosting\").updateOne({}, {\n                            $push: {\n                                addHosting: {\n                                    $each: [\n                                        updateData\n                                    ],\n                                    $position: 0\n                                }\n                            }\n                        }, {\n                            upsert: true\n                        });\n                        if (result.modifiedCount > 0 || result.upsertedCount > 0) {\n                            res.json({\n                                status: true,\n                                message: \"Updated successfully\"\n                            });\n                        } else {\n                            res.json({\n                                status: false,\n                                message: \"Update was not successful. Please change some input.\"\n                            });\n                        }\n                    } else {\n                        res.json({\n                            status: false,\n                            message: \"Update was not successful. Please login again.\"\n                        });\n                    }\n                });\n                break;\n            case \"GET\":\n                await client.db(database.dbName).collection(\"best-vps-hosting\").findOne({}, {\n                    projection: {\n                        _id: 0,\n                        addHosting: 1\n                    }\n                }).then((docs)=>res.json(docs));\n        }\n    } catch (error) {\n        console.log(\"some error occurred\", error);\n    } finally{\n        await client.close();\n    }\n}\nconst config = {\n    api: {\n        externalResolver: true,\n        bodyParser: false\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmVzdC12cHMtaG9zdGluZy9hZGQtaG9zdGluZy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNVO0FBRUk7QUFDbEI7QUFDSjtBQUNwQixNQUFNSyxTQUFTTCw2Q0FBTUEsQ0FBQztJQUNwQk0sU0FBU04seURBQWtCLENBQUM7UUFDMUJRLGFBQWE7UUFDYkMsVUFBVSxDQUFDQyxLQUFLQyxNQUFNQztZQUNwQkEsR0FBRyxNQUFNRCxLQUFLRSxZQUFZO1FBQzVCO0lBQ0Y7SUFDQUMsUUFBUTtRQUNOQyxVQUFVO0lBQ1o7QUFDRjtBQUNBLE1BQU1DLFdBQVdiLGdEQUFTLENBQUNlLFFBQVFDLEdBQUcsSUFBSTtBQUMzQixlQUFlQyxRQUFRVixHQUFHLEVBQUVXLEdBQUc7SUFDNUMsTUFBTUMsT0FBT2xCLHNEQUFlLENBQUNZLFVBQVU7SUFDdkMsTUFBTVEsV0FBV0MsS0FBS0MsS0FBSyxDQUFDSjtJQUM1QixNQUFNSyxTQUFTLElBQUkxQixnREFBV0EsQ0FBQ3VCLFNBQVNJLEVBQUU7SUFDMUMsSUFBSTtRQUNGLE9BQVFsQixJQUFJbUIsTUFBTTtZQUNoQixLQUFLO2dCQUNIeEIsT0FBT3lCLE1BQU0sQ0FBQyxnQkFBZ0JwQixLQUFLVyxLQUFLLE9BQU9VO29CQUM3QyxNQUFNSixPQUFPSyxPQUFPLElBQUksZ0NBQWdDO29CQUN4RCxNQUFNQyxRQUFRUixLQUFLQyxLQUFLLENBQUNoQixJQUFJd0IsSUFBSSxFQUFFRCxRQUFRQTtvQkFDM0MsSUFBSS9CLHVEQUFVQSxDQUFDK0IsUUFBUTt3QkFDckIsTUFBTSxFQUNKRSxFQUFFLEVBQ0ZDLFVBQVUsRUFDVkMsYUFBYSxFQUNiQyxXQUFXLEVBQ1hDLGVBQWUsRUFDZkMsVUFBVSxFQUNWQyxhQUFhLEVBQ2JDLFlBQVksRUFDWkMsU0FBUyxFQUNUQyxRQUFRLEVBQ1JDLFFBQVEsRUFDVCxHQUFHbkMsSUFBSXdCLElBQUk7d0JBQ1osTUFBTVksUUFBUXBDLEtBQUtDLE1BQU1SO3dCQUV6QixNQUFNNEMsYUFBYTs0QkFDakJaLElBQUlBOzRCQUNKQyxZQUFZQTs0QkFDWkUsYUFBYUE7NEJBQ2JELGVBQWVBOzRCQUNmRSxpQkFBaUJBOzRCQUNqQkMsWUFBWUE7NEJBQ1pDLGVBQWVBOzRCQUNmQyxjQUFjQTs0QkFDZEMsV0FBV0E7NEJBQ1hDLFVBQVVBOzRCQUNWQyxVQUFVQTt3QkFDWjt3QkFDQSxJQUFJQyxPQUFPOzRCQUNUQyxXQUFXTCxZQUFZLEdBQUdJO3dCQUM1Qjt3QkFFQSxNQUFNRSxTQUFTLE1BQU1yQixPQUNsQkMsRUFBRSxDQUFDSixTQUFTeUIsTUFBTSxFQUNsQkMsVUFBVSxDQUFDLG9CQUNYQyxTQUFTLENBQ1IsQ0FBQyxHQUNEOzRCQUNFQyxPQUFPO2dDQUNMQyxZQUFZO29DQUNWQyxPQUFPO3dDQUFDUDtxQ0FBVztvQ0FDbkJRLFdBQVc7Z0NBQ2I7NEJBQ0Y7d0JBQ0YsR0FDQTs0QkFBRUMsUUFBUTt3QkFBSzt3QkFFbkIsSUFBSVIsT0FBT1MsYUFBYSxHQUFHLEtBQUtULE9BQU9VLGFBQWEsR0FBRyxHQUFHOzRCQUN4RHJDLElBQUlzQyxJQUFJLENBQUM7Z0NBQ1BDLFFBQVE7Z0NBQ1JDLFNBQVM7NEJBQ1g7d0JBQ0YsT0FBTzs0QkFDTHhDLElBQUlzQyxJQUFJLENBQUM7Z0NBQ1BDLFFBQVE7Z0NBQ1JDLFNBQVM7NEJBQ1g7d0JBQ0Y7b0JBQ0YsT0FBTzt3QkFDTHhDLElBQUlzQyxJQUFJLENBQUM7NEJBQ1BDLFFBQVE7NEJBQ1JDLFNBQVM7d0JBQ1g7b0JBQ0Y7Z0JBQ0Y7Z0JBQ0E7WUFFRixLQUFLO2dCQUNILE1BQU1sQyxPQUNIQyxFQUFFLENBQUNKLFNBQVN5QixNQUFNLEVBQ2xCQyxVQUFVLENBQUMsb0JBQ1hZLE9BQU8sQ0FBQyxDQUFDLEdBQUc7b0JBQUVDLFlBQVk7d0JBQUVDLEtBQUs7d0JBQUdYLFlBQVk7b0JBQUU7Z0JBQUUsR0FDcERZLElBQUksQ0FBQyxDQUFDQyxPQUFTN0MsSUFBSXNDLElBQUksQ0FBQ087UUFDL0I7SUFDRixFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUMsR0FBRyxDQUFDLHVCQUF1QkY7SUFDckMsU0FBVTtRQUNSLE1BQU14QyxPQUFPMkMsS0FBSztJQUNwQjtBQUNGO0FBQ08sTUFBTUMsU0FBUztJQUNwQkMsS0FBSztRQUNIQyxrQkFBa0I7UUFDbEJDLFlBQVk7SUFDZDtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aG8taXMtaG9zdGluZy8uL3BhZ2VzL2FwaS9iZXN0LXZwcy1ob3N0aW5nL2FkZC1ob3N0aW5nL2luZGV4LmpzPzdhNDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG11bHRlciBmcm9tIFwibXVsdGVyXCI7XG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5cbmltcG9ydCBpc0xvZ2dlZEluIGZyb20gXCIuLi8uLi9pc0xvZ2dlZEluXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuY29uc3QgdXBsb2FkID0gbXVsdGVyKHtcbiAgc3RvcmFnZTogbXVsdGVyLmRpc2tTdG9yYWdlKHtcbiAgICBkZXN0aW5hdGlvbjogXCIuL3B1YmxpYy9pbWFnZXMvYmVzdC12cHMtaG9zdGluZy9ob3N0aW5nLWxvZ29cIixcbiAgICBmaWxlbmFtZTogKHJlcSwgZmlsZSwgY2IpID0+IHtcbiAgICAgIGNiKG51bGwsIGZpbGUub3JpZ2luYWxuYW1lKTtcbiAgICB9LFxuICB9KSxcbiAgbGltaXRzOiB7XG4gICAgZmlsZVNpemU6IDEwMDAwMDAwMDAwLFxuICB9LFxufSk7XG5jb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcImRiLmpzb25cIik7XG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgsIFwidXRmLThcIik7XG4gIGNvbnN0IGRhdGFiYXNlID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgY29uc3QgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KGRhdGFiYXNlLmRiKTtcbiAgdHJ5IHtcbiAgICBzd2l0Y2ggKHJlcS5tZXRob2QpIHtcbiAgICAgIGNhc2UgXCJQT1NUXCI6XG4gICAgICAgIHVwbG9hZC5zaW5nbGUoXCJob3N0aW5nSW1hZ2VcIikocmVxLCByZXMsIGFzeW5jIChlcnIpID0+IHtcbiAgICAgICAgICBhd2FpdCBjbGllbnQuY29ubmVjdCgpOyAvLyBDb25uZWN0IHRvIHRoZSBNb25nb0RCIFNlcnZlclxuICAgICAgICAgIGNvbnN0IHRva2VuID0gSlNPTi5wYXJzZShyZXEuYm9keT8udG9rZW4pPy50b2tlbjtcbiAgICAgICAgICBpZiAoaXNMb2dnZWRJbih0b2tlbikpIHtcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgIGhvc3RpbmdUYWcsXG4gICAgICAgICAgICAgIGhvc3RpbmdSYXRpbmcsXG4gICAgICAgICAgICAgIGhvc3RpbmdOYW1lLFxuICAgICAgICAgICAgICBob3N0aW5nRmVhdHVyZXMsXG4gICAgICAgICAgICAgIGJ1dHRvblRleHQsXG4gICAgICAgICAgICAgIGFmZmlsaWF0ZUxpbmssXG4gICAgICAgICAgICAgIGhvc3RpbmdJbWFnZSxcbiAgICAgICAgICAgICAgd2h5UGlja2VkLFxuICAgICAgICAgICAgICBwcm9zQ29ucyxcbiAgICAgICAgICAgICAgdW5pcXVlSWQsXG4gICAgICAgICAgICB9ID0gcmVxLmJvZHk7XG4gICAgICAgICAgICBjb25zdCBmaWxlcyA9IHJlcT8uZmlsZT8ucGF0aDtcblxuICAgICAgICAgICAgY29uc3QgdXBkYXRlRGF0YSA9IHtcbiAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICBob3N0aW5nVGFnOiBob3N0aW5nVGFnLFxuICAgICAgICAgICAgICBob3N0aW5nTmFtZTogaG9zdGluZ05hbWUsXG4gICAgICAgICAgICAgIGhvc3RpbmdSYXRpbmc6IGhvc3RpbmdSYXRpbmcsXG4gICAgICAgICAgICAgIGhvc3RpbmdGZWF0dXJlczogaG9zdGluZ0ZlYXR1cmVzLFxuICAgICAgICAgICAgICBidXR0b25UZXh0OiBidXR0b25UZXh0LFxuICAgICAgICAgICAgICBhZmZpbGlhdGVMaW5rOiBhZmZpbGlhdGVMaW5rLFxuICAgICAgICAgICAgICBob3N0aW5nSW1hZ2U6IGhvc3RpbmdJbWFnZSxcbiAgICAgICAgICAgICAgd2h5UGlja2VkOiB3aHlQaWNrZWQsXG4gICAgICAgICAgICAgIHByb3NDb25zOiBwcm9zQ29ucyxcbiAgICAgICAgICAgICAgdW5pcXVlSWQ6IHVuaXF1ZUlkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChmaWxlcykge1xuICAgICAgICAgICAgICB1cGRhdGVEYXRhLmhvc3RpbmdJbWFnZSA9IGZpbGVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbGllbnRcbiAgICAgICAgICAgICAgLmRiKGRhdGFiYXNlLmRiTmFtZSlcbiAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJiZXN0LXZwcy1ob3N0aW5nXCIpXG4gICAgICAgICAgICAgIC51cGRhdGVPbmUoXG4gICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgJHB1c2g6IHtcbiAgICAgICAgICAgICAgICAgICAgYWRkSG9zdGluZzoge1xuICAgICAgICAgICAgICAgICAgICAgICRlYWNoOiBbdXBkYXRlRGF0YV0sIC8vIEluc2VydCByZXEuYm9keSBpbnRvIHRoZSBhcnJheVxuICAgICAgICAgICAgICAgICAgICAgICRwb3NpdGlvbjogMCwgLy8gU3BlY2lmeSB0aGUgcG9zaXRpb24gdG8gaW5zZXJ0ICgwIGZvciBiZWdpbm5pbmcsIC0xIGZvciBlbmQpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeyB1cHNlcnQ6IHRydWUgfVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5tb2RpZmllZENvdW50ID4gMCB8fCByZXN1bHQudXBzZXJ0ZWRDb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgcmVzLmpzb24oe1xuICAgICAgICAgICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzLmpzb24oe1xuICAgICAgICAgICAgICAgIHN0YXR1czogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJVcGRhdGUgd2FzIG5vdCBzdWNjZXNzZnVsLiBQbGVhc2UgY2hhbmdlIHNvbWUgaW5wdXQuXCIsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXMuanNvbih7XG4gICAgICAgICAgICAgIHN0YXR1czogZmFsc2UsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVXBkYXRlIHdhcyBub3Qgc3VjY2Vzc2Z1bC4gUGxlYXNlIGxvZ2luIGFnYWluLlwiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJHRVRcIjpcbiAgICAgICAgYXdhaXQgY2xpZW50XG4gICAgICAgICAgLmRiKGRhdGFiYXNlLmRiTmFtZSlcbiAgICAgICAgICAuY29sbGVjdGlvbihcImJlc3QtdnBzLWhvc3RpbmdcIilcbiAgICAgICAgICAuZmluZE9uZSh7fSwgeyBwcm9qZWN0aW9uOiB7IF9pZDogMCwgYWRkSG9zdGluZzogMSB9IH0pXG4gICAgICAgICAgLnRoZW4oKGRvY3MpID0+IHJlcy5qc29uKGRvY3MpKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJzb21lIGVycm9yIG9jY3VycmVkXCIsIGVycm9yKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBhd2FpdCBjbGllbnQuY2xvc2UoKTtcbiAgfVxufVxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgYXBpOiB7XG4gICAgZXh0ZXJuYWxSZXNvbHZlcjogdHJ1ZSxcbiAgICBib2R5UGFyc2VyOiBmYWxzZSxcbiAgfSxcbn07XG4iXSwibmFtZXMiOlsibXVsdGVyIiwiTW9uZ29DbGllbnQiLCJpc0xvZ2dlZEluIiwicGF0aCIsImZzIiwidXBsb2FkIiwic3RvcmFnZSIsImRpc2tTdG9yYWdlIiwiZGVzdGluYXRpb24iLCJmaWxlbmFtZSIsInJlcSIsImZpbGUiLCJjYiIsIm9yaWdpbmFsbmFtZSIsImxpbWl0cyIsImZpbGVTaXplIiwiZmlsZVBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImhhbmRsZXIiLCJyZXMiLCJkYXRhIiwicmVhZEZpbGVTeW5jIiwiZGF0YWJhc2UiLCJKU09OIiwicGFyc2UiLCJjbGllbnQiLCJkYiIsIm1ldGhvZCIsInNpbmdsZSIsImVyciIsImNvbm5lY3QiLCJ0b2tlbiIsImJvZHkiLCJpZCIsImhvc3RpbmdUYWciLCJob3N0aW5nUmF0aW5nIiwiaG9zdGluZ05hbWUiLCJob3N0aW5nRmVhdHVyZXMiLCJidXR0b25UZXh0IiwiYWZmaWxpYXRlTGluayIsImhvc3RpbmdJbWFnZSIsIndoeVBpY2tlZCIsInByb3NDb25zIiwidW5pcXVlSWQiLCJmaWxlcyIsInVwZGF0ZURhdGEiLCJyZXN1bHQiLCJkYk5hbWUiLCJjb2xsZWN0aW9uIiwidXBkYXRlT25lIiwiJHB1c2giLCJhZGRIb3N0aW5nIiwiJGVhY2giLCIkcG9zaXRpb24iLCJ1cHNlcnQiLCJtb2RpZmllZENvdW50IiwidXBzZXJ0ZWRDb3VudCIsImpzb24iLCJzdGF0dXMiLCJtZXNzYWdlIiwiZmluZE9uZSIsInByb2plY3Rpb24iLCJfaWQiLCJ0aGVuIiwiZG9jcyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNsb3NlIiwiY29uZmlnIiwiYXBpIiwiZXh0ZXJuYWxSZXNvbHZlciIsImJvZHlQYXJzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/best-vps-hosting/add-hosting/index.js\n");

/***/ }),

/***/ "(api)/./pages/api/isLoggedIn.js":
/*!*********************************!*\
  !*** ./pages/api/isLoggedIn.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isLoggedIn)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\n// jwt secret key for token. You can use any random string here.\nconst secretKey = \"580f364d-9473-49bb-a4f7-c01c735c3eeb\";\nfunction isLoggedIn(token) {\n    try {\n        jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, secretKey);\n        return true;\n    } catch (err) {\n        return false;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaXNMb2dnZWRJbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFDL0IsZ0VBQWdFO0FBQ2hFLE1BQU1DLFlBQVk7QUFFSCxTQUFTQyxXQUFXQyxLQUFLO0lBQ3RDLElBQUk7UUFDRkgsMERBQVUsQ0FBQ0csT0FBT0Y7UUFDbEIsT0FBTztJQUNULEVBQUUsT0FBT0ksS0FBSztRQUNaLE9BQU87SUFDVDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2hvLWlzLWhvc3RpbmcvLi9wYWdlcy9hcGkvaXNMb2dnZWRJbi5qcz9lNDVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuLy8gand0IHNlY3JldCBrZXkgZm9yIHRva2VuLiBZb3UgY2FuIHVzZSBhbnkgcmFuZG9tIHN0cmluZyBoZXJlLlxuY29uc3Qgc2VjcmV0S2V5ID0gXCI1ODBmMzY0ZC05NDczLTQ5YmItYTRmNy1jMDFjNzM1YzNlZWJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNMb2dnZWRJbih0b2tlbikge1xuICB0cnkge1xuICAgIGp3dC52ZXJpZnkodG9rZW4sIHNlY3JldEtleSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImp3dCIsInNlY3JldEtleSIsImlzTG9nZ2VkSW4iLCJ0b2tlbiIsInZlcmlmeSIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/isLoggedIn.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fbest-vps-hosting%2Fadd-hosting&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cbest-vps-hosting%5Cadd-hosting%5Cindex.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();