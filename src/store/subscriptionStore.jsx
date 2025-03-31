import {create} from 'zustand'

const useSubscriptionStore = create((set) => ({
  subscription: null,
  setSubscription: (subscription) => set({subscription: subscription}),
  clearSubscription: () => set({subscription: null})
}))

export default useSubscriptionStore