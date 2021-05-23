<template>
    <div class="container my-3">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-auto mr-auto">
                        <h2 class="text-secondary">Información del Proveedor</h2>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <form class="my-2">
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label class="title">Razón social:</label>
                            {{supplierData.business_name}}
                        </div>
                        <div class="form-group col-md-4">
                            <label class="title">Dirección:</label>
                            {{supplierData.direction}}
                        </div>
                        <div class="form-group col-md-4">
                            <label class="title">Teléfono:</label>
                            {{supplierData.telephone}}
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label class="title">Nit:</label>
                            {{supplierData.nit}}
                        </div>
                        <div class="form-group col-md-4">
                            <label class="title">Email:</label>
                            {{supplierData.email}}
                        </div>
                        <div class="form-group col-md-4">
                            <label class="title">Cuenta:</label>
                            {{supplierData.account}}
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label class="title">Sucursal:</label>
                            {{supplierData.branch_office}}
                        </div>
                        <div class="form-group col-md-4">
                            <label class="title">Tipo Proveedor:</label>
                            {{supplierData.supplier_type}}
                        </div>
                        <div class="form-group col-md-4">
                            <label class="title">Fecha de creación:</label>
                            {{supplierData.created_at}}
                        </div>
                    </div>
                </form>
                <button class="btn btn-info" v-on:click="toReturn()">Regresar</button>
            </div>
        </div>
    </div>
</template>

<script>
    // Service
    import * as supplierService from '../../services/supplier_service';

    export default {


        data() {
            return {
                supplierData: [],
                supplierId: this.$route.params.id,
            }
        },

        mounted() {
            this.getSupplier();
        },

        methods: {

            getSupplier: async function () {
                try {
                    const response = await supplierService.getSupplierId(this.supplierId);

                    if (response.status == 200) {
                        this.supplierData = response.data.data;
                    }

                } catch (error) {
                    let rs = error.response.data.errorMessages[0];
                    this.makeToast('Error', rs, 'danger');
                    setTimeout(() => {
                        this.toReturn();
                    }, 3000);
                }
            },

            toReturn() {
                this.$router.push("/proveedores");
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
