export function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    width: "180px",
    height: "35px",
    marginTop: "10px",
  };
  return <div style={styles}></div>;
}
