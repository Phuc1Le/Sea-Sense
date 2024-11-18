export type RootStackParams = {
  TabNavigation: undefined;
  QuizzResult: undefined;
  QuizzScreen: undefined;
  PracticeScreen: undefined;
  DetailAnimal: {
    animalName: string;
  };
  PracticeResult: {
    point: number;
    level: string;
  };
  Detail: {
    groupSeaName: string;
  };
  DetailWaterArea: {
    waterName: string;
  };
  PuzzleScreen: {
    id: number;
  };
};

export type BottomTabsParams = {
  Home: undefined;
  Quizz: undefined;
  Practice: undefined;
  Puzzle: undefined;
} & RootStackParams;
