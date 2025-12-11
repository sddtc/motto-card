import { create } from 'zustand';

export const useContentStore = create((set, get) => ({
  currentMotto: {},
  currentMottoIndex: -1,
  isLoading: false,
  allMottos: [],
  favoritesMap: {},

  getContent: async () => {
    set({ isLoading: true });
    try {
      const res = await fetch('../../assets/content.json')
      if (!res.ok) throw new Error(`fetch failed: ${res.status} ${res.statusText}`)

      const data = await res.json()
      console.log('fetched content.json:', data)

      const currentMottoIndex = Math.floor(Math.random() * data.length)
      set({
        currentMotto: data[currentMottoIndex],
        currentMottoIndex: currentMottoIndex,
        allMottos: data
      });
    } catch (err) {
      console.error('getContent error:', err)
      set({ currentMotto: {} })
    } finally {
      set({ isLoading: false });
    }
  },

  preMotto: () => {
    set({ isLoading: true });

    const currIndex = get().currentMottoIndex === 0 ? get().allMottos.length : get().currentMottoIndex;
    const currentMottoIndex = (currIndex - 1) % get().allMottos.length;
    set({
      currentMotto: get().allMottos[currentMottoIndex],
      currentMottoIndex: currentMottoIndex,
      isLoading: false
    });
  },

  nextMotto: () => {
    set({ isLoading: true });

    const currentMottoIndex = (get().currentMottoIndex + 1) % get().allMottos.length;
    set({
      currentMotto: get().allMottos[currentMottoIndex],
      currentMottoIndex: currentMottoIndex,
      isLoading: false
    });
  },

  likeIt: () => {
    const { currentMotto, favoritesMap } = get();
    const newFavoritesMap = { ...favoritesMap };
    if (newFavoritesMap[currentMotto.id]) {
      newFavoritesMap[currentMotto.id] += 1;
    } else {
      newFavoritesMap[currentMotto.id] = 1;
    }
    set({ favoritesMap: newFavoritesMap });
    console.log('Updated favoritesMap:', newFavoritesMap);
  }
}));