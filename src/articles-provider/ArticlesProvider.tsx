import React, { useEffect } from 'react';
import { ReactNode, useState } from 'react';
import { Article } from '../models/Article';
import { ArticlesContextType } from './ArticlesContextType';
const ArticlesContext = React.createContext<ArticlesContextType>(null!);

const ArticlesProvider = ({ children }: { children: ReactNode }) => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    setArticles([
      {
        id: 1,
        name: 'Bla bla bla',
        body: 'Bla alan la ls lsk k',
        created: '2023-03-25',
      } as Article
    ]);
  }, []);

  return <ArticlesContext.Provider value={{ articles }}>{children}</ArticlesContext.Provider>;
};

export const useArticles = () => {
  return React.useContext(ArticlesContext);
};

export default ArticlesProvider;
