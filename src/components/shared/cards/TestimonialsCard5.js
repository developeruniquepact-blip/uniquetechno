const TestimonialsCard5 = ({ testimonial, type }) => {
  const { authorName, authorDesig, desc, img, logoImg, logoImgLight } =
    testimonial ? testimonial : {};
  return (
    <div
      className={`testimonial-item ${
        type === 2 ? "h8-testimonial-item" : "style-6"
      }`}
    >
      <div className="testimonial-content">
        <div className="author-rating">
          <div className="star-ratings">
            <div className="fill-ratings" style={{ width: "100%" }}>
              <span>★★★★★</span>
            </div>
            <div className="empty-ratings">
              <span>★★★★★</span>
            </div>
          </div>
        </div>
        <div className="desc">
          <p>
            “An excellent course for anyone serious about a career in digital
            marketing. The lessons were clear, and the application of concepts
            through assignments was highly effective.”
          </p>
        </div>
      </div>     
      <div className="tj-testimonial-author">
        <div className="author-images">
          <img
            src={img ? img : "/images/testimonial/h1-test-1.webp"}
            alt="Images"
          />
        </div>
        <div className="author-content">
          <div className="author-text">
            <h4 className="author-name">{authorName}</h4>
            <span className="sub-title">{authorDesig}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard5;
