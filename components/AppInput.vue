<template>
  <div class="text-input"
       :class="{
    'text-input--invalid': !valid,
  }">
    <label :for="name" class="text-input__label" v-text="label">
    </label>
    <input
      v-if="!isPhone"
      :name="name"
      :id="name"
      :type="type"
      :placeholder="placeholder"
      class="text-input__input"
      :value="model"
      @input="input($event.target.value)"
    />
    <the-mask
      v-else
      class="text-input__input"
      :mask="['+# (###)-###-##-##']"
      :type="type"
      :placeholder="placeholder"
      :value="model"
      @input="input"
    >
    </the-mask>
  </div>
</template>

<script>
import {TheMask} from 'vue-the-mask';

export default {
  name: "AppInput",
  components: {
    TheMask
  },
  props: {
    name: {
      type: String,
      default: '',
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    model: {
      type: String,
      default: '',
      required: true
    },
    type: {
      type: String,
      default: '',
      required: true
    },
    valid: {
      type: Boolean,
      default: true,
      required: true
    },
  },
  computed: {
    isPhone() {
      return this.type === 'tel';
    }
  },
  watch: {
    model: {
      handler(newVal) {
        this.value = newVal;
      },
      deep: true
    }
  },
  methods: {
    input(val) {
      this.$emit("input", {name: this.name, value: val});
    },
  },
}
</script>

<style type="text/css">
input {
  outline: none;
}

.text-input {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  margin-bottom: 20px;
}

.text-input--invalid input {
  border-color: red;
}
</style>
