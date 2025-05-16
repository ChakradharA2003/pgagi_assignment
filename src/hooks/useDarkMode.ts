import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/features/themeSlice';

const useDarkMode = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: any) => state.theme.mode);

  return { mode, toggleTheme: () => dispatch(toggleTheme()) };
};

export default useDarkMode;