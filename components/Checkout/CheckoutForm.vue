<template>
  <div class="content">
    <form method="post" @submit.prevent="handleSubmit($event)">
      <h3>Please enter your personal info:</h3>
      <app-input
        v-for="{name, placeholder, label, type} in fields"
        :key="name"
        :name="name"
        :placeholder="placeholder"
        :label="label"
        :model="userInformation[name] || ''"
        :type="type"
        :valid="!$v.userInformation[name].$error"
        @input="handleInput($event)"
      >
      </app-input>
      <button type="reset" @click.prevent="clearUserInformation">drop fields</button>
      <button>submit</button>
    </form>
  </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
import AppInput from "@/components/AppInput";
import checkoutFields from '/static/mocks/checkoutFields.json'
import {required, minLength, email} from 'vuelidate/lib/validators';

const {mapActions, mapGetters: mapGettersCart} = createNamespacedHelpers('cart')
const {mapActions: mapActionsCheckout} = createNamespacedHelpers('checkout')
export default {
  name: 'CheckoutForm',
  data() {
    return {
      fields: checkoutFields
    }
  },
  components: {
    AppInput
  },
  validations: {
    amount: {
      minLength: minLength(1)
    },
    userInformation: {
      name: {
        required,
        minLength: minLength(4)
      },
      email: {
        required,
        email
      },
      phone: {
        required,
        minLength: minLength(11)
      }
    }
  },
  computed: {
    ...mapGettersCart(['userInformation', 'amount']),
  },
  methods: {
    ...mapActions(['setUserInformation', 'clearUserInformation']),
    ...mapActionsCheckout(['submit']),
    handleInput(event) {
      this.setUserInformation({name: event.name, value: event.value})
    },
    handleSubmit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        console.error('form is invalid');
      } else {
        this.submit(this.userInformation);
      }

    }
  }
}
</script>
