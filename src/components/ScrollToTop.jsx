import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** 라우트(pathname) 변경 시 항상 상단으로 이동 */
export default function ScrollToTop({ smooth = true }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (smooth) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, smooth]);

  return null;
}