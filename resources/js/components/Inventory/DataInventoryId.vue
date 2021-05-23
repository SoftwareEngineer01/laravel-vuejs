<template>
    <div class="container my-3">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-auto mr-auto">
                        <h2 class="text-secondary">Detalle del Inventario</h2>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <form class="my-2">
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label class="title">Código:</label>
                            {{inventoryData.code}}
                        </div>
                        <div class="form-group col-md-4">
                            <label class="title">Tipo de Inventario:</label>
                            {{inventoryData.inventory_type}}
                        </div>
                        <div class="form-group col-md-4">
                            <label class="title">Proveedor:</label>
                            {{inventoryData.supplier}}
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label class="title">Factura:</label>
                            {{inventoryData.bill}}
                        </div>
                        <div class="form-group col-md-4">
                            <label class="title">Modelo:</label>
                            {{inventoryData.model}}
                        </div>
                        <div class="form-group col-md-4">
                            <label class="title">Descripción:</label>
                            {{inventoryData.description}}
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label class="title">Talla:</label>
                            {{inventoryData.size}}
                        </div>
                        <div class="form-group col-md-4">
                            <label class="title">Color:</label>
                            {{inventoryData.color}}
                        </div>
                        <div class="form-group col-md-4">
                            <label class="title">Material:</label>
                            {{inventoryData.material}}
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label class="title">Grupo:</label>
                            {{inventoryData.group}}
                        </div>
                        <div class="form-group col-md-4">
                            <label class="title">Unidades:</label>
                            {{inventoryData.units}}
                        </div>
                        <div class="form-group col-md-4">
                            <label class="title">Unidades Finales:</label>
                            {{inventoryData.final_units}}
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label class="title">Costo:</label>
                            {{inventoryData.cost | currency}}
                        </div>
                        <div class="form-group col-md-4">
                            <label class="title">Valor:</label>
                            {{inventoryData.value | currency}}
                        </div>
                        <div class="form-group col-md-4">
                            <label class="title">Valor mínimo:</label>
                            {{inventoryData.minimum_value | currency}}
                        </div>
                    </div>
                    <div class="form-row">
                         <div class="form-group col-md-4">
                            <label class="title">Fecha de creación:</label>
                            {{inventoryData.created_at}}
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
    import * as inventoryService from '../../services/inventary_service';

    export default {

        data() {
            return {
                inventoryData: {},
                inventoryId: this.$route.params.id,
            }
        },

        mounted() {
            this.getInventoryId();
        },

        methods: {

            getInventoryId: async function () {
                try {
                    const response = await inventoryService.getInventaryId(this.inventoryId);

                    if (response.status == 200) {
                        this.inventoryData = response.data.data;
                    }

                } catch (error) {
                    console.log(error.response);
                }
            },

            toReturn() {
                this.$router.push("/inventario");
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
