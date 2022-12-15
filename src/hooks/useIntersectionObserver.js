import { useEffect, useState } from "react";

// interface Props {
//   element: HTMLElement | null;
//   options?: Options;
// }
//
// interface Options {
//   rootMargin: string;
//   threshold: number;
// }
//
// interface Return {
//   show: boolean;
// }

const defaultOptions = { rootMargin: "0px", threshold: 0.7 };

export const useIntersectionObserver = ({
  element,
  options = defaultOptions,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!element || show) return;

    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];

      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      } else {
        setShow(false);
        observer.disconnect();
      }
    }, options);

    observer.observe(element);
  }, [element]);

  return {
    show,
  };
};
