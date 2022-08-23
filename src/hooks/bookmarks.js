import { useContext } from 'react';
import { BookmarksContext } from '../context';

function useBookmarks() {
	return useContext(BookmarksContext);
}

export default useBookmarks;
