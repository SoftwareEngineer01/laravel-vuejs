<template>
    <div>
        <b-modal id="edit-supplier" ref="editSupplierModal" hide-footer title="Actualizar Proveedor" scrollable>
            <div class="d-block">
                <form v-on:submit.prevent="updateSupplier">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="editBusiness_name">Razón social</label>
                            <input type="text" v-model.trim="$v.editsupplierData.business_name.$model"
                                @blur="$v.editsupplierData.business_name.$touch()"
                                :class="{'is-invalid' : validationStatus($v.editsupplierData.business_name)}"
                                class="form-control" id="editBusiness_name">
                            <span class="errors" v-if="$v.editsupplierData.business_name.$error">{{message}}</span>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="editDirection">Dirección</label>
                            <input type="text" v-model.trim="$v.editsupplierData.direction.$model"
                                @blur="$v.editsupplierData.direction.$touch()"
                                :class="{'is-invalid' : validationStatus($v.editsupplierData.direction)}"
                                class="form-control" id="editDirection">
                            <span class="errors" v-if="$v.editsupplierData.direction.$error">{{message}}</span>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="editTelephone">Teléfono</label>
                            <input type="text" v-model.trim="$v.editsupplierData.telephone.$model"
                                @blur="$v.editsupplierData.telephone.$touch()"
                                :class="{'is-invalid' : validationStatus($v.editsupplierData.telephone)}"
                                class="form-control" id="editTelephone">
                            <span class="errors" v-if="$v.editsupplierData.telephone.$error">{{message}}</span>
                            <span class="errors" v-if="!$v.editsupplierData.telephone.numeric">Solo números</span>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="editNit">Nit</label>
                            <input type="text" v-model.trim="$v.editsupplierData.nit.$model"
                                @blur="$v.editsupplierData.nit.$touch()"
                                :class="{'is-invalid' : validationStatus($v.editsupplierData.nit)}"
                                class="form-control" id="editNit">
                            <span class="errors" v-if="$v.editsupplierData.nit.$error">{{message}}</span>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="editEmail">Email</label>
                            <input type="text" v-model.trim="$v.editsupplierData.email.$model"
                                @blur="$v.editsupplierData.email.$touch()"
                                :class="{'is-invalid' : validationStatus($v.editsupplierData.email)}"
                                class="form-control" id="editEmail">
                            <span class="errors" v-if="$v.editsupplierData.email.$error">{{message}}</span>
                            <span class="errors" v-if="!$v.editsupplierData.email.email">Formato incorrecto</span>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="editAccount">Cuenta</label>
                            <input type="text" v-model.trim="$v.editsupplierData.account.$model"
                                @blur="$v.editsupplierData.account.$touch()"
                                :class="{'is-invalid' : validationStatus($v.editsupplierData.account)}"
                                class="form-control" id="editAccount">
                            <span class="errors" v-if="$v.editsupplierData.account.$error">{{message}}</span>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label>Sucursal</label>
                            <b-form-select v-model="editsupplierData.branch_office" :options="branch_office"
                                class="mb-3">
                                <template #first>
                                    <b-form-select-option :value="null" disabled>-- Seleccione una sucursal --
                                    </b-form-select-option>
                                </template>
                            </b-form-select>
                        </div>
                        <div class="form-group col-md-6">
                            <label>Tipo Proveedor</label>
                            <b-form-select v-model="editsupplierData.supplier_type" :options="supplier_type"
                                class="mb-3">
                                <template #first>
                                    <b-form-select-option :value="null" disabled>-- Seleccione tipo proveedor --
                                    </b-form-select-option>
                                </template>
                            </b-form-select>
                        </div>
                    </div>

                    <hr>

                    <div class="text-right">
                        <button type="button" class="btn btn-danger"
                            v-on:click="hideEditSupplierModal">Cancelar</button>
                        <button :disabled="$v.editsupplierData.$invalid" type="submit" class="btn btn-primary"><span class="fa fa-check"></span>
                            Actualizar</button>
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

        props: {editsupplierData: Object },

        data() {
            return {
                message: 'Dato requerido',
                branch_office: ['Sucursal1', 'Sucursal2', 'Sucursal3'],
                supplier_type: ['Proveedor1', 'Proveedor2', 'Proveedor3'],
                data: {},
            }
        },

        validations: {
            editsupplierData: {
                business_name: { required },
                direction: { required },
                telephone: { required, numeric},
                nit: { required },
                email: { required, email },
                account: { required },
                branch_office: { required },
                supplier_type: { required }
            }
        },

        methods: {

            validationStatus(validation) {
                return typeof validation != "undefined" ? validation.$error : false;
            },

            hideEditSupplierModal() {
                this.$v.$reset();
                this.$emit("loadSuppliers");
                this.$refs.editSupplierModal.hide();
            },

            showEditSupplierModal() {
                this.$refs.editSupplierModal.show();
            },

            updateSupplier: async function () {
                this.data = this.editsupplierData;

                let formData = new FormData();

                formData.append('business_name', this.data.business_name);
                formData.append('direction', this.data.direction);
                formData.append('telephone', this.data.telephone);
                formData.append('nit', this.data.nit);
                formData.append('email', this.data.email);
                formData.append('account', this.data.account);
                formData.append('branch_office', this.data.branch_office);
                formData.append('supplier_type', this.data.supplier_type);
                formData.append("_method", "put");

                try {
                    const response = await supplierService.updateSupplier(this.data.id,
                        formData);
                    if (response.status == 200) {
                        this.hideEditSupplierModal();
                        this.$emit("loadSuppliers");
                        setTimeout(() => {
                            this.makeToast('Actualizado', 'Registro actualizado', 'info');
                        }, 2000);
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
