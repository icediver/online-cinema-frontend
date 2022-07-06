import { axiosClassic } from 'api/interceptors';
import { getGenresUrl } from 'config/api.contig';

import { IGenre } from '@/shared/types/movie.types';

export const GenreSevice = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		});
	},
};
