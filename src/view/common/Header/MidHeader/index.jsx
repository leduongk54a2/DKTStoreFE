import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PATH_IMAGE } from "../../../../common/constants";
import ROUTES from "../../../../router";
const logo =
  PATH_IMAGE + "public/100/047/633/themes/517833/assets/logo221b.png";

function MidHeader() {
  let navigate = useNavigate();
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="mid-header">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-3 logo ">
            {" "}
            <div onClick={() => navigate(ROUTES.HOME)}>
              {" "}
              <img
                src={logo}
                alt="DKT Store"
                title="DKT Store"
                className="img-responsive"
              />{" "}
            </div>{" "}
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 header-search">
            <input
              onChange={(e) => setInputSearch(e.target.value)}
              type="text"
              value={inputSearch}
              placeholder="Nhập từ khóa tìm kiếm..."
              name="query"
              className="input-control"
            />
            <button type="submit">
              {" "}
              <i className="fa fa-search"></i>{" "}
            </button>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 mini-cart">
            <div className="wrapper-mini-cart">
              {" "}
              <span className="icon">
                <i className="fa fa-shopping-cart"></i>
              </span>{" "}
              <a href="cart">
                {" "}
                <span className="mini-cart-count">0</span> sản phẩm{" "}
                <i className="fa fa-caret-down"></i>
              </a>
              <div className="content-mini-cart">
                <div className="has-items">
                  <ul className="list-unstyled"></ul>
                  <div className="total clearfix">
                    {" "}
                    <span className="pull-left">Tổng tiền:</span>{" "}
                    <span className="pull-right total-price">0₫</span>{" "}
                  </div>
                  <a href="checkout" className="button">
                    Thanh toán
                  </a>{" "}
                </div>
                <div className="no-item">
                  <p style={{ textAlign: "left" }}>
                    Không có sản phẩm nào trong giỏ hàng của bạn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MidHeader;
