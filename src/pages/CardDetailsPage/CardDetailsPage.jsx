import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import css from "./CardDetailsPage.module.css";
import Slider from "../../components/Slider/Slider";

const CardDetailsPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const backLink= useRef(location.state?.backLink ?? '/');

  const getDetails = useCallback( async (id) => {
    try {
        const response = await fetchCard(id)
        setData(response)
    } catch (error) {
        setError(error)
    }finally {
        setIsLoading(false)
    }
}, [])

  useEffect(() => {
    id && getDetails(id.trim())
  }, [id, getDetails]);

  console.log(data);

  return data && <>
  <Link to={backLink.current} className={css.backLink}>back</Link>
  <h2 className={css.title}>{data.title}</h2>
  <div className={css.content}>
    <Slider data={data.photo}/>
    <p className={css.text}>{data.text}</p>
  </div>
  </>;
};





const HYGRAPH_ENDPOINT = import.meta.env.VITE_HYGRAPH_ENDPOINT;

async function fetchCard(id = "") {
  return await axios
    .post(
      HYGRAPH_ENDPOINT,
      JSON.stringify({
        query: `query ($id: ID!) {
            news(where: { id: $id }) {
              id
              title
              text
              photo {
                url
              }
              categories
            }
          }`,
          variables: {
            id: id,
          },
}))
    .then((response) => {
      return response.data.data.news;
    });
}

export default CardDetailsPage;
