// _app.js or _app.tsx
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toast({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default Toast;
