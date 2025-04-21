function BotCard({ bot, onClick }) {
    return (
      <div className="bot-card" onClick={onClick}>
        <img src={bot.avatar_url} alt={bot.name} />
        <h3>{bot.name}</h3>
        <p><strong>Class:</strong> {bot.bot_class}</p>
        <p><strong>Catchphrase:</strong> {bot.catchphrase}</p>
        <p>❤️ {bot.health} 💥 {bot.damage} 🛡️ {bot.armor}</p>
      </div>
    );
  }
  
  export default BotCard;
  