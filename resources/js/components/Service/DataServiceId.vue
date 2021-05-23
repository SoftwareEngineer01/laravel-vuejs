<template>
    <div class="container my-3">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-auto mr-auto">
                        <h2 class="text-secondary">Detalle del Servicio</h2>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <form class="my-2">
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label class="title">Código:</label>
                            {{serviceData.code}}
                        </div>
                        <div class="form-group col-md-4">
                            <label class="title">Proveedor:</label>
                            {{serviceData.supplier}}
                        </div>
                        <div class="form-group col-md-4">
                            <label class="title">Factura:</label>
                            {{serviceData.bill}}
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label class="title">Modelo:</label>
                            {{serviceData.model}}
                        </div>
                        <div class="form-group col-md-4">
                            <label class="title">Descripción:</label>
                            {{serviceData.description}}
                        </div>
                        <div class="form-group col-md-4">
                            <label class="title">Talla:</label>
                            {{serviceData.size}}
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label class="title">Color:</label>
                            {{serviceData.color}}
                        </div>
                        <div class="form-group col-md-4">
                            <label class="title">Material:</label>
                            {{serviceData.material}}
                        </div>
                         <div class="form-group col-md-4">
                            <label class="title">Grupo:</label>
                            {{serviceData.group}}
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label class="title">Costo:</label>
                            {{serviceData.cost | currency}}
                        </div>
                        <div class="form-group col-md-4">
                            <label class="title">Valor:</label>
                            {{serviceData.value | currency}}
                        </div>
                        <div class="form-group col-md-4">
                            <label class="title">Valor mínimo:</label>
                            {{serviceData.minimum_value | currency}}
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label class="title">Fecha de creación:</label>
                            {{serviceData.created_at}}
                        </div>
                    </div>
                </form>

                <button class="btn btn-info" v-on:click="toReturn()">Regresar</button>

            </div>
        </div>
    </div>
</template>

<script>
    // Services
    import * as servicesService from '../../services/services_service';

    export default {

        data() {
            return {
                serviceData: {},
                serviceId: this.$route.params.id,
            }
        },

        mounted() {
            this.getServiceId();
        },

        methods: {

            getServiceId: async function () {
                try {
                    const response = await servicesService.getServiceId(this.serviceId);

                    if (response.status == 200) {
                        this.serviceData = response.data.data;
                    }

                } catch (error) {
                    console.log(error.response);
                }
            },

            toReturn() {
                this.$router.push("/servicios");
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

<style>
    .title {
        color: #6c757d;
        font-weight: bold;
        font-size: 18px;
    }
</style>
