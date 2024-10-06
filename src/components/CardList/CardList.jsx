import { useEffect } from "react";
import CardItem from "../CardItem/CardItem"
import css from "./CardList.module.css"
import {useDispatch, useSelector} from  "react-redux"
import { fetchNewses } from "../../redux/articleSlice";

const CardList =  () => {
  const news = useSelector((state) => state.news)
  const dispatch = useDispatch()
  useEffect(()=>{
  dispatch(fetchNewses())
  }, [])
  
 return <ul className={css.listCard}>
      {news.loading && <div>Loading</div>}
      {!news.loading && news.error ? <div>Something went wrong: {news.error}</div> : null}
      {!news.loading && news.newses.length ? news.newses.map((result) => {
        console.log(result)
        return <CardItem result={result} key={result.id}/>}) : null}
    </ul>
}

export default CardList