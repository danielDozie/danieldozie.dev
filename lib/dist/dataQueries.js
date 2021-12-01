"use strict";
exports.__esModule = true;
exports.workPage = exports.eComPage = exports.uixPage = exports.brandingPage = exports.digitalPage = exports.logo = exports.menu = exports.urlFor = exports.blog = exports.contactPage = exports.servicesPage = exports.aboutMePage = exports.homePage = exports.logoAndMenu = void 0;
var image_url_1 = require("@sanity/image-url");
var sanityClient_1 = require("./sanityClient");
var builder = image_url_1["default"](sanityClient_1["default"]);
function urlFor(source) {
    return builder.image(source);
}
exports.urlFor = urlFor;
var defaultEx = 'Hello';
//logo query
var logoQuery = "*[_type == \"logo\" ]{\n  name,\n  abbreviation,\n  icon {\n  asset->{\n  \turl\n    }\n  }\n}";
var logo = sanityClient_1["default"].fetch(logoQuery);
exports.logo = logo;
//menu Query
var menuQuery = "*[_type == \"menu\" ]| order(order desc){\n  _id,\n  name,\n  link{\n  current\n}\n}";
var menu = sanityClient_1["default"].fetch(menuQuery);
exports.menu = menu;
var logoAndMenuQuery = "{\n  'Logo':*[_type == 'logo']{\n  name,\n  abbreviation,\n  icon{\n  asset->{\n  url\n }\n }\n }, 'Menu': *[_type == \"menu\" ]| order(order desc){\n   _id,\n   name,\n   link{\n   current\n }\n }\n}";
var logoAndMenu = sanityClient_1["default"].fetch(logoAndMenuQuery);
exports.logoAndMenu = logoAndMenu;
//New Home query
var newHomeQuery = "*[_type == 'pages' && title == 'Home']{\n  title,\ndescription,\nslug{\ncurrent,\n},\n'HeroSection':section[0]{\nprimaryHeading,\n  secondaryHeading,\n  image{\n  asset->{\n  url\n}\n}\n},\n'WorkSection':section[1]{\ntitle,\nleft_image{\nasset->{\nurl,\n}\n},\ncontent,\n},\n'TechSection':section[2]{\ntitle,\nsubtitle,\nlogo_text,\nlogo_icon,\nbutton,\ncontent\n},\n'BlogSection':section[3]{\n  block,\n  custom_blogs[][0...2]->{\n      _createdAt,\n      _id,\n      title,\n      slug,\n      excerpts,\n      image{\n        asset -> {\n          url,\n        }\n      },\n      author->{\n      _id,\n      fullname,\n    }\n    }\n  }\n}\n";
var homePage = sanityClient_1["default"].fetch(newHomeQuery);
exports.homePage = homePage;
//About Me query
var aboutMePageQuery = "*[_type == 'pages' && title == 'About Me']{\n  title,\n  description,\n  section[],\n  slug{\n    current\n  },\n}";
var aboutMePage = sanityClient_1["default"].fetch(aboutMePageQuery);
exports.aboutMePage = aboutMePage;
var servicesQuery = "*[_type == 'pages' && title=='Services']{\n  title,\n  description,\n  slug{\n  current\n},\nsection\n} +\n*[_type == 'services']{\n  _id,\n    title,\n  description,\n  link,\n  slug{\n  current\n}\n}";
var servicesPage = sanityClient_1["default"].fetch(servicesQuery);
exports.servicesPage = servicesPage;
//Get in touch query
var contactQuery = "*[_type == 'pages' && title == 'Say Hello']{\n  title,\n  description,\n  section[],\n  slug{\n    current\n  },\n\n}";
var contactPage = sanityClient_1["default"].fetch(contactQuery);
exports.contactPage = contactPage;
//blog query
var blogQuery = "*[_type == 'blog']{\n  _createdAt,\n  _id,\n  author->{\n  _id,\n  fullname\n},\n  content,\n  excerpts,\n  image{\n  asset->{\n  url\n}\n},\n  slug,\n  title\n  \n}";
var blog = sanityClient_1["default"].fetch(blogQuery);
exports.blog = blog;
var digitalPageQuery = "*[_type == 'services' && title == 'Digital']{\n  title,\n  description,\n  slug{\n  current\n},\nservices_list,\n}";
var digitalPage = sanityClient_1["default"].fetch(digitalPageQuery);
exports.digitalPage = digitalPage;
var brandingPageQuery = "*[_type == 'services' && title == 'Branding']{\n  title,\n  description,\n  slug{\n  current\n},\nservices_list,\n}";
var brandingPage = sanityClient_1["default"].fetch(brandingPageQuery);
exports.brandingPage = brandingPage;
var uixPageQuery = "*[_type == 'services' && title == 'UI/UX Design']{\n  title,\n  description,\n  slug{\n  current\n},\nservices_list,\n}";
var uixPage = sanityClient_1["default"].fetch(uixPageQuery);
exports.uixPage = uixPage;
var eComPageQuery = "*[_type == 'services' && title == 'E-commerce']{\n  title,\n  description,\n  slug{\n  current\n},\nservices_list,\n}";
var eComPage = sanityClient_1["default"].fetch(eComPageQuery);
exports.eComPage = eComPage;
var workPageQuery = "*[_type == 'pages' && title == 'Work']{\n  title,\n  description,\n  slug{\n  current,\n},\nsection\n\n} + \n*[_type == 'projects']{\n  _id,\n  title,\n  description,\n  image{\n  asset->{\n  url\n}\n},\nlink,\ntags,\ncontent\n}";
var workPage = sanityClient_1["default"].fetch(workPageQuery);
exports.workPage = workPage;
//export data components
exports["default"] = defaultEx;
