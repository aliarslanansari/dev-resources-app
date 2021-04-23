/*
 *
 * Authenticator reducer
 *
 */
import produce from 'immer'
import { createActions } from 'reduxsauce'
import { AnyAction } from 'redux'

export const initialState = {
  emailVerificationCodeSent: false,
  loading: false,
  confirmationDetails: {},
  error: {}
}

export const {
  Types: registerUserContainerTypes,
  Creators: registerUserContainerCreators
} = createActions({
  requestUserSignUp: ['payload'], // (payload, error)=>({type:'REQUEST_USER_SIGN_UP', payload})
  successEmailVerificationCodeSent: ['payload'],
  failurEmailVerificationCodeSent: ['payload'],

  requestEmailVerification: ['payload'],
  successUserSignUp: ['payload'],
  failureUserSignUp: ['payload']
})

/* eslint-disable default-case, no-param-reassign */
export const registerUserContainerReducer = (
  state = initialState,
  action: AnyAction
) =>
  produce(state, (draft) => {
    switch (action.type) {
      case registerUserContainerTypes.REQUEST_USER_SIGN_UP:
        draft.loading = true
        draft.emailVerificationCodeSent = false
        return draft
      case registerUserContainerTypes.SUCCESS_EMAIL_VERIFICATION_CODE_SENT:
        draft.emailVerificationCodeSent = true
        draft.loading = false
        return draft
      case registerUserContainerTypes.FAILUR_EMAIL_VERIFICATION_CODE_SENT:
        draft.emailVerificationCodeSent = false
        draft.loading = false
        draft.error = action.payload
        return draft
      case registerUserContainerTypes.REQUEST_EMAIL_VERIFICATION:
        draft.loading = true
        return draft
      case registerUserContainerTypes.FAILURE_USER_SIGN_UP:
        draft.loading = false
        draft.emailVerificationCodeSent = false
        draft.error = action.payload
        return draft
      case registerUserContainerTypes.SUCCESS_USER_SIGN_UP:
        draft.loading = false
        draft.emailVerificationCodeSent = false
        draft.confirmationDetails = action.payload
        return draft
      default:
        return draft
    }
  })

export default registerUserContainerReducer
