import type { AppProps } from 'next/app';
import '../styles/tailwind.css';
import '../styles/globals.scss';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import appWithTranslation from '../lib/i18n';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DndProvider backend={HTML5Backend}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </Provider>
    </DndProvider>
  );
}

export default appWithTranslation(MyApp);