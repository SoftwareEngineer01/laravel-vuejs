<template>
    <div class="container my-3">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-auto mr-auto">
                        <h2 class="text-secondary">Lista de Proveedores</h2>
                    </div>
                    <div class="col-auto">
                        <button class="right btn btn-primary" v-b-modal.modal-1 @click="showModal = true">Agregar</button>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-hover table-bordered" id="tblSuppliers">
                        <thead class="table-active">
                            <tr class="text-secondary">
                                <th scope="col">Razón</th>
                                <th scope="col">Nit</th>
                                <th scope="col">Dirección</th>
                                <th scope="col">Teléfono</th>
                                <th scope="col">Email</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(supplier, index) in suppliers" :key="index">
                                <td>{{ supplier.business_name }}</td>
                                <td>{{ supplier.nit }}</td>
                                <td>{{ supplier.direction }}</td>
                                <td>{{ supplier.telephone }}</td>
                                <td>{{ supplier.email }}</td>
                                <td>
                                    <button class="btn btn-info btn-sm" v-on:click="viewSupplierId(supplier.id)">
                                        <span class="fa fa-eye"></span>
                                    </button>
                                    <button class="btn btn-warning btn-sm" v-b-modal.edit-supplier v-on:click="editSupplier(supplier)">
                                        <span class="fa fa-edit"></span>
                                    </button>
                                    <button class="btn btn-danger btn-sm" v-on:click="deleteSupplier(supplier)">
                                        <span class="fa fa-trash"></span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- Modal para agregar Proveedor -->
        <AddSupplier ref="supplierModal"  @loadSuppliers="loadSuppliers"></AddSupplier>

        <!-- Modal para actualizar Proveedores -->
        <EditSupplier ref="editSupplierModal" :editsupplierData="this.editsupplierData"  @loadSuppliers="loadSuppliers"></EditSupplier>

    </div>
</template>

<script>
    // JQuery
    import $ from "jquery";

    // Service
    import * as supplierService from '../services/supplier_service';

    // Components
    import AddSupplier  from '../components/Supplier/AddSupplier';
    import EditSupplier from '../components/Supplier/EditSupplier';

    export default {
        name: 'suppliers',

        data() {
            return {
                suppliers: [],
                editsupplierData: {},
            }
        },

        components: {
            AddSupplier,
            EditSupplier
        },

        mounted() {
            this.loadSuppliers();
            this.dataTable();
        },

        methods: {

            dataTable() {
                this.$nextTick(() => {
                    $('#tblSuppliers').DataTable({
                        "order": [[ 0, 'desc' ]],
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
                        },
                    });
                });
            },

            loadSuppliers: async function () {
                try {
                    const response = await supplierService.getSuppliers();
                    this.suppliers = response.data.data;
                } catch (error) {
                    console.log(error.response);
                }
                $('#tblSuppliers').DataTable().destroy();
                this.dataTable();
            },

            viewSupplierId(id) {
                this.$router.push('/verProveedor/'+id);
            },

            editSupplier(supplier) {
                this.editsupplierData = supplier;
            },

            deleteSupplier: async function (supplier) {
                if (!window.confirm('Esta seguro de eliminar el registro')) {
                    return;
                }

                try {
                    const response = await supplierService.deleteSupplier(supplier.id);

                    if (response.status == 200) {
                        this.makeToast('Eliminado', 'Registro eliminado', 'info');
                        this.loadSuppliers();
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

</style>
