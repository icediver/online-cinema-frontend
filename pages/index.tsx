import { errorCatch } from 'api/api.helpers';
import { getActorUrl, getMovieUrl } from 'config/url.config';
import type { GetStaticProps, NextPage } from 'next';

import Home from '@/screens/home/Home';

import { IHome } from '@/components/screens/home/home.interface';
import { IGalleryItem } from '@/components/ui/gallery/gallery.interface';
import { ISlide } from '@/components/ui/slider/slider.interface';

import { ActorService } from '@/services/actor.service';
import { MovieService } from '@/services/movie.service';

// import { IGalleryItem } from '@/components/ui/gallery/gallery.types';
// import { ISlide } from '@/components/ui/slider/slider.types';
import { getGenresList } from '@/utils/movie/getGenresList';

const HomePage: NextPage<IHome> = ({ slides, actors, trendingMovies }) => {
	return (
		<Home slides={slides} actors={actors} trendingMovies={trendingMovies} />
	);
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MovieService.getAll();

		const slides: ISlide[] = movies.slice(0, 3).map((m) => ({
			_id: m._id,
			link: getMovieUrl(m.slug),
			bigPoster: m.bigPoster,
			subtitle: getGenresList(m.genres),
			title: m.title,
		}));

		const { data: dataActors } = await ActorService.getAll();
		const actors: IGalleryItem[] = dataActors.slice(0, 7).map((a) => ({
			name: a.name,
			posterPath: a.photo,
			link: getActorUrl(a.slug),
			content: {
				title: a.name,
				subTitle: `+${a.countMovies} movies`,
			},
		}));
		const dataTrendingMovies = await MovieService.getMostPopularMovies();

		const trendingMovies: IGalleryItem[] = dataTrendingMovies
			.slice(0, 7)
			.map((m) => ({
				name: m.title,
				posterPath: m.poster,
				link: getMovieUrl(m.slug),
			}));

		return {
			props: {
				slides,
				actors,
				trendingMovies,
			} as IHome,
		};
	} catch (error) {
		console.log(errorCatch(error));

		return {
			props: {
				slides: [],
				actors: [],
				trendingMovies: [],
			} as IHome,
		};
	}
};

export default HomePage;
