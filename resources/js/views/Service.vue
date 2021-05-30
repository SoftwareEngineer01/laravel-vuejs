<template>
    <div class="container my-3 ">

        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-auto mr-auto">
                        <h2 class="text-secondary">Lista de Servicios</h2>
                    </div>
                    <div class="col-auto">
                        <button class="right btn btn-primary" v-on:click="addService()">Agregar</button>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-hover table-bordered" id="example">
                        <thead class="table-active">
                            <tr class="text-secondary">
                                <th scope="col">Código</th>
                                <th scope="col">Proveedor</th>
                                <th scope="col">Factura</th>
                                <th scope="col">Modelo</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Costo</th>
                                <th scope="col">Valor</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(service, index) in services" :key="index">
                                <td>{{ service.code }}</td>
                                <td>{{ service.supplier }}</td>
                                <td>{{ service.bill }}</td>
                                <td>{{ service.model }}</td>
                                <td>{{ service.description }}</td>
                                <td>{{ service.cost  | currency }}</td>
                                <td>{{ service.value | currency }}</td>
                                <td>
                                    <button class="btn btn-info btn-sm" v-on:click="viewServiceId(service.id)">
                                        <span class="fa fa-eye"></span>
                                    </button>
                                    <button class="btn btn-warning btn-sm" v-on:click="editService(service.id)">
                                        <span class="fa fa-edit"></span>
                                    </button>
                                    <button class="btn btn-danger btn-sm" v-on:click="deleteService(service.id)">
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
    import * as servicesService from '../services/services_service';

    export default {
        data() {
            return {
                services: [],
            }
        },

        mounted() {
            this.loadServices();
            this.dataTable();
        },

        methods: {

            dataTable() {
                this.$nextTick(() => {
                    $('#example').DataTable({
                        "order": [
                            [0, 'desc']
                        ],
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

            loadServices: async function () {
                try {
                    const response = await servicesService.getServices();
                    this.services = response.data.data;
                } catch (error) {
                    console.log(error.response);
                }
                $('#example').DataTable().destroy();
                this.dataTable();
            },

            addService() {
                this.$router.push('/agregar-servicio');
            },

            editService(id){
                this.$router.push('/editar-servicio/'+id);
            },

            viewServiceId(id) {
                this.$router.push('/detalle-servicio/'+id);
            },

            deleteService: async function(id) {
                if (!window.confirm('Esta seguro de eliminar el registro')) {
                    return;
                }

                try {
                    const response = await servicesService.deleteService(id);

                    if (response.status == 200) {
                        this.makeToast('Eliminado', 'Registro eliminado correctamente', 'info');
                        this.loadServices();
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

