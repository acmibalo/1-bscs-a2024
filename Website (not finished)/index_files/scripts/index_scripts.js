        // Mobile menu toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        const gamesData = [
            {
                name: "Dota 2",
                image:"/images/games_banner/Dota2.webp",
                description: "A multiplayer online battle arena (MOBA) game developed by Valve Corporation",
                developer: "Valve Corporation",
                releaseDate: "July 9, 2013",
                genre: ["MOBA", "Strategy"],
                platforms: ["Windows", "Linux", "macOS"],
                features: [
                    "Free to play",
                    "Competitive gameplay",
                    "Regular updates",
                    "Professional esports scene",
                    "Complex strategy elements"
                ],
                playerCount: "Multiplayer (5v5)"
            },
            {
                name: "Genshin Impact",
                image: "/images/games_banner/genshinimpact.jpeg",
                description: "An open-world action RPG developed by miHoYo featuring anime-style characters and elemental combat",
                developer: "miHoYo",
                releaseDate: "September 28, 2020",
                genre: ["Action RPG", "Open World"],
                platforms: ["Windows", "PlayStation 4/5", "iOS", "Android"],
                features: [
                    "Free to play",
                    "Gacha system",
                    "Open world exploration",
                    "Elemental combat",
                    "Regular content updates"
                ],
                playerCount: "Single-player with Co-op elements"
            },
            {
                name: "Honor of Kings",
                image: "/images/games_banner/HOK.jpg",
                description: "A mobile MOBA game developed by TiMi Studio Group and published by Tencent Games",
                developer: "TiMi Studio Group",
                releaseDate: "November 26, 2015",
                genre: ["MOBA", "Mobile"],
                platforms: ["iOS", "Android"],
                features: [
                    "Free to play",
                    "5v5 multiplayer",
                    "Regular updates",
                    "Competitive gameplay"
                ],
                playerCount: "Multiplayer (5v5)"
            },
            {
                name: "Honkai Impact 3rd",
                image: "/images/games_banner/hi3rd.webp",
                description: "An action RPG developed by miHoYo featuring dynamic combat and anime-style graphics",
                developer: "miHoYo",
                releaseDate: "March 28, 2018",
                genre: ["Action RPG", "Anime"],
                platforms: ["Windows", "iOS", "Android"],
                features: [
                    "Free to play",
                    "Co-op gameplay",
                    "Beautiful graphics",
                    "Dynamic combat system"
                ],
                playerCount: "Single-player with Co-op elements"
            },
            {
                name: "Honkai: Star Rail",
                image: "/images/games_banner/Star_rail.jpeg",
                description: "A space fantasy RPG with turn-based combat system, developed by miHoYo",
                developer: "miHoYo",
                releaseDate: "April 26, 2023",
                genre: ["RPG", "Turn-based"],
                platforms: ["Windows", "iOS", "Android"],
                features: [
                    "Free to play",
                    "Turn-based combat",
                    "Gacha system",
                    "Rich story and characters"
                ],
                playerCount: "Single-player"
            },
            {
                name: "Minecraft",
                image: "/images/games_banner/minecraft.jpg",
                description: "A sandbox game focused on building and exploration, developed by Mojang Studios",
                developer: "Mojang Studios",
                releaseDate: "November 18, 2011",
                genre: ["Sandbox", "Survival"],
                platforms: ["Windows", "macOS", "Linux", "iOS", "Android", "Console"],
                features: [
                    "Creative and Survival modes",
                    "Multiplayer",
                    "Community mods and servers",
                    "Regular updates"
                ],
                playerCount: "Single-player and Multiplayer"
            },
            {
                name: "Mobile Legends: Bang Bang",
                image: "/images/games_banner/mlbb.png",
                description: "A mobile MOBA game developed by Moonton featuring 5v5 battles",
                developer: "Moonton",
                releaseDate: "July 14, 2016",
                genre: ["MOBA", "Mobile"],
                platforms: ["iOS", "Android"],
                features: [
                    "Free to play",
                    "5v5 battles",
                    "Regular updates",
                    "Team strategy"
                ],
                playerCount: "Multiplayer (5v5)"
            },
            {
                name: "Roblox",
                image: "/images/games_banner/roblox.jpg",
                description: "An online game platform and game creation system that allows users to program games",
                developer: "Roblox Corporation",
                releaseDate: "September 1, 2006",
                genre: ["Platform", "Creative"],
                platforms: ["Windows", "macOS", "iOS", "Android", "Xbox One"],
                features: [
                    "User-generated content",
                    "Multiplayer",
                    "Wide variety of games",
                    "Regular updates"
                ],
                playerCount: "Multiplayer"
            },
            {
                name: "Terraria",
                image: "/images/games_banner/terraria.jpg",
                description: "A 2D sandbox action-adventure game developed by Re-Logic featuring exploration, crafting, and combat",
                developer: "Re-Logic",
                releaseDate: "May 16, 2011",
                genre: ["Sandbox", "Adventure"],
                platforms: ["Windows", "macOS", "Linux", "iOS", "Android", "Console"],
                features: [
                    "Exploration",
                    "Crafting",
                    "Multiplayer",
                    "Regular updates"
                ],
                playerCount: "Single-player and Multiplayer"
            },
            {
                name: "Valorant",
                image: "/images/games_banner/valo.jpg",
                description: "A free-to-play tactical first-person shooter developed by Riot Games",
                developer: "Riot Games",
                releaseDate: "June 2, 2020",
                genre: ["FPS", "Tactical"],
                platforms: ["Windows"],
                features: [
                    "Free to play",
                    "Team-based",
                    "Unique character abilities",
                    "Regular updates"
                ],
                playerCount: "Multiplayer (5v5)"
            }
        ];

        const gamingTerms = [
            {
                term: "AFK",
                definition: "Away From Keyboard - When a player is temporarily inactive or away from their gaming device"
            },
            {
                term: "DPS",
                definition: "Damage Per Second - The amount of damage a character or weapon can deal in one second"
            },
            {
                term: "META",
                definition: "Most Effective Tactics Available - Refers to the most optimal strategies, characters, or items in a game"
            },
            {
                term: "FPS",
                definition: "First Person Shooter - A genre of games where players view the game world from the first-person perspective"
            },
            {
                term: "RPG",
                definition: "Role Playing Game - A game genre where players assume the roles of characters in a fictional setting"
            },
            {
                term: "PvP",
                definition: "Player versus Player - Game modes where players compete against other players"
            },
            {
                term: "PvE",
                definition: "Player versus Environment - Game modes where players fight against computer-controlled enemies"
            },
            {
                term: "HP",
                definition: "Hit Points or Health Points - A numeric value representing a character's health"
            },
            {
                term: "Buff",
                definition: "A temporary enhancement or power-up applied to a character"
            },
            {
                term: "Nerf",
                definition: "When game developers reduce the power or effectiveness of a game element"
            }
        ];

        function showGameDetails(game) {
            const modal = document.querySelector('.modal');
            const gameDetails = document.querySelector('.game-details');
            
            gameDetails.innerHTML = `
                <img src="${game.image}" alt="${game.name}">
                <h2>${game.name}</h2>
                <div class="game-info-grid">
                    <div class="info-section">
                        <h3>Description</h3>
                        <p>${game.description}</p>
                    </div>
                    <div class="info-section">
                        <h3>Developer</h3>
                        <p>${game.developer}</p>
                    </div>
                    <div class="info-section">
                        <h3>Release Date</h3>
                        <p>${game.releaseDate}</p>
                    </div>
                    <div class="info-section">
                        <h3>Genre</h3>
                        <p>${game.genre.join(', ')}</p>
                    </div>
                    <div class="info-section">
                        <h3>Key Features</h3>
                        <ul>
                            ${game.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="info-section">
                        <h3>Platforms & Player Count</h3>
                        <p><strong>Platforms:</strong> ${game.platforms.join(', ')}</p>
                        <p><strong>Player Count:</strong> ${game.playerCount}</p>
                    </div>
                </div>
            `;
            
            modal.style.display = 'flex';
        }

        document.querySelector('.modal-close').addEventListener('click', () => {
            document.querySelector('.modal').style.display = 'none';
        });

        function createGameCards() {
            const gameGrid = document.querySelector('.game-grid');
            gameGrid.innerHTML = '';
            
            gamesData.forEach(game => {
                const gameCard = document.createElement('div');
                gameCard.className = 'game-card';
                gameCard.innerHTML = `
                    <div class="game-image">
                        <img src="${game.image}" alt="${game.name}">
                    </div>
                    <div class="game-info">
                        <h3>${game.name}</h3>
                        <p>${game.description}</p>
                    </div>
                `;
                
                gameCard.addEventListener('click', () => {
                    showGameDetails(game);
                });
                
                gameGrid.appendChild(gameCard);
            });
        }

        createGameCards();

        const searchBar = document.querySelector('.search-bar input');
        const searchResults = document.querySelector('.search-results');

        searchBar.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            if (searchTerm.length < 2) {
                searchResults.style.display = 'none';
                return;
            }

            const filteredGames = gamesData.filter(game => 
                game.name.toLowerCase().includes(searchTerm) || 
                game.description.toLowerCase().includes(searchTerm)
            );

            const filteredTerms = gamingTerms.filter(term =>
                term.term.toLowerCase().includes(searchTerm) ||
                term.definition.toLowerCase().includes(searchTerm)
            );

            if (filteredGames.length > 0 || filteredTerms.length > 0) {
                searchResults.innerHTML = `
                    ${filteredGames
                        .map(game => `
                            <div class="search-result-item" data-game="${game.name}">
                                <strong>Game: ${game.name}</strong><br>
                                ${game.description}
                            </div>
                        `)
                        .join('')}
                    ${filteredTerms
                        .map(term => `
                            <div class="search-result-item term">
                                <strong>Term: ${term.term}</strong><br>
                                ${term.definition}
                            </div>
                        `)
                        .join('')}
                `;
                searchResults.style.display = 'block';

                // Add click handlers for game results
                document.querySelectorAll('.search-result-item[data-game]').forEach(item => {
                    item.addEventListener('click', () => {
                        const game = gamesData.find(g => g.name === item.dataset.game);
                        if (game) {
                            showGameDetails(game);
                        }
                    });
                });
            } else {
                searchResults.style.display = 'none';
            }
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-bar')) {
                searchResults.style.display = 'none';
            }
        });

        document.querySelector('.modal').addEventListener('click', (e) => {
            if (e.target === document.querySelector('.modal')) {
                document.querySelector('.modal').style.display = 'none';
            }
        });

        const floatingIcons = document.querySelector('.floating-icons');
        const iconSVGs = [
            '<path fill="currentColor" d="M21,6H3A2,2 0 0,0 1,8V16A2,2 0 0,0 3,18H21A2,2 0 0,0 23,16V8A2,2 0 0,0 21,6M21,16H3V8H21V16M6,15H8V13H10V11H8V9H6V11H4V13H6V15Z"/>',
            '<path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>'
        ];

        for (let i = 0; i < 5; i++) {
            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttribute('class', 'icon');
            svg.setAttribute('width', '50');
            svg.setAttribute('height', '50');
            svg.setAttribute('viewBox', '0 0 24 24');
            svg.style.top = Math.random() * 100 + '%';
            svg.style.left = Math.random() * 100 + '%';
            svg.style.animationDelay = Math.random() * 5 + 's';
            svg.innerHTML = iconSVGs[Math.floor(Math.random() * iconSVGs.length)];
            floatingIcons.appendChild(svg);
        }