import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import blog_data from "../data/blogGridData.json";
import Layout from "../layout/Layout";
function BlogGridPage() {
  const currentPage = useRouter().pathname;
  useEffect(() => {
    document.body.className = currentPage === "/blog-grid" ? "bg-wight" : "";
  });
  return (
    <Layout>
      <Breadcrumb pageName="Blog" pageTitle="Blog" />
      <div className="blog-grid-area pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-4 gy-5 justify-content-center">
            {blog_data.map((item) => {
              const {
                id,
                image,
                date_day,
                date_month,
                post_author,
                post_title,
                comment_number,
              } = item;
              return (
                <div key={id} className="col-lg-4 col-md-6 col-sm-10 mb-20">
                  <div className="recent-article-wrap">
                    <div className="recent-article-img">
                      <img className="img-fluid" src={image} alt="" />
                      <div className="publish-area d-xl-none d-flex">
                        <Link legacyBehavior href="/blog-grid">
                          <a>
                            <span>{date_day}</span>
                            {date_month}
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="recent-article-content">
                      <div className="recent-article-meta">
                        <div className="publish-area">
                          <Link legacyBehavior href="/blog-grid">
                            <a>
                              <span>{date_day}</span>
                              {date_month}
                            </a>
                          </Link>
                        </div>
                        <ul>
                          <li>
                            <Link legacyBehavior href="/blog-grid">
                              <a>
                                <img
                                  src="assets/images/icon/comment.svg"
                                  alt=""
                                />
                                {comment_number} Comments
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link legacyBehavior href="/blog-grid">
                              <a>
                                <img src="assets/images/icon/user.svg" alt="" />
                                {post_author}
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <h4>
                        <Link legacyBehavior href="/blog-details">
                          <a>{post_title}</a>
                        </Link>
                      </h4>
                      <div className="explore-btn">
                        <Link legacyBehavior href="/blog-details">
                          <a>
                            <span>
                              <img
                                src="assets/images/icon/explore-elliose.svg"
                                alt=""
                              />
                            </span>
                            Explore More
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="col-lg-12 d-flex justify-content-center pt-20">
              <div className="pagination-area">
                <nav aria-label="...">
                  <ul className="pagination">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" tabIndex={-1} />
                    </li>
                    <li className="page-item active" aria-current="page">
                      <a className="page-link" href="#">
                        01
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        02
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        03
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#" />
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogGridPage;
