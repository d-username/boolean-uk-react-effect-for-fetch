import SubjectList from "./SubjectList";

export default function ArtListitem({ item }) {
  return (
    <li>
      <div class="frame">
        <img
          src={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
          alt="artwork"
        />
      </div>
      <h3>{item.title}</h3>
      <p>Artist: {item.artist_title}</p>
      <h4>Artistic Subjects:</h4>
      <ul className="subject-list">
        {item.subject_titles.map((title, index) => {
          return <SubjectList title={title} key={index} />;
        })}
      </ul>
    </li>
  );
}
