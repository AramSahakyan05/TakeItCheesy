const HighlightTitle = ({ title }) => {
  let spanCont = `${title
    .split("")
    .filter((char) => char === "o")
    .join("")}`;
  let firstPart = title.split(" ");
  let secPart = firstPart[1].split("o");
  return (
    <h1>
      {`${firstPart[0]} ${secPart[0]}`}
      <span>{spanCont}</span>
      {secPart[2]}
    </h1>
  );
};

export default HighlightTitle;
