let score = 0;
let wicket = 0;
let ballWiseResult = [];
let hit = 0;
let inputRef = React.createRef();

function addScore(num) {
  hit = num;

  rootElement.render(<App />);
}
function addWicket() {
  hit = "W";

  rootElement.render(<App />);
}

function handleSubmit(event) {
  event.preventDefault();
  if (hit == "W" && wicket < 10) {
    wicket += 1;
  } else if (wicket < 10) {
    score += hit;
  }
  ballWiseResult.unshift(<span>{`${hit},${inputRef.current.value}`}</span>);
  hit = 0;
  inputRef.current.value = "";
  rootElement.render(<App />);
}

const ScoreButtons = () => (
  <div>
    <button onClick={() => addScore(0)}>0</button>
    <button onClick={() => addScore(1)}>1</button>
    <button onClick={() => addScore(2)}>2</button>
    <button onClick={() => addScore(3)}>3</button>
    <button onClick={() => addScore(4)}>4</button>
    <button onClick={() => addScore(5)}>5</button>
    <button onClick={() => addScore(6)}>6</button>
    <button onClick={() => addWicket()}>Wicket</button>
  </div>
);

const Result = () => (
  <div>
    {ballWiseResult.map((res, index) => (
      <>
        {index % 6 === 0 ? <br /> : null}
        <span key={index}>{res === 0 ? <strong>.</strong> : res}</span>
        &nbsp;&nbsp;&nbsp;
      </>
    ))}
  </div>
);

const Form = () => (
  <form onSubmit={handleSubmit}>
    <input value={hit} />
    <input ref={inputRef} placeholder="Enter a comment" />
    <button>Submit</button>
  </form>
);

const App = () => (
  <>
    <h1>Score Keeper</h1>
    <h2>
      Score: {score}/{wicket}
    </h2>
    <ScoreButtons />
    <br />
    <Form />
    <hr />
    <div>
      {ballWiseResult.map((res, index) => (
        <p key={index}>{res}</p>
      ))}
    </div>
  </>
);
const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
