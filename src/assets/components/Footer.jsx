const Footer = (props) => {
  return (
    <p className="footer">
      Made with<span>React</span>at <span>Le Reacteur </span>By
      <span>{props.name}</span>
    </p>
  );
};

export default Footer;
