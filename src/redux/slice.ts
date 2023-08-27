import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from '@reduxjs/toolkit';
import { Exercise } from '../types';
import { RootState } from './store';

const exerciseWikiAdapter = createEntityAdapter<Exercise>({
  selectId: exercise => exercise.id,
});

const initialState = exerciseWikiAdapter.getInitialState({
  bodyParts: [] as string[],
  selectedBodyPart: 'all',
  selectedExercise: null as Exercise | null,
});

const wikiSlice = createSlice({
  name: 'wiki',
  initialState,
  reducers: {
    resetExercises: (state, action: PayloadAction<Exercise[]>) => {
      exerciseWikiAdapter.removeAll(state);
      exerciseWikiAdapter.addMany(state, action.payload);
    },
    addBodyParts: (state, action: PayloadAction<string[]>) => {
      state.bodyParts = action.payload;
    },
    selectBodyPart: (state, action: PayloadAction<string>) => {
      state.selectedBodyPart = action.payload;
    },
    selectExercise: (state, action: PayloadAction<Exercise>) => {
      state.selectedExercise = action.payload;
    },
  },
});

export const { resetExercises, addBodyParts, selectBodyPart, selectExercise } =
  wikiSlice.actions;
export const wikiSelectors = exerciseWikiAdapter.getSelectors<RootState>(
  state => state.wiki
);
console.log('wikiSelectors', wikiSelectors);
export default wikiSlice.reducer;
