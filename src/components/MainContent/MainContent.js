/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleUser,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

const MainContent = (props) => {
    return (
        <div>
          <div>
            <nav class="navbar ">
              <div class="container-fluid d-flex">
                <form class="d-flex">
                  <button class="btn" type="submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                  </button>
                  <input
                    class="me-2"
                    type="search"
                    placeholder="Search for something.."
                    aria-label="Search"
                    style={{ border: "none", backgroundColor: "#f3f3f4" }}
                  />
                </form>
                <div className="d-flex">
                  <div className="">
                    <span className="m-2">
                      <FontAwesomeIcon icon={faCircleUser} />
                    </span>
                    Hi, Haris
                  </div>
                  <div className="ms-4">
                    <FontAwesomeIcon icon={faBell} />
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="container-fluid mt-2 mx-0">
            <div>
              <h2>Manager Dashboard</h2>
            </div>
            <div>Home / Manger Dashboard</div>
          </div>
          <div className="container-fluid d-flex">
            <div className="row w-100 d-flex">
            <div className="w-50 col-lg-6 col-md-12 col-sm-12">
              <div class="my-3 p-3 bg-body rounded shadow-sm">
                <h6 class="border-bottom pb-2 mb-0">DRIVE THESE GOALS</h6>
                <div class="d-flex text-muted pt-3">
                  <svg
                    class="bd-placeholder-img flex-shrink-0 me-2 rounded"
                    width="32"
                    height="32"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: 32x32"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#007bff"></rect>
                    <text x="50%" y="50%" fill="#007bff" dy=".3em">
                      32x32
                    </text>
                  </svg>
                  <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
                    <div class="d-flex justify-content-between">
                      <strong class="text-gray-dark">Full Name</strong>
                      <a href="#">Follow</a>
                    </div>
                    <span class="d-block">@username</span>
                  </div>
                </div>
                <div class="d-flex text-muted pt-3">
                  <svg
                    class="bd-placeholder-img flex-shrink-0 me-2 rounded"
                    width="32"
                    height="32"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: 32x32"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#007bff"></rect>
                    <text x="50%" y="50%" fill="#007bff" dy=".3em">
                      32x32
                    </text>
                  </svg>
                  <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
                    <div class="d-flex justify-content-between">
                      <strong class="text-gray-dark">Full Name</strong>
                      <a href="#">Follow</a>
                    </div>
                    <span class="d-block">@username</span>
                  </div>
                </div>
                <div class="d-flex text-muted pt-3">
                  <svg
                    class="bd-placeholder-img flex-shrink-0 me-2 rounded"
                    width="32"
                    height="32"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: 32x32"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#007bff"></rect>
                    <text x="50%" y="50%" fill="#007bff" dy=".3em">
                      32x32
                    </text>
                  </svg>
                  <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
                    <div class="d-flex justify-content-between">
                      <strong class="text-gray-dark">Full Name</strong>
                      <a href="#">Follow</a>
                    </div>
                    <span class="d-block">@username</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-50 col-lg-6 col-md-12 col-sm-12">
              <div class="my-3 p-3 bg-body rounded shadow-sm">
                <h6 class="border-bottom pb-2 mb-0">MASTER THE PROCESS</h6>
                <div class="d-flex text-muted pt-3">
                  <svg
                    class="bd-placeholder-img flex-shrink-0 me-2 rounded"
                    width="32"
                    height="32"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: 32x32"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#007bff"></rect>
                    <text x="50%" y="50%" fill="#007bff" dy=".3em">
                      32x32
                    </text>
                  </svg>
                  <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
                    <div class="d-flex justify-content-between">
                      <strong class="text-gray-dark">Full Name</strong>
                      <a href="#">Follow</a>
                    </div>
                    <span class="d-block">@username</span>
                  </div>
                </div>
                <div class="d-flex text-muted pt-3">
                  <svg
                    class="bd-placeholder-img flex-shrink-0 me-2 rounded"
                    width="32"
                    height="32"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: 32x32"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#007bff"></rect>
                    <text x="50%" y="50%" fill="#007bff" dy=".3em">
                      32x32
                    </text>
                  </svg>
                  <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
                    <div class="d-flex justify-content-between">
                      <strong class="text-gray-dark">Full Name</strong>
                      <a href="#">Follow</a>
                    </div>
                    <span class="d-block">@username</span>
                  </div>
                </div>
                <div class="d-flex text-muted pt-3">
                  <svg
                    class="bd-placeholder-img flex-shrink-0 me-2 rounded"
                    width="32"
                    height="32"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: 32x32"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#007bff"></rect>
                    <text x="50%" y="50%" fill="#007bff" dy=".3em">
                      32x32
                    </text>
                  </svg>
                  <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
                    <div class="d-flex justify-content-between">
                      <strong class="text-gray-dark">Full Name</strong>
                      <a href="#">Follow</a>
                    </div>
                    <span class="d-block">@username</span>
                  </div>
                </div>
              </div>
            </div>
            </div>
            
          </div>
          <div>
            <div class="my-3 p-3 bg-body rounded shadow-sm">
              <h6 class="border-bottom pb-2 mb-0">
                ALIGIN AND ENABLE RESOURCES
              </h6>
              <div class="d-flex text-muted pt-3">
                <svg
                  class="bd-placeholder-img flex-shrink-0 me-2 rounded"
                  width="32"
                  height="32"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: 32x32"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#007bff"></rect>
                  <text x="50%" y="50%" fill="#007bff" dy=".3em">
                    32x32
                  </text>
                </svg>
                <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
                  <div class="d-flex justify-content-between">
                    <strong class="text-gray-dark">Full Name</strong>
                    <a href="#">Follow</a>
                  </div>
                  <span class="d-block">@username</span>
                </div>
              </div>
              <div class="d-flex text-muted pt-3">
                <svg
                  class="bd-placeholder-img flex-shrink-0 me-2 rounded"
                  width="32"
                  height="32"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: 32x32"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#007bff"></rect>
                  <text x="50%" y="50%" fill="#007bff" dy=".3em">
                    32x32
                  </text>
                </svg>
                <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
                  <div class="d-flex justify-content-between">
                    <strong class="text-gray-dark">Full Name</strong>
                    <a href="#">Follow</a>
                  </div>
                  <span class="d-block">@username</span>
                </div>
              </div>
              <div class="d-flex text-muted pt-3">
                <svg
                  class="bd-placeholder-img flex-shrink-0 me-2 rounded"
                  width="32"
                  height="32"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: 32x32"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#007bff"></rect>
                  <text x="50%" y="50%" fill="#007bff" dy=".3em">
                    32x32
                  </text>
                </svg>
                <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
                  <div class="d-flex justify-content-between">
                    <strong class="text-gray-dark">Full Name</strong>
                    <a href="#">Follow</a>
                  </div>
                  <span class="d-block">@username</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default MainContent