export default function Cell({ onClick, cell }) {
  return (
    <div className="cell" onClick={() => onClick()}>
      {cell}
    </div>
  );
}
