<template>
    <div>
        <b-modal id="editInventoryEntry" ref="editInventoryEntry" hide-footer title="Actualizar Entrada de Inventario" scrollable>
            <div class="d-block">
                <ErrorValidation :errors="validationErrors" v-if="validationErrors"></ErrorValidation>
                <form v-on:submit.prevent="editInventoryEntry">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="editBill">Factura de compra</label>
                            <input type="text" v-model.trim="$v.inventoryEntryData.bill.$model" class="form-control" id="editBill"
                            @blur="$v.inventoryEntryData.bill.$touch()"
                            :class="{'is-invalid' : validationStatus($v.inventoryEntryData.bill)}">
                            <span class="errors" v-if="$v.inventoryEntryData.bill.$error">{{message}}</span>
                        </div>
                        <div class="form-group col-md-6">
                            <label>Tipo Inventario</label>
                            <select v-model.trim="$v.inventoryEntryData.inventory_type_id.$model" id="inventory_type_id" class="form-control"
                                    :class="{'is-invalid' : validationStatus($v.inventoryEntryData.inventory_type_id)}"
                                    @change="getInventoriesByType(inventoryEntryData.inventory_type_id)"
                                    @blur="$v.inventoryEntryData.inventory_type_id.$touch()">
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
                                <option v-for="(inventory, index) in inventories" :key="index" v-bind:value="inventory.id">{{inventory.description}}</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="entries">Entradas</label>
                            <input type="text" v-model.trim="$v.inventoryEntryData.entries.$model" class="form-control"
                                @change="finalUnits"
                                @blur="$v.inventoryEntryData.entries.$touch()"
                                :class="{'is-invalid' : validationStatus($v.inventoryEntryData.entries)}" id="entries">
                             <span class="errors" v-for="error in entriesErrors" :key="error">{{error}}</span>
                        </div>
                    </div>
                    <div class="form-row">
                         <div class="form-group col-md-6">
                            <label for="cost">Costo</label>
                            <currency-input type="text" v-model.trim="$v.inventoryEntryData.cost.$model" class="form-control"
                                @blur="$v.inventoryEntryData.cost.$touch()"
                                :class="{'is-invalid' : validationStatus($v.inventoryEntryData.cost)}" id="cost" />
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

    //Validación de formularios
    import { required, numeric } from "vuelidate/lib/validators";

    //Servicios
    import * as inventaryTypeService from '../../services/inventaryType_service';
    import * as inventaryService from '../../services/inventary_service';
    import * as inventoryEntryService from '../../services/inventory_entry_service';

    //Componentes
    import ErrorValidation from '../ErrorValidation/ErrorValidation';

    export default {

        props: { inventoryEntryData: Object },

        data() {
            return {
                id_inventory: this.inventoryEntryData.inventory_id,
                validationErrors: '',
                final_units: '',
                message: 'Dato requerido',
                inventaryTypes: [],
                inventories: [],
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

        mounted() {
            this.getInventoryTypes();
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
                this.inventoryEntryData.entries = '';

                try {
                    const response = await inventaryService.getInventaryId(id);
                    this.inventoryEntryData.cost = response.data.data.cost;
                    this.final_units = response.data.data.units;
                } catch (error) {
                    console.log(error.response);
                }
            },

            finalUnits() {
                let op = this.final_units + parseInt(this.inventoryEntryData.entries);
                this.final_units = parseInt(op);
            },

            hideInventoryEntryModal() {
                this.$v.$reset();
                this.$emit("loadInventoryEntries");
                this.$refs.editInventoryEntry.hide();
            },

            clearData() {
                this.validationErrors = '';
                this.inventories = '';
                this.inventoryEntryData.cost = 0;
                this.inventoryEntryData.entries = '';
                this.final_units = '';
            },

        },


    }

</script>
