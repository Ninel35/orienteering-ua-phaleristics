import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import css from "./NewsDetailsPage.module.css";
import Slider from "../../components/Slider/Slider";
import Showdown from "showdown";
import parse from "html-react-parser";

const NewsDetailsPage = () => {
  const { newsId } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const backLink = useRef(location.state?.backLink ?? "/news");

  const getDetails = useCallback(async (id) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "/.netlify/functions/fetchSingleLatestNews",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch post details");
      }

      const postData = await response.json();
      let converter = new Showdown.Converter();
      let text = postData.text;
      postData.text = parse(
        converter.makeHtml(text || "").replace(/href/g, "target='_blank' href")
      );

      setData(postData);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    newsId && getDetails(newsId.trim());
  }, [newsId, getDetails]);

  return (
    <>
      {isLoading && <div>Завантаження... </div>}
      {error && <div>Виникла помилка</div>}
      {data && (
        <>
          <Link to={backLink.current} className={css.backLink}>
            повернутись
          </Link>
          <h2 className={css.title}>{data.title}</h2>
          <div className={css.content}>
            <Slider data={data.photo} />
            <p className={css.text}>{data.text}</p>
          </div>
        </>
      )}
    </>
  );
};

export default NewsDetailsPage;
