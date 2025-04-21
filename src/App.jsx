import { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import BotSpecs from "./components/BotSpecs";
import SortBar from "./components/SortBar";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [sortBy, setSortBy] = useState("");
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then(res => res.json())
      .then(data => setBots(data));
  }, []);

  const handleEnlist = (bot) => {
    if (!army.find(b => b.bot_class === bot.bot_class)) {
      setArmy([...army, bot]);
    }
  };

  const handleRelease = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id));
  };

  const handleDischarge = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: "DELETE"
    });
    setBots(bots.filter(b => b.id !== bot.id));
    setArmy(army.filter(b => b.id !== bot.id));
  };

  const filteredBots = bots.filter(bot => {
    if (filters.length === 0) return true;
    return filters.includes(bot.bot_class);
  });

  const sortedBots = [...filteredBots].sort((a, b) => {
    if (sortBy === "health") return b.health - a.health;
    if (sortBy === "damage") return b.damage - a.damage;
    if (sortBy === "armor") return b.armor - a.armor;
    return 0;
  });

  return (
    <div className="app">
      <h1 className="title">🤖 Bot Battlr 🤖</h1>
      <YourBotArmy army={army} onRelease={handleRelease} onDischarge={handleDischarge} />
      <SortBar sortBy={sortBy} setSortBy={setSortBy} filters={filters} setFilters={setFilters} />
      {selectedBot ? (
        <BotSpecs bot={selectedBot} setSelectedBot={setSelectedBot} onEnlist={handleEnlist} />
      ) : (
        <BotCollection bots={sortedBots} onSelect={setSelectedBot} />
      )}
    </div>
  );
}

export default App;
