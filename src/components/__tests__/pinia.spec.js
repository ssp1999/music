import { setActivePinia, createPinia } from 'pinia'
import useUserStore from '@/stores/user'

vi.mock('@/includes/firebase', () => ({
  auth: {
    signInWithEmailAndPassword: () => Promise.resolve()
  }
}))

describe('stores', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  test('authenticates user', async () => {
    const store = useUserStore()
    expect(store.userLoggedIn).toBeFalsy()
    await store.authenticate({})
  })
})
