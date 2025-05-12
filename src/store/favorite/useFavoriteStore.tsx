import { create } from 'zustand';
import {ICrypto} from '../../interface';
import {StorageAdapter} from '../../config/adapters/storage.adapter.ts';

export interface IFavoriteState {
  favorites: ICrypto[] | [];
  getAllFavorites: (values: ICrypto[]) => void;
  getFavorites: (value: ICrypto) => void;
  deleteFavorite: (id: string) => void;
}

export const useFavoriteStore = create<IFavoriteState>()((set, _get) => ({
  favorites: [],
  getAllFavorites: (values: ICrypto[]) => {
    set({
      favorites: values,
    });
  },
  getFavorites:  (value: ICrypto) => {
    set((state) => {
      const saveFavorites = [...state.favorites, value]
      StorageAdapter.setItem('favorites', saveFavorites);
      return {
        favorites: saveFavorites,
      };
    });
  },
  deleteFavorite: (id: string) => {
    set((state) => {
      const deleteFavorite = state.favorites.filter((favorite) => favorite.id !== id);
      StorageAdapter.setItem('favorites', deleteFavorite);
      return {
        favorites: deleteFavorite,
      };
    });
  }
}));
