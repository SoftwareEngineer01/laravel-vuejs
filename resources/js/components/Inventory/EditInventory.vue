<template>
    <div class="container my-3">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-auto mr-auto">
                        <h2 class="text-secondary">Editar Inventario</h2>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="updateInventary">
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="code">Código</label>
                            <input v-model="editData.code" type="code" class="form-control" id="code" :disabled="editData.code">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inventory_type">Tipo Inventario</label>
                            <select v-model="editData.inventory_type_id" id="inventory_type" class="form-control">
                                <option v-for="(inventaryType, index) in inventaryTypes" :key="index" v-bind:value="inventaryType.id">{{inventaryType.name}}</option>
                            </select>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="supplier">Proveedor</label>
                            <select v-model="editData.supplier_id" id="supplier" class="form-control">
                                <option v-for="(supplier, index) in suppliers" :key="index" v-bind:value="supplier.id">{{supplier.business_name}}</option>
                            </select>
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
                            <label for="bill">Factura</label>
                            <input v-model="editData.bill" type="text" class="form-control" id="bill">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="material">Material</label>
                            <input v-model="editData.material" type="text" class="form-control" id="material">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="color">Color</label>
                            <input v-model="editData.color" type="text" class="form-control" id="color">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="size">Talla</label>
                            <input v-model="editData.size" type="text" class="form-control" id="size">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="group">Grupo</label>
                            <input v-model="editData.group" type="text" class="form-control" id="group">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="units">Unidades</label>
                            <input v-model="editData.units" type="text" class="form-control" id="units">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="cost">Costo</label>
                            <currency-input v-model="editData.cost" type="text" class="form-control" id="cost" />
                        </div>
                    </div>
                    <div class="form-row align-items-center">
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
    import * as inventaryService from '../../services/inventary_service';
    import * as inventaryTypeService from '../../services/inventaryType_service';
    import * as supplierService from '../../services/supplier_service';

    export default {

        name: 'EditSupplier',

        data() {
            return {
                inventaryId:  this.$route.params.id,
                inventaryTypes: [],
                suppliers: [],
                editData: {},
            }
        },

        mounted() {
            this.getInventoryTypes();
            this.getSuppliers();
            this.getInventaryId();
        },

        methods: {

            getInventoryTypes: async function () {
                try {
                    const response = await inventaryTypeService.getInventaryTypes();
                    this.inventaryTypes = response.data.data;
                } catch (error) {
                    console.log(error.response);
                }
            },

            getSuppliers: async function () {
                try {
                    const response = await supplierService.getSuppliers();
                    this.suppliers = response.data.data;
                } catch (error) {
                    console.log(error.response);
                }
            },

            getInventaryId: async function() {
                 try {
                    const response = await inventaryService.getInventaryId(this.inventaryId);

                    if (response.status == 200) {
                       this.editData = response.data.data;
                    }

                } catch (error) {
                   console.log(error.response);
                }
            },

            updateInventary: async function() {
                let formData = new FormData();

                formData.append('inventory_type_id', this.editData.inventory_type_id);
                formData.append('supplier_id', this.editData.supplier_id);
                formData.append('model', this.editData.model);
                formData.append('description', this.editData.description);
                formData.append('bill', this.editData.bill);
                formData.append('material', this.editData.material);
                formData.append('color', this.editData.color);
                formData.append('size', this.editData.size);
                formData.append('group', this.editData.group);
                formData.append('units', this.editData.units);
                formData.append('cost', this.editData.cost);
                formData.append('value', this.editData.value);
                formData.append('minimum_value', this.editData.minimum_value);
                formData.append("_method", "put");

                try {
                    const response = await inventaryService.updateInventary(this.inventaryId, formData);

                    if(response.status == 200) {
                        this. makeToast('Actualizado', 'Registro actualizado', 'info'),
                        setTimeout( () => {
                            this.toReturn();
                        }, 3000)
                    }

                } catch (error) {
                    const result = error.response;
                    const validateErrors = error.response.data.errorMessages[0];
                    console.log(result);
                    for (const property in validateErrors) {
                        console.log(`${validateErrors[property]}`);
                    }
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
