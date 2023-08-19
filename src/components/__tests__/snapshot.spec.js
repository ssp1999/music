import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import SongItem from '@/components/SongItem.vue'

describe('Snapshots SongItem.vue', () => {
  test('renders correctly', () => {
    const song = {
      docId: 'abc',
      modified_name: 'test',
      display_name: 'aaa',
      comment_count: 5
    }

    const wrapper = shallowMount(SongItem, {
      propsData: {
        song
      },
      global: {
        components: {
          RouterLink: RouterLinkStub
        }
      }
    })

    expect(wrapper.element).toMatchSnapshot()
  })
})
