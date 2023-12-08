import "./PageLoading.scss";
import loader from "../../assets/loader/loader.gif";

const PageLoading = () => {
  return (
      <div className="page-loading">
        <div className="page-loading-img">
          <img src={loader} alt="gif" />
        </div>
      </div>
  );
};

export default PageLoading;
