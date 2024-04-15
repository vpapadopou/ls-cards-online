import { create } from 'zustand';

export const useCardStore = create((set) => ({
  selectedCardId: 1,
  setSelectedCardId: (card) => set(() => ({ selectedCardId: card })),
  selectedCategoryId: 0,
  setSelectedCategoryId: (category) => set(() => ({ selectedCategoryId: category })),
}));

export default useCardStore;
