import "./Card.css";
import Img from "../Img/Img";
import Title from "../Text/Title";
import Info from "../Text/Info";
import Button from "../Button/Button";

const Card = ({ source, title, info }) => {
    return (
        <div className="container">
            <Img source={source} />
            <div className="contains">
                <Title title={title} />
                <Info info={info} />
            </div>
            <div className="buttons">
                <Button name={"SHARE"} />
                <Button name={"LEARN MORE"} />
            </div>
        </div>
    );
};

export default Card;
