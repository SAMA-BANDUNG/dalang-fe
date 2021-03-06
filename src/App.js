import React from "react";
import AppRouter from "./AppRouter";
import 'antd/dist/antd.css';
import './App.css';
import { Layout } from "antd";
// import Footer from "./components/Footer";
// import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";
// import { PersistGate } from "redux-persist/integration/react";
// import { I18nProvider } from "../_metronic/i18n";
// import { LayoutSplashScreen, MaterialThemeProvider } from "../_metronict";
// import "react-toastify/dist/ReactToastify.css";
// import styles from './App.module.scss';

// export default function App({ store, persistor, basename }) {
//   return (
//     /* Provide Redux store */
//     <Provider store={store}>
//       {/* Asynchronously persist redux stores and show `SplashScreen` while it's loading. */}
//       <PersistGate persistor={persistor} loading={<LayoutSplashScreen />}>
//         {/* Add high level `Suspense` in case if was not handled inside the React tree. */}
//         <React.Suspense fallback={<LayoutSplashScreen />}>
//           {/* Override `basename` (e.g: `homepage` in `package.json`) */}
//           <BrowserRouter basename={basename}>
//             {/*This library only returns the location that has been active before the recent location change in the current window lifetime.*/}
//             <MaterialThemeProvider>
//               {/* Provide `react-intl` context synchronized with Redux state.  */}
//               <I18nProvider>
//                 {/* Render routes with provided `Layout`. */}
//                 <div className={styles.Container}>
//                     <AppRouter />
//                 </div>
//                 <Footer />
//               </I18nProvider>
//             </MaterialThemeProvider>
//           </BrowserRouter>
//         </React.Suspense>
//       </PersistGate>
//     </Provider>
//   );
// }

const App = () => {

  return (
    <Layout>
      <AppRouter/>
    </Layout>
  )
}

export default App;