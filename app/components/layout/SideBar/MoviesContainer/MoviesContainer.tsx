import dynamic from 'next/dynamic';
import React, { FC } from 'react';

import FavoriteMovies from './FavoriteMovies/FavoriteMovies';
import PopularMovies from './PopularMovie/PopularMovies';

const DynamicFavoritesMovies = dynamic(
	() => import('./FavoriteMovies/FavoriteMovies'),
	{
		ssr: false,
	}
);

const MoviesContainer: FC = () => {
	return (
		<div>
			<PopularMovies />
			<DynamicFavoritesMovies />
		</div>
	);
};

export default MoviesContainer;
