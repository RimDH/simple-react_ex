export default function SimpleComponentWithProps({title, message}) {
  return (
    <div>
      <h2>Simple Component with Props</h2>
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
}

