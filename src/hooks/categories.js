import { useContext } from 'react';
import { CategoriesContext } from '../context';

function useCategories() {
	return useContext(CategoriesContext);
}

export default useCategories;
