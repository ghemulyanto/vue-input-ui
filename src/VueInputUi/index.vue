<template>
  <div
    ref="parent"
    :class="[{
      'is-focused': isFocus,
      'is-valid': valid,
      'has-value': value,
      'has-error': error,
      'is-disabled': disabled,
      'is-dark': dark,
      'has-hint': hint
    }, size]"
    :style="[cssTheme]"
    class="vue-input-ui"
    @click="focusInput"
  >
    <input
      v-if="!textarea"
      :id="id"
      ref="VueInputUi"
      v-model="inputValue"
      v-bind="$attrs"
      :placeholder="labelValue"
      :type="type"
      class="vue-input-ui__input"
      :disabled="disabled"
      :required="required"
      @keydown="keyDown"
      @keyup="keyUp"
      @focus="onFocus"
      @blur="onBlur"
      @click="$emit('click')"
    >
    <textarea
      v-else
      :id="id"
      ref="VueInputUi"
      v-model="inputValue"
      v-bind="$attrs"
      :placeholder="labelValue"
      :type="type"
      :required="required"
      class="vue-input-ui__input textarea"
      @keydown="keyDown"
      @keyup="keyUp"
      @focus="onFocus"
      @blur="onBlur"
      @click="$emit('click')"
    />
    <label
      ref="label"
      :for="id"
      :class="error ? 'text-danger' : null"
      class="vue-input-ui__label"
      @click="focusInput"
    >
      {{ hintValue || labelValue }}
    </label>

    <button
      v-if="clearable && inputValue && !textarea"
      class="vue-input-ui__clear"
      title="clear"
      type="button"
      tabindex="-1"
      @click="clear"
    >
      <span class="vue-input-ui__clear__effect" />
      <span>
        ✕
      </span>
    </button>

    <div
      v-if="loader"
      class="vue-input-ui__loader"
      :class="{ textarea }"
    >
      <div
        class="vue-input-ui__loader__progress-bar"
      />
    </div>
  </div>
</template>

<script>
  import getTheme from './themes'
  import cssVars from 'css-vars-ponyfill'

  export default {
    name: 'VueInputUi',
    props: {
      value: { type: [String, Number], default: null },
      label: { type: String, default: 'Enter text' },
      hint: { type: String, default: null },
      error: { type: Boolean, default: Boolean },
      color: { type: String, default: 'dodgerblue' },
      disabled: { type: Boolean, default: false },
      dark: { type: Boolean, default: false },
      darkColor: { type: String, default: '#424242' },
      id: { type: String, default: 'VueInputUi' },
      size: { type: String, default: null },
      type: { type: String, default: 'text' },
      readonly: { type: Boolean, default: false },
      valid: { type: Boolean, default: false },
      validColor: { type: String, default: 'yellowgreen' },
      required: { type: Boolean, default: false },
      textarea: { type: Boolean, default: false },
      loader: { type: Boolean, default: false },
      clearable: { type: Boolean, default: false },
      borderRadius: { type: Number, default: 4 }
    },
    data () {
      return {
        isFocus: false
      }
    },
    computed: {
      cssTheme () {
        const { dark, color, darkColor, validColor, borderRadius } = this
        return getTheme(
          {
            dark,
            color,
            darkColor,
            validColor,
            borderRadius,
            lightColor: '#FFFFFF',
            errorColor: 'orangered'
          }
        )
      },
      inputValue: {
        get () {
          return this.value
        },
        set (value) {
          this.$emit('input', value)
        }
      },
      labelValue () {
        let { label } = this
        return this.required && label ? label += ` *` : label
      },
      hintValue () {
        let { hint } = this
        return this.required && hint ? hint += ` *` : hint
      }
    },
    mounted () {
      this.setCssVars()
    },
    methods: {
      focusInput () {
        this.$refs.VueInputUi.focus()
      },
      onFocus () {
        this.$emit('focus')
        this.isFocus = true
      },
      onBlur () {
        this.$emit('blur')
        this.isFocus = false
      },
      clear () {
        this.$emit('input', null)
        this.$emit('clear')
      },
      keyUp (e) {
        this.$emit('keyup', e)
      },
      keyDown (e) {
        this.$emit('keydown', e)
      },
      setCssVars () {
        cssVars({
          variables: this.cssTheme
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'style-helpers';

  $primary-color: var(--vue-input-ui-primary-color);
  $second-color-light: var(--vue-input-ui-second-color-light);
  $second-color-dark: var(--vue-input-ui-second-color-dark);
  $third-color-light: var(--vue-input-ui-third-color-light);
  $third-color-dark: var(--vue-input-ui-third-color-dark);
  $muted-color-light: var(--vue-input-ui-muted-color-light);
  $muted-color-dark: var(--vue-input-ui-muted-color-dark);
  $hover-color-light: var(--vue-input-ui-hover-color-light);
  $hover-color-dark: var(--vue-input-ui-hover-color-dark);
  $bg-color-light: var(--vue-input-ui-bg-color-light);
  $bg-color-dark: var(--vue-input-ui-bg-color-dark);
  $valid-color: var(--vue-input-ui-valid-color);
  $error-color: var(--vue-input-ui-error-color);
  $error-color-transparency: var(--vue-input-ui-error-color-transparency);
  $primary-color-transparency: var(--vue-input-ui-primary-color-transparency);
  $valid-color-transparency: var(--vue-input-ui-valid-color-transparency);
  $border-radius: var(--vue-input-ui-border-radius);
  $disabled-color: #747474;

  .vue-input-ui {
    position: relative;

    &:not(.vue-input-ui__input.textarea) {
      height: 42px;
      min-height: 42px;
    }

    &__label {
      position: absolute;
      top: 4px;
      cursor: pointer;
      left: 13px;
      transform: translateY(25%);
      opacity: 0;
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      font-size: 11px;
      color: $second-color-light;
    }

    &__input {
      cursor: pointer;
      background-color: $bg-color-light;
      transition-duration: 0.3s;
      position: relative;
      width: 100%;
      padding: 0 12px;
      font-weight: 400;
      appearance: none;
      outline: none;
      border: 1px solid $third-color-light;
      border-radius: $border-radius;
      font-size: 14px;
      z-index: 0;
      caret-color: $primary-color;

      &:not(.textarea) {
        height: 42px;
        min-height: 42px;
      }

      &.textarea {
        padding: 8px 12px 0 12px;
        min-height: 88px !important;
        resize: vertical;
      }

      &::-webkit-input-placeholder {
        color: $second-color-light;
      }

      &::-moz-placeholder {
        color: $second-color-light;
      }

      &:-ms-input-placeholder {
        color: $second-color-light;
      }

      &::-ms-input-placeholder {
        color: $second-color-light;
      }

      &:-moz-placeholder {
        color: $second-color-light;
      }

      &::placeholder {
        color: $second-color-light;
      }

      &__input:-webkit-autofill,
      &__input:-webkit-autofill:hover,
      &__input:-webkit-autofill:focus,
      &__input:-webkit-autofill:active {
        box-shadow: 0 0 0 1000px $bg-color-light inset !important;
        -webkit-text-fill-color: $second-color-light !important;
      }
    }

    &__clear {
      $clear-size: 24px;

      position: absolute;
      top: 0;
      bottom: 0;
      right: 8px;
      margin: auto 0;
      width: $clear-size;
      height: $clear-size;
      appearance: none;
      border: none;
      background: transparent;
      color: $second-color-light;
      border-radius: $clear-size;
      cursor: pointer;
      font-size: 12px;

      &:focus {
        outline: none;
      }

      & > span:not(.vue-input-ui__clear__effect) {
        position: relative;
        top: 1px;
      }

      &__effect {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: $clear-size;
        height: $clear-size;
        background-color: $muted-color-light;
        border-radius: $clear-size;
        transform: scale(0);
        transition: transform 200ms;
      }

      &:hover {
        color: white;

        .vue-input-ui__clear__effect {
          transform: scale(1);
          opacity: 0.6;
        }
      }
    }

    &.is-dark {
      .vue-input-ui {
        &__label {
          color: $second-color-dark;
        }

        &__input {
          background-color: $bg-color-dark;
          border: 1px solid $third-color-dark;
          color: $second-color-dark;

          &::-webkit-input-placeholder {
            color: $second-color-dark;
          }

          &::-moz-placeholder {
            color: $second-color-dark;
          }

          &:-ms-input-placeholder {
            color: $second-color-dark;
          }

          &::-ms-input-placeholder {
            color: $second-color-dark;
          }

          &:-moz-placeholder {
            color: $second-color-dark;
          }

          &::placeholder {
            color: $second-color-dark;
          }

          &__input:-webkit-autofill,
          &__input:-webkit-autofill:hover,
          &__input:-webkit-autofill:focus,
          &__input:-webkit-autofill:active {
            box-shadow: 0 0 0 1000px $bg-color-dark inset !important;
            -webkit-text-fill-color: $second-color-dark !important;
          }
        }

        &__clear {
          color: $second-color-dark;

          &__effect {
            background-color: $muted-color-dark;
          }

          &:hover {
            color: white;
          }
        }
      }
    }

    &.is-focused {
      .vue-input-ui {
        &__input {
          border-color: $primary-color;
          box-shadow: 0 0 0 0.2rem $primary-color-transparency;
        }

        &__label {
          color: $primary-color;
        }
      }

      &.has-error {
        .vue-input-ui__input {
          box-shadow: 0 0 0 0.2rem $error-color-transparency;
        }
      }

      &.is-valid {
        .vue-input-ui__input {
          border-color: $valid-color;
          box-shadow: 0 0 0 0.2rem $valid-color-transparency;
        }
      }
    }

    &.has-value {
      .vue-input-ui__label {
        opacity: 1;
        transform: translateY(0);
        font-size: 11px;
      }

      .vue-input-ui__input {
        padding-top: 14px;

        &.textarea {
          padding-top: 20px;
        }
      }
    }

    &.has-value,
    &.has-hint {
      .vue-input-ui__label {
        opacity: 1;
        transform: translateY(0);
        font-size: 11px;
      }

      .vue-input-ui__input {
        padding-top: 14px;

        &.textarea {
          padding-top: 20px;
        }
      }
    }

    &.is-valid {
      .vue-input-ui__input {
        border-color: $valid-color;
      }

      .vue-input-ui__label {
        color: $valid-color;
      }
    }

    &.has-error {
      .vue-input-ui__input {
        border-color: $error-color;
      }

      .vue-input-ui__label {
        color: $error-color;
      }
    }

    &.is-disabled {
      cursor: not-allowed;

      .vue-input-ui__input {
        border-color: #CCC;
        background-color: #F2F2F2;
        color: $disabled-color;

        &::-webkit-input-placeholder {
          color: $disabled-color;
        }

        &::-moz-placeholder {
          color: $disabled-color;
        }

        &:-ms-input-placeholder {
          color: $disabled-color;
        }

        &::-ms-input-placeholder {
          color: $disabled-color;
        }

        &:-moz-placeholder {
          color: $disabled-color;
        }

        &::placeholder {
          color: $disabled-color;
        }
      }

      .vue-input-ui__label,
      .vue-input-ui__input,
      .vue-input-ui__toggle__arrow {
        cursor: not-allowed;
        color: $disabled-color;
      }
    }

    &.sm {
      &:not(.vue-input-ui__input.textarea) {
        height: 36px;
        min-height: 36px;
      }

      .vue-input-ui__input {
        font-size: 12px;

        &:not(.textarea) {
          height: 36px;
          min-height: 36px;
        }
      }

      .vue-input-ui__label {
        font-size: 10px;
      }

      &.has-value {
        .vue-input-ui__input {
          padding-top: 12px;

          &.textarea {
            padding-top: 18px;
          }
        }
      }
    }

    &.lg {
      &:not(.vue-input-ui__input.textarea) {
        height: 48px;
        min-height: 48px;
      }

      .vue-input-ui__input {
        font-size: 16px;

        &:not(.textarea) {
          height: 48px;
          min-height: 48px;
        }
      }

      .vue-input-ui__label {
        font-size: 14px;
      }

      &.has-value {
        .vue-input-ui__input {
          padding-top: 16px;

          &.textarea {
            padding-top: 26px;
          }
        }
      }
    }

    &__loader {
      bottom: 0;
      height: 2px;
      left: 2px;
      width: calc(100% - 4px);
      position: absolute;
      overflow: hidden;
      border-radius: 4px;

      &.textarea {
        bottom: 6px;
      }

      &__progress-bar {
        background-color: $primary-color;
        display: block;
        position: absolute;
        content: '';
        left: -200px;
        width: 200px;
        height: 2px;
        animation: loading 2s linear infinite;
      }
    }

    @keyframes loading {
      from {
        left: -200px;
        width: 30%;
      }

      50% {
        width: 30%;
      }

      70% {
        width: 70%;
      }

      80% {
        left: 50%;
      }

      95% {
        left: 120%;
      }

      to {
        left: 100%;
      }
    }
  }
</style>