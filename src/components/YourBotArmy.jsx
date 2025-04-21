import BotCard from "./BotCard";

function YourBotArmy({ army, onRelease, onDischarge }) {
  return (
    <div className="your-army">
      <h2>Your Bot Army</h2>
      <div className="card-grid">
        {army.map(bot => (
          <div key={bot.id} className="army-card">
            <BotCard bot={bot} onClick={() => onRelease(bot)} />
            <button className="discharge" onClick={() => onDischarge(bot)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;