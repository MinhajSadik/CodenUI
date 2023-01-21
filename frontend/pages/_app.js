import 'bootstrap/dist/css/bootstrap.css';
import AppProvider from '../src/providers/AppProvider';
import '../styles/globals.css';

// const myFont = localFont({ src: '../src/assets/fonts/EudoxusSans-Medium.woff2' })

// const myFont = localFont({
//   src: [
//     {
//       path: '../src/assets/fonts/EudoxusSans-Regular.woff2',
//       weight: '500',
//       style: 'normal',
//     },
//     {
//       path: '../src/assets/fonts/EudoxusSans-Bold.woff2',
//       weight: '700',
//       style: 'normal',
//     },
//   ],
// })


export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}
