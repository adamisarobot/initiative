export type Initiative = Pc[];

export type Pc = {
  id?: string;
  uuid: string;
  name: string;
  initiative: number;
  hp: number;
  groupNumber: number;
};
