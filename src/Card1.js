import React from "react";

const Card1 = () => {
  const data = [
    {
      check: true,
      name: "Single User",
    },
    {
      check: true,
      name: "5GB Storage",
    },
    {
      check: true,
      name: "Unlimited Private Projects",
    },
  ];
  return (
    // <!-- Free Tier -->
    <div class="col-lg-4">
      <div class="card mb-5 mb-lg-0">
        <div class="card-body">
          <h5 class="card-title text-muted text-uppercase text-center">Free</h5>
          <h6 class="card-price text-center">
            $0<span class="period">/month</span>
          </h6>
          <hr />
          <ul class="fa-ul">
            {data.map((dt) => {
              return (
                <li>
                  <span class="fa-li">
                    <i class="fas fa-check"></i>
                  </span>
                  {dt.name}
                </li>
              );
            })}
            {/* <li>
              <span class="fa-li">
                <i class="fas fa-check"></i>
              </span>
              Single User
            </li>
            <li>
              <span class="fa-li">
                <i class="fas fa-check"></i>
              </span>
              5GB Storage
            </li> */}
            {/* <li>
              <span class="fa-li">
                <i class="fas fa-check"></i>
              </span>
              Unlimited Public Projects
            </li>
            <li>
              <span class="fa-li">
                <i class="fas fa-check"></i>
              </span>
              Community Access
            </li>
            <li class="text-muted">
              <span class="fa-li">
                <i class="fas fa-times"></i>
              </span>
              Unlimited Private Projects
            </li>
            <li class="text-muted">
              <span class="fa-li">
                <i class="fas fa-times"></i>
              </span>
              Dedicated Phone Support
            </li>
            <li class="text-muted">
              <span class="fa-li">
                <i class="fas fa-times"></i>
              </span>
              Free Subdomain
            </li>
            <li class="text-muted">
              <span class="fa-li">
                <i class="fas fa-times"></i>
              </span>
              Monthly Status Reports
            </li> */}
          </ul>
          <div class="d-grid">
            <a href="#" class="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
