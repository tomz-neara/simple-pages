/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nwindow.ACMEDesignPlugin = {\n    /**\n     * This function creates a line of poles from a start pole\n     * to a target pole.\n     * The poles are created at a specified interval, and\n     * each pole is labeled and typed.\n     * A strain section is created from the line of poles, and\n     * each assembly in the section is typed.\n     * For simplicity, we will generate strain sections of three (3)\n     * conductors between poles.\n     *\n     * @param {Pole} startPole - The pole from which the line starts.\n     * @param {U_GenStringLinePoles} options - A Neara object that\n     * holds the values for options set by the user in the project UI,\n     * when running this plugin. This object, including defaults,\n     * is configured in the Neara Schema Editor.\n     *\n     * Options can include:\n     * - getEndPole: Function to get the end pole. New poles will be\n     * generated between this and the startPole.\n     * - getInterval: Function to get the interval between poles, in\n     * US Imperial feet. If not provided, a default interval of 100ft\n     * (converted to meters) is used.\n     * - getPoleType: Function to get the pole type to use for the\n     * generated poles. If not provided, the type of the start pole is used.\n     * - getPrefix: Function to get the prefix for the pole labels.\n     * If not provided, \"p\" is used.\n     *\n     * @returns {void} - The function does not return anything.\n     *\n     */\n    generateAndStringLineOfPoles: (startPole, options) => {\n        const model = Neara.getModel();\n        const endPole = options.getEndPole();\n        if (!endPole) {\n            return; // User hasn't set an end pole in the UI yet\n        }\n        // Internal units in Neara are in metric. \n        // See 'Units of measure' article in the Reference section.\n        // getLocation() is available on a Pole object\n        const distanceToEndPole = startPole\n            .getLocation()\n            .distanceTo(endPole.getLocation());\n        // Interval between poles\n        const FEET_TO_METRES_MULTIPLIER = 0.3048;\n        const defaultIntervalMetres = 100.0 * FEET_TO_METRES_MULTIPLIER;\n        // Buffer to avoid positioning poles too closely\n        const positionBuffer = 20.0 * FEET_TO_METRES_MULTIPLIER;\n        // Obtain the direction of the generated line of poles \n        // between the start and end\n        const direction = endPole\n            .getLocation()\n            .subtract(startPole.getLocation())\n            .normalize();\n        // Set the interval between poles from the user's input, \n        // or use the default if not set by the user\n        const interval = Math.max(5.0, options.getInterval() || defaultIntervalMetres);\n        // Get the type of the selected start pole set by the user\n        // or use the same type as the selected start pole if none is set\n        const poleType = options.getPoleType() || startPole.getType();\n        // Get the prefix to use when setting labels on the \n        // generated intermediate poles, set by the user\n        // or use a default prefix if none is set\n        const poleLabelPrefix = options.getPrefix() || \"generated\";\n        // Create the array of new poles between the start and end poles\n        // at the specified intervals, labelled sequentially\n        const lineOfPoles = [];\n        lineOfPoles.push(startPole);\n        let num = 1;\n        for (let distance = interval; distance < distanceToEndPole - positionBuffer; distance += interval) {\n            var newPole = model\n                .createPole(startPole.getLocation()\n                .add(direction.scale(distance)));\n            newPole.setLabel(`${poleLabelPrefix}-${num}`);\n            newPole.setType(poleType);\n            lineOfPoles.push(newPole);\n            num++;\n        }\n        lineOfPoles.push(endPole);\n        // Create the strain sections and attach them to the poles\n        // in the array\n        const strainSection = model.createStrainSection(lineOfPoles);\n        // For simplicity, we're using a fixed set of 3 conductors \n        // in this example\n        strainSection.setCableCount(3);\n        // Have Neara find a compatible assembly type for a 3 conductor\n        // arrangement. \n        // Alternatively, you could prompt the user to specify the\n        // exact assembly type. \n        const assemblyType = model.getAssemblyLibrary().filter((type) => {\n            return assemblyType.getCableCounts() == '(3)' && assemblyType.getCrossarmCount() >= 1;\n        })[0];\n        // Set this assembly type for each strain section\n        // in the new line of poles\n        for (let assy of strainSection.getAssemblies()) {\n            assy.setType(assemblyType);\n        }\n        // Add stays to the start and end poles\n        lineOfPoles[0].addStay();\n        lineOfPoles[lineOfPoles.length - 1].addStay();\n        // Finally, position the Perspective view 3D camera to \n        // show the user the new line of poles\n        const cameraTarget = lineOfPoles[9].getTop();\n        const cameraOffset = lineOfPoles[0].getTop().subtract(cameraTarget).add({ z: 30, y: 40 }).scale(2.0);\n        Neara.editor.perspectiveView.lookAt(cameraTarget, cameraOffset);\n    },\n};\n// Set the functions from this plugin that will be exposed \n// to run in a Neara project\nNeara.setPermittedPluginFunctions([\n    'ACMEDesignPlugin.generateAndStringLineOfPoles',\n]);\n\n\n\n//# sourceURL=webpack://plugin/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
