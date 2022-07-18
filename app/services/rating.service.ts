import axios from 'api/interceptors';
import { getRatingsUrl } from 'config/api.config';

import { IProfileInput } from '@/components/screens/profile/profile.interface';

import { IUser } from '@/shared/types/user.types';

export const RatingService = {
	async setRating(movieId: string, value: number) {
		return axios.post<string>(getRatingsUrl(`/set-rating`), { movieId, value });
	},

	async getByUserMovie(movieId: string) {
		return axios.get<number>(getRatingsUrl(`/${movieId}`));
	},
	
};
