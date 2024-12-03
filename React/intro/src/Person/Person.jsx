import "./Person.css";

const Person = (props) => {
    return (
        <div className="card">
            <img src={props.source} alt="img" className="image" />
            <h1 className="title">{props.name}</h1>
        </div>
    );
};

export default Person;
