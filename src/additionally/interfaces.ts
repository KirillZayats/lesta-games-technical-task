type TIcons = {
  large: string;
  medium: string;
};

type TTypeVehicles = {
  name: string;
  title: string;
  icons: TIconType;
};

type TIconType = {
  default: string;
};

type TNation = {
  name: string;
  title: string;
  color: string;
  icons: TIconNation;
};

type TIconNation = {
  large: string;
  small: string;
};

export interface PropsTheme {
  children: React.ReactNode;
}

export interface IPropsVehicles {
  vehicles: IVehicles;
  page: number;
  listVehicles: IVehicles[]
}

export interface IPropsSort {
  typeSort: string;
  setTypeSort: (value: string) => void;
}

export interface IPropsFilter {
  setNowPage: (value: number) => void;
}

export interface IPropsPageError {
  errorMessage: string;
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

export type TGetUseDataFilter = (
  value: string,
  isStatus: boolean,
  startData: IVehicles[],
  useData: IVehicles[],
  map: Map<string, IDataFilter[] | Omit<IDataFilter, "icon">[]>
) => IVehicles[];

export interface PropsElementList {
  textElement: string;
}

export type TSortData = (data: IVehicles[], typeSort: string) => IVehicles[];
export type TGetMapFilter = (
  data: IVehicles[]
) => Map<string, IDataFilter[] | Omit<IDataFilter, "icon">[]>;
export type TMainFilter = (
  useData: IVehicles[],
  startData: IVehicles[]
) => IVehicles[];
export type TUseFilterType = (
  useData: IVehicles[],
  startData: IVehicles[]
) => { data: IVehicles[]; statusEntry: boolean };
export type TUseFilterLevel = (
  useData: IVehicles[],
  startData: IVehicles[],
  statusEntry: boolean
) => IVehicles[];
export type TGetTypeFilter = (
  map: Map<string, IDataFilter[] | Omit<IDataFilter, "icon">[]>,
  value: string
) => string;
export type TMapValuesFilter = (typeFilter: string, value: string) => void;
export type TFindTypeFilter = (
  array: IDataFilter[] | Omit<IDataFilter, "icon">[],
  value: string,
  typeFilter: string
) => string;
