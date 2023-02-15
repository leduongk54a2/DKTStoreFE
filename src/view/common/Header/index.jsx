import React from "react";

function Header() {
  return (
    <div id="header">
      <div className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6">
              {" "}
              <span>
                <i className="fa fa-phone"></i> (04) 6674 2332
              </span>{" "}
              <span>
                <i className="fa fa-envelope-o"></i>{" "}
                <a href="mailto:support@mail.com">support@mail.com</a>
              </span>{" "}
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 customer">
              {" "}
              <a href="account">
                <i className="fa fa-user"></i> Đăng nhập
              </a>{" "}
              <a href="account/register">
                <i className="fa fa-user-plus"></i> Đăng ký
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
