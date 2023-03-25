import React from 'react';
import './App.css';
import HomePage from './home/HomePage';
import Navigation from './navigation/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ArticlesPage from './articles/ArticlesPage';
import RecipesPage from './recipes/RecipesPage';
import NoPage from './no-page/NoPage';
import RecipePage from './recipe/RecipePage';
import RecipesProvider from './recipes-provider/RecipesProvider';

const App = () => {
  return (
    <div className="App">
      <RecipesProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recept/:id" element={<RecipePage />} />
            <Route path="/recept/" element={<RecipesPage />} />
            <Route path="artiklar" element={<ArticlesPage />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </RecipesProvider>
    </div>
  );
}

export default App;
