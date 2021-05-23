<template>
    <div class="container my-3 ">

        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-auto mr-auto">
                        <h2 class="text-secondary">Lista Tipo de Inventarios</h2>
                    </div>
                    <div class="col-auto">
                        <button class="right btn btn-primary" v-on:click="showInventaryTypeModal()">Agregar</button>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-hover table-bordered" id="example">
                        <thead class="table-active">
                            <tr class="text-secondary">
                                <th scope="col">Nombre</th>
                                <th scope="col">Código</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(inventaryType, index) in inventaryTypes" :key="index">
                                <td>{{ inventaryType.name }}</td>
                                <td>{{ inventaryType.code }}</td>
                                <td>
                                    <button class="btn btn-warning btn-sm"
                                        v-on:click="editInventaryType(inventaryType)">
                                        <span class="fa fa-edit"></span>
                                    </button>
                                    <button class="btn btn-danger btn-sm"
                                        v-on:click="deleteInventaryType(inventaryType)">
                                        <span class="fa fa-trash"></span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- Modal para Agregar Tipo de Inventario -->
        <b-modal ref="inventaryTypeModal" hide-footer title="Agregar Tipo Inventario">
            <div class="d-block">
                <form v-on:submit.prevent="createInventaryType">
                    <div class="form-group">
                        <label for="name">Nombre</label>
                        <input type="text" v-model="$v.inventaryTypeData.name.$model"
                            @blur="$v.inventaryTypeData.name.$touch()"
                            :class="{'is-invalid' : validationStatus($v.inventaryTypeData.name)}" class="form-control"
                            id="name" placeholder="Escriba el tipo de inventario">
                        <span class="errors" v-if="$v.inventaryTypeData.name.$error">Nombre requerido</span>
                    </div>
                    <div class="form-group">
                        <label for="code">Código</label>
                        <input type="text" v-model="$v.inventaryTypeData.code.$model" class="form-control"
                            @blur="$v.inventaryTypeData.code.$touch()"
                            :class="{'is-invalid' : validationStatus($v.inventaryTypeData.code)}"
                            id="code" placeholder="Escriba el código">
                        <span class="errors" v-if="$v.inventaryTypeData.code.$error">Código requerido</span>
                    </div>

                    <hr>
                    <div class="text-right">
                        <button type="button" class="btn btn-danger"
                            v-on:click="hideInventaryTypeModal">Cancelar</button>
                        <button :disabled="$v.inventaryTypeData.$invalid" type="submit" class="btn btn-primary"><span
                                class="fa fa-check"></span> Guardar</button>
                    </div>
                </form>
            </div>
        </b-modal>

        <!-- Modal para actualizar Tipo Inventario -->
        <b-modal ref="editInventaryTypeModal" hide-footer title="Editar Tipo Inventario">
            <div class="d-block">
                <form v-on:submit.prevent="updateInventaryType">
                    <div class="form-group">
                        <label for="name">Nombre</label>
                        <input type="text" v-model="$v.editInventaryTypeData.name.$model" class="form-control" id="edit_name"
                            @blur="$v.editInventaryTypeData.name.$touch()"
                            :class="{'is-invalid' : validationStatus($v.editInventaryTypeData.name)}">
                        <span class="errors" v-if="$v.editInventaryTypeData.name.$error">Nombre requerido</span>
                    </div>
                    <hr>
                    <div class="text-right">
                        <button type="button" class="btn btn-danger"
                            v-on:click="hideEditInventaryTypeModal">Cancelar</button>
                        <button :disabled="$v.editInventaryTypeData.$invalid" type="submit" class="btn btn-primary"><span class="fa fa-check"></span>
                            Actualizar</button>
                    </div>
                </form>
            </div>
        </b-modal>

    </div>
</template>

