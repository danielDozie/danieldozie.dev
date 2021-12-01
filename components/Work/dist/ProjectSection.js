"use strict";
exports.__esModule = true;
var react_1 = require("react");
var dataQueries_1 = require("../../lib/dataQueries");
var image_1 = require("next/image");
function ProjectSection(props) {
    var data = props.projects;
    return (react_1["default"].createElement(react_1["default"].Fragment, null, data.map(function (item) { return (react_1["default"].createElement("div", { className: "relative my-20 lg:mx-12 " },
        react_1["default"].createElement("div", { className: " h-56 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2" },
            react_1["default"].createElement(image_1["default"], { className: "h-full w-full object-contain lg:rounded-xl", src: dataQueries_1.urlFor(item.image).url(), alt: "screenshot", 
                // height={150}
                // width={150}
                layout: "fill" })),
        react_1["default"].createElement("div", { className: "relative max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16" },
            react_1["default"].createElement("div", { className: "max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10" },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("div", { className: "flex text-gray-500 dark:text-gray-300 gap gap-2" }, item.tags.map(function (tag) { return (react_1["default"].createElement("span", { className: "inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800" },
                        react_1["default"].createElement("svg", { className: "-ml-1 mr-1.5 h-2 w-2 text-indigo-400", fill: "currentColor", viewBox: "0 0 8 8" },
                            react_1["default"].createElement("circle", { cx: 4, cy: 4, r: 3 })),
                        tag)); }))),
                react_1["default"].createElement("h2", { className: "mt-6 text-3xl font-extrabold text-gray-500 dark:text-gray-300 sm:text-4xl" }, item.title),
                react_1["default"].createElement("p", { className: "mt-6 text-lg text-gray-500 dark:text-gray-400" }, item.description),
                react_1["default"].createElement("div", { className: "mt-8 overflow-hidden" },
                    react_1["default"].createElement("dl", { className: "-mx-8 -mt-8 flex flex-wrap" },
                        react_1["default"].createElement("div", { className: "flex flex-col px-8 pt-8" },
                            react_1["default"].createElement("a", { href: item.link, target: "_blank", rel: "noopener noreferrer" },
                                react_1["default"].createElement("dd", { className: "order-1 text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 sm:text-3xl" }, "Visit Website "))))))))); })));
}
exports["default"] = ProjectSection;
