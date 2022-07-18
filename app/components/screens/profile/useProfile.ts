import { UserService } from '@/services/user.service';
import { getKeys } from '@/utils/object/getKeys';
import { toastError } from '@/utils/toast-error';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';
import { IProfileInput } from './profile.interface';

export const useProfile = (setValue: UseFormSetValue<IProfileInput>) => {
	const { isLoading } = useQuery(
		'profile',
		() => UserService.getProfile(),
		{
			onSuccess: ({ data }) => {
				setValue('email', data.email)
			},
			onError: (error) => {
				toastError(error, 'Get Profile');
			},
		}
	);
	const { mutateAsync } = useMutation(
		'update user',
		(data: IProfileInput) => UserService.updateProfile(data),
		{
			onError: (error) => {
				toastError(error, 'Gen User');
			},
			onSuccess: () => {
				toastr.success('Update profile', 'update was successful');
			},
		}
	);
	const onSubmit: SubmitHandler<IProfileInput> = async (data) => {
		await mutateAsync(data);
	};

	return { onSubmit, isLoading };
};