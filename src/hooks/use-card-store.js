import { create } from 'zustand';

export const useCardStore = create((set) => ({
  selectedCardId: 1,
  setSelectedCardId: (card) => set(() => ({ selectedCardId: card })),
  selectedTab: 'cardView',
  setSelectedTab: (tab) => set(() => ({ selectedTab: tab })),
  selectedCategoryId: 0,
  setSelectedCategoryId: (category) => set(() => ({ selectedCategoryId: category })),
  selectedSortingId: 0,
  setSelectedSortingId: (sorting) => set(() => ({ selectedSortingId: sorting })),
  openCardDrawer: false,
  setOpenCardDrawer: (open) => set(() => ({ openCardDrawer: !!open })),
}));

export default useCardStore;
