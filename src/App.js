import { TextField } from "@material-ui/core";
import { exampleString } from "./constants/constants";
import "./App.css";
import { formatValue } from "./logic/logic";

function App() {
  const onStringEntered = (e) => {
    const {
      cSharpFormatedValue,
      jsFormatedValue,
      jsLintFormatedValue,
    } = formatValue(e.target.value);
    document.getElementById("output-cs").textContent = cSharpFormatedValue;
    document.getElementById("output-js").textContent = jsFormatedValue;
    document.getElementById("output-jslint").textContent = jsLintFormatedValue;
  };
  return (
    <div className="App">
      <div id="input-container">
        <div id="input-header-div">
          <header>FetchXML formatter</header>
        </div>
        <div id="input-div">
          <TextField
            id="input"
            variant="outlined"
            multiline={true}
            rows={15}
            rowsMax={15}
            placeholder={exampleString}
            autoFocus
            fullWidth
            onChange={onStringEntered}
          />
        </div>
        <div id="input-contact-div">
          <header>FetchXML formatter</header>
        </div>
      </div>
      <div id="output-container">
        <div id="output-cs-div">
          <TextField
            id="output-cs"
            variant="outlined"
            placeholder="C# formatted Syntax"
            disabled
            fullWidth
            multiline={true}
            rows={14}
            rowsMax={14}
            inputProps={{ style: { fontSize: 10 } }}
          />
        </div>
        <div id="output-js-div">
          <TextField
            id="output-js"
            variant="outlined"
            placeholder="JavaScript formatted Syntax"
            disabled
            fullWidth
            multiline={true}
            rows={14}
            rowsMax={14}
            inputProps={{ style: { fontSize: 10 } }}
          />
        </div>
        <div id="output-jslint-div">
          <TextField
            id="output-jslint"
            variant="outlined"
            placeholder="JavaScript formatted JSlint Safe Syntax"
            disabled
            fullWidth
            multiline={true}
            rows={14}
            rowsMax={14}
            inputProps={{
              style: { fontSize: 10, overflow: "scroll", wrap: "off" },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
