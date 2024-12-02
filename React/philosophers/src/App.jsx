import "./App.css";
import Card from "./components/Card/Card";

function App() {
    return (
        <div className="main">
            <Card
                source="https://fixquotes.com/photo/author/friedrich-nietzsche_7GDfD_800.jpg"
                title="Friedrich Nietzsche"
                info={`Friedrich Nietzsche (1844-1900) was a German philosopher who critiqued traditional morality and religion, famously declaring, "God is dead." His ideas, including the Übermensch and the will to power, profoundly shaped modern thought.`}
            />

            <Card
                source="https://images.squarespace-cdn.com/content/v1/5febb5201c227637fcd668b7/1701304236500-DMGXVJJ7LTC0UZX20UM4/b5e6c917af80f0460d8f5201683fd06d.jpg"
                title="Marcus Aurelius"
                info={`Marcus Aurelius (121-180 CE) was a Roman emperor and Stoic philosopher, known for "Meditations", a guide to ethics and resilience. He embodied Stoic ideals, stressing duty, rationality, and virtue in life's challenges.`}
            />

            <Card
                source="https://dogsmakeeverythingbetter.com/wp-content/uploads/2013/02/diogenes_and_dog.jpg"
                title="Diogenes"
                info={`Diogenes (412-323 BCE) was a Greek philosopher and key figure in Cynicism, known for rejecting materialism and social conventions. He lived simply, famously residing in a barrel, and valued virtue and self-sufficiency above all.`}
            />
        </div>
    );
}

export default App;
