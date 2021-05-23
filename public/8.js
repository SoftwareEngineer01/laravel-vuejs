(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/InventoryEntry/EditInventoryEntry.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/InventoryEntry/EditInventoryEntry.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_inventaryType_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/inventaryType_service */ "./resources/js/services/inventaryType_service.js");
/* harmony import */ var _services_inventary_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/inventary_service */ "./resources/js/services/inventary_service.js");
/* harmony import */ var _services_inventory_entry_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/inventory_entry_service */ "./resources/js/services/inventory_entry_service.js");
/* harmony import */ var _ErrorValidation_ErrorValidation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ErrorValidation/ErrorValidation */ "./resources/js/components/ErrorValidation/ErrorValidation.vue");


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
//Validación de formularios
 //Servicios



 //Componentes


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    inventoryEntryData: Object
  },
  data: function data() {
    return {
      id_inventory: this.inventoryEntryData.inventory_id,
      validationErrors: '',
      final_units: '',
      message: 'Dato requerido',
      inventaryTypes: [],
      inventories: []
    };
  },
  components: {
    ErrorValidation: _ErrorValidation_ErrorValidation__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  computed: {
    entriesErrors: function entriesErrors() {
      var errors = [];
      if (!this.$v.inventoryEntryData.entries.$dirty) return errors;
      !this.$v.inventoryEntryData.entries.required && errors.push(this.message);
      !this.$v.inventoryEntryData.entries.numeric && errors.push('Solo números');
      return errors;
    }
  },
  mounted: function mounted() {
    this.getInventoryTypes();
  },
  validations: {
    inventoryEntryData: {
      inventory_type_id: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      bill: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      inventory_id: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      entries: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
        numeric: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["numeric"]
      },
      cost: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      }
    }
  },
  methods: {
    validationStatus: function validationStatus(validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    getInventoryTypes: function () {
      var _getInventoryTypes = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_inventaryType_service__WEBPACK_IMPORTED_MODULE_2__["getInventaryTypes"]();

              case 3:
                response = _context.sent;
                this.inventaryTypes = response.data.data;
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

      function getInventoryTypes() {
        return _getInventoryTypes.apply(this, arguments);
      }

      return getInventoryTypes;
    }(),
    getInventoriesByType: function () {
      var _getInventoriesByType = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.clearData();
                _context2.prev = 1;
                _context2.next = 4;
                return _services_inventary_service__WEBPACK_IMPORTED_MODULE_3__["getInventoriesByType"](id);

              case 4:
                response = _context2.sent;

                if (response.status == 200) {
                  this.inventories = response.data.data;
                }

                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](1);

                if (_context2.t0.response.status == 422) {
                  this.validationErrors = _context2.t0.response.data.errorMessages;
                }

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 8]]);
      }));

      function getInventoriesByType(_x) {
        return _getInventoriesByType.apply(this, arguments);
      }

      return getInventoriesByType;
    }(),
    getInventoryDetail: function () {
      var _getInventoryDetail = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(id) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.inventoryEntryData.entries = '';
                _context3.prev = 1;
                _context3.next = 4;
                return _services_inventary_service__WEBPACK_IMPORTED_MODULE_3__["getInventaryId"](id);

              case 4:
                response = _context3.sent;
                this.inventoryEntryData.cost = response.data.data.cost;
                this.final_units = response.data.data.units;
                _context3.next = 12;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](1);
                console.log(_context3.t0.response);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 9]]);
      }));

      function getInventoryDetail(_x2) {
        return _getInventoryDetail.apply(this, arguments);
      }

      return getInventoryDetail;
    }(),
    finalUnits: function finalUnits() {
      var op = this.final_units + parseInt(this.inventoryEntryData.entries);
      this.final_units = parseInt(op);
    },
    hideInventoryEntryModal: function hideInventoryEntryModal() {
      this.$v.$reset();
      this.$emit("loadInventoryEntries");
      this.$refs.editInventoryEntry.hide();
    },
    clearData: function clearData() {
      this.validationErrors = '';
      this.inventories = '';
      this.inventoryEntryData.cost = 0;
      this.inventoryEntryData.entries = '';
      this.final_units = '';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/InventoryEntry.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/InventoryEntry.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_inventory_entry_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/inventory_entry_service */ "./resources/js/services/inventory_entry_service.js");
