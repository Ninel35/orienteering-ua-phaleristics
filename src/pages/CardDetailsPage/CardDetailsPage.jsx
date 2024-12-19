import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import css from "./CardDetailsPage.module.css";
import Slider from "../../components/Slider/Slider";
import Showdown from "showdown";
import parse from 'html-react-parser';

const CardDetailsPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const backLink= useRef(location.state?.backLink ?? '/');

  const getDetails = useCallback( async (id) => {
    try {
        const response = await fetchCard(id)
       let converter = new Showdown.Converter()
        let text = response.text
        response.text = parse(converter.makeHtml(text || "").replace(/href/g, "target='_blank' href"));       
    
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
  <Link to={backLink.current} className={css.backLink}>повернутись</Link>
  <h2 className={css.title}>{data.title}</h2>
  <div className={css.content}>
    <Slider data={data.photo} desc={data.imageDescriptions}/>
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
