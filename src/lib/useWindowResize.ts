import { useEffect, useState } from 'react';
import { debounce } from '@/lib/debounce';

function useWindowResize() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  // Debounced resize handler
  const debouncedOnResize = debounce(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, 500);

  useEffect(() => {
    window.addEventListener('resize', debouncedOnResize);
    return () => window.removeEventListener('resize', debouncedOnResize);
  }, []);

  return [width, height];
}

export { useWindowResize };
