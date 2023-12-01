import { Link } from "react-router-dom";

const RecentPost = ({ id, date, image, title }) => {
  return (
    <div className="recent__post" key={id}>
      <div className="recent__post__img">
        <Link to={"/blog-detail"}>
          <img src={image} alt="recent-post" />
        </Link>
      </div>
      <div className="recent__post__desc">
        {/* <p>{getFullDate(date)}</p> */}
        <p>{date}</p>
        <Link to={"/blog-detail"}>
          <span>{title}</span>
        </Link>
      </div>
    </div>
  );
};

// function getFullDate(date) {
//   const { day, month, year } = date;
//   const fullDate = new Intl.DateTimeFormat("en-US", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   }).format(new Date(year, month - 1, day));

//   return fullDate;
// }

export default RecentPost;
