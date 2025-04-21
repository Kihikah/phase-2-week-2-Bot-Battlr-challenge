function BotSpecs({ bot, setSelectedBot, onEnlist }) {
    return (
      <div className="bot-specs">
        <button onClick={() => setSelectedBot(null)}>Back</button>
        <img src={bot.avatar_url} alt={bot.name} />
        <h2>{bot.name}</h2>
        <p>{bot.catchphrase}</p>
        <p>❤️ {bot.health} 💥 {bot.damage} 🛡️ {bot.armor}</p>
        <p><strong>Class:</strong> {bot.bot_class}</p>
        <button onClick={() => { onEnlist(bot); setSelectedBot(null); }}>Enlist Bot</button>
      </div>
    );
  }
  
  export default BotSpecs;