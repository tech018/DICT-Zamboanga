import React, { useEffect } from "react";
import { Panel, Loader, Button } from "rsuite";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { deletenews } from "../../actions/newsActions";
import { useSelector } from "react-redux";

const NewsCard = ({ loading, error, news, userInfo, dispatch }) => {
  const navigate = useNavigate();

  const deleteNews = useSelector((state) => state.deleteNews);
  const {
    loading: loadingDelete,
    error: errorDelete,
    news: newsDelete,
    success,
  } = deleteNews;

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (success) {
      toast.success(newsDelete.message);
    }
  }, [error, newsDelete, success]);

  const handleDelete = (id) => {
    dispatch(deletenews(id));
  };

  return (
    <div className="cardNews">
      {loading ? (
        <Loader size="lg" content="Large" />
      ) : (
        <>
          {news.map((item) => (
            <Panel
              className="newsPanel"
              shaded
              bodyFill
              style={{
                display: "inline-block",
                width: 280,
                textAlign: "center",
                position: "relative",
                marginRight: "0.5rem",
                marginTop: "1.5rem",
                height: userInfo && userInfo ? 360 : 330,
              }}
            >
              <img
                src={`/zamboanga/${item.picture}`}
                style={{ width: "100%" }}
                alt={item.title}
              />

              <Panel header={item.title}>
                <Button
                  style={{
                    width: "100%",
                    marginTop: "0.5rem",
                  }}
                  appearance="primary"
                  onClick={() => navigate(`/news/single/${item.id}`)}
                >
                  Read more
                </Button>
                {userInfo && (
                  <Button
                    onClick={() => handleDelete(item.id)}
                    color="red"
                    appearance="primary"
                    style={{ width: "100%", marginTop: "0.5rem" }}
                  >
                    delete
                  </Button>
                )}
              </Panel>
            </Panel>
          ))}
        </>
      )}
    </div>
  );
};

export default NewsCard;
