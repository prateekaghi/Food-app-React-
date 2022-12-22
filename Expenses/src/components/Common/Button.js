const Button = (props) => {
  return (
    <button onClick={props.onClick} type={props.type}>
      {props.btnLabel}
    </button>
  );
};

export default Button;
