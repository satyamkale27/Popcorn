const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};
const StarontainerStyle = {
  display: "flex",
  gap: "4px",
};
const textStyle = {
  lineHeight: "1",
  margin: "0",
};
export default function StarRating({ MaxRating = 5 }) {
  // if prop not passed then MaxRating default will be 5 //
  return (
    <div style={containerStyle}>
      <div style={StarontainerStyle}>
        {Array.from({ length: MaxRating }, (_, i) => (
          <span>s{i + 1}</span>
        ))}
      </div>
      <p style={textStyle}>10</p>
    </div>
  );
}
