<template>
    <div>
        <!-- Modal para Agregar Proveedores -->
        <b-modal id="modal-1" ref="supplierModal" hide-footer title="Agregar Proveedor" scrollable>
            <div class="d-block">
                <form v-on:submit.prevent="addSupplier">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="name">Razón social</label>
                            <input type="text" v-model.trim="$v.supplierData.business_name.$model" class="form-control"
                                 @blur="$v.supplierData.business_name.$touch()"
                                 :class="{'is-invalid' : validationStatus($v.supplierData.business_name)}"
                                 id="business_name" placeholder="Escriba la razón social">
                            <span class="errors" v-if="$v.supplierData.business_name.$error">{{message}}</span>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="code">Dirección</label>
                            <input type="text" v-model.trim="$v.supplierData.direction.$model" class="form-control"
                                @blur="$v.supplierData.direction.$touch()"
                                :class="{'is-invalid' : validationStatus($v.supplierData.direction)}"
                                id="direction" placeholder="Escriba la dirección">
                            <span class="errors" v-if="$v.supplierData.direction.$error">{{message}}</span>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="code">Teléfono</label>
                            <input type="text" v-model.trim="$v.supplierData.telephone.$model" class="form-control"
                                @blur="$v.supplierData.telephone.$touch()"
                                :class="{'is-invalid' : validationStatus($v.supplierData.telephone)}"
                                id="telephone" placeholder="Escriba el teléfono">
                            <span class="errors" v-if="$v.supplierData.telephone.$error">{{message}}</span>
                            <span class="errors" v-if="!$v.supplierData.telephone.numeric">Solo números</span>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="code">Nit</label>
                            <input type="text" v-model.trim="$v.supplierData.nit.$model" class="form-control"
                                @blur="$v.supplierData.nit.$touch()"
                                :class="{'is-invalid' : validationStatus($v.supplierData.nit)}"
                                id="nit" placeholder="Digite el nit">
                            <span class="errors" v-if="$v.supplierData.nit.$error">{{message}}</span>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="code">Email</label>
                            <input type="text" v-model.trim="$v.supplierData.email.$model" class="form-control"
                                @blur="$v.supplierData.email.$touch()"
                                :class="{'is-invalid' : validationStatus($v.supplierData.email)}"
                                id="email" placeholder="Escriba el email">
                             <span class="errors" v-if="$v.supplierData.email.$error">{{message}}</span>
                             <span class="errors" v-if="!$v.supplierData.email.email">Formato incorrecto</span>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="code">Cuenta</label>
                            <input type="text" v-model="supplierData.account" class="form-control" id="account">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label>Sucursal</label>
                            <b-form-select v-model="supplierData.branch_office" :options="branch_office" class="mb-3">
                                <template #first>
                                    <b-form-select-option :value="null" disabled>-- Seleccione una sucursal --
                                    </b-form-select-option>
                                </template>
                            </b-form-select>
                        </div>
                        <div class="form-group col-md-6">
                            <label>Proveedor</label>
                            <b-form-select v-model="supplierData.supplier_type" :options="supplier_type" class="mb-3">
                                <template #first>
                                    <b-form-select-option :value="null" disabled>-- Seleccione una proveedor --
                                    </b-form-select-option>
                                </template>
                            </b-form-select>
                        </div>
                    </div>

                    <hr>

                    <div class="text-right">
                        <button type="button" class="btn btn-danger" v-on:click="hideSupplierModal">Cancelar</button>
                        <button :disabled="$v.supplierData.$invalid" type="submit" class="btn btn-primary"><span class="fa fa-check"></span> Guardar</button>
                    </div>
                </form>
            </div>
        </b-modal>
    </div>
</template>

<script>

    // Service
    import * as supplierService from '../../services/supplier_service';

    //Validación formulario
    import { required, numeric, email } from 'vuelidate/lib/validators';

    export default {

        name: 'AddSupplier',

        data() {

            return {
                message: 'Dato requerido',
                branch_office: ['Sucursal1', 'Sucursal2', 'Sucursal3'],
                supplier_type: ['Proveedor1', 'Proveedor2', 'Proveedor3'],
                supplierData: {
                    business_name: '',
                    direction: '',
                    telephone: '',
                    nit: '',
                    email: '',
                    account: '0',
                    branch_office: null,
                    supplier_type: null,
                },
            }
        },

        validations: {
            supplierData: {
                business_name: { required },
                direction: { required },
                telephone: { required, numeric},
                nit: { required },
                email: {required, email },
                branch_office: { required },
                supplier_type: { required }
            }
        },

        methods: {

            validationStatus(validation) {
                return typeof validation != "undefined" ? validation.$error : false;
            },

            addSupplier: async function () {

                this.$v.$touch();

                if (this.$v.$pendding || this.$v.$error) {
                    return;
                }

                let formData = new FormData();

                formData.append('business_name', this.supplierData.business_name);
                formData.append('direction', this.supplierData.direction);
                formData.append('telephone', this.supplierData.telephone);
                formData.append('nit', this.supplierData.nit);
                formData.append('email', this.supplierData.email);
                formData.append('account', this.supplierData.account);
                formData.append('branch_office', this.supplierData.branch_office);
                formData.append('supplier_type', this.supplierData.supplier_type);

                try {
                    const response = await supplierService.createSupplier(formData);

                    if (response.status == 200) {
                        this.hideSupplierModal();
                        this.$emit("loadSuppliers");
                        this.cleanForm();
                        setTimeout(() => {
                            this.makeToast('Realizado', 'Registro completado', 'success');
                        }, 2000);
                    }

                } catch (error) {
                    const result = error.response;
                    if (result) {
                        this.makeToast('Advertencia', 'Validar todos los campos', 'warning');
                    }
                }
            },

            hideSupplierModal() {
                this.$v.$reset();
                this.$refs.supplierModal.hide();
                this.cleanForm();
            },

            showSupplierModal() {
                this.$refs.supplierModal.show();
            },

            cleanForm() {
                this.supplierData = {
                    business_name: '',
                    direction: '',
                    telephone: '',
                    nit: '',
                    email: '',
                    account: '0',
                    branch_office: null,
                    supplier_type: null,
                };
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
    .errors {
        color: red;
        font-size: 14px;
    }
</style>
