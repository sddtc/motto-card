import { beforeEach, afterEach, describe, it, expect, vi } from 'vitest'
import { useContentStore } from '../../src/stores/useContentStore'

describe('useContentStore', () => {
  const resetStore = () =>
    useContentStore.setState({
      currentMotto: {},
      currentMottoIndex: -1,
      isLoading: false,
      allMottos: [],
      favoritesMap: {},
    })

  beforeEach(() => {
    resetStore()
    vi.restoreAllMocks()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('getContent sets state from fetched data (deterministic Math.random)', async () => {
    const data = [
      { id: 'a', text: 'A' },
      { id: 'b', text: 'B' },
      { id: 'c', text: 'C' },
    ]
    vi.stubGlobal('fetch', vi.fn(async () => ({ ok: true, json: async () => data })))
    vi.spyOn(Math, 'random').mockReturnValue(0.5) // picks index 1

    await useContentStore.getState().getContent()

    const s = useContentStore.getState()
    expect(s.allMottos).toEqual(data)
    expect(s.currentMotto).toEqual(data[1])
    expect(s.currentMottoIndex).toBe(1)
    expect(s.isLoading).toBe(false)
  })

  it('getContent handles fetch error and clears currentMotto', async () => {
    vi.stubGlobal('fetch', vi.fn(async () => ({ ok: false, status: 500, statusText: 'ERR' })))

    await useContentStore.getState().getContent()

    const s = useContentStore.getState()
    expect(s.currentMotto).toEqual({})
    expect(s.isLoading).toBe(false)
  })

  it('preMotto wraps to last when at index 0', () => {
    const data = [{ id: 'a' }, { id: 'b' }, { id: 'c' }]
    useContentStore.setState({ allMottos: data, currentMottoIndex: 0, currentMotto: data[0] })

    useContentStore.getState().preMotto()

    const s = useContentStore.getState()
    expect(s.currentMottoIndex).toBe(2)
    expect(s.currentMotto).toEqual(data[2])
    expect(s.isLoading).toBe(false)
  })

  it('nextMotto advances and wraps to 0', () => {
    const data = [{ id: 'a' }, { id: 'b' }, { id: 'c' }]
    useContentStore.setState({ allMottos: data, currentMottoIndex: 2, currentMotto: data[2] })

    useContentStore.getState().nextMotto()

    const s = useContentStore.getState()
    expect(s.currentMottoIndex).toBe(0)
    expect(s.currentMotto).toEqual(data[0])
    expect(s.isLoading).toBe(false)
  })

  it('likeIt increments favoritesMap count for current motto', () => {
    const motto = { id: 'x' }
    useContentStore.setState({ currentMotto: motto, favoritesMap: {} })

    useContentStore.getState().likeIt()
    expect(useContentStore.getState().favoritesMap['x']).toBe(1)

    useContentStore.getState().likeIt()
    expect(useContentStore.getState().favoritesMap['x']).toBe(2)
  })

  it('likeIt increments existing favorites count', () => {
    const motto = { id: 'y' }
    useContentStore.setState({ currentMotto: motto, favoritesMap: { y: 5 } })

    useContentStore.getState().likeIt()
    expect(useContentStore.getState().favoritesMap['y']).toBe(6)
  })
})