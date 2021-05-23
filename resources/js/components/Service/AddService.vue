<template>
    <div class="container my-3">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-auto mr-auto">
                        <h2 class="text-secondary">Agregar Servicio</h2>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <!-- Componente para mostrar errores -->
                <ErrorValidation :errors="validationErrors" v-if="validationErrors"></ErrorValidation>

                <form v-on:submit.prevent="addService">
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="code">Código</label>
                            <input v-model.trim="$v.serviceData.code.$model" type="code"
                                 :class="{'is-invalid' : validationStatus($v.serviceData.code)}"
                                 @blur="$v.serviceData.code.$touch()"
                                 class="form-control" id="code">
                            <span class="errors" v-for="error in codeErrors" :key="error">{{error}}</span>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="supplier">Proveedor</label>
                            <select v-model.trim="$v.serviceData.supplier_id.$model" id="supplier" class="form-control"
                                    :class="{'is-invalid' : validationStatus($v.serviceData.supplier_id)}"
                                    @change="$v.serviceData.supplier_id.$touch()"
                                    @blur="$v.serviceData.supplier_id.$touch()">
                                <option value="" selected disabled>Seleccione un registro...</option>
                                <option v-for="(supplier, index) in suppliers" :key="index" v-bind:value="supplier.id">{{supplier.business_name}}</option>
                            </select>
                            <span class="errors" v-for="error in supplierErrors" :key="error">{{error}}</span>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="bill">Factura</label>
                            <input v-model.trim="$v.serviceData.bill.$model" type="text" class="form-control" id="bill"
                                   @blur="$v.serviceData.bill.$touch()"
                                   :class="{'is-invalid' : validationStatus($v.serviceData.bill)}">
                            <span class="errors" v-if="$v.serviceData.bill.$error">{{message}}</span>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="model">Modelo</label>
                            <input v-model.trim="$v.serviceData.model.$model" type="text" class="form-control" id="model"
                                   @blur="$v.serviceData.model.$touch()"
                                   :class="{'is-invalid' : validationStatus($v.serviceData.model)}">
                            <span class="errors" v-if="$v.serviceData.model.$error">{{message}}</span>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="description">Descripción</label>
                            <input v-model.trim="$v.serviceData.description.$model" type="text" class="form-control" id="description"
                                   @blur="$v.serviceData.description.$touch()"
                                   :class="{'is-invalid' : validationStatus($v.serviceData.description)}">
                            <span class="errors" v-if="$v.serviceData.description.$error">{{message}}</span>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="size">Talla</label>
                            <input v-model.trim="$v.serviceData.size.$model" type="text" class="form-control" id="size"
                                   @blur="$v.serviceData.size.$touch()"
                                   :class="{'is-invalid' : validationStatus($v.serviceData.size)}">
                            <span class="errors" v-if="$v.serviceData.size.$error">{{message}}</span>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="color">Color</label>
                            <input v-model.trim="$v.serviceData.color.$model" type="text" class="form-control" id="color"
                                   @blur="$v.serviceData.color.$touch()"
                                   :class="{'is-invalid' : validationStatus($v.serviceData.color)}">
                            <span class="errors" v-if="$v.serviceData.color.$error">{{message}}</span>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="material">Material</label>
                            <input v-model.trim="$v.serviceData.material.$model" type="text" class="form-control" id="material"
                                   @blur="$v.serviceData.material.$touch()"
                                   :class="{'is-invalid' : validationStatus($v.serviceData.material)}">
                            <span class="errors" v-if="$v.serviceData.material.$error">{{message}}</span>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="group">Grupo</label>
                            <input v-model.trim="$v.serviceData.group.$model" type="text" class="form-control" id="group"
                                   @blur="$v.serviceData.group.$touch()"
                                   :class="{'is-invalid' : validationStatus($v.serviceData.group)}">
                            <span class="errors" v-if="$v.serviceData.group.$error">{{message}}</span>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="cost">Costo</label>
                            <currency-input v-model.trim="$v.serviceData.cost.$model" type="text" class="form-control" id="cost"
                                    @blur="$v.serviceData.cost.$touch()"
                                    :class="{'is-invalid' : validationStatus($v.serviceData.cost)}" />
                            <span class="errors" v-for="error in costErrors" :key="error">{{error}}</span>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="value">Valor</label>
                            <currency-input @change="minimumValue" v-model.trim="$v.serviceData.value.$model" type="text" class="form-control" id="value"
                                    @blur="$v.serviceData.value.$touch()"
                                    :class="{'is-invalid' : validationStatus($v.serviceData.value)}" />
                            <span class="errors" v-for="error in valueErrors" :key="error">{{error}}</span>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="minimum_value">Valor mínimo</label>
                            <currency-input v-model.trim="$v.serviceData.minimum_value.$model" type="text" class="form-control" id="minimum_value"
                                    @blur="$v.serviceData.minimum_value.$touch()"
                                    :class="{'is-invalid' : validationStatus($v.serviceData.minimum_value)}" />
                            <span class="errors" v-for="error in minimumValueErrors" :key="error">{{error}}</span>
                        </div>
                    </div>

                    <button class="btn btn-secondary" v-on:click="toReturn()">Regresar</button>
                    <button :disabled="$v.serviceData.$invalid" type="submit" class="btn btn-success">Agregar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

    // Services
    import * as servicesService from '../../services/services_service';
    import * as supplierService from '../../services/supplier_service';

    //Validación formulario
    import { required, numeric } from 'vuelidate/lib/validators';

    //Componentes
    import ErrorValidation from '../ErrorValidation/ErrorValidation';

    export default {

        name: 'AddService',

        data() {

            return {
                validationErrors: '',
                message: 'Dato requerido',
                suppliers: [],
                serviceData: {
                    code: '',
                    supplier_id: '',
                    model: '',
                    description: '',
                    bill: '',
                    material: '',
                    color: '',
                    size: '',
                    group: '',
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
                if (!this.$v.serviceData.code.$dirty) return errors
                !this.$v.serviceData.code.required && errors.push(this.message)
                return errors
            },
            supplierErrors () {
                const errors = []
                if (!this.$v.serviceData.supplier_id.$dirty) return errors
                !this.$v.serviceData.supplier_id.required && errors.push(this.message)
                return errors
            },
            costErrors () {
                const errors = []
                if (!this.$v.serviceData.cost.$dirty) return errors
                !this.$v.serviceData.cost.required && errors.push(this.message)
                !this.$v.serviceData.cost.numeric && errors.push('Solo números')
                return errors
            },
            valueErrors () {
                const errors = []
                if (!this.$v.serviceData.value.$dirty) return errors
                !this.$v.serviceData.value.required && errors.push(this.message)
                !this.$v.serviceData.value.numeric && errors.push('Solo números')
                return errors
            },
            minimumValueErrors () {
                const errors = []
                if (!this.$v.serviceData.minimum_value.$dirty) return errors
                !this.$v.serviceData.minimum_value.required && errors.push(this.message)
                !this.$v.serviceData.minimum_value.numeric && errors.push('Solo números')
                return errors
            }
        },

        validations: {
            serviceData: {
                code: { required },
                supplier_id: { required },
                bill: { required },
                model: { required },
                description: {required },
                size: { required },
                color: { required },
                material: { required },
                group: { required },
                cost: { required, numeric },
                value: { required, numeric },
                minimum_value: { required, numeric }
            }
        },

        mounted() {
            this.getSuppliers();
        },

        methods: {

            validationStatus(validation) {
                return typeof validation != "undefined" ? validation.$error : false;
            },

            minimumValue() {
                this.serviceData.minimum_value = this.serviceData.value;
            },

            getSuppliers: async function () {
                try {
                    const response = await supplierService.getSuppliers();
                    this.suppliers = response.data.data;
                } catch (error) {
                    console.log(error.response);
                }
            },

            addService: async function () {

                this.$v.$touch();

                if (this.$v.$pendding || this.$v.$error) {
                    return;
                }

                let formData = new FormData();

                formData.append('code', this.serviceData.code);
                formData.append('supplier_id', this.serviceData.supplier_id);
                formData.append('bill', this.serviceData.bill);
                formData.append('model', this.serviceData.model);
                formData.append('description', this.serviceData.description);
                formData.append('size', this.serviceData.size);
                formData.append('color', this.serviceData.color);
                formData.append('material', this.serviceData.material);
                formData.append('group', this.serviceData.group);
                formData.append('cost', this.serviceData.cost);
                formData.append('value', this.serviceData.value);
                formData.append('minimum_value', this.serviceData.minimum_value);

                try {
                    const response = await servicesService.createService(formData);

                    if(response.status == 200) {
                        this. makeToast('Realizado', 'Servicio registrado', 'success'),
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

<style>
    .errors {
        color: red;
        font-size: 14px;
    }
</style>