<script>
    // JQuery
    import $ from "jquery";

    // Service
    import * as inventaryTypeService from '../services/inventaryType_service';

    //Validación formulario
    import { required } from 'vuelidate/lib/validators';

    export default {
        name: 'inventary-type',

        data() {

            return {
                inventaryTypes: [],
                inventaryTypeData: {
                    name: '',
                    code: ''
                },
                editInventaryTypeData: {},
            }
        },

        validations: {
            inventaryTypeData: {
                name: { required },
                code: { required }
            },
            editInventaryTypeData: {
                name: { required }
            }
        },

        mounted() {
            this.loadInventaryTypes();
        },

        methods: {

            validationStatus(validation) {
                return typeof validation != "undefined" ? validation.$error : false;
            },

            dataTable() {
                this.$nextTick(() => {
                    $('#example').DataTable({
                        "order": [
                            [0, 'desc']
                        ],
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
                        },
                    });
                });
            },
            hideInventaryTypeModal() {
                this.$refs.inventaryTypeModal.hide();
                this.$v.$reset();
                this.cleanForm();
            },
            hideEditInventaryTypeModal() {
                this.$v.$reset();
                this.loadInventaryTypes();
                this.$refs.editInventaryTypeModal.hide();
            },
            showInventaryTypeModal() {
                this.$refs.inventaryTypeModal.show();
            },
            showEditInventaryTypeModal() {
                this.$refs.editInventaryTypeModal.show();
            },
            loadInventaryTypes: async function () {
                try {
                    const response = await inventaryTypeService.getInventaryTypes();
                    this.inventaryTypes = response.data.data;
                } catch (error) {
                    console.log(error.response);
                }
                $('#example').DataTable().destroy();
                this.dataTable();
            },
            createInventaryType: async function () {
                let formData = new FormData();
                formData.append('name', this.inventaryTypeData.name);
                formData.append('code', this.inventaryTypeData.code);

                try {
                    const response = await inventaryTypeService.createInventaryType(formData);

                    if (response.status == 200) {
                        this.hideInventaryTypeModal();
                        this.loadInventaryTypes();
                        this.cleanForm();
                        setTimeout(() => {
                            this.makeToast('Realizado', 'Registro completado', 'success');
                        }, 2000);
                    }

                } catch (error) {
                    const result = error.response.data.success;
                    if (!result) {
                        this.makeToast('Advertencia', 'El código ya existe', 'warning');
                    }
                }
            },
            cleanForm() {
                this.inventaryTypeData = {
                    name: '',
                    code: ''
                };
            },
            editInventaryType(inventary) {
                this.editInventaryTypeData = inventary;
                this.showEditInventaryTypeModal();
            },
            updateInventaryType: async function () {
                let formData = new FormData();
                formData.append('name', this.editInventaryTypeData.name);
                formData.append("_method", "put");

                try {
                    const response = await inventaryTypeService.updateInventaryType(this.editInventaryTypeData.id,
                        formData);
                    if (response.status == 200) {
                        this.hideEditInventaryTypeModal();
                        this.loadInventaryTypes();
                        this.editInventaryTypeData = {};
                        setTimeout(() => {
                            this.makeToast('Actualizado', 'Registro actualizado', 'info');
                        }, 2000);
                    }
                } catch (error) {
                    console.log(error.response);
                }
            },
            deleteInventaryType: async function (inventary) {
                if (!window.confirm(`Esta seguro de eliminar ${inventary.name}`)) {
                    return;
                }

                try {
                    const response = await inventaryTypeService.deleteInventaryType(inventary.id);

                    if (response.status == 200) {
                        this.makeToast('Eliminado', 'Registro eliminado', 'info');
                        this.loadInventaryTypes();
                    }

                } catch (error) {
                    console.log(error.response);
                }
            },
            makeToast(title, text, type) {
                this.toastCount++
                this.$bvToast.toast(text, {
                    title: title,
                    variant: type,
                    autoHideDelay: 3000,
                    appendToast: true
                })
            },
        }
    }

</script>

<style>
    .errors {
        color: red;
    }

</style>
