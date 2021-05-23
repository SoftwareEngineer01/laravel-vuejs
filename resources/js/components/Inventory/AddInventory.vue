<template>
    <div class="container my-3">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-auto mr-auto">
                        <h2 class="text-secondary">Agregar Inventario</h2>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <!-- Componente para mostrar errores -->
                <ErrorValidation :errors="validationErrors" v-if="validationErrors"></ErrorValidation>

                <form v-on:submit.prevent="addInventary">
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="code">Código</label>
                            <input v-model.trim="$v.inventoryData.code.$model" type="code"
                                 :class="{'is-invalid' : validationStatus($v.inventoryData.code)}"
                                 @blur="$v.inventoryData.code.$touch()"
                                 class="form-control" id="code">
                            <span class="errors" v-for="error in codeErrors" :key="error">{{error}}</span>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inventory_type">Tipo Inventario</label>
                            <select v-model.trim="$v.inventoryData.inventory_type_id.$model" id="inventory_type" class="form-control"
                                    :class="{'is-invalid' : validationStatus($v.inventoryData.inventory_type_id)}"
                                    @change="$v.inventoryData.inventory_type_id.$touch()"
                                    @blur="$v.inventoryData.inventory_type_id.$touch()">
                                <option value="" selected disabled>Seleccione un registro...</option>
                                <option v-for="(inventaryType, index) in inventaryTypes" :key="index" v-bind:value="inventaryType.id">{{inventaryType.name}}</option>
                            </select>
                            <span class="errors" v-for="error in inventoryTypeErrors" :key="error">{{error}}</span>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="supplier">Proveedor</label>
                            <select v-model.trim="$v.inventoryData.supplier_id.$model" id="supplier" class="form-control"
                                    :class="{'is-invalid' : validationStatus($v.inventoryData.supplier_id)}"
                                    @change="$v.inventoryData.supplier_id.$touch()"
                                    @blur="$v.inventoryData.supplier_id.$touch()">
                                <option value="" selected disabled>Seleccione un registro...</option>
                                <option v-for="(supplier, index) in suppliers" :key="index" v-bind:value="supplier.id">{{supplier.business_name}}</option>
                            </select>
                            <span class="errors" v-for="error in supplierErrors" :key="error">{{error}}</span>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="model">Modelo</label>
                            <input v-model.trim="$v.inventoryData.model.$model" type="text" class="form-control" id="model"
                                   @blur="$v.inventoryData.model.$touch()"
                                   :class="{'is-invalid' : validationStatus($v.inventoryData.model)}">
                            <span class="errors" v-if="$v.inventoryData.model.$error">{{message}}</span>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="description">Descripción</label>
                            <input v-model.trim="$v.inventoryData.description.$model" type="text" class="form-control" id="description"
                                   @blur="$v.inventoryData.description.$touch()"
                                   :class="{'is-invalid' : validationStatus($v.inventoryData.description)}">
                            <span class="errors" v-if="$v.inventoryData.description.$error">{{message}}</span>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="bill">Factura</label>
                            <input v-model.trim="$v.inventoryData.bill.$model" type="text" class="form-control" id="bill"
                                   @blur="$v.inventoryData.bill.$touch()"
                                   :class="{'is-invalid' : validationStatus($v.inventoryData.bill)}">
                            <span class="errors" v-if="$v.inventoryData.bill.$error">{{message}}</span>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="material">Material</label>
                            <input v-model.trim="$v.inventoryData.material.$model" type="text" class="form-control" id="material"
                                   @blur="$v.inventoryData.material.$touch()"
                                   :class="{'is-invalid' : validationStatus($v.inventoryData.material)}">
                            <span class="errors" v-if="$v.inventoryData.material.$error">{{message}}</span>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="color">Color</label>
                            <input v-model.trim="$v.inventoryData.color.$model" type="text" class="form-control" id="color"
                                   @blur="$v.inventoryData.color.$touch()"
                                   :class="{'is-invalid' : validationStatus($v.inventoryData.color)}">
                            <span class="errors" v-if="$v.inventoryData.color.$error">{{message}}</span>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="size">Talla</label>
                            <input v-model.trim="$v.inventoryData.size.$model" type="text" class="form-control" id="size"
                                   @blur="$v.inventoryData.size.$touch()"
                                   :class="{'is-invalid' : validationStatus($v.inventoryData.size)}">
                            <span class="errors" v-if="$v.inventoryData.size.$error">{{message}}</span>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="group">Grupo</label>
                            <input v-model.trim="$v.inventoryData.group.$model" type="text" class="form-control" id="group"
                                   @blur="$v.inventoryData.group.$touch()"
                                   :class="{'is-invalid' : validationStatus($v.inventoryData.group)}">
                            <span class="errors" v-if="$v.inventoryData.group.$error">{{message}}</span>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="units">Unidades</label>
                            <input v-model.trim="$v.inventoryData.units.$model" type="text" class="form-control" id="units"
                                   @blur="$v.inventoryData.units.$touch()"
                                   :class="{'is-invalid' : validationStatus($v.inventoryData.units)}">
                            <span class="errors" v-for="error in unitsErrors" :key="error">{{error}}</span>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="cost">Costo</label>
                            <currency-input v-model.trim="$v.inventoryData.cost.$model" type="text" class="form-control" id="cost"
                                    @blur="$v.inventoryData.cost.$touch()"
                                    :class="{'is-invalid' : validationStatus($v.inventoryData.cost)}" />
                            <span class="errors" v-for="error in costErrors" :key="error">{{error}}</span>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="value">Valor</label>
                            <currency-input @change="minimumValue" v-model.trim="$v.inventoryData.value.$model" type="text" class="form-control" id="value"
                                    @blur="$v.inventoryData.value.$touch()"
                                    :class="{'is-invalid' : validationStatus($v.inventoryData.value)}" />
                            <span class="errors" v-for="error in valueErrors" :key="error">{{error}}</span>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="minimum_value">Valor mínimo</label>
                            <currency-input v-model.trim="$v.inventoryData.minimum_value.$model" type="text" class="form-control" id="minimum_value"
                                    @blur="$v.inventoryData.minimum_value.$touch()"
                                    :class="{'is-invalid' : validationStatus($v.inventoryData.minimum_value)}" />
                            <span class="errors" v-for="error in minimumValueErrors" :key="error">{{error}}</span>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="iva">Iva</label>
                            <select @change="calcIva" v-model="select_iva" id="iva" class="form-control">
                                <option v-for="(iv, index) in iva" :key="index" >{{iv}}</option>
                            </select>
                        </div>
                    </div>

                    <button class="btn btn-secondary" v-on:click="toReturn()">Regresar</button>
                    <button :disabled="$v.inventoryData.$invalid" type="submit" class="btn btn-success">Agregar</button>
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

    //Validación formulario
    import { required, numeric } from 'vuelidate/lib/validators';

    //Componentes
    import ErrorValidation from '../ErrorValidation/ErrorValidation';

    export default {

        name: 'AddInventory',

        data() {

            return {
                validationErrors: '',
                message: 'Dato requerido',
                iva: [0, 5, 10, 15, 19],
                select_iva: 0,
                inventaryTypes: [],
                suppliers: [],
                inventoryData: {
                    code: '',
                    inventory_type_id: '',
                    supplier_id: '',
                    model: '',
                    description: '',
                    bill: '',
                    material: '',
                    color: '',
                    size: '',
                    group: '',
                    units: '',
                    cost: 0,
                    value: 0,
                    minimum_value: 0
                },
            }
        },

        components: {
            ErrorValidation,
        },

        computed: {
            codeErrors () {
                const errors = []
                if (!this.$v.inventoryData.code.$dirty) return errors
                !this.$v.inventoryData.code.required && errors.push(this.message)
                return errors
            },
            inventoryTypeErrors () {
                const errors = []
                if (!this.$v.inventoryData.inventory_type_id.$dirty) return errors
                !this.$v.inventoryData.inventory_type_id.required && errors.push(this.message)
                return errors
            },
            supplierErrors () {
                const errors = []
                if (!this.$v.inventoryData.supplier_id.$dirty) return errors
                !this.$v.inventoryData.supplier_id.required && errors.push(this.message)
                return errors
            },
            unitsErrors () {
                const errors = []
                if (!this.$v.inventoryData.units.$dirty) return errors
                !this.$v.inventoryData.units.required && errors.push(this.message)
                !this.$v.inventoryData.units.numeric && errors.push('Solo números')
                return errors
            },
            costErrors () {
                const errors = []
                if (!this.$v.inventoryData.cost.$dirty) return errors
                !this.$v.inventoryData.cost.required && errors.push(this.message)
                !this.$v.inventoryData.cost.numeric && errors.push('Solo números')
                return errors
            },
            valueErrors () {
                const errors = []
                if (!this.$v.inventoryData.value.$dirty) return errors
                !this.$v.inventoryData.value.required && errors.push(this.message)
                !this.$v.inventoryData.value.numeric && errors.push('Solo números')
                return errors
            },
            minimumValueErrors () {
                const errors = []
                if (!this.$v.inventoryData.minimum_value.$dirty) return errors
                !this.$v.inventoryData.minimum_value.required && errors.push(this.message)
                !this.$v.inventoryData.minimum_value.numeric && errors.push('Solo números')
                return errors
            }
        },

        validations: {
            inventoryData: {
                code: { required },
                inventory_type_id: { required },
                supplier_id: { required },
                model: { required },
                description: {required },
                bill: { required },
                material: { required },
                color: { required },
                size: { required },
                group: { required },
                units: { required, numeric },
                cost: { required, numeric },
                value: { required, numeric },
                minimum_value: { required, numeric }
            }
        },

        mounted() {
            this.getInventoryTypes();
            this.getSuppliers();
        },

        methods: {

            validationStatus(validation) {
                return typeof validation != "undefined" ? validation.$error : false;
            },

            minimumValue() {
                this.inventoryData.minimum_value = this.inventoryData.value;
                this.select_iva = 0;
            },

            calcIva() {
                let minimum_value  = parseInt(this.inventoryData.minimum_value);
                let selectIva = parseInt(this.select_iva);
                let iva = (minimum_value * selectIva) / 100;
                this.inventoryData.value = minimum_value + iva;
            },

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

            addInventary: async function () {

                this.$v.$touch();

                if (this.$v.$pendding || this.$v.$error) {
                    return;
                }

                let formData = new FormData();

                formData.append('code', this.inventoryData.code);
                formData.append('inventory_type_id', this.inventoryData.inventory_type_id);
                formData.append('supplier_id', this.inventoryData.supplier_id);
                formData.append('model', this.inventoryData.model);
                formData.append('description', this.inventoryData.description);
                formData.append('bill', this.inventoryData.bill);
                formData.append('material', this.inventoryData.material);
                formData.append('color', this.inventoryData.color);
                formData.append('size', this.inventoryData.size);
                formData.append('group', this.inventoryData.group);
                formData.append('units', this.inventoryData.units);
                formData.append('cost', this.inventoryData.cost);
                formData.append('value', this.inventoryData.value);
                formData.append('minimum_value', this.inventoryData.minimum_value);

                try {
                    const response = await inventaryService.createInventary(formData);

                    if(response.status == 200) {
                        this. makeToast('Realizado', 'Inventario registrado', 'success'),
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
    .errors {
        color: red;
        font-size: 14px;
    }
</style>

