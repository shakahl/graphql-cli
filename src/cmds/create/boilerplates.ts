export interface Boilerplate {
  name: string
  description: string
  repo: string
}

// TODO implement the following
// * node-minimal
// * node-minimal-fullstack
// * node-basic
// * node-basic-fullstack
// * node-advanced
// * node-advanced-fullstack
// * typescript-minimal
// * typescript-minimal-fullstack
// * typescript-basic
// * typescript-basic-fullstack
// * typescript-advanced
// * typescript-advanced-fullstack

export const defaultBoilerplates: Boilerplate[] = [
  {
    name: 'node-minimal',
    description: 'Minimal GraphQL server ("Hello world")',
    repo:
      'https://github.com/graphql-cli/graphql-boilerplate/tree/master/node-minimal',
  },
  {
    name: 'node-basic',
    description: 'Basic GraphQL server (incl. database)',
    repo:
      'https://github.com/graphql-cli/graphql-boilerplate/tree/master/node-basic',
  },
  {
    name: 'typescript-minimal',
    description: 'Minimal GraphQL server ("Hello world")',
    repo:
      'https://github.com/graphql-cli/graphql-boilerplate/tree/master/typescript-minimal',
  },
  {
    name: 'typescript-basic',
    description: 'Basic GraphQL server (incl. database)',
    repo:
      'https://github.com/graphql-cli/graphql-boilerplate/tree/master/typescript-basic',
  },
]
