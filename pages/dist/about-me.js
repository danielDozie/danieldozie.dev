"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getStaticProps = void 0;
var AboutHeroSection_1 = require("../components/About/AboutHeroSection");
var head_1 = require("next/head");
var block_content_to_react_1 = require("@sanity/block-content-to-react");
var serializers_1 = require("../lib/serializers");
var dataQueries_1 = require("../lib/dataQueries");
function About(_a) {
    var _b, _c;
    var data = _a.data;
    var content = data[0].section[1].block;
    return (React.createElement(React.Fragment, null,
        React.createElement(head_1["default"], null,
            React.createElement("title", null,
                process.env.siteTitle,
                " - ",
                data[0].title),
            React.createElement("meta", { name: data[0].description, content: data[0].description })),
        React.createElement(AboutHeroSection_1.AboutHeroSection, { primaryHeading: data[0].section[0].primaryHeading, secondaryHeading: data[0].section[0].secondaryHeading }),
        React.createElement("div", { className: "flex flex-col justify-center text-left md:text-center mt-8" },
            React.createElement("div", { className: "font-mitr font-sm text-gray-600  dark:text-gray-300 mx-8 md:p-4" },
                React.createElement(block_content_to_react_1["default"], { blocks: content, serializers: serializers_1.aboutMeSerializer })),
            React.createElement("div", { className: "flex mt-16 justify-center items-center lg:ml-0" },
                React.createElement("div", { className: "rounded-md shadow" },
                    React.createElement("a", { href: (_b = data[0].section[2]) === null || _b === void 0 ? void 0 : _b.button_url, className: "px-5 py-3 border border-transparent font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 " }, (_c = data[0].section[2]) === null || _c === void 0 ? void 0 : _c.button_text))))));
}
exports["default"] = About;
exports.getStaticProps = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dataQueries_1.aboutMePage];
            case 1:
                data = _a.sent();
                return [2 /*return*/, {
                        props: {
                            data: data
                        }
                    }];
        }
    });
}); };
