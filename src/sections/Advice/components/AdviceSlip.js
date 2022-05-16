export default function AdviceSlip({ advice, saveAdvice, getNewAdvice }) {
  return (
    <section class="adivce-slip">
      <h3>Advice of The Day</h3>
      <p>{advice}</p>
      <button onClick={getNewAdvice}>Get More Advice</button>
      <button onClick={saveAdvice}>Save to Favourties</button>
    </section>
  );
}
