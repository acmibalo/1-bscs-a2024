const games = [
  {
    id: 1,
    title: "Dota 2",
    imageUrl: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota2_social.jpg",
    description: "A free-to-play multiplayer online battle arena (MOBA) video game developed and published by Valve.",
    genre: "MOBA",
    players: "800K",
    rating: "9/10",
    detailedDescription: "Dota 2 is a multiplayer online battle arena (MOBA) game where two teams of five players compete to collectively destroy a large structure defended by the opposing team known as the 'Ancient', whilst defending their own.",
    developer: "Valve",
    releaseYear: 2013,
    platforms: ["Windows", "Linux", "macOS"],
    trailerUrl: "https://www.youtube.com/embed/SmnqsdeHFT0" // Dota 2 trailer
  },
  {
    id: 2,
    title: "Genshin Impact", 
    imageUrl: "https://th.bing.com/th/id/OIP.mIWCOWxyK1aKmtOG1tpjzgHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain",
    description: "An open-world action RPG developed and published by miHoYo.",
    genre: "Action RPG",
    players: "1M",
    rating: "8.5/10",
    detailedDescription: "Genshin Impact is an open-world action role-playing game that allows the player to control one of four interchangeable characters in a party. Switching between characters can be done quickly and during combat.",
    developer: "miHoYo",
    releaseYear: 2020,
    platforms: ["Windows", "PS4", "PS5", "Mobile", "Nintendo Switch"],
    trailerUrl: "https://www.youtube.com/embed/GTKW3x6x5ZQ" // Genshin Impact trailer
  },
  {
    id: 3,
    title: "Honkai Impact 3rd",
    imageUrl: "https://img2.tapimg.net/post/etag/FpSix8-nIw-2VIqVLBcSRvXhTeSw.jpg?imageMogr2/thumbnail/720x9999%3E/quality/80/format/jpg/interlace/1/ignore-error/1",
    description: "An action role-playing game developed and published by miHoYo.",
    genre: "Action RPG",
    players: "500K",
    rating: "8.5/10",
    detailedDescription: "Honkai Impact 3rd is an action role-playing game where players control a team of Valkyries to fight against the Honkai, a mysterious force that has caused multiple extinction-level events on Earth.",
    developer: "miHoYo",
    releaseYear: 2016,
    platforms: ["Windows", "Mobile"],
    trailerUrl: "https://www.youtube.com/embed/Q-b6rdyIJsY" // Honkai Impact 3rd trailer
  },
  {
    id: 4,
    title: "Honkai: Star Rail",
    imageUrl: "https://cdn1.epicgames.com/offer/a2dcbb9e34204bda9da8415f97b3f4ea/2560x1440_EN_2560x1440-1295c4399099873d0d329e1c39d12ed5",
    description: "A space fantasy RPG with strategic turn-based combat developed by miHoYo.",
    genre: "Turn-based RPG",
    players: "750K",
    rating: "9/10",
    detailedDescription: "Honkai: Star Rail is a turn-based RPG set in a space fantasy world. Players embark on an interstellar adventure with a unique combat system and compelling storyline.",
    developer: "miHoYo",
    releaseYear: 2023,
    platforms: ["Windows", "Mobile", "PS5"],
    trailerUrl: "https://www.youtube.com/embed/w8vPZrMFiZ4" // Honkai: Star Rail trailer
  },
  {
    id: 5,
    title: "Honor of Kings",
    imageUrl: "https://revolutionarena.com/pt-br/wp-content/uploads/sites/2/2024/03/Honor-of-Kings.jpg",
    description: "A multiplayer online battle arena developed by TiMi Studio Group and published by Tencent Games.",
    genre: "MOBA",
    players: "100M",
    rating: "8/10",
    detailedDescription: "Honor of Kings is a multiplayer online battle arena game developed by TiMi Studio Group and published by Tencent Games for Android and iOS.",
    developer: "TiMi Studio Group",
    releaseYear: 2015,
    platforms: ["Mobile"],
    trailerUrl: "https://www.youtube.com/embed/1uRhM96nDYI" // Honor of Kings trailer
  },
  {
    id: 6,
    title: "League of Legends",
    imageUrl: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/1b6d25026621fdf9befdf85f5f2f88ee7319f0f0-1920x1080.jpg?auto=format&fit=fill&q=80&w=483",
    description: "A highly competitive, fast paced MOBA developed by Riot Games.",
    genre: "MOBA",
    players: "180M",
    rating: "9/10",
    detailedDescription: "League of Legends is a team-based strategy game where two teams of five powerful champions face off to destroy the other's base. Players choose from over 140 champions, engage in strategic team fights, and work together to capture objectives that help secure victory.",
    developer: "Riot Games",
    releaseYear: 2009,
    platforms: ["Windows", "macOS"],
    trailerUrl: "https://www.youtube.com/embed/mDYqT0_9VR4" // League of Legends cinematic trailer
  },
  {
    id: 7,
    title: "Mobile Legends: Bang Bang",
    imageUrl: "https://dailyspin.id/wp-content/uploads/2024/02/jucqgcb14o.jpg",
    description: "A mobile MOBA game developed and published by Moonton.",
    genre: "MOBA",
    players: "75M",
    rating: "8/10",
    detailedDescription: "Mobile Legends: Bang Bang is a mobile multiplayer online battle arena game designed for phones. Two opposing teams fight to reach and destroy the enemy's base while defending their own.",
    developer: "Moonton",
    releaseYear: 2016,
    platforms: ["Mobile"],
    trailerUrl: "https://www.youtube.com/embed/4zPML59Vesk" // Mobile Legends trailer
  },
  {
    id: 8,
    title: "Roblox",
    imageUrl: "https://techcrunch.com/wp-content/uploads/2021/07/roblox-logo.png",
    description: "An online game platform and game creation system developed by Roblox Corporation.",
    genre: "Platform",
    players: "150M",
    rating: "8/10",
    detailedDescription: "Roblox is a platform where users can create and play games created by other users. It features a wide variety of genres and game types, all created using Roblox Studio.",
    developer: "Roblox Corporation",
    releaseYear: 2006,
    platforms: ["Windows", "Mobile", "Xbox", "macOS"],
    trailerUrl: "https://www.youtube.com/embed/sme76WoJ_-U" // Roblox trailer
  },
  {
    id: 9,
    title: "Terraria",
    imageUrl: "https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/bltdba49ca0a895ae36/669163d6e6031cd88be0f15b/terraria.jpg",
    description: "An action-adventure sandbox game developed by Re-Logic.",
    genre: "Sandbox",
    players: "200K",
    rating: "9.5/10",
    detailedDescription: "Terraria is a 2D sandbox game with elements of exploration, crafting, building, and combat. Players can explore procedurally generated worlds and fight various creatures while collecting resources.",
    developer: "Re-Logic",
    releaseYear: 2011,
    platforms: ["Windows", "Mobile", "Console"],
    trailerUrl: "https://www.youtube.com/embed/w7uOhFTrrq0" // Terraria trailer
  },
  {
    id: 10,
    title: "Valorant",
    imageUrl: "https://assets.xboxservices.com/assets/4e/bc/4ebcb533-e184-42f3-833b-9aa47a81f39e.jpg?n=153142244433_Poster-Image-1084_1920x720.jpg",
    description: "A free-to-play multiplayer tactical first-person shooter developed by Riot Games.",
    genre: "Tactical FPS",
    players: "1.2M",
    rating: "8.5/10",
    detailedDescription: "Valorant is a tactical shooting game involving two teams with 5 players in each team. Every player can sign in and play remotely from anywhere in the world.",
    developer: "Riot Games",
    releaseYear: 2020,
    platforms: ["Windows"],
    trailerUrl: "https://www.youtube.com/embed/e_E9W2vsRbQ" // Valorant trailer
  },
    {
    id: 11,
    title: "Minecraft",
    imageUrl: "https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/screenshots/bedrock_header.jpg",
    description: "A sandbox game focused on building and exploration, developed by Mojang Studios.",
    genre: "Sandbox & Survival",
    players: "300M",
    rating: "9/10",
    detailedDescription: "Minecraft is a game where players place blocks and go on adventures. This includes anything from crafting simple items like containers or weapons, to building structures like houses, castles, and cities, or even making complex mechanical devices, all within the game’s world.",
    developer: "Mojang Studios",
    releaseYear: 2009,
    platforms: ["Windows", "MacOS" , "Console", "Mobile", "Playstation 4/5"],
    trailerUrl: "https://www.youtube.com/embed/MmB9b5njVbA" // Minecraft trailer
  }
].sort((a, b) => a.title.localeCompare(b.title));

