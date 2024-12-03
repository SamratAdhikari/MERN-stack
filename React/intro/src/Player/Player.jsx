const Player = (props) => {
    return (
        <div
            style={{
                width: "25rem",
                height: "30rem",
                border: "1px solid grey",
                borderRadius: "0.7rem",
            }}
        >
            <img
                src={props.source}
                alt=""
                style={{
                    width: "100%",
                    height: "80%",
                    objectFit: "cover",
                    borderRadius: "0.7rem 0.7rem 0 0",
                }}
            />
            <h2 style={{ padding: "1rem" }}>{props.name}</h2>
        </div>
    );
};

export default Player;
