"use strict";
exports.id = 896;
exports.ids = [896];
exports.modules = {

/***/ 741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* reexport */ Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/core/components/footer/footer.tsx


const navigation = [
    {
        name: "Facebook",
        href: "https://www.facebook.com/huavivape/",
        icon: (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
                fill: "currentColor",
                viewBox: "0 0 24 24",
                ...props,
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fillRule: "evenodd",
                    d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                    clipRule: "evenodd"
                })
            })
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/p/Cgd9oTXpi2U/?igshid=YmMyMTA2M2Y=",
        icon: (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
                fill: "currentColor",
                viewBox: "0 0 24 24",
                ...props,
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fillRule: "evenodd",
                    d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
                    clipRule: "evenodd"
                })
            })
    }, 
];
const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "bg-gray-800",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "px-4 py-12 mx-auto max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-8",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex justify-center space-x-6 md:order-2",
                    children: navigation.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            href: item.href,
                            className: "text-gray-400 hover:text-gray-500",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "sr-only",
                                    children: item.name
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(item.icon, {
                                    className: "w-6 h-6",
                                    "aria-hidden": "true"
                                })
                            ]
                        }, item.name))
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mt-8 md:mt-0 md:order-1",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-base text-center text-gray-400",
                        children: "\xa9 2022 Workflow, Inc. All rights reserved."
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/core/components/footer/index.ts



/***/ }),

/***/ 2628:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* reexport safe */ _navbar__WEBPACK_IMPORTED_MODULE_0__.l)
/* harmony export */ });
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4378);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_navbar__WEBPACK_IMPORTED_MODULE_0__]);
_navbar__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4378:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ NavBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const user = {
    name: "Tom Cook",
    email: "tom@example.com",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
};
const navigation = [
    {
        name: "Trang chủ",
        href: "/"
    },
    {
        name: "Pod 1 lần",
        href: "/products?category=Pod 1 lần"
    }, 
];
// const userNavigation = [
//     { name: 'Your Profile', href: '#' },
//     { name: 'Settings', href: '#' },
//     { name: 'Sign out', href: '#' },
// ];
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
const NavBar = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure, {
        as: "header",
        className: "bg-gray-800",
        children: ({ open  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "px-2 mx-auto max-w-7xl sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "relative flex justify-between h-auto",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "relative z-10 flex px-2 lg:px-0",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex items-center flex-shrink-0 cursor-pointer",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: "block w-auto h-32",
                                                    src: "/assets/images/huavivape.png",
                                                    alt: "Logo"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "relative z-0 flex items-center justify-end flex-1 px-2 sm:absolute sm:inset-0",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "w-full sm:max-w-xs",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    htmlFor: "search",
                                                    className: "sr-only",
                                                    children: "Search"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.SearchIcon, {
                                                                className: "w-5 h-5 text-gray-400",
                                                                "aria-hidden": "true"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            id: "search",
                                                            name: "search",
                                                            className: "block w-full py-2 pl-10 pr-3 text-sm placeholder-gray-400 bg-gray-700 border border-transparent rounded-md focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 focus:placeholder-gray-500 sm:text-sm",
                                                            placeholder: "Search",
                                                            type: "search"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "relative z-10 flex items-center lg:hidden",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Button, {
                                            className: "inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "sr-only",
                                                    children: "Open menu"
                                                }),
                                                open ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.XIcon, {
                                                    className: "block w-6 h-6",
                                                    "aria-hidden": "true"
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.MenuIcon, {
                                                    className: "block w-6 h-6",
                                                    "aria-hidden": "true"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                className: "hidden lg:py-2 lg:flex lg:space-x-8",
                                "aria-label": "Global",
                                children: navigation.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        href: item.href,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "block px-3 py-2 text-base font-medium text-gray-300 rounded-md cursor-pointer hover:bg-gray-700 hover:text-white",
                                            children: item.name
                                        })
                                    }, item.name))
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Panel, {
                        as: "nav",
                        className: "lg:hidden",
                        "aria-label": "Global",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "px-2 pt-2 pb-3 space-y-1",
                            children: navigation.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Button, {
                                    as: "a",
                                    href: item.href,
                                    className: "block px-3 py-2 text-base font-medium text-gray-300 rounded-md cursor-pointer hover:bg-gray-700 hover:text-white",
                                    children: item.name
                                }, item.name))
                        })
                    })
                ]
            })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ productData)
/* harmony export */ });
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7211);

const productData = [
    {
        id: "1",
        name: "Bounce Turbo Pod 5000 Hơi Disposable ",
        category: _models_product__WEBPACK_IMPORTED_MODULE_0__/* .ProductCategory.PodOneTime */ .P.PodOneTime,
        price: 75000,
        images: [
            {
                id: "1",
                src: "/assets/images/bouce-turbo-sua-chua-dau-600x600.jpg",
                alt: ""
            },
            {
                id: "2",
                src: "/assets/images/fizzy-max-3000-product-600x600.jpg",
                alt: ""
            },
            {
                id: "3",
                src: "/assets/images/Lio-Boom-3000-hoi-1-300x300.jpg",
                alt: ""
            },
            {
                id: "4",
                src: "/assets/images/lux-models-product-300x300.jpg",
                alt: ""
            }, 
        ],
        description: "Bounce Turbo l\xe0 thiết bị sử dụng một lần với thiết kế kh\xe1c biệt so với phần c\xf2n lại của ng\xe0nh c\xf4ng nghiệp vaping, được trang bị Mesh coil với c\xf4ng suất mạnh mẽ v\xe0 hương vị tr\xe1i c\xe2y phong ph\xfa đem lại trải nghiệm vaping ho\xe0n hảo. Buồng chứa rất lớn mang đến 11ml tinh dầu hương vị thơm ngon, với việc trang bị pin c\xf3 thể sạc lại gi\xfap thiết bị c\xf3 thể đem tới 5000 hơi sử dụng. B\xean ngo\xe0i thiết bị được thiết kế đẹp mắt với những vết cắt kim cương k\xe8m nhiều m\xe0u sắc thời trang gi\xfap trải nghiệm vaping của bạn được vui vẻ hơn.",
        features: [
            "Dung lượng pin lớn đem tới 3500 hơi",
            "22 Hương vị lựa chọn ho\xe0n hảo",
            "Mesh coil 1.0 đem lại trải nghiệm hương vị tốt"
        ],
        specifications: [
            "K\xedch thước: 100mm x 24,5mm",
            "Chất liệu: Hợp kim nh\xf4m & Nhựa PCTG",
            "Dung lượng: 1400mAh"
        ],
        boxInformations: [
            "1 Pod / 1 Hộp",
            "10 Hộp / 1 Pack"
        ]
    }, 
];


/***/ }),

/***/ 7211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ ProductCategory)
/* harmony export */ });
var ProductCategory;
(function(ProductCategory) {
    ProductCategory["PodOneTime"] = "Pod 1 lần";
})(ProductCategory || (ProductCategory = {}));


/***/ }),

/***/ 2015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ toMoney)
/* harmony export */ });
const toMoney = (number)=>{
    return number.toLocaleString("vi", {
        style: "currency",
        currency: "VND"
    });
};


/***/ }),

/***/ 6634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I": () => (/* reexport */ ProductCard),
  "J": () => (/* reexport */ ProductPreviewList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/core/utils/moneyString.ts
var moneyString = __webpack_require__(2015);
;// CONCATENATED MODULE: ./src/packages/product/components/productCard.tsx




const ProductCard = ({ product  })=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative flex flex-col cursor-pointer group",
        onClick: ()=>{
            router.push(`/products/${product.id}`);
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full h-56 overflow-hidden bg-gray-200 rounded-md group-hover:opacity-75 lg:h-72 xl:h-80",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: product.images[0].src,
                    alt: product.images[0].alt,
                    className: "object-cover object-center w-full h-full"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col justify-between flex-1 space-y-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-center duration-300 ",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-sm text-gray-500",
                            children: product.category
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex-1 ",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "overflow-hidden text-lg text-gray-700 text-ellipsis",
                            children: product.name
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-sm font-bold text-gray-900 ",
                            children: (0,moneyString/* toMoney */.K)(product.price ?? 0)
                        })
                    })
                ]
            })
        ]
    }, product.id);
};

;// CONCATENATED MODULE: ./src/packages/product/components/productPreviewList.tsx



const ProductPreviewList = ({ products , label  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-white",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "max-w-2xl px-4 py-4 mx-auto sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "md:flex md:items-center md:justify-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-2xl font-bold tracking-tight text-gray-900",
                            children: label
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            href: `/products?category=${label}`,
                            className: "hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block",
                            children: [
                                "Xem th\xeam",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    "aria-hidden": "true",
                                    children: " →"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "grid grid-cols-2 mt-6 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8",
                    children: products.slice(0, 4).map((product)=>/*#__PURE__*/ jsx_runtime_.jsx(ProductCard, {
                            product: product
                        }, product.id))
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mt-4 text-sm md:hidden",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        href: "#",
                        className: "font-normal text-indigo-600 hover:text-indigo-500",
                        children: [
                            "Xem th\xeam",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                "aria-hidden": "true",
                                children: " →"
                            })
                        ]
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/packages/product/components/index.ts




/***/ }),

/***/ 4924:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_0__.A)
/* harmony export */ });
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4661);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout__WEBPACK_IMPORTED_MODULE_0__]);
_layout__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4661:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(741);
/* harmony import */ var _core_components_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2628);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_components_navbar__WEBPACK_IMPORTED_MODULE_3__]);
_core_components_navbar__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col min-h-screen",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_core_components_navbar__WEBPACK_IMPORTED_MODULE_3__/* .NavBar */ .l, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex-1",
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_core_components_footer__WEBPACK_IMPORTED_MODULE_2__/* .Footer */ .$, {})
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ ProductHome)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_data_productData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7134);
/* harmony import */ var _core_models_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7211);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6634);





const ProductHome = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .ProductPreviewList */ .J, {
            label: _core_models_product__WEBPACK_IMPORTED_MODULE_3__/* .ProductCategory.PodOneTime */ .P.PodOneTime,
            products: _core_data_productData__WEBPACK_IMPORTED_MODULE_2__/* .productData.filter */ .J.filter((item)=>item.category === _core_models_product__WEBPACK_IMPORTED_MODULE_3__/* .ProductCategory.PodOneTime */ .P.PodOneTime)
        })
    });
};


/***/ }),

/***/ 4055:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DB": () => (/* reexport safe */ _home__WEBPACK_IMPORTED_MODULE_0__.D),
/* harmony export */   "Wj": () => (/* reexport safe */ _products_products__WEBPACK_IMPORTED_MODULE_2__.W),
/* harmony export */   "dn": () => (/* reexport safe */ _products_productDetails__WEBPACK_IMPORTED_MODULE_1__.d)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9302);
/* harmony import */ var _products_productDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1330);
/* harmony import */ var _products_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8036);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_products_productDetails__WEBPACK_IMPORTED_MODULE_1__]);
_products_productDetails__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1330:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ ProductDetail)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_data_productData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7134);
/* harmony import */ var _core_models_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7211);
/* harmony import */ var _core_utils_moneyString__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2015);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
const defaultProduct = {
    id: "",
    category: _core_models_product__WEBPACK_IMPORTED_MODULE_5__/* .ProductCategory.PodOneTime */ .P.PodOneTime,
    description: "",
    name: "",
    price: -1,
    images: [
        {
            id: "1",
            src: "",
            alt: ""
        }
    ],
    features: [],
    boxInformations: [],
    specifications: []
};
const ProductDetail = ({ id  })=>{
    const [product, setProduct] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(defaultProduct);
    react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(()=>{
        let productDB = _core_data_productData__WEBPACK_IMPORTED_MODULE_4__/* .productData.find */ .J.find((item)=>item.id === id);
        setProduct(productDB);
    }, [
        id
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__.NextSeo, {
                title: product.name,
                openGraph: {
                    images: [
                        {
                            url: product.images[0].src,
                            width: 800,
                            height: 600,
                            alt: product.name
                        }, 
                    ]
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "py-4 bg-white",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Tab.Group, {
                                    as: "div",
                                    className: "flex flex-col-reverse",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "hidden w-full max-w-2xl mx-auto mt-6 sm:block lg:max-w-none",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Tab.List, {
                                                className: "grid grid-cols-4 gap-6",
                                                children: product.images?.map((image)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Tab, {
                                                        className: "relative flex items-center justify-center h-24 text-sm font-medium text-gray-900 uppercase bg-white rounded-md cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50",
                                                        children: ({ selected  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "absolute inset-0 overflow-hidden rounded-md",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: image.src,
                                                                            alt: image.src,
                                                                            className: "object-cover object-center w-full h-full"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: classNames(selected ? "ring-indigo-500" : "ring-transparent", "absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none"),
                                                                        "aria-hidden": "true"
                                                                    })
                                                                ]
                                                            })
                                                    }, image.id))
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Tab.Panels, {
                                            className: "w-full aspect-w-1 aspect-h-1",
                                            children: product.images?.map((image)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Tab.Panel, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: image.src,
                                                        alt: image.alt,
                                                        className: "object-cover object-center w-full h-full sm:rounded-lg"
                                                    })
                                                }, image.id))
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "px-4 mt-10 sm:px-0 sm:mt-16 lg:mt-0",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "text-3xl font-extrabold tracking-tight text-gray-900",
                                            children: product.name
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mt-3",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "sr-only",
                                                    children: "Product information"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-3xl text-gray-900",
                                                    children: (0,_core_utils_moneyString__WEBPACK_IMPORTED_MODULE_6__/* .toMoney */ .K)(product.price ? product.price : 0)
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-6",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "space-y-6 text-base text-gray-700",
                                                children: product.description
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                            className: "mt-6",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex mt-10 sm:flex-col1",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "submit",
                                                    className: "flex items-center justify-center flex-1 max-w-xs px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full",
                                                    children: "Contact Seller"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "max-w-4xl px-4 py-8 mx-auto overflow-hidden bg-white shadow sm:rounded-lg",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "px-4 py-5 sm:px-6",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "text-lg font-medium leading-6 text-gray-900",
                                    children: "Th\xf4ng tin chi tiết"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "border-t border-gray-200",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dl", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                    className: "text-sm font-medium text-gray-500",
                                                    children: "T\xednh Năng"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                    className: "col-span-2 list-disc marker:text-gray-500",
                                                    children: product.features.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",
                                                            children: item
                                                        }, index))
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                    className: "text-sm font-medium text-gray-500",
                                                    children: "Th\xf4ng Số Kỹ Thuật"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                    className: "col-span-2 list-disc marker:text-gray-500",
                                                    children: product.specifications.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",
                                                            children: item
                                                        }, index))
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                    className: "text-sm font-medium text-gray-500",
                                                    children: "Hộp Sản Phẩm"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                    className: "col-span-2 list-disc marker:text-gray-500",
                                                    children: product.boxInformations.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",
                                                            children: item
                                                        }, index))
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8036:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ ProductFullList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_data_productData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7134);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6634);




const ProductFullList = ({ category  })=>{
    const [products, setProducts] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        (async ()=>{
            setProducts(_core_data_productData__WEBPACK_IMPORTED_MODULE_2__/* .productData.filter */ .J.filter((item)=>item.category === category));
        })();
    }, [
        category
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "bg-white",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "max-w-2xl px-4 py-4 mx-auto sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid grid-cols-2 mt-6 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8 fade-in",
                children: products.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .ProductCard */ .I, {
                        product: product
                    }, product.id))
            })
        })
    });
};


/***/ })

};
;