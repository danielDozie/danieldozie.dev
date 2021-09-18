import {gql} from 'graphql-tag';


export const GET_HOMEPAGE = gql`
query {
  all_journals {
    data {
      _ts
      _id
      title
      article
    }
  }
}

`