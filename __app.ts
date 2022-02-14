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
      name: 'viandwi24',
      link: 'https://github.com/viandwi24',
    },
  }
  useState('app', () => app)

  return {
    app,
  }
}
