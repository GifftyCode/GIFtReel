import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetail = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});

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

  return (
    <main>
      <section>
        <div>{setMovie.title}</div>
        <div></div>
      </section>
    </main>
  );
};
