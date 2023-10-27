export interface PropsTheme {
    children: React.ReactNode;
  }

export interface IPropsVehicles {
  vehicles: IVehicles;
  page: number;
  typeSort: string
}

export interface IPropsSort {
  typeSort: string;
  setTypeSort: (value: string) => void;
}


export interface IPropsFilter {
  setNowPage: (value: number) => void;
}



export interface IPropsBg {
  background: string | undefined;
}

export interface IVehicles {
  title: string;
  description: string;
  icons: TIcons;
  level: number;
  type: TTypeVehicles;
  nation: TNation;
}

export interface IDataFilter {
  name: string;
  icon: string;
}

export type TGetUseDataFilter = (value: string,
  isStatus: boolean,
  startData: IVehicles[],
  useData: IVehicles[],
  map: Map<string, IDataFilter[] | Omit<IDataFilter, "icon">[]>) => IVehicles[];

export type TMainFilter = (useData: IVehicles[], startData: IVehicles[]) => IVehicles[];
export type TUseFilterType = (useData: IVehicles[], startData: IVehicles[]) => {data: IVehicles[]; statusEntry: boolean}
export type TUseFilterLevel = (useData: IVehicles[], startData: IVehicles[], statusEntry: boolean) => IVehicles[]


export type TMapValuesFilter =(typeFilter: string, value: string) => void


type TIcons = {
  large: string;
  medium: string;
}

type TTypeVehicles = {
  name: string;
  title: string;
  icons: TIconType;
}

type TIconType = {
  default: string
}

type TNation = {
  name: string;
  title: string;
  color: string;
  icons: TIconNation;
}

type TIconNation = {
  large: string;
  small: string;
}

export interface PropsElementList {
  textElement: string;
}