import { Routes, Route } from 'react-router-dom';
import { MovieDetail, MovieList, Search, PageNotFound } from '../pages';

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='' element={<MovieList />} />
        <Route path='movie/:id' element={<MovieDetail />} />
        <Route path='movies/popular' element={<MovieDetail />} />
        <Route path='movies/top' element={<MovieDetail />} />
        <Route path='movies/upcoming' element={<MovieDetail />} />
        <Route path='search' element={<Search />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
};
