import "./Footer.css";
const footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="footer">
      &copy; Copyright <span>{year}</span> Blog company . All Rights Reserved{" "}
    </div>
  );
};
export default footer;
