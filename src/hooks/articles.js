import { useContext } from 'react';
import { ArticlesContext } from '../context';

function useArticles() {
	return useContext(ArticlesContext);
}

export default useArticles;
