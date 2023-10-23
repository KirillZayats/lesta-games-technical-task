export const BASE_URL = 'https://vortex.korabli.su/api/graphql/glossary/';

export const query = `query allShips {
    vehicles {
    title
    description
    icons {
      large
      medium
    }
    level
    type {
      name
      title
      icons {
        default
      }
    }
    nation {
      name
      title
      color
      icons {
        small
        medium
        large
      }
    }
  }
}`;

export enum TypeSort {
  NATION_ASC = "NATION_ASC",
  NATION_DESC = "NATION_DESC",
  LEVEL_ASC = "LEVEL_ASC",
  LEVEL_DESC = "LEVEL_DESC",
  NAME_ASC = "NAME_ASC",
  NAME_DESC = "NAME_DESC",
  TYPE_ASC = "TYPE_ASC",
  TYPE_DESC = "TYPE_DESC",
}

export enum TypeFilter {
  NATION_FILTER = "NATION_FILTER",
  TYPE_FILTER = "TYPE_FILTER",
  LEVEL_FILTER = "LEVEL_FILTER",
}

export const LINK_LINKEDIN = 'https://www.linkedin.com/in/kiryl-zayats';
export const LINK_TELEGRAM = 'https://t.me/+375295304989';
export const LINK_GITHUB = 'https://github.com/KirillZayats?tab=repositories';
export const LINK_EMAIL = 'mailto:kirill.zayats.99@mail.ru&body=Добрый день.?subject=вакансия';
export const LINK_PHONE = 'tel:+375295304989';