/* harmony import */ var _components_InventoryEntry_AddInventoryEntry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/InventoryEntry/AddInventoryEntry */ "./resources/js/components/InventoryEntry/AddInventoryEntry.vue");
/* harmony import */ var _components_InventoryEntry_EditInventoryEntry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/InventoryEntry/EditInventoryEntry */ "./resources/js/components/InventoryEntry/EditInventoryEntry.vue");


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

 // Components



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'inventory_entries',
  data: function data() {
    return {
      inventory_entries: [],
      dataInventoryEntry: {}
    };
  },
  components: {
    AddInventoryEntry: _components_InventoryEntry_AddInventoryEntry__WEBPACK_IMPORTED_MODULE_3__["default"],
    EditInventoryEntry: _components_InventoryEntry_EditInventoryEntry__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  mounted: function mounted() {
    this.loadInventoryEntries();
  },
  methods: {
    dataTable: function dataTable() {
      this.$nextTick(function () {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#tblInventoryEntry').DataTable({
          "order": [[0, 'desc']],
          language: {
            "sProcessing": "Procesando...",
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
    loadInventoryEntries: function () {
      var _loadInventoryEntries = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_inventory_entry_service__WEBPACK_IMPORTED_MODULE_2__["getInventoryEntries"]();

              case 3:
                response = _context.sent;
                this.inventory_entries = response.data.data;
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0.response);

              case 10:
                jquery__WEBPACK_IMPORTED_MODULE_1___default()('#tblInventoryEntry').DataTable().destroy();
                this.dataTable();

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function loadInventoryEntries() {
        return _loadInventoryEntries.apply(this, arguments);
      }

      return loadInventoryEntries;
    }(),
    editInventoryEntry: function editInventoryEntry(data) {
      this.dataInventoryEntry = data;
    },
    deleteInventoryEntry: function () {
      var _deleteInventoryEntry = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
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
                return _services_inventory_entry_service__WEBPACK_IMPORTED_MODULE_2__["deleteInventoryEntry"](id);

              case 5:
                response = _context2.sent;

                if (response.status == 200) {
                  this.makeToast('Eliminado', 'Registro eliminado', 'info');
                  this.loadInventoryEntries();
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

      function deleteInventoryEntry(_x) {
        return _deleteInventoryEntry.apply(this, arguments);
      }

      return deleteInventoryEntry;
    }(),
    makeToast: function makeToast(title, text, type) {
      this.toastCount++;
      this.$bvToast.toast(text, {
        title: title,
        variant: type,
        autoHideDelay: 3000,
        appendToast: true
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/InventoryEntry/EditInventoryEntry.vue?vue&type=template&id=23c9e3c4&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/InventoryEntry/EditInventoryEntry.vue?vue&type=template&id=23c9e3c4& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c(
        "b-modal",
        {
          ref: "editInventoryEntry",
          attrs: {
            id: "editInventoryEntry",
            "hide-footer": "",
            title: "Actualizar Entrada de Inventario",
            scrollable: ""
          }
        },
        [
          _c(
            "div",
            { staticClass: "d-block" },
            [
              _vm.validationErrors
                ? _c("ErrorValidation", {
                    attrs: { errors: _vm.validationErrors }
                  })
                : _vm._e(),
              _vm._v(" "),
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.editInventoryEntry($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "form-row" }, [
                    _c("div", { staticClass: "form-group col-md-6" }, [
                      _c("label", { attrs: { for: "editBill" } }, [
                        _vm._v("Factura de compra")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.trim",
                            value: _vm.$v.inventoryEntryData.bill.$model,
                            expression: "$v.inventoryEntryData.bill.$model",
                            modifiers: { trim: true }
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.validationStatus(
                            _vm.$v.inventoryEntryData.bill
                          )
                        },
                        attrs: { type: "text", id: "editBill" },
                        domProps: {
                          value: _vm.$v.inventoryEntryData.bill.$model
                        },
                        on: {
                          blur: [
                            function($event) {
                              return _vm.$v.inventoryEntryData.bill.$touch()
                            },
                            function($event) {
                              return _vm.$forceUpdate()
                            }
                          ],
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.$v.inventoryEntryData.bill,
                              "$model",
                              $event.target.value.trim()
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.$v.inventoryEntryData.bill.$error
                        ? _c("span", { staticClass: "errors" }, [
                            _vm._v(_vm._s(_vm.message))
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group col-md-6" }, [
                      _c("label", [_vm._v("Tipo Inventario")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value:
                                _vm.$v.inventoryEntryData.inventory_type_id
                                  .$model,
                              expression:
                                "$v.inventoryEntryData.inventory_type_id.$model",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.validationStatus(
                              _vm.$v.inventoryEntryData.inventory_type_id
                            )
                          },
                          attrs: { id: "inventory_type_id" },
                          on: {
                            change: [
                              function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.$v.inventoryEntryData.inventory_type_id,
                                  "$model",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                              function($event) {
                                return _vm.getInventoriesByType(
                                  _vm.inventoryEntryData.inventory_type_id
                                )
                              }
                            ],
                            blur: function($event) {
                              return _vm.$v.inventoryEntryData.inventory_type_id.$touch()
                            }
                          }
                        },
                        _vm._l(_vm.inventaryTypes, function(
                          inventoryType,
                          index
                        ) {
                          return _c(
                            "option",
                            {
                              key: index,
                              domProps: { value: inventoryType.id }
                            },
                            [_vm._v(_vm._s(inventoryType.name))]
                          )
                        }),
                        0
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-row" }, [
                    _c("div", { staticClass: "form-group col-md-6" }, [
                      _c("label", [_vm._v("Artículo")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value:
                                _vm.$v.inventoryEntryData.inventory_id.$model,
                              expression:
                                "$v.inventoryEntryData.inventory_id.$model",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.validationStatus(
                              _vm.$v.inventoryEntryData.inventory_id
                            )
                          },
                          attrs: { id: "inventory_id" },
                          on: {
                            change: [
                              function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.$v.inventoryEntryData.inventory_id,
                                  "$model",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                              function($event) {
                                return _vm.getInventoryDetail(
                                  _vm.inventoryEntryData.inventory_id
                                )
                              }
                            ],
                            blur: function($event) {
                              return _vm.$v.inventoryEntryData.inventory_id.$touch()
                            }
                          }
                        },
                        _vm._l(_vm.inventories, function(inventory, index) {
                          return _c(
                            "option",
                            { key: index, domProps: { value: inventory.id } },
                            [_vm._v(_vm._s(inventory.description))]
                          )
                        }),
                        0
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group col-md-6" },
                      [
                        _c("label", { attrs: { for: "entries" } }, [
                          _vm._v("Entradas")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.$v.inventoryEntryData.entries.$model,
                              expression:
                                "$v.inventoryEntryData.entries.$model",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.validationStatus(
                              _vm.$v.inventoryEntryData.entries
                            )
                          },
                          attrs: { type: "text", id: "entries" },
                          domProps: {
                            value: _vm.$v.inventoryEntryData.entries.$model
                          },
                          on: {
                            change: _vm.finalUnits,
                            blur: [
                              function($event) {
                                return _vm.$v.inventoryEntryData.entries.$touch()
                              },
                              function($event) {
                                return _vm.$forceUpdate()
                              }
                            ],
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.$v.inventoryEntryData.entries,
                                "$model",
                                $event.target.value.trim()
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm._l(_vm.entriesErrors, function(error) {
                          return _c(
                            "span",
                            { key: error, staticClass: "errors" },
                            [_vm._v(_vm._s(error))]
                          )
                        })
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-row" }, [
                    _c(
                      "div",
                      { staticClass: "form-group col-md-6" },
                      [
                        _c("label", { attrs: { for: "cost" } }, [
                          _vm._v("Costo")
                        ]),
                        _vm._v(" "),
                        _c("currency-input", {
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.validationStatus(
                              _vm.$v.inventoryEntryData.cost
                            )
                          },
                          attrs: { type: "text", id: "cost" },
                          on: {
                            blur: function($event) {
                              return _vm.$v.inventoryEntryData.cost.$touch()
                            }
                          },
                          model: {
                            value: _vm.$v.inventoryEntryData.cost.$model,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.$v.inventoryEntryData.cost,
                                "$model",
                                typeof $$v === "string" ? $$v.trim() : $$v
                              )
                            },
                            expression: "$v.inventoryEntryData.cost.$model"
                          }
                        }),
                        _vm._v(" "),
                        _vm.$v.inventoryEntryData.cost.$error
                          ? _c("span", { staticClass: "errors" }, [
                              _vm._v(_vm._s(_vm.message))
                            ])
                          : _vm._e()
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group col-md-6" }, [
                      _c("label", { attrs: { for: "entries" } }, [
                        _vm._v("Saldo Final")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.final_units,
                            expression: "final_units"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", id: "entries", disabled: "" },
                        domProps: { value: _vm.final_units },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.final_units = $event.target.value
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-right" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-danger",
                        attrs: { type: "button" },
                        on: { click: _vm.hideInventoryEntryModal }
                      },
                      [_vm._v("Cancelar")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: {
                          disabled: _vm.$v.inventoryEntryData.$invalid,
                          type: "submit"
                        }
                      },
                      [
                        _c("span", { staticClass: "fa fa-check" }),
                        _vm._v(" Guardar")
                      ]
                    )
                  ])
                ]
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/InventoryEntry.vue?vue&type=template&id=db7e5f56&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/InventoryEntry.vue?vue&type=template&id=db7e5f56& ***!
  \************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "container my-3" },
    [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-header" }, [
          _c("div", { staticClass: "row" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "col-auto" }, [
              _c(
                "button",
                {
                  directives: [
                    {
                      name: "b-modal",
                      rawName: "v-b-modal.modal-1",
                      modifiers: { "modal-1": true }
                    }
                  ],
                  staticClass: "right btn btn-primary",
                  on: {
                    click: function($event) {
                      _vm.showModal = true
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
                attrs: { id: "tblInventoryEntry" }
              },
              [
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.inventory_entries, function(inventory, index) {
                    return _c("tr", { key: index }, [
                      _c("td", [_vm._v(_vm._s(inventory.inventory_type))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(inventory.bill))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(inventory.inventory_description))
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(inventory.entries))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(_vm._f("currency")(inventory.cost)))
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(inventory.created_at))]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "button",
                          {
                            directives: [
                              {
                                name: "b-modal",
                                rawName: "v-b-modal.editInventoryEntry",
                                modifiers: { editInventoryEntry: true }
                              }
                            ],
                            staticClass: "btn btn-warning btn-sm",
                            on: {
                              click: function($event) {
                                return _vm.editInventoryEntry(inventory)
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
                                return _vm.deleteInventoryEntry(inventory.id)
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
      ]),
      _vm._v(" "),
      _c("AddInventoryEntry", {
        ref: "inventoryEntryModal",
        on: { loadInventoryEntries: _vm.loadInventoryEntries }
      }),
      _vm._v(" "),
      _c("EditInventoryEntry", {
        ref: "editInventoryEntry",
        attrs: { inventoryEntryData: this.dataInventoryEntry },
        on: { loadInventoryEntries: _vm.loadInventoryEntries }
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-auto mr-auto" }, [
      _c("h2", { staticClass: "text-secondary" }, [
        _vm._v("Lista de ingreso inventario")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "table-active" }, [
      _c("tr", { staticClass: "text-secondary" }, [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Tipo Inventario")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Factura")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Artículo")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Entradas")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Costo")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Fecha creación")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Acciones")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/InventoryEntry/EditInventoryEntry.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/InventoryEntry/EditInventoryEntry.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditInventoryEntry_vue_vue_type_template_id_23c9e3c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditInventoryEntry.vue?vue&type=template&id=23c9e3c4& */ "./resources/js/components/InventoryEntry/EditInventoryEntry.vue?vue&type=template&id=23c9e3c4&");
/* harmony import */ var _EditInventoryEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditInventoryEntry.vue?vue&type=script&lang=js& */ "./resources/js/components/InventoryEntry/EditInventoryEntry.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditInventoryEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditInventoryEntry_vue_vue_type_template_id_23c9e3c4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditInventoryEntry_vue_vue_type_template_id_23c9e3c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/InventoryEntry/EditInventoryEntry.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/InventoryEntry/EditInventoryEntry.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/InventoryEntry/EditInventoryEntry.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditInventoryEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditInventoryEntry.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/InventoryEntry/EditInventoryEntry.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditInventoryEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/InventoryEntry/EditInventoryEntry.vue?vue&type=template&id=23c9e3c4&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/InventoryEntry/EditInventoryEntry.vue?vue&type=template&id=23c9e3c4& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditInventoryEntry_vue_vue_type_template_id_23c9e3c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditInventoryEntry.vue?vue&type=template&id=23c9e3c4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/InventoryEntry/EditInventoryEntry.vue?vue&type=template&id=23c9e3c4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditInventoryEntry_vue_vue_type_template_id_23c9e3c4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditInventoryEntry_vue_vue_type_template_id_23c9e3c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/InventoryEntry.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/InventoryEntry.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InventoryEntry_vue_vue_type_template_id_db7e5f56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InventoryEntry.vue?vue&type=template&id=db7e5f56& */ "./resources/js/views/InventoryEntry.vue?vue&type=template&id=db7e5f56&");
/* harmony import */ var _InventoryEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InventoryEntry.vue?vue&type=script&lang=js& */ "./resources/js/views/InventoryEntry.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InventoryEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InventoryEntry_vue_vue_type_template_id_db7e5f56___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InventoryEntry_vue_vue_type_template_id_db7e5f56___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/InventoryEntry.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/InventoryEntry.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/InventoryEntry.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InventoryEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./InventoryEntry.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/InventoryEntry.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InventoryEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/InventoryEntry.vue?vue&type=template&id=db7e5f56&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/InventoryEntry.vue?vue&type=template&id=db7e5f56& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InventoryEntry_vue_vue_type_template_id_db7e5f56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./InventoryEntry.vue?vue&type=template&id=db7e5f56& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/InventoryEntry.vue?vue&type=template&id=db7e5f56&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InventoryEntry_vue_vue_type_template_id_db7e5f56___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InventoryEntry_vue_vue_type_template_id_db7e5f56___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);