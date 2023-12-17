export type Initiative = Pc[];

export type Pc = {
  id?: string;
  name: string;
  initiative: number;
  hp: number;
  groupNumber: number;
  isActive?: boolean;
};
