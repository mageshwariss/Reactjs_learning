const newlist = [1, 2, 3, 4, 5];
const rl = newlist.map((value) =>
    React.createElement("li", { key: value }, value)
);
const ul = React.createElement("ul", null, rl);
ReactDOM.render(ul, document.getElementById("root"));

/* const rl = newlist.map((listvalues) => {
    return <li key={listvalues}>{listvalues}</li>;
});
ReactDOM.render(<ul>{rl}</ul>, document.getElementById("root")); */
