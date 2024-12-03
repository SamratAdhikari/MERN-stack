import "./App.css";
import Player from "./Player/Player";

function App() {
    return (
        <div className="container">
            {/* <Person
                source={
                    "https://static.dc.com/dc/files/default_images/Char_Thumb_Batman_20190116_5c3fc4b40fae42.85141247.jpg"
                }
                name={"Batman"}
            /> */}

            <Player
                source={
                    "https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-of-portugal-reacts-as-he-looks-on-during-news-photo-1725633476.jpg"
                }
                name={"Cristiano Ronaldo"}
            />

            <Player
                source={
                    "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2019/05/02/2578108-53460870-2560-1440.jpg"
                }
                name={"Iker Casillas"}
            />
        </div>
    );
}

export default App;
