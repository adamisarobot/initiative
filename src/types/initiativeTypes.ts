export type Initiative = Creature[];

export type Creature = {
  // ID is optional because it comes from Firebase.
  id?: string;
  name: string;
  initiative: number;
  hp: number;
  groupNumber: number;
  // isActive is optional because it is not stored in Firebase.
  isActive?: boolean;
};
