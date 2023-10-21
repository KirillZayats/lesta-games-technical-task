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
