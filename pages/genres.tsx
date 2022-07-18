import { GetStaticProps, NextPage } from 'next';
import { FC } from 'react';

import Collections from '@/components/screens/collections/Collections';
import { ICollection } from '@/components/screens/collections/collections.interface';
import { ICatalog } from '@/components/ui/catalog-movies/catalog.interface';

import { GenreService } from '@/services/genre.service';

import Error404 from './404';

const GenresPage: NextPage<{ collections: ICollection[] }> = ({
	collections,
}) => {
	return Collections ? (
		<Collections collections={collections || []} />
	) : (
		<Error404 />
	);
};

export default GenresPage;

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: collections } = await GenreService.getCollections();

		return {
			props: {
				collections,
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};
