import { useEffect, useState } from "react";
import CardItem from "../CardItem/CardItem"
import css from "./CardList.module.css"




 const CardList =  () => {
  const [loading, setLoading] =useState(false)
  const [error, setError] = useState(null)
  const [news, setNews] = useState([])

  const HYGRAPH_ENDPOINT = "";
  
  useEffect(()=>{
    const fetchData = async () => {
    try {
      setLoading(true)
      const response = await fetch(HYGRAPH_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `{
          newses {
            id
            title
            photo {
              url
            }
          }
        }`,
        }),
      })
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
    
      const json = await response.json();
      setNews(json.data.newses.reverse())
    } catch (error) {
      setError('Error fetching data. Please check the console for details.');
    }finally{
      setLoading(false)
    }
    };
    fetchData();
  }, []);
  
 return (
    <ul className={css.listCard}>
      {loading && <div>Loading</div>}
      {error && <div>Something wrong</div>}
    {news.map((result, id) => {
        return <CardItem result={result} key={id}/>
})}
</ul>
  )
}

export default CardList