import { create } from 'zustand';

export const useContentStore = create((set) => ({
  motto: {},
  isLoading: false,

  getContent: async () => {
    set({ isLoading: true });
    try {
      const res = await fetch('../../assets/content.json')
      if (!res.ok) throw new Error(`fetch failed: ${res.status} ${res.statusText}`)

      const data = await res.json()
      console.log('fetched content.json:', data)

      const index = Math.floor(Math.random() * data.length)
      set({ motto: data[index] })
    } catch (err) {
      console.error('getContent error:', err)
      set({ motto: {} })
    } finally {
      set({ isLoading: false });
    }
  }
}));