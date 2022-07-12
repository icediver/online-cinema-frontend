import MaterialIcon from '@/components/ui/MaterialIcon';
import React from 'react';
import { Md12Mp } from 'react-icons/md';
import GenreMenu from './genres/GenreMenu';
import Menu from './Menu';
import { firstMenu, userMenu } from './menu.data';

const MenuContainer = () => {
	return (
		<div>
			<Menu menu={firstMenu}/>
			<GenreMenu />
			<Menu menu={{ title: 'General', items: [] }}/>
			
		</div>
	)
}

export default MenuContainer;