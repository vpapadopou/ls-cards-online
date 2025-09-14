import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useSavedCardsStore = create(
  persist(
    (set, get) => ({
      // Array that holds the saved card IDs
      savedCardIds: [],
      // Get number of saved cards
      getSavedCardsNumber: () => get().savedCardIds.length,
      // Check whether a card is saved or not
      isCardSaved: (id) => get().savedCardIds.includes(id),
      // Add or remove a card from the saved cards array based on its ID
      toggleCardSaved: (id) =>
        set((state) => ({
          savedCardIds: state.savedCardIds.includes(id) ? state.savedCardIds.filter((x) => x !== id) : [...state.savedCardIds, id],
        })),
    }),
    {
      // Use a separate localStorage key
      name: 'ls-saved-card-ids',
    }
  )
);

export default useSavedCardsStore;
