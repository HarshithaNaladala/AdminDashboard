import { useEffect } from 'react';

export default function WindowResizeUseEffect(callback) {
  useEffect(() => {
    const handleResize = () => {
      callback();
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [callback]);
}