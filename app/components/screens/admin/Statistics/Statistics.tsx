import { FC } from 'react';

import PopularMovies from '@/components/layout/SideBar/MoviesContainer/PopularMovie/PopularMovies';

import styles from '../Admin.module.scss';
import CountUsers from './CountUsers';
import PopularMovie from './PopularMovie';

const Statistics: FC = () => {
	return (
		<div className={styles.statistics}>
			<CountUsers />
			<PopularMovie/>
		</div>
	);
};

export default Statistics;
