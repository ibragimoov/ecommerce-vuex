<template>
    <div class="v-catalog">
        <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
            <div class="v-catalog__link_to_cart">Cart: {{ CART.length }}</div>
        </router-link>
        <h1>Catalog</h1>
        <div class="v-catalog__list">
            <v-catalog-item
                v-for="product in PRODUCTS"
                :key="product.article"
                :product_data="product"
                @add-to-cart="addToCart"
            />
        </div>
    </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item.vue";
import { mapActions, mapGetters } from "vuex";

export default {
    name: "v-catalog",
    components: {
        vCatalogItem,
    },
    props: {},
    data() {
        return {
            products: [
                {
                    image: "1.jpg",
                    name: "T-shirt 1",
                    price: 2100.234234234,
                    article: "T1",
                    available: true,
                    category: "Мужские",
                },
                {
                    image: "2.jpg",
                    name: "T-shirt 2",
                    price: 3150.12312412,
                    article: "T2",
                    available: true,
                    category: "Женские",
                },
                {
                    image: "3.jpg",
                    name: "T-shirt 3",
                    price: 4200.51524,
                    article: "T3",
                    available: false,
                    category: "Женские",
                },
                {
                    image: "4.jpg",
                    name: "T-shirt 4",
                    price: 5300.1245512,
                    article: "T4",
                    available: true,
                    category: "Мужские",
                },
                {
                    image: "5.jpg",
                    name: "T-shirt 5",
                    price: 6500.3522314,
                    article: "T5",
                    available: false,
                    category: "Женские",
                },
                {
                    image: "6.jpeg",
                    name: "T-shirt 6",
                    price: 8700.4124123,
                    article: "T6",
                    available: true,
                    category: "Женские",
                },
            ],
        };
    },
    computed: {
        ...mapGetters(["PRODUCTS", "CART"]),
    },
    methods: {
        ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
        addToCart(data) {
            this.ADD_TO_CART(data);
        },
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API();
    },
};
</script>

<style lang="scss">
.v-catalog {
    &__list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
    &__link_to_cart {
        position: fixed;
        top: 80px;
        right: 10px;
        padding: $padding * 2;
        border: solid 1px #aeaeae;
        background: #ffffff;
    }
}
</style>
