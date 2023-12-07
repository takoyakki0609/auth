import { Outlet } from "react-router-dom";
import Header from "../components/Header";
function DefaultLayout() {
  return (
    <div>
      {/* 헤더 */}
      <Header />
      {/* 페이지 */}
      <Outlet />
    </div>
  );
}

export default DefaultLayout;
