<template>
    <div class="container my-3">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-auto mr-auto">
                        <h2 class="text-secondary">Editar Servicio</h2>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <ErrorValidation :errors="validationErrors" v-if="validationErrors"></ErrorValidation>

                <form v-on:submit.prevent="updateService">
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="code">Código</label>
                            <input v-model="editData.code" type="code" class="form-control" id="code" :disabled="editData.code">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="supplier">Proveedor</label>
                            <select v-model="editData.supplier_id" id="supplier" class="form-control">
                                <option v-for="(supplier, index) in suppliers" :key="index" v-bind:value="supplier.id">{{supplier.business_name}}</option>
                            </select>
                        </div>
                         <div class="form-group col-md-4">
                            <label for="bill">Factura</label>
                            <input v-model="editData.bill" type="text" class="form-control" id="bill">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="model">Modelo</label>
                            <input v-model="editData.model" type="text" class="form-control" id="model">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="description">Descripción</label>
                            <input v-model="editData.description" type="text" class="form-control" id="description">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="size">Talla</label>
                            <input v-model="editData.size" type="text" class="form-control" id="size">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="color">Color</label>
                            <input v-model="editData.color" type="text" class="form-control" id="color">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="material">Material</label>
                            <input v-model="editData.material" type="text" class="form-control" id="material">
                        </div>
                         <div class="form-group col-md-4">
                            <label for="group">Grupo</label>
                            <input v-model="editData.group" type="text" class="form-control" id="group">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="cost">Costo</label>
                            <currency-input v-model="editData.cost" type="text" class="form-control" id="cost" />
                        </div>
                         <div class="form-group col-md-4">
                            <label for="value">Valor</label>
                            <currency-input v-model="editData.value" type="text" class="form-control" id="value" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="minimum_value">Valor mínimo</label>
                            <currency-input v-model="editData.minimum_value" type="text" class="form-control" id="minimum_value" />
                        </div>
                    </div>

                    <button class="btn btn-secondary" v-on:click="toReturn()">Regresar</button>
                    <button type="submit" class="btn btn-success">Actualizar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

    // Services
    import * as servicesService from '../../services/services_service';
    import * as supplierService from '../../services/supplier_service';

    //Componentes
    import ErrorValidation from '../ErrorValidation/ErrorValidation';

    export default {

        name: 'EditService',

        data() {
            return {
                validationErrors: '',
                serviceId:  this.$route.params.id,
                suppliers: [],
                editData: {},
            }
        },

        components: {
            ErrorValidation,
        },

        mounted() {
            this.getSuppliers();
            this.getServiceId();
        },

        methods: {

            getSuppliers: async function () {
                try {
                    const response = await supplierService.getSuppliers();
                    this.suppliers = response.data.data;
                } catch (error) {
                    console.log(error.response);
                }
            },

            getServiceId: async function() {
                 try {
                    const response = await servicesService.getServiceId(this.serviceId);

                    if (response.status == 200) {
                       this.editData = response.data.data;
                    }

                } catch (error) {
                   console.log(error.response);
                }
            },

            updateService: async function() {
                let formData = new FormData();

                formData.append('supplier_id', this.editData.supplier_id);
                formData.append('bill', this.editData.bill);
                formData.append('model', this.editData.model);
                formData.append('description', this.editData.description);
                formData.append('size', this.editData.size);
                formData.append('color', this.editData.color);
                formData.append('material', this.editData.material);
                formData.append('group', this.editData.group);
                formData.append('cost', this.editData.cost);
                formData.append('value', this.editData.value);
                formData.append('minimum_value', this.editData.minimum_value);
                formData.append("_method", "put");

                try {
                    const response = await servicesService.updateService(this.serviceId, formData);

                    if(response.status == 200) {
                        this. makeToast('Actualizado', 'Registro actualizado', 'info'),
                        setTimeout( () => {
                            this.toReturn();
                        }, 3000)
                    }

                } catch (error) {
                    if (error.response.status == 422){
                        this.validationErrors = error.response.data.errorMessages[0];
                    }
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
