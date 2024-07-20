import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar-client">
      <div className="sidebar-head d-flex align-items-center justify-content-between">
        <img src="assets/logobee.jpg" alt="Avatar" width="80" />
        <div>
          <div className="greeting">Xin chào</div>
        </div>
      </div>
      <nav className="sidebar-nav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Trang chủ</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Giao dịch</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Ngân sách</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Hồ Sơ Người Dùng</a>
          </li>
        </ul>
      </nav>
      <div className="offcanvas offcanvas-start sidebar-mobile" tabIndex="-1" id="sidebar" aria-labelledby="sidebarLabel">
        <div className="sidebar-head d-flex align-content-center justify-content-between">
          <div className="d-flex w-100 align-items-center justify-content-between">
            <button type="button" className="btn-close text-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Hồ Sơ Người Dùng</a>
            </li>
            <li className="nav-item">
              <button className="nav-link text-white">Đăng xuất</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
