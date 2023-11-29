import { CONFIG } from "../../../config";

import blogBanner from "../../../assets/blog-images/blog-detail/blog-5.jpg";
import bg from "../../../assets/blog-images/blog-detail/blog-2.jpg";
import tag from "../../../assets/blog-images/blog-detail/tag.jpg";

import Container from "../../UIContainer/container/Container";
import PageBanner from "../../UIContainer/page-banner/PageBanner";
import BlogDetailComments from "./blog-detail-comments/BlogDetailComments";

import "./BlogDetail.scss";


const BlogDetail = () => {
  return (
    <>
      <PageBanner
        background={blogBanner}
        title={"BLOG"}
        firstDirectionPoint={"Home"}
        secondDirectionPoint={"Blog"}
        thirdDirectionPoint={"Blog Detail"}
      />
      <section className="blog__detail">
        <Container>
          <div className="blog__detail__bg">
            <img src={bg} alt="" />
          </div>
          <div className="blog__detail__info">
            <div className="blog__detail__info__head">
              <p>By John Doe</p>
              <p>0 Comments</p>
            </div>
            <p className="blog__detail__info__title">
              POSSESSION SO COMPARISON INQUIETUDE HE CONVICTION
            </p>
            <span>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handfulThere
              are many variations of passages of Lorem Ipsum available, but the
              majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there isn't anything embarrassing hidden in the
              middle of text. All the Lorem Ipsum generators on the Internet
              tend to repeat predefined chunks as necessary, making this the
              first true generator on the Internet. It uses a dictionary of over
              200 Latin words, combined with a handful
            </span>
            <div className="blog__detail__info__center">
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings{" "}
              </p>
            </div>
            <span>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handfulThere
              are many variations of passages of Lorem Ipsum available, but the
              majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there isn't anything embarrassing hidden in the
              middle of text. All the Lorem Ipsum generators on the Internet
              tend to repeat predefined chunks as necessary, making this the
              first true generator on the Internet. It uses a dictionary of over
              200 Latin words, combined with a handful
            </span>
            <div className="blog__detail__info__tags">
              <p>Tags:</p>
              {CONFIG.blogDetailTags.map(({ id, tag }) => {
                return <div key={id}>{tag}</div>;
              })}
            </div>
            <div className="blog__detail__info__author">
              <img src={tag} alt="" />
              <div>
                <p>JOHN DOE</p>
                <span>
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings of the great explorer of the truth,
                </span>
              </div>
            </div>
          </div>
          <BlogDetailComments />
        </Container>
      </section>
    </>
  );
};

export default BlogDetail;
