// Pokemon API Util
const POKE_API = 'https://pokeapi.co/api/v2';
let allAvailableMoves = []; // Store all moves in the game

let hints = false;

// Helper function to convert text to title case
function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ').split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('-');
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded');
    init();
});

function init() {
    // Setup function - called when page loads
    console.log('Initializing application');
    
    // Fetch all moves from the API
    fetchAllMoves();
    
    const randomBtn = document.getElementById('randomBtn');
    randomBtn.addEventListener('click', fetchRandomPokemon);
    
    const giveUpBtn = document.getElementById('giveUpBtn');
    giveUpBtn.addEventListener('click', giveUp);
    
    const hintBtn = document.getElementById('hintBtn');
    hintBtn.addEventListener('click', showHints);
}

// Fetch all moves from the PokeAPI
async function fetchAllMoves() {
    try {
        let allMoves = [];
        let url = `${POKE_API}/move?limit=10000`; // Fetch up to 10000 moves
        
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch moves');
        
        const data = await response.json();
        
        // Extract move names from the results
        data.results.forEach(move => {
            allMoves.push(toTitleCase(move.name.replace(/-/g, ' ')));
        });
        
        allAvailableMoves = allMoves.sort();
        console.log(`Loaded ${allAvailableMoves.length} moves`);
    } catch (error) {
        console.error('Error fetching moves:', error);
    }
}

// Fetch a random Pokemon
async function fetchRandomPokemon() {
    try {
        showLoading(true);
        
        // Random Pokemon ID between 1 and n
        // Gen IX - 1204
        // Gen V - 649
        const randomId = Math.floor(Math.random() * 649) + 1;
        
        const response = await fetch(`${POKE_API}/pokemon/${randomId}`);
        if (!response.ok) throw new Error('Failed to fetch Pokemon');
        
        const pokemonData = await response.json();
        await displayPokemon(pokemonData);

        hints = false;
        
        showLoading(false);
    } catch (error) {
        console.error('Error fetching Pokemon:', error);
        showLoading(false);
        alert('Error fetching Pokemon. Please try again.');
    }
}

async function displayPokemon(pokemon) {
    // Update Pokemon info
    document.getElementById('pokemonName').textContent = toTitleCase(pokemon.name);
    document.getElementById('pokemonImage').src = pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default;
    
    // Display types
    const types = pokemon.types.map(typeData => toTitleCase(typeData.type.name)).join(', ');
    document.getElementById('pokemonTypes').textContent = types;
    
    // Clear guess input and setup event listener
    const guessInput = document.getElementById('guessInput');
    guessInput.value = '';
    guessInput.onkeyup = function() {
        updateSuggestions();
    };
    document.getElementById('guessOutcome').textContent = '';
    
    // Clear suggestions list
    document.getElementById('suggestionsList').innerHTML = '';
    
    // Display moves grouped by learn method
    const movesList = document.getElementById('movesList');
    movesList.innerHTML = '';
    
    // Group moves by learn method
    const movesByMethod = {};
    
    for (const moveData of pokemon.moves) {
        // Get the most recent learn method from version_group_details
        if (moveData.version_group_details && moveData.version_group_details.length > 0) {
            console.log(`${POKE_API}/move/${moveData.move.name}`);
            const response = await fetch(`${POKE_API}/move/${moveData.move.name}`);
            const moveActualData = await response.json();
            const category = moveActualData.damage_class.name;
            const type = moveActualData.type.name;
            moveData.version_group_details.forEach(detail => {
                if (detail.version_group.name == "scarlet-violet") {
                    const method = detail.move_learn_method.name;
                    
                    if (!movesByMethod[method]) {
                        movesByMethod[method] = [];
                    }
                    
                    const moveName = toTitleCase(moveData.move.name.replace(/-/g, ' '));
                    const learnedAt = detail.move_learn_method.name == 'level-up' ? detail.level_learned_at : -1;
                    movesByMethod[method].push({displayName: moveName, actualName: moveName, learnedAt: learnedAt, category: category, type: type});
                }
            });
            /*const latestDetail = moveData.version_group_details[moveData.version_group_details.length - 1];
            const method = latestDetail.move_learn_method.name;
            
            if (!movesByMethod[method]) {
                movesByMethod[method] = [];
            }
            
            const moveName = toTitleCase(moveData.move.name.replace(/-/g, ' '));
            let learnedAt = latestDetail.move_learn_method.name == 'level-up' ? latestDetail.level_learned_at : -1;
            movesByMethod[method].push({displayName: moveName, actualName: moveName, learnedAt: learnedAt});*/
        }
    }

    if (Object.keys(movesByMethod).length == 0) {
        console.log(`#${pokemon.id} ${toTitleCase(pokemon.name)} has no moves in the selected version, selecting a new Pokemon.`);
        fetchRandomPokemon();
        return;
    }
    
    // Display moves organized by method
    const methodOrder = ['level-up', 'machine', 'tutor', 'egg', 'form-change', 'reminder'];
    const displayedMethods = new Set();
    
    // Display methods in preferred order
    methodOrder.forEach(method => {
        if (movesByMethod[method]) {
            displayMoveCategory(method, movesByMethod[method], movesList);
            displayedMethods.add(method);
        }
    });
    
    // Display any remaining methods
    Object.keys(movesByMethod).forEach(method => {
        if (!displayedMethods.has(method)) {
            displayMoveCategory(method, movesByMethod[method], movesList);
        }
    });
    
    // Show the card
    document.getElementById('pokemonCard').style.display = 'block';
}

