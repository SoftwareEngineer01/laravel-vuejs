<template>
    <div class="container my-3 ">

        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-auto mr-auto">
                        <h2 class="text-secondary">Lista del Inventario</h2>
                    </div>
                    <div class="col-auto">
                        <button class="right btn btn-primary" v-on:click="addInventory()">Agregar</button>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-hover table-bordered" id="example">
                        <thead class="table-active">
                            <tr class="text-secondary">
                                <th scope="col">Código</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Tipo Inventario</th>
                                <th scope="col">Proveedor</th>
                                <th scope="col">Unidades</th>
                                <th scope="col">Costo</th>
                                <th scope="col">Valor</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(inventary, index) in inventories" :key="index">
                                <td>{{ inventary.code }}</td>
                                <td>{{ inventary.description }}</td>
                                <td>{{ inventary.inventory_type }}</td>
                                <td>{{ inventary.supplier }}</td>
                                <td>{{ inventary.units }}</td>
                                <td>{{ inventary.cost  | currency }}</td>
                                <td>{{ inventary.value | currency }}</td>
                                <td>
                                    <button class="btn btn-info btn-sm" v-on:click="viewInventoryId(inventary.id)">
                                        <span class="fa fa-eye"></span>
                                    </button>
                                    <button class="btn btn-warning btn-sm" v-on:click="editInventary(inventary.id)">
                                        <span class="fa fa-edit"></span>
                                    </button>
                                    <button class="btn btn-danger btn-sm" v-on:click="deleteInventory(inventary.id)">
                                        <span class="fa fa-trash"></span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    // JQuery
    import $ from "jquery";

    // Service
    import * as inventaryService from '../services/inventary_service';

    export default {
        data() {
            return {
                inventories: [],
            }
        },

        mounted() {
            this.loadInventary();
        },

        methods: {

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

            loadInventary: async function () {
                try {
                    const response = await inventaryService.getInventary();
                    this.inventories = response.data.data;
                } catch (error) {
                    console.log(error.response);
                }
                $('#example').DataTable().destroy();
                this.dataTable();
            },

            addInventory() {
                this.$router.push('/agregar-inventario');
            },

            editInventary(id){
                this.$router.push('/editar-inventario/'+id);
            },

            viewInventoryId(id) {
                this.$router.push('/detalle-inventario/'+id);
            },

            deleteInventory: async function(id) {
                if (!window.confirm('Esta seguro de eliminar el registro')) {
                    return;
                }

                try {
                    const response = await inventaryService.deleteInventary(id);

                    if (response.status == 200) {
                        this.makeToast('Eliminado', 'Registro eliminado correctamente', 'info');
                        this.loadInventary();
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
                    autoHideDelay: 2000,
                    appendToast: true
                })
            },
        }
    }

</script>

