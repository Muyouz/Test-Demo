const useDebounce = (value, delay) => {
  const [num, setNum] = useState(value)

  useEffect(
    () => {
        let timeId = setTimeout(() => {setNum(value)}, delay)
        return () => clearTimeout(timeId)
    }
  ,
  [value, delay]
)

  return num
};

const Counter = () => {
  const [value, setValue] = React.useState(0);
  const lastValue = useDebounce(value, 500);

  return (
    <div>
      <p>
        Current: {value} - Debounced: {lastValue}
      </p>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  );
};

ReactDOM.render(<Counter />, document.getElementById('root'));