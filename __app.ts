export interface IApp {
  name: string
  author: {
    name: string
    link: string
  }
}

export function AppSetup() {
  // declare app information
  const app: IApp = {
    name: "Booleans's Portfolio",
    author: {
      name: 'booleans-oss',
      link: 'https://github.com/booleans-oss',
    },
  }
  useState('app', () => app)

  return {
    app,
  }
}
