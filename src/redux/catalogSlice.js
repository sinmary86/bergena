import { createSlice } from '@reduxjs/toolkit';
import dataCatalogItems from '../data/dataCatalogItem';

const initialState = {
  items: dataCatalogItems, 
  filteredItems: dataCatalogItems, 
  selectedCategory: "ALLE STRÄUßE", 
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    filterByCategory: (state, action) => {
      const category = action.payload;
      state.selectedCategory = category;

      if (category === "ALLE STRÄUßE" || category === null) {
        state.filteredItems = state.items; 
      } else {
        state.filteredItems = state.items.filter(
          (item) => item.category === category
        );
      }
    },
  },
});

export const { filterByCategory } = catalogSlice.actions;
export default catalogSlice.reducer;
