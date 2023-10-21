export const pathName = 'https://vortex.korabli.su/api/graphql/glossary/';

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

export const LINK_LINKEDIN = 'https://www.linkedin.com/in/kiryl-zayats';
export const LINK_TELEGRAM = 'https://t.me/+375295304989';
export const LINK_GITHUB = 'https://github.com/KirillZayats?tab=repositories';
export const LINK_EMAIL = 'mailto:kirill.zayats.99@mail.ru&body=Добрый день.?subject=вакансия';
export const LINK_PHONE = 'tel:+375295304989';
