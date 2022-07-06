import SearchField from '@/components/ui/search-field/SearchField';
import React, { FC } from 'react';

import styles from './Search.module.scss';
import SearchList from './SearchList/SearchList';
import { useSearch } from './useSearch';

const Search: FC = () => {
	const {isSuccess, data, handleSearch, searchTerm} = useSearch()
	return <div className={styles.wrapper}>
		<SearchField searchTerm={searchTerm} handleSearch={handleSearch}/>
		{isSuccess && <SearchList movies={data || []}/>}
	</div>;
};

export default Search;
