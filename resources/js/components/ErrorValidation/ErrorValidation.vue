<template>
    <div v-if="validationErrors">
        <ul class="alert alert-warning">
            <li v-for="(value, key, index) in validationErrors" :key="index">{{ value }}</li>
        </ul>
    </div>
</template>

<script>
    export default {

        name: 'ErrorValidation',

        props: ['errors'],

        data() {
            return {

            }
        },

        computed: {
            validationErrors() {
                let errors = Object.values(this.errors);
                errors = errors.flat();
                return errors;
            }
        }
    }

</script>
