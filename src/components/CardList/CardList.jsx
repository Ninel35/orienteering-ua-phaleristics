import CardItem from "../CardItem/CardItem"
import css from "./CardList.module.css"
import { useSelector} from  "react-redux"

const CardList =  ({location}) => {
  const news = useSelector((state) => state.news)
  const filter = useSelector((state)=> state.filter.filter)
  
 return <ul className={css.listCard}>
      {news.loading && <div>Завантаження...</div>}
      {!news.loading && news.error ? <div>Виникла помилка</div> : null}
      {!news.loading && news.newses.length ? news.newses.map((result) => {
        if(filter!==""){
          if(result.categories.includes(filter)){
            return <CardItem result={result} key={result.id} location={location}/>
          }else{
            return null
          }
        }
        return <CardItem result={result} key={result.id} location={location}/>}) : null}
    </ul>
}

export default CardList