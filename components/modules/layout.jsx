import { useState, useEffect } from 'react';
import { useAppContext } from 'context/state';

export default function Layout({ children }) {
  const appContext = useAppContext();
  const [disableView, setDisableView] = useState(false);

  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window;
    if (appContext.mobileMenu && width <= 850) {
      setDisableView(true);
    } else {
      setDisableView(false);
    }
  }, [appContext.mobileMenu]);

  return <div className={`${disableView ? `pointer-events-none` : ''}`}>{children}</div>;
}
