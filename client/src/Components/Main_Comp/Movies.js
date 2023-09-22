import Cards from './Cards';
import Cards_data from '../APIS_DATA/Cards_data';

const Movies = () => {
  return (
    <>
      <div className="cards">
        { Cards_data.map((e) => (
          <Cards
            naam={e.movie_naam}
            image={e.movie_poster}
            movie={e.watch_link}
          />
        ))}
      </div>
    </>
  );
};

export default Movies;
