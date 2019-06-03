import React from "react";
import PropTypes from "prop-types";

const GenresList = ({genres, onClick, activeGenre}) => <ul className="catalog__genres-list">
  {genres.map((genre, i) => (
    <li className={`catalog__genres-item ${activeGenre === genre ? `catalog__genres-item--active` : ``}`} key={`genres-${i}`} onClick={() => {
      onClick(genre);
    }}>
      <a href="#" className="catalog__genres-link">
        {genre}
      </a>
    </li>
  ))}
</ul>;

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
  activeGenre: PropTypes.string.isRequired,
};

export default React.memo(GenresList);
