import ArtListItem from "./ArtListItem";

export default function ArtList({ artData }) {
  return (
    <div className="scroll-container">
      <ul className="art-list">
        {artData.map((item, index) => {
          return <ArtListItem item={item} index={index} />;
        })}
      </ul>
    </div>
  );
}
