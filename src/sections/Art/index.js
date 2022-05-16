import { useEffect, useState } from "react";

import ArtList from "./components/ArtList";

function ArtsSection() {
  const [artData, setArtData] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.artic.edu/api/v1/artworks?fields=title,artist_title,subject_titles,image_id&limit=5"
    )
      .then((res) => res.json())
      .then((parsedData) => setArtData(parsedData.data));
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <ArtList artData={artData} />
    </section>
  );
}

export default ArtsSection;
