import { RootState } from './store';

const selectActiveBodyPart = (state: RootState) => state.wiki.selectedBodyPart;
const selectBodyPartsList = (state: RootState) => state.wiki.bodyParts;
const selectActiveExercise = (state: RootState) => state.wiki.selectedExercise;

export { selectActiveBodyPart, selectBodyPartsList, selectActiveExercise };
