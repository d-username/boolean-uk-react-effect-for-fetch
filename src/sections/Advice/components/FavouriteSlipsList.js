export default function FavouriteSlipsList({ favourites }) {
  return (
    <section class="favourtite-slips-list">
      <h3>Favourite Advice Slips</h3>
      <ul>
        {favourites.map((advice, index) => {
          return <li key={index}>{advice}</li>;
        })}
      </ul>
    </section>
  );
}
