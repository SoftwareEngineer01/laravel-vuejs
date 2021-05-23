<template>
    <div>
        <!-- Modal para Agregar Entrada Inventario -->
        <b-modal id="modal-1" ref="inventoryEntryModal" hide-footer title="Agregar Entrada Inventario" scrollable>
            <div class="d-block">
                <ErrorValidation :errors="validationErrors" v-if="validationErrors"></ErrorValidation>
                <form v-on:submit.prevent="addInventoryEntry">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="bill">Factura de compra</label>
                            <input type="text" v-model.trim="$v.inventoryEntryData.bill.$model" class="form-control"
                                 @blur="$v.inventoryEntryData.bill.$touch()"
                                 :class="{'is-invalid' : validationStatus($v.inventoryEntryData.bill)}"
                                 id="bill" placeholder="Escriba la factura de compra">
                            <span class="errors" v-if="$v.inventoryEntryData.bill.$error">{{message}}</span>
                        </div>
                         <div class="form-group col-md-6">
                            <label>Tipo Inventario</label>
                            <select v-model.trim="$v.inventoryEntryData.inventory_type_id.$model" id="inventory_type_id" class="form-control"
                                    :class="{'is-invalid' : validationStatus($v.inventoryEntryData.inventory_type_id)}"
                                    @change="getInventoriesByType(inventoryEntryData.inventory_type_id)"
                                    @blur="$v.inventoryEntryData.inventory_type_id.$touch()">
                                <option value="" selected disabled>Seleccione un registro...</option>
                                <option v-for="(inventoryType, index) in inventaryTypes" :key="index" v-bind:value="inventoryType.id">{{inventoryType.name}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label>Artículo</label>
                           <select v-model.trim="$v.inventoryEntryData.inventory_id.$model" id="inventory_id" class="form-control"
                                    :class="{'is-invalid' : validationStatus($v.inventoryEntryData.inventory_id)}"
                                    @change="getInventoryDetail(inventoryEntryData.inventory_id)"
                                    @blur="$v.inventoryEntryData.inventory_id.$touch()">
                                <option value="" selected disabled>Seleccione un registro...</option>
                                <option v-for="(inventory, index) in inventories" :key="index" v-bind:value="inventory.id">{{inventory.description}}</option>
                            </select>
                        </div>
                         <div class="form-group col-md-6">
                            <label for="entries">Entradas</label>
                            <input type="text" v-model.trim="$v.inventoryEntryData.entries.$model" class="form-control"
                                @change="finalUnits"
                                @blur="$v.inventoryEntryData.entries.$touch()"
                                :class="{'is-invalid' : validationStatus($v.inventoryEntryData.entries)}"
                                id="entries" placeholder="Escriba las entradas">
                             <span class="errors" v-for="error in entriesErrors" :key="error">{{error}}</span>
                        </div>
                    </div>
                    <div class="form-row">
                         <div class="form-group col-md-6">
                            <label for="cost">Costo</label>
                            <currency-input type="text" v-model.trim="$v.inventoryEntryData.cost.$model" class="form-control"
                                @blur="$v.inventoryEntryData.cost.$touch()"
                                :class="{'is-invalid' : validationStatus($v.inventoryEntryData.cost)}"
                                id="cost" />
                             <span class="errors" v-if="$v.inventoryEntryData.cost.$error">{{message}}</span>
                        </div>
                         <div class="form-group col-md-6">
                            <label for="entries">Saldo Final</label>
                            <input type="text" v-model="final_units" class="form-control" id="entries" disabled>
                        </div>
                    </div>

                    <hr>

                    <div class="text-right">
                        <button type="button" class="btn btn-danger" v-on:click="hideInventoryEntryModal">Cancelar</button>
                        <button :disabled="$v.inventoryEntryData.$invalid" type="submit" class="btn btn-primary"><span class="fa fa-check"></span> Guardar</button>
                    </div>
                </form>
            </div>
        </b-modal>
    </div>
</template>

<script>

    // Service
    import * as inventaryTypeService from '../../services/inventaryType_service';
    import * as inventaryService from '../../services/inventary_service';
    import * as inventoryEntryService from '../../services/inventory_entry_service';

    //Validación formulario
    import { required, numeric } from 'vuelidate/lib/validators';

    //Componentes
    import ErrorValidation from '../ErrorValidation/ErrorValidation';

    export default {

        name: 'AddInventoryEntry',

        data() {

            return {
                validationErrors: '',
                final_units: '',
                units: '',
                message: 'Dato requerido',
                inventaryTypes: [],
                inventories: [],
                inventoryEntryData: {
                    inventory_type_id: '',
                    bill: '',
                    inventory_id: '',
                    entries: '',
                    cost: 0
                },
            }
        },

        components: {
            ErrorValidation,
        },

        computed: {
            entriesErrors () {
                const errors = []
                if (!this.$v.inventoryEntryData.entries.$dirty) return errors
                !this.$v.inventoryEntryData.entries.required && errors.push(this.message)
                !this.$v.inventoryEntryData.entries.numeric && errors.push('Solo números')
                return errors
            }
        },

        validations: {
            inventoryEntryData: {
                inventory_type_id: { required },
                bill: { required },
                inventory_id: { required },
                entries: { required, numeric },
                cost: {required }
            }
        },

        mounted() {
            this.getInventoryTypes();
        },

        methods: {

            validationStatus(validation) {
                return typeof validation != "undefined" ? validation.$error : false;
            },

            getInventoryTypes: async function () {
                try {
                    const response = await inventaryTypeService.getInventaryTypes();
                    this.inventaryTypes = response.data.data;
                } catch (error) {
                    console.log(error.response);
                }
            },

            getInventoriesByType: async function (id) {

                this.clearData();

                try {
                    const response = await inventaryService.getInventoriesByType(id);
                    if(response.status == 200){
                        this.inventories = response.data.data;
                    }
                } catch (error) {
                   if (error.response.status == 422){
                        this.validationErrors = error.response.data.errorMessages;
                   }
                }
            },

            getInventoryDetail: async function (id) {
              this.inventoryEntryData.entries = 0;

                try {
                    const response = await inventaryService.getInventaryId(id);
                    this.inventoryEntryData.cost = response.data.data.cost;
                    this.units = response.data.data.units;
                    this.final_units = response.data.data.units;
                } catch (error) {
                    console.log(error.response);
                }
            },

            finalUnits() {
                if(this.inventoryEntryData.entries == '') {
                  this.final_units = this.units;
                }else {
                   let op = this.units + parseInt(this.inventoryEntryData.entries);
                   this.final_units = parseInt(op);
                }
            },

            addInventoryEntry: async function () {

                this.$v.$touch();

                if (this.$v.$pendding || this.$v.$error) {
                    return;
                }

                let formData = new FormData();

                formData.append('inventory_type_id', this.inventoryEntryData.inventory_type_id);
                formData.append('bill', this.inventoryEntryData.bill);
                formData.append('inventory_id', this.inventoryEntryData.inventory_id);
                formData.append('entries', this.inventoryEntryData.entries);
                formData.append('cost', this.inventoryEntryData.cost);

                try {
                    const response = await inventoryEntryService.createInventoryEntry(formData);

                    if (response.status == 200) {
                        this.hideInventoryEntryModal();
                        this.$emit("loadInventoryEntries");
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

            hideInventoryEntryModal() {
                this.$v.$reset();
                this.$refs.inventoryEntryModal.hide();
                this.cleanForm();
                this.clearData();
            },

            cleanForm() {
                this.final_units = '',
                this.inventoryEntryData = {
                    inventory_type_id: '',
                    bill: '',
                    inventory_id: '',
                    entries: '',
                    cost: 0
                };
            },

            clearData() {
                this.validationErrors = '';
                this.inventories = '';
                this.inventoryEntryData.cost = 0;
                this.inventoryEntryData.entries = 0;
                this.final_units = '';
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
