import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Backup from '../assets/images/backup.webp';

export const MovieDetail = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : Backup;

  useEffect(() => {
    async function fetchMovie() {
      const response =
        await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=d68cc6c72f0ddedc0897800df3b28c35
`);
      const result = await response.json();
      setMovie(result);
      console.log(result);
    }
    fetchMovie();
  }, []);

  