const fetchUrls = {
  bodyPartsList: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  exersicesList: 'https://exercisedb.p.rapidapi.com/exercises',
  exercisesListByBodyPart: (bodyPart: string) =>
    `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
};

export default fetchUrls;
