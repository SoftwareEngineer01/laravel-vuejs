(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Inventory/DataInventoryId.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Inventory/DataInventoryId.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_inventary_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/inventary_service */ "./resources/js/services/inventary_service.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Services

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      inventoryData: {},
      inventoryId: this.$route.params.id
    };
  },
  mounted: function mounted() {
    this.getInventoryId();
  },
  methods: {
    getInventoryId: function () {
      var _getInventoryId = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_inventary_service__WEBPACK_IMPORTED_MODULE_1__["getInventaryId"](this.inventoryId);

              case 3:
                response = _context.sent;

                if (response.status == 200) {
                  this.inventoryData = response.data.data;
                }

                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0.response);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function getInventoryId() {
        return _getInventoryId.apply(this, arguments);
      }

      return getInventoryId;
    }(),
    toReturn: function toReturn() {
      this.$router.push("/inventario");
    },
    makeToast: function makeToast(title, text, type) {
      this.toastCount++;
      this.$bvToast.toast(text, {
        title: title,
        variant: type,
        autoHideDelay: 2000,
        appendToast: true
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Inventory/DataInventoryId.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Inventory/DataInventoryId.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.title {\n    color: #6c757d;\n    font-weight: bold;\n    font-size: 18px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Inventory/DataInventoryId.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Inventory/DataInventoryId.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./DataInventoryId.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Inventory/DataInventoryId.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Inventory/DataInventoryId.vue?vue&type=template&id=2a5ebddf&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Inventory/DataInventoryId.vue?vue&type=template&id=2a5ebddf& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container my-3" }, [
    _c("div", { staticClass: "card" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("form", { staticClass: "my-2" }, [
          _c("div", { staticClass: "form-row" }, [
            _c("div", { staticClass: "form-group col-md-4" }, [
              _c("label", { staticClass: "title" }, [_vm._v("Código:")]),
              _vm._v(
                "\n                        " +
                  _vm._s(_vm.inventoryData.code) +
                  "\n                    "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group col-md-4" }, [
              _c("label", { staticClass: "title" }, [
                _vm._v("Tipo de Inventario:")
              ]),
              _vm._v(
                "\n                        " +
                  _vm._s(_vm.inventoryData.inventory_type) +
                  "\n                    "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group col-md-4" }, [
              _c("label", { staticClass: "title" }, [_vm._v("Proveedor:")]),
              _vm._v(
                "\n                        " +
                  _vm._s(_vm.inventoryData.supplier) +
                  "\n                    "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-row" }, [
            _c("div", { staticClass: "form-group col-md-4" }, [
              _c("label", { staticClass: "title" }, [_vm._v("Factura:")]),
              _vm._v(
                "\n                        " +
                  _vm._s(_vm.inventoryData.bill) +
                  "\n                    "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group col-md-4" }, [
              _c("label", { staticClass: "title" }, [_vm._v("Modelo:")]),
              _vm._v(
                "\n                        " +
                  _vm._s(_vm.inventoryData.model) +
                  "\n                    "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group col-md-4" }, [
              _c("label", { staticClass: "title" }, [_vm._v("Descripción:")]),
              _vm._v(
                "\n                        " +
                  _vm._s(_vm.inventoryData.description) +
                  "\n                    "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-row" }, [
            _c("div", { staticClass: "form-group col-md-4" }, [
              _c("label", { staticClass: "title" }, [_vm._v("Talla:")]),
              _vm._v(
                "\n                        " +
                  _vm._s(_vm.inventoryData.size) +
                  "\n                    "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group col-md-4" }, [
              _c("label", { staticClass: "title" }, [_vm._v("Color:")]),
              _vm._v(
                "\n                        " +
                  _vm._s(_vm.inventoryData.color) +
                  "\n                    "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group col-md-4" }, [
              _c("label", { staticClass: "title" }, [_vm._v("Material:")]),
              _vm._v(
                "\n                        " +
                  _vm._s(_vm.inventoryData.material) +
                  "\n                    "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-row" }, [
            _c("div", { staticClass: "form-group col-md-4" }, [
              _c("label", { staticClass: "title" }, [_vm._v("Grupo:")]),
              _vm._v(
                "\n                        " +
                  _vm._s(_vm.inventoryData.group) +
                  "\n                    "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group col-md-4" }, [
              _c("label", { staticClass: "title" }, [_vm._v("Unidades:")]),
              _vm._v(
                "\n                        " +
                  _vm._s(_vm.inventoryData.units) +
                  "\n                    "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group col-md-4" }, [
              _c("label", { staticClass: "title" }, [_vm._v("Costo:")]),
              _vm._v(
                "\n                        " +
                  _vm._s(_vm._f("currency")(_vm.inventoryData.cost)) +
                  "\n                    "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-row" }, [
            _c("div", { staticClass: "form-group col-md-4" }, [
              _c("label", { staticClass: "title" }, [_vm._v("Valor:")]),
              _vm._v(
                "\n                        " +
                  _vm._s(_vm._f("currency")(_vm.inventoryData.value)) +
                  "\n                    "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group col-md-4" }, [
              _c("label", { staticClass: "title" }, [_vm._v("Valor mínimo:")]),
              _vm._v(
                "\n                        " +
                  _vm._s(_vm._f("currency")(_vm.inventoryData.minimum_value)) +
                  "\n                    "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group col-md-4" }, [
              _c("label", { staticClass: "title" }, [
                _vm._v("Fecha de creación:")
              ]),
              _vm._v(
                "\n                        " +
                  _vm._s(_vm.inventoryData.created_at) +
                  "\n                    "
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-info",
            on: {
              click: function($event) {
                return _vm.toReturn()
              }
            }
          },
          [_vm._v("Regresar")]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-auto mr-auto" }, [
          _c("h2", { staticClass: "text-secondary" }, [
            _vm._v("Detalle del Inventario")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Inventory/DataInventoryId.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/Inventory/DataInventoryId.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataInventoryId_vue_vue_type_template_id_2a5ebddf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataInventoryId.vue?vue&type=template&id=2a5ebddf& */ "./resources/js/components/Inventory/DataInventoryId.vue?vue&type=template&id=2a5ebddf&");
/* harmony import */ var _DataInventoryId_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataInventoryId.vue?vue&type=script&lang=js& */ "./resources/js/components/Inventory/DataInventoryId.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DataInventoryId_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataInventoryId.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Inventory/DataInventoryId.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DataInventoryId_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DataInventoryId_vue_vue_type_template_id_2a5ebddf___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DataInventoryId_vue_vue_type_template_id_2a5ebddf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Inventory/DataInventoryId.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Inventory/DataInventoryId.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Inventory/DataInventoryId.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataInventoryId_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DataInventoryId.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Inventory/DataInventoryId.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataInventoryId_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Inventory/DataInventoryId.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Inventory/DataInventoryId.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DataInventoryId_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./DataInventoryId.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Inventory/DataInventoryId.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DataInventoryId_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DataInventoryId_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DataInventoryId_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DataInventoryId_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Inventory/DataInventoryId.vue?vue&type=template&id=2a5ebddf&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Inventory/DataInventoryId.vue?vue&type=template&id=2a5ebddf& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataInventoryId_vue_vue_type_template_id_2a5ebddf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DataInventoryId.vue?vue&type=template&id=2a5ebddf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Inventory/DataInventoryId.vue?vue&type=template&id=2a5ebddf&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataInventoryId_vue_vue_type_template_id_2a5ebddf___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataInventoryId_vue_vue_type_template_id_2a5ebddf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/services/http_service.js":
/*!***********************************************!*\
  !*** ./resources/js/services/http_service.js ***!
  \***********************************************/
/*! exports provided: http, httpFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "http", function() { return http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpFile", function() { return httpFile; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./resources/js/store.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function http() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
    baseURL: _store__WEBPACK_IMPORTED_MODULE_0__["default"].state.apiURL
  });
}
function httpFile() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
    baseURL: _store__WEBPACK_IMPORTED_MODULE_0__["default"].state.apiURL,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}

/***/ }),

/***/ "./resources/js/services/inventary_service.js":
/*!****************************************************!*\
  !*** ./resources/js/services/inventary_service.js ***!
  \****************************************************/
/*! exports provided: createInventary, getInventary, getInventaryId, getInventoriesByType, updateInventary, deleteInventary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInventary", function() { return createInventary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInventary", function() { return getInventary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInventaryId", function() { return getInventaryId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInventoriesByType", function() { return getInventoriesByType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInventary", function() { return updateInventary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteInventary", function() { return deleteInventary; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function createInventary(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/inventory', data);
}
function getInventary() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/inventory');
}
function getInventaryId(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("inventory/".concat(id));
}
function getInventoriesByType(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("inventoriesByType/".concat(id));
}
function updateInventary(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("inventory/".concat(id), data);
}
function deleteInventary(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("inventory/".concat(id));
}

/***/ })

}]);