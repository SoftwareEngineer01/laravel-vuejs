<template>
    <div class="container my-3">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-auto mr-auto">
                        <h2 class="text-secondary">Lista de ingreso inventario</h2>
                    </div>
                    <div class="col-auto">
                        <button class="right btn btn-primary" v-b-modal.modal-1 @click="showModal = true">Agregar</button>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-hover table-bordered" id="tblInventoryEntry">
                        <thead class="table-active">
                            <tr class="text-secondary">
                                <th scope="col">Tipo Inventario</th>
                                <th scope="col">Factura</th>
                                <th scope="col">Artículo</th>
                                <th scope="col">Entradas</th>
                                <th scope="col">Costo</th>
                                <th scope="col">Fecha creación</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(inventory, index) in inventory_entries" :key="index">
                                <td>{{ inventory.inventory_type }}</td>
                                <td>{{ inventory.bill }}</td>
                                <td>{{ inventory.inventory_description }}</td>
                                <td>{{ inventory.entries }}</td>
                                <td>{{ inventory.cost | currency }}</td>
                                <td>{{ inventory.created_at }}</td>
                                <td>
                                    <button class="btn btn-warning btn-sm" v-b-modal.editInventoryEntry v-on:click="editInventoryEntry(inventory)">
                                        <span class="fa fa-edit"></span>
                                    </button>
                                    <button class="btn btn-danger btn-sm" v-on:click="deleteInventoryEntry(inventory.id)">
                                        <span class="fa fa-trash"></span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- Modal para agregar Entrada Inventario -->
        <AddInventoryEntry ref="inventoryEntryModal" @loadInventoryEntries="loadInventoryEntries"></AddInventoryEntry>

        <!-- Modal para actualizar Entrada Inventario -->
        <EditInventoryEntry ref="editInventoryEntry" :inventoryEntryData="this.dataInventoryEntry"  @loadInventoryEntries="loadInventoryEntries"></EditInventoryEntry>

    </div>
</template>

<script>
    // JQuery
    import $ from "jquery";

    // Service
    import * as inventoryEntry from '../services/inventory_entry_service';

    // Components
    import AddInventoryEntry  from '../components/InventoryEntry/AddInventoryEntry';
    import EditInventoryEntry from '../components/InventoryEntry/EditInventoryEntry';

    export default {
        name: 'inventory_entries',

        data() {
            return {
                inventory_entries: [],
                dataInventoryEntry: {},
            }
        },

        components: {
            AddInventoryEntry,
            EditInventoryEntry
        },

        mounted() {
            this.loadInventoryEntries();
        },

        methods: {

            dataTable() {
                this.$nextTick(() => {
                    $('#tblInventoryEntry').DataTable({
                        "order": [[ 0, 'desc' ]],
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

            loadInventoryEntries: async function () {
                try {
                    const response = await inventoryEntry.getInventoryEntries();
                    this.inventory_entries = response.data.data;
                } catch (error) {
                    console.log(error.response);
                }
                $('#tblInventoryEntry').DataTable().destroy();
                this.dataTable();
            },

            editInventoryEntry(data) {
                this.dataInventoryEntry = data;
            },

            deleteInventoryEntry: async function (id) {
                if (!window.confirm('Esta seguro de eliminar el registro')) {
                    return;
                }

                try {
                    const response = await inventoryEntry.deleteInventoryEntry(id);

                    if (response.status == 200) {
                        this.makeToast('Eliminado', 'Registro eliminado', 'info');
                        this.loadInventoryEntries();
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
