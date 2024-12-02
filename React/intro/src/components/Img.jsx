const Img = () => {
    const imageStyle = {
        objectFit: "cover",
    };

    return (
        <div>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF0zUgvq_qWUSyywS12xY2jFu_C8ZOekpHzw&s"
                alt="Nietzsche"
                height={600}
                width={400}
                style={imageStyle}
            />
        </div>
    );
};

export default Img;
