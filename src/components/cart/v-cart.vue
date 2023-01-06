<template>
    <div class="v-cart">
        <router-link :to="{ name: 'catalog' }">
            <div class="v-catalog__link_to_cart">Back to Catalog</div>
        </router-link>
        <h1>Cart</h1>
        <p v-if="!cart_data.length">The are no products in cart</p>
        <v-cart-item
            v-for="(item, i) in cart_data"
            :key="item.article"
            :cart_item_data="item"
            @delete-from-cart="deleteFromCart(i)"
            @increment="increment(i)"
            @decrement="decrement(i)"
        />
        <div class="v-cart__total">
            <p class="total__name">Total:</p>
            <p>{{ cartTotalCost | toFix | formattedPrice }}₽</p>
        </div>
    </div>
</template>

<script>
import vCartItem from "./v-cart-item.vue";
import { mapActions } from "vuex";

export default {
    name: "v-cart",
    components: {
        vCartItem,
    },
    props: {
        cart_data: {
            type: Array,
            default() {
                return [];
            },
        },
    },
    methods: {
        ...mapActions([
            "DELETE_FROM_CART",
            "INCREMENT_FROM_CART",
            "DECREMENT_FROM_CART",
        ]),
        deleteFromCart(i) {
            this.DELETE_FROM_CART(i);
        },
        increment(i) {
            this.INCREMENT_FROM_CART(i);
        },
        decrement(i) {
            this.DECREMENT_FROM_CART(i);
        },
    },
    computed: {
        cartTotalCost() {
            if (this.cart_data.length) {
                return this.cart_data.reduce(
                    (sum, obj) => obj.price * obj.quantity + sum,
                    0
                );
            }
        },
    },
};
</script>

<style lang="scss">
.v-cart {
    margin-bottom: 100px;
    &__total {
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        padding: $padding * 2 $padding * 3;
        display: flex;
        justify-content: center;
        background: $green-bg;
        color: #ffffff;
        font-size: 20px;
    }
    .total__name {
        margin-right: $margin * 2;
    }
}
</style>
