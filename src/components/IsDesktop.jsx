import { useState, useEffect } from 'react';

function useIsDesktop(query = '(min-width: 1024px)') {
  const [isDesktop, setIsDesktop] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleResize = () => setIsDesktop(mediaQuery.matches);

    // Добавляем слушатель
    mediaQuery.addListener(handleResize);
    // Вызываем обработчик сразу же для инициализации
    handleResize();

    // Убираем слушатель при размонтировании компонента
    return () => mediaQuery.removeListener(handleResize);
  }, [query]);

  return isDesktop;
}
export default useIsDesktop;
