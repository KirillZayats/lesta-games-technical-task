export interface PropsTheme {
    children: React.ReactNode;
  }

export type TVehicles = {
  title: string;
  description: string;
  icons: TIcons;
  level: string;
  type: TTypeVehicles;
  nation: TNation;
}

type TIcons = {
  large?: string;
  medium?: string;
  small?: string;
}

type TTypeVehicles = {
  name: string;
  title: string;
  icons: TIcons;
}

type TNation = {
  name: string;
  title: string;
  color: string;
  icons: TIcons;
}
