<template>
    <div class="v-main-wrapper">
        <keep-alive>
            <router-view />
        </keep-alive>
    </div>
</template>

<script>
import vCatalog from "@/components/catalog/v-catalog.vue";
import vCart from "@/components/cart/v-cart.vue";

import { mapGetters } from "vuex";

export default {
    name: "v-main-wrapper",
    components: {
        vCatalog,
        vCart,
    },
    props: {},
    data() {
        return {};
    },
    computed: {
        ...mapGetters(["CART"]),
    },
    methods: {},
    watch: {},
    mounted() {},
};
</script>

<style scoped>
.v-main-wrapper {
    max-width: 900px;
    margin: 0 auto;
}
</style>
