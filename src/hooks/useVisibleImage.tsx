import { useState } from 'react';

export const useVisibleImage = <T,>(
  data: T[] | undefined,
  initialCount: number,
  step: number
) => {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const handleShowImages = () => {
    if (visibleCount < (data || []).length) {
      setVisibleCount((prevCount: number) =>
        Math.min(prevCount + step, (data || []).length)
      );
    } else {
      setVisibleCount(initialCount);
    }
  };
  const isAllVisible = visibleCount >= (data || []).length;
  const visibleData = (data || []).slice(0, visibleCount);
  return {
    visibleData,
    handleShowImages,
    isAllVisible
  };
};