// Display a category of moves
function displayMoveCategory(method, moves, container) {
    // Format method name for display
    const methodNames = {
        'level-up': 'Level Up',
        'machine': 'TM/HM',
        'tutor': 'Move Tutor',
        'egg': 'Egg Moves',
        'form-change': 'Form Change',
        'reminder': 'Reminder',
        'stadium-surfing-pikachu': 'Stadium',
        'light-ball-egg': 'Light Ball Egg'
    };

    if (method === 'level-up') {
        // Sort level-up moves by level        
        moves.sort((a, b) => a.learnedAt - b.learnedAt);
    }
    else {
        // Sort other moves alphabetically
        moves.sort((a, b) => a.displayName.localeCompare(b.displayName));
    }
    
    const displayName = methodNames[method] || method.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
    // Create category section
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'move-category';
    
    const categoryTitle = document.createElement('h4');
    categoryTitle.className = 'category-title';
    categoryTitle.textContent = displayName;
    categoryDiv.appendChild(categoryTitle);
    
    // Create grid for moves in this category
    const movesGrid = document.createElement('div');
    movesGrid.className = 'moves-grid';
    
    moves.forEach(move => {
        const moveElement = document.createElement('div');
        moveElement.className = 'move-badge';
        moveElement.dataset.actualName = move.actualName;
        moveElement.dataset.displayName = move.displayName;
        moveElement.dataset.learnedAt = move.learnedAt;
        moveElement.dataset.category = move.category;
        moveElement.dataset.type = move.type;
        moveElement.innerHTML = `<img class="hint" src="Assets/category_${move.category}.png" width=30px style="visibility: hidden;"><div>${move.learnedAt > -1 ? `Lvl ${move.learnedAt}: ?????` : '?????'}</div><img class="hint" src="Assets/type_${move.type}.png" width=30px style="visibility: hidden;">`;
        movesGrid.appendChild(moveElement);
    });
    
    categoryDiv.appendChild(movesGrid);
    container.appendChild(categoryDiv);
}

// Show/hide loading indicator
function showLoading(isLoading) {
    document.getElementById('loading').style.display = isLoading ? 'block' : 'none';
}

// Update suggestions dropdown based on input
function updateSuggestions() {
    const guessInput = document.getElementById('guessInput');
    const input = toTitleCase(guessInput.value.trim());
    const suggestionsList = document.getElementById('suggestionsList');
    
    if (input === '') {
        suggestionsList.innerHTML = '';
        return;
    }
    
    // Find moves that start with the input from all available moves
    const matches = allAvailableMoves.filter(move => move.startsWith(input));
    
    // Limit to 10 suggestions
    const suggestions = matches;
    
    if (suggestions.length === 0) {
        suggestionsList.innerHTML = '';
        return;
    }
    
    suggestionsList.innerHTML = '';
    suggestions.forEach(suggestion => {
        const div = document.createElement('div');
        div.className = 'suggestion-item';
        div.textContent = suggestion;
        div.onclick = function() {
            guessMove(suggestion);
        };
        suggestionsList.appendChild(div);
    });
}

// Guess a specific move
function guessMove(moveName) {
    const moveBadges = document.querySelectorAll('.move-badge');
    const guessOutcome = document.getElementById('guessOutcome');
    guessOutcome.textContent = '';
    let found = false;
    moveBadges.forEach(badge => {
        const actualName = badge.dataset.actualName;
        const displayName = badge.dataset.displayName;
        
        if (actualName === moveName) {
            badge.childNodes[1].textContent = badge.dataset.learnedAt > -1 ? `Lvl ${badge.dataset.learnedAt}: ${displayName}` : `${displayName}`;
            console.log(hints);
            badge.style.color = hints ? '#f0a400' : '#37d132';
            badge.style.fontWeight = 'bold';
            badge.dataset.revealed = 'true';
            guessOutcome.innerHTML += `${moveName} is a ${badge.parentElement.parentElement.childNodes[0].textContent} move in the moveset.<br>`;
            guessOutcome.style.color = '#37d132';
            found = true;
        }
    });

    if (!found) {
        guessOutcome.textContent = `${moveName} is NOT in the moveset.`;
        guessOutcome.style.color = '#e73838';
    }
    
    // Clear the input and suggestions
    document.getElementById('guessInput').value = '';
    document.getElementById('suggestionsList').innerHTML = '';
}

// Check if guessed move exists in the moveset (exact match)
function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const guess = guessInput.value.trim().toUpperCase();
    
    if (guess === '') {
        return;
    }
    
    guessMove(guess);
}

// Display all unguessed moves in red and bold
function giveUp() {
    const moveBadges = document.querySelectorAll('.move-badge');
    moveBadges.forEach(badge => {
        if (badge.dataset.revealed !== 'true') {
            badge.childNodes[1].textContent = badge.dataset.learnedAt > -1 ? `Lvl ${badge.dataset.learnedAt}: ${badge.dataset.displayName}` : `${badge.dataset.displayName}`;
            badge.style.color = '#e73838';
            badge.style.fontWeight = 'bold';
        }
    });
}

// Display the type and class of every move
function showHints() {
    const hintIcons = document.querySelectorAll('.hint');
    hintIcons.forEach(icon => {
        icon.style = "";
    });
    hints = true;
}