import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure
} from 'vee-validate'
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minValue,
  max_value as maxValue,
  confirmed,
  not_one_of as excluded
} from '@vee-validate/rules'

export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)
    defineRule('required', required)
    defineRule('tos', required)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('alpha_spaces', alphaSpaces)
    defineRule('email', email)
    defineRule('min_value', minValue)
    defineRule('max_value', maxValue)
    defineRule('confirmed', confirmed)
    defineRule('excluded', excluded)
    defineRule('country_excluded', excluded)
    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `The ${ctx.field} field is required.`,
          tos: `You must agree to the terms of service.`,
          min: `The ${ctx.field} field is too short.`,
          max: `The ${ctx.field} field is too long.`,
          alpha_spaces: `The ${ctx.field} field may only contain letters and spaces.`,
          email: `The ${ctx.field} field must be a valid email address.`,
          min_value: `The ${ctx.field} field is too low.`,
          max_value: `The ${ctx.field} field is too high.`,
          confirmed: `The ${ctx.field} field does not match password.`,
          excluded: `You are not allowed to use this value for the ${ctx.field} field.`,
          country_excluded: `Due to restrictions, we do not accept users from this location.`
        }

        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The ${ctx.field} field is invalid.`

        return message
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true
    })
  }
}
