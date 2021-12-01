"use strict";
exports.__esModule = true;
exports.HomeBlogSection = void 0;
/* eslint-disable @next/next/link-passhref */
var react_1 = require("react");
var image_1 = require("next/image");
var link_1 = require("next/link");
var block_content_to_react_1 = require("@sanity/block-content-to-react");
var serializers_1 = require("../../lib/serializers");
var dataQueries_1 = require("../../lib/dataQueries");
var moment_1 = require("moment");
exports.HomeBlogSection = function (props) {
    var content = props.block;
    var Blogs = props.custom_blogs;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "max-w-7xl mx-auto md:py-8 sm:px-6 h-full" },
            react_1["default"].createElement("div", { className: "flex flex-col justify-start mb-4 md:mb-8 mx-8 md:mx-0" },
                react_1["default"].createElement(block_content_to_react_1["default"], { blocks: content, serializers: serializers_1.homeBlogSerializer })),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: "grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-0 lg:grid-cols-2  p-4 md:p-10 " }, Blogs.map(function (_a) {
                    var author = _a.author, excerpts = _a.excerpts, image = _a.image, slug = _a.slug, title = _a.title, _createdAt = _a._createdAt, _id = _a._id;
                    return (react_1["default"].createElement("div", { className: "flex flex-col md:flex-row md:justify-between py-4 px-4 rounded-lg shadow-2xl  dark:border-gray-600 bottom-2", key: _id },
                        react_1["default"].createElement("div", { className: "flex h-full bg-center w-full mr-8 mb-4 " },
                            react_1["default"].createElement(link_1["default"], { href: "/blog/" + slug.current },
                                react_1["default"].createElement(image_1["default"], { src: dataQueries_1.urlFor(image).url(), width: 500, height: "300px", className: "rounded-lg", alt: 'How' }))),
                        react_1["default"].createElement("div", { className: "w-full flex flex-col " },
                            react_1["default"].createElement("h1", { className: "font-mitr font-semibold text-sm md:text-lg bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500" },
                                react_1["default"].createElement("a", { href: "/blog/" + slug.current },
                                    title.substr(0, 45),
                                    " []...")),
                            react_1["default"].createElement("p", { className: "font-mitr font-light text-sm mb-5 text-gray-700 dark:text-gray-200" },
                                " ",
                                excerpts.substr(0, 120),
                                "",
                                react_1["default"].createElement("a", { href: "/blog/" + slug.current },
                                    react_1["default"].createElement("span", { className: "text-xs bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 " }, "... Read More"))),
                            react_1["default"].createElement("hr", null),
                            react_1["default"].createElement("div", { className: "flex text-xs font-thin mt-2 justify-between" },
                                react_1["default"].createElement("p", { className: "text-gray-700 dark:text-gray-300" },
                                    "Published:",
                                    " ",
                                    react_1["default"].createElement("span", { className: "text-pink-500" }, moment_1["default"](_createdAt).format('MMM. YYYY'))),
                                react_1["default"].createElement("p", { className: "text-gray-700 dark:text-gray-300" },
                                    "Author: ",
                                    react_1["default"].createElement("span", { className: "text-pink-500" }, author.fullname))))));
                })),
                react_1["default"].createElement("a", { href: "/blog" },
                    react_1["default"].createElement("h1", { className: "font-archivo font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-purple-800 mt-6 text-center lg:text-left lg:pl-10" }, "View all blog posts...")))),
        react_1["default"].createElement("div", { className: "justify-center text-center md:pt-16" })));
};
