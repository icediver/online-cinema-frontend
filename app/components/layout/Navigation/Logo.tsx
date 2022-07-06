import logoImage from '@/assets/images/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

const Logo: FC = () => {
	return (
		<Link href="/">
			<a className="px-layout mb-10 block">
				<Image
					src={logoImage}
					width={247}
					height={34}
					alt="Online cinema"
					draggable={false}
				/>
			</a>
		</Link>
	);
};

export default Logo;
