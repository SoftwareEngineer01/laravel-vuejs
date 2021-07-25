(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Service.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Service.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/services_service */ "./resources/js/services/services_service.js");


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
// JQuery
 // Service


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      services: []
    };
  },
  mounted: function mounted() {
    this.loadServices();
    this.dataTable();
  },
  methods: {
    dataTable: function dataTable() {
      this.$nextTick(function () {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#example').DataTable({
          "order": [[0, 'desc']],
          language: {
            "sProcessing": '<i class="fa fa-spinner fa-spin" style="font-size:50px;color:rgb(75, 183, 245);"></i>',
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "Ningún dato disponible en esta tabla",
            "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": "Buscar:",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
              "sFirst": "Primero",
              "sLast": "Último",
              "sNext": "Siguiente",
              "sPrevious": "Anterior"
            },
            "oAria": {
              "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
              "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
          }
        });
      });
    },
    loadServices: function () {
      var _loadServices = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_services_service__WEBPACK_IMPORTED_MODULE_2__["getServices"]();

              case 3:
                response = _context.sent;
                this.services = response.data.data;
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0.response);

              case 10:
                jquery__WEBPACK_IMPORTED_MODULE_1___default()('#example').DataTable().destroy();
                this.dataTable();

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function loadServices() {
        return _loadServices.apply(this, arguments);
      }

      return loadServices;
    }(),
    addService: function addService() {
      this.$router.push('/agregar-servicio');
    },
    editService: function editService(id) {
      this.$router.push('/editar-servicio/' + id);
    },
    viewServiceId: function viewServiceId(id) {
      this.$router.push('/detalle-servicio/' + id);
    },
    deleteService: function () {
      var _deleteService = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (window.confirm('Esta seguro de eliminar el registro')) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                _context2.prev = 2;
                _context2.next = 5;
                return _services_services_service__WEBPACK_IMPORTED_MODULE_2__["deleteService"](id);

              case 5:
                response = _context2.sent;

                if (response.status == 200) {
                  this.makeToast('Eliminado', 'Registro eliminado correctamente', 'info');
                  this.loadServices();
                }

                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](2);
                console.log(_context2.t0.response);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 9]]);
      }));

      function deleteService(_x) {
        return _deleteService.apply(this, arguments);
      }

      return deleteService;
    }(),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Service.vue?vue&type=template&id=af9e0f34&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Service.vue?vue&type=template&id=af9e0f34& ***!
  \*****************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container my-3 " }, [
    _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-header" }, [
        _c("div", { staticClass: "row" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "col-auto" }, [
            _c(
              "button",
              {
                staticClass: "right btn btn-primary",
                on: {
                  click: function($event) {
                    return _vm.addService()
                  }
                }
              },
              [_vm._v("Agregar")]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("div", { staticClass: "table-responsive" }, [
          _c(
            "table",
            {
              staticClass: "table table-hover table-bordered",
              attrs: { id: "example" }
            },
            [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.services, function(service, index) {
                  return _c("tr", { key: index }, [
                    _c("td", [_vm._v(_vm._s(service.code))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(service.supplier))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(service.bill))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(service.model))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(service.description))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(_vm._f("currency")(service.cost)))
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(_vm._f("currency")(service.value)))
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-info btn-sm",
                          on: {
                            click: function($event) {
                              return _vm.viewServiceId(service.id)
                            }
                          }
                        },
                        [_c("span", { staticClass: "fa fa-eye" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-warning btn-sm",
                          on: {
                            click: function($event) {
                              return _vm.editService(service.id)
                            }
                          }
                        },
                        [_c("span", { staticClass: "fa fa-edit" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-danger btn-sm",
                          on: {
                            click: function($event) {
                              return _vm.deleteService(service.id)
                            }
                          }
                        },
                        [_c("span", { staticClass: "fa fa-trash" })]
                      )
                    ])
                  ])
                }),
                0
              )
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-auto mr-auto" }, [
      _c("h2", { staticClass: "text-secondary" }, [
        _vm._v("Lista de Servicios")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "table-active" }, [
      _c("tr", { staticClass: "text-secondary" }, [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Código")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Proveedor")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Factura")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Modelo")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Descripción")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Costo")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Valor")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Acciones")])
      ])
    ])
  }
]
render._withStripped = true



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

/***/ "./resources/js/services/services_service.js":
/*!***************************************************!*\
  !*** ./resources/js/services/services_service.js ***!
  \***************************************************/
/*! exports provided: createService, getServices, getServiceId, updateService, deleteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createService", function() { return createService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServices", function() { return getServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServiceId", function() { return getServiceId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateService", function() { return updateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteService", function() { return deleteService; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function createService(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/service', data);
}
function getServices() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/service');
}
function getServiceId(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("service/".concat(id));
}
function updateService(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("service/".concat(id), data);
}
function deleteService(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("service/".concat(id));
}

/***/ }),

/***/ "./resources/js/views/Service.vue":
/*!****************************************!*\
  !*** ./resources/js/views/Service.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Service_vue_vue_type_template_id_af9e0f34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Service.vue?vue&type=template&id=af9e0f34& */ "./resources/js/views/Service.vue?vue&type=template&id=af9e0f34&");
/* harmony import */ var _Service_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Service.vue?vue&type=script&lang=js& */ "./resources/js/views/Service.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Service_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Service_vue_vue_type_template_id_af9e0f34___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Service_vue_vue_type_template_id_af9e0f34___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Service.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Service.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/Service.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Service.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Service.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Service.vue?vue&type=template&id=af9e0f34&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Service.vue?vue&type=template&id=af9e0f34& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_template_id_af9e0f34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Service.vue?vue&type=template&id=af9e0f34& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Service.vue?vue&type=template&id=af9e0f34&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_template_id_af9e0f34___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_template_id_af9e0f34___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);