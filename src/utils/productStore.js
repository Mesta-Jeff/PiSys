
import { create } from 'zustand';
import { persist } from 'zustand/middleware';


const userData = JSON.parse(localStorage.getItem('userData') || '{}');
const username = userData.name || 'guest';


export const useProductStore = create(
  persist(
    (set, get) => ({
      PRODUCT_LIST: [],
      PAGINATED_LIST: [],
      CATEGORY_LIST: [],
      FAVORITES: [],
      selectedCategory: null,
      display: 'grid',
      isSaving: false,
      isLoading: true,
      searchTerm: '',
      debouncedSearchTerm: '',
      currentPage: 1,
      filterCategory: null,

      // Actions to update the state
      setPRODUCT_LIST: (list) => set({ PRODUCT_LIST: list }),
      setFAVORITES: (favorites) => set({ FAVORITES: favorites }),
      setPAGINATED_LIST: (list) => set({ PAGINATED_LIST: list }),
      setCATEGORY_LIST: (list) => set({ CATEGORY_LIST: list }),
      setSelectedCategory: (category) => set({ selectedCategory: category }),
      setDisplay: (val) => set({ display: val }),
      setIsSaving: (val) => set({ isSaving: val }),
      setIsLoading: (val) => set({ isLoading: val }),
      setSearchTerm: (val) => set({ searchTerm: val }),
      setDebouncedSearchTerm: (val) => set({ debouncedSearchTerm: val }),
      setCurrentPage: (val) => set({ currentPage: val }),
      setFilterCategory: (val) => set({ filterCategory: val }),

      toggleFavorite: (productId) => {
        const { FAVORITES } = get();
        const isFavorite = FAVORITES.includes(productId);
        const updated = isFavorite
          ? FAVORITES.filter(id => id !== productId)
          : [...FAVORITES, productId];
        set({ FAVORITES: updated });
      },
    }),
    {
      name: `product-storage-${username}`,
      partialize: (state) => ({
        FAVORITES: state.FAVORITES, 
      }),
    }
  )
);
