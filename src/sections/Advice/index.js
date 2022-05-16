import { useEffect, useState } from "react";

import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";

function AdviceSection() {
  const [advice, setAdvice] = useState("");
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => setAdvice(data.slip.advice));
  }, [advice]);

  const saveAdvice = () => {
    setFavourites([...favourites, advice]);
  };

  const getNewAdvice = () => {
    setAdvice("");
  };

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip
        advice={advice}
        saveAdvice={saveAdvice}
        getNewAdvice={getNewAdvice}
      />
      <FavouriteSlipsList favourites={favourites} />
    </section>
  );
}

export default AdviceSection;