function App() {
  const [selectedGame, setSelectedGame] = React.useState(null);

  return (
    <div className="container">
      <header className="header">
        <h1>Gamepedia Games List</h1>
        <p>Click on any game to learn more</p>
      </header>
      
      <div className="games-grid">
        {games.map(game => (
          <div key={game.id} className="game-card" onClick={() => setSelectedGame(game)}>
            <div className="game-icon">
              <img src={game.imageUrl} alt={game.title} />
            </div>
            <h2 className="game-title">{game.title}</h2>
            <p className="game-description">{game.description}</p>
            <div className="game-stats">
              <div className="stats-item">
                <span>👥</span>
                <span>{game.players} players</span>
              </div>
              <div className="stats-item">
                <span>⭐</span>
                <span>{game.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedGame && (
        <div className="modal" onClick={() => setSelectedGame(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedGame(null)}>×</button>
            <div className="modal-header">
              <h2 className="modal-title">{selectedGame.title}</h2>
            </div>
            <div className="modal-body">
              <div className="trailer-container">
                <iframe
                  src={selectedGame.trailerUrl}
                  title={`${selectedGame.title} Trailer`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="modal-info">
                <div className="modal-description">
                  <p>{selectedGame.detailedDescription}</p>
                </div>
                <div className="modal-stats">
                  <div className="stat-card">
                    <div className="stat-value">{selectedGame.genre}</div>
                    <div className="stat-label">Genre</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-value">{selectedGame.developer}</div>
                    <div className="stat-label">Developer</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-value">{selectedGame.releaseYear}</div>
                    <div className="stat-label">Release Year</div>
                  </div>
                </div>
                <div className="platform-list">
                  <h3>Available Platforms:</h3>
                  <ul>
                    {selectedGame.platforms.map((platform, index) => (
                      <li key={index}>{platform}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const overlay = document.createElement('div');
overlay.style.cssText = `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: none;
  z-index: 998;
`;
document.body.appendChild(overlay);


menuToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  navLinks.classList.toggle('active');
  if (navLinks.classList.contains('active')) {
    navLinks.style.right = '0'; 
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  } else {
    navLinks.style.right = '-250px';
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  }
});


overlay.addEventListener('click', () => {
  navLinks.classList.remove('active');
  navLinks.style.right = '-250px';
  overlay.style.display = 'none';
  document.body.style.overflow = '';
});


document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    navLinks.style.right = '-250px';
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  });
});