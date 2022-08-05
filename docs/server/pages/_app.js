"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@reduxjs/toolkit"
const toolkit_namespaceObject = require("@reduxjs/toolkit");
;// CONCATENATED MODULE: external "react-redux"
const external_react_redux_namespaceObject = require("react-redux");
;// CONCATENATED MODULE: ./src/core/store/api/index.ts

const initialState = {
    isLoading: false,
    errorDetails: {},
    isError: false,
    message: "",
    errorMessage: ""
};
const reducer = (0,toolkit_namespaceObject.createSlice)({
    name: "api",
    initialState,
    reducers: {
        initReq: (state)=>({
                ...state,
                isLoading: true,
                isError: false
            }),
        setLoading: (state, { payload  })=>({
                ...state,
                isLoading: payload.isLoading
            }),
        resetState: ()=>({
                ...initialState
            }),
        updateErrorDetails: (state, { payload  })=>{
            const newState = {
                ...state
            };
            if (payload?.errorMessage) newState.errorMessage = payload.errorMessage;
            newState.errorDetails = payload;
            newState.isError = true;
            return newState;
        },
        updateSuccessMessage: (state, { payload  })=>({
                ...state,
                message: payload.message || ""
            })
    },
    extraReducers: (builder)=>{}
});
const apiActions = {
    ...reducer.actions
};
const apiReducer = reducer.reducer;

;// CONCATENATED MODULE: ./src/core/store/index.ts



const reducers = (0,toolkit_namespaceObject.combineReducers)({
    api: apiReducer
});
const store = (0,toolkit_namespaceObject.configureStore)({
    reducer: reducers,
    devTools: "production" !== "production"
});
const useStoreApi = ()=>useSelector((state)=>state.api);

;// CONCATENATED MODULE: ./pages/_app.tsx




function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_namespaceObject.Provider, {
        store: store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8959));
module.exports = __webpack_exports__;

})();