import React from "react";
import { Panel, Loader, Button } from "rsuite";
import { useNavigate } from "react-router-dom";

const NewsCard = ({ loading, error, news }) => {
  const navigate = useNavigate();

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
                height: 450,
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
              </Panel>
            </Panel>
          ))}
        </>
      )}
    </div>
  );
};

export default NewsCard;
