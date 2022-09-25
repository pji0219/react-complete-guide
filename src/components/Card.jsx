import './Card.css';

// children props를 사용해서 재사용할 수 있는 래퍼 컴포넌트를 만듦
function Card(props) {
  // const classes = props.className + 'card';
  const classes = `card ${props.className}`;

  return <div className={classes}>{props.children}</div>;
}

export default Card;
