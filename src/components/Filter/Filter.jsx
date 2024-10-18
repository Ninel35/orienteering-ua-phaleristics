import { useDispatch } from "react-redux";
import css from "./Filter.module.css";
import { setFilterAction } from "../../redux/filterSlice";
const Filter = () => {
  const dispatch = useDispatch();
  function selectCategory(evt) {
    evt.preventDefault();
    if (evt.target === evt.currentTarget) return;

    dispatch(setFilterAction(evt.target.dataset.source))
  }

  return (
    <aside className={css.filter}>
      <ul onClick={selectCategory}>
        <li data-source="ukrainianSummerChampionship">
          Чемпіонати України літні
        </li>
        <li data-source="ukrainianWinterChampionship">
          Чемпіонати України зимові
        </li>
        <li>Українські чемпіонати ДСТ та відомств</li>
        <li>Міжнародні змагання</li>
        <li>Туристичні змагання</li>
        <li>Інші змагання</li>
        <li>
          Змагання по областях України
          <ul>
            <li>Вінницька</li>
            <li>Волинська</li>
            <li>Дніпропетровська</li>
            <li>Донецька</li>
            <li>Житомирська</li>
            <li>Закарпатська</li>
            <li>Запорізька</li>
            <li>Івано-Франківська</li>
            <li>Київська</li>
            <li>Кіровоградська</li>
            <li>Кримська</li>
            <li>Луганська</li>
            <li>Львівська</li>
            <li>Миколаївська</li>
            <li>Одеська</li>
            <li>Полтавська</li>
            <li>Рівненська</li>
            <li>Сумська</li>
            <li>Тернопільська</li>
            <li>Харківська</li>
            <li>Херсонська</li>
            <li>Хмельницька</li>
            <li>Черкаська</li>
            <li>Чернівецька</li>
            <li>Чернігівська</li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default Filter;
