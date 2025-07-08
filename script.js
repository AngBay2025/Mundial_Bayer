document.addEventListener('DOMContentLoaded', () => {
    const teams = [
        { name: 'Al Ahly FC', crest: 'https://api.fifa.com/api/v3/picture/teams-sq-4/1897032', confederation: 'CAF' },
        { name: 'Al Ain FC', crest: 'https://api.fifa.com/api/v3/picture/teams-sq-4/1897029', confederation: 'AFC' },
        { name: 'Al Hilal', crest: 'https://api.fifa.com/api/v3/picture/teams-sq-4/1943992', confederation: 'AFC' },
        { name: 'Atlético de Madrid', crest: 'https://api.fifa.com/api/v3/picture/teams-sq-4/1914808', confederation: 'UEFA' },
        { name: 'Auckland City FC', crest: 'https://api.fifa.com/api/v3/picture/teams-sq-4/1903515', confederation: 'OFC' },
        { name: 'Borussia Dortmund', crest: 'https://api.fifa.com/api/v3/picture/teams-sq-4/1914854', confederation: 'UEFA' },
        { name: 'Botafogo', crest: 'https://api.fifa.com/api/v3/picture/teams-sq-4/1955636', confederation: 'CONMEBOL' },
        { name: 'CA Boca Juniors', crest: 'https://api.fifa.com/api/v3/picture/teams-sq-4/1884422', confederation: 'CONMEBOL' },
        { name: 'CA River Plate', crest: 'https://api.fifa.com/api/v3/picture/teams-sq-4/1914832', confederation: 'CONMEBOL' },
        { name: 'CF Monterrey', crest: 'https://api.fifa.com/api/v3/picture/teams-sq-4/1932136', confederation: 'CONCACAF' },
        { name: 'CF Pachuca', crest: 'https://api.fifa.com/api/v3/picture/teams-sq-4/1907170', confederation: 'CONCACAF' },
        { name: 'CR Flamengo', crest: 'https://api.fifa.com/api/v3/picture/teams-sq-4/1914822', confederation: 'CONMEBOL' },
        { name: 'Chelsea FC', crest: 'https://api.fifa.com/api/v3/picture/teams-sq-4/1935290', confederation: 'UEFA' },
        { name: 'Espérance de Tunisie', crest: 'https://api.fifa.com/api/v3/picture/teams-sq-4/1929173', confederation: 'CAF' },
        { name: 'FC Bayern München', crest: 'https://api.fifa.com/api/v3/picture/teams-sq-4/1914810', confederation: 'UEFA' },
        { name: 'FC Internazionale Milano', crest: 'https://api.fifa.com/api/v3/picture/teams-sq-4/1914619', confederation: 'UEFA' },
        { name: 'FC Porto', crest: 'https://api.fifa.com/api/v3/picture/teams-sq-4/1914836', confederation: 'UEFA' },
        { name: 'FC Salzburg', crest: 'https://api.fifa.com/api/v3/picture/teams-sq-4/1956494', confederation: 'UEFA' },
        { name: 'Fluminense FC', crest: 'https://api.fifa.com/api/v3/picture/teams-sq-4/1956274', confederation: 'CONMEBOL' },
        { name: 'Inter Miami CF', crest: 'https://api.fifa.com/api/v3/picture/teams-sq-4/1957225', confederation: 'CONCACAF' },
        { name: 'Juventus FC', crest: 'https://api.fifa.com/api/v3/picture/teams-sq-4/1914806', confederation: 'UEFA' },
        { name: 'LAFC', crest: 'https://api.fifa.com/api/v3/picture/teams-sq-4/1954283', confederation: 'CONCACAF' },
        { name: 'Mamelodi Sundowns FC', crest: 'https://api.fifa.com/api/v3/picture/teams-sq-4/1947070', confederation: 'CAF' },
        { name: 'Manchester City', crest: 'https://api.fifa.com/api/v3/picture/teams-sq-4/1956198', confederation: 'UEFA' },
        { name: 'Palmeiras', crest: 'https://api.fifa.com/api/v3/picture/teams-sq-4/1884426', confederation: 'CONMEBOL' },
        { name: 'Paris Saint-Germain', crest: 'https://api.fifa.com/api/v3/picture/teams-sq-4/1956449', confederation: 'UEFA' },
        { name: 'Real Madrid C.F.', crest: 'https://api.fifa.com/api/v3/picture/teams-sq-4/30504', confederation: 'UEFA' },
        { name: 'SL Benfica', crest: 'https://api.fifa.com/api/v3/picture/teams-sq-4/1914613', confederation: 'UEFA' },
        { name: 'Seattle Sounders FC', crest: 'https://api.fifa.com/api/v3/picture/teams-sq-4/1955832', confederation: 'CONCACAF' },
        { name: 'Ulsan HD', crest: 'https://api.fifa.com/api/v3/picture/teams-sq-4/1937630', confederation: 'AFC' },
        { name: 'Urawa Red Diamonds', crest: 'https://api.fifa.com/api/v3/picture/teams-sq-4/1914295', confederation: 'AFC' },
        { name: 'Wydad AC', crest: 'https://api.fifa.com/api/v3/picture/teams-sq-4/1947069', confederation: 'CAF' }
    ];

    const knockoutRounds = {
        "round-of-16": [
            { header: "28 Jun", team1: { name: "Palmeiras", crest: "https://api.fifa.com/api/v3/picture/teams-sq-4/1884426" }, score1: 1, team2: { name: "Botafogo", crest: "https://api.fifa.com/api/v3/picture/teams-sq-4/1955636" }, score2: 0, note: "AET" },
            { header: "28 Jun", team1: { name: "SL Benfica", crest: "https://api.fifa.com/api/v3/picture/teams-sq-4/1914613" }, score1: 1, team2: { name: "Chelsea FC", crest: "https://api.fifa.com/api/v3/picture/teams-sq-4/1935290" }, score2: 4, note: "AET" },
            { header: "29 Jun", team1: { name: "Paris Saint-Germain", crest: "https://api.fifa.com/api/v3/picture/teams-sq-4/1956449" }, score1: 4, team2: { name: "Inter Miami CF", crest: "https://api.fifa.com/api/v3/picture/teams-sq-4/1957225" }, score2: 0 },
            { header: "29 Jun", team1: { name: "CR Flamengo", crest: "https://api.fifa.com/api/v3/picture/teams-sq-4/1914822" }, score1: 2, team2: { name: "FC Bayern München", crest: "https://api.fifa.com/api/v3/picture/teams-sq-4/1914810" }, score2: 4 },
            { header: "30 Jun", team1: { name: "FC Internazionale Milano", crest: "https://api.fifa.com/api/v3/picture/teams-sq-4/1914619" }, score1: 0, team2: { name: "Fluminense FC", crest: "https://api.fifa.com/api/v3/picture/teams-sq-4/1956274" }, score2: 2 },
            { header: "30 Jun", team1: { name: "Manchester City", crest: "https://api.fifa.com/api/v3/picture/teams-sq-4/1956198" }, score1: 3, team2: { name: "Al Hilal", crest: "https://api.fifa.com/api/v3/picture/teams-sq-4/1943992" }, score2: 4, note: "AET" },
            { header: "1 Jul", team1: { name: "Real Madrid C.F.", crest: "https://api.fifa.com/api/v3/picture/teams-sq-4/30504" }, score1: 1, team2: { name: "Juventus FC", crest: "https://api.fifa.com/api/v3/picture/teams-sq-4/1914806" }, score2: 0 },
            { header: "1 Jul", team1: { name: "Borussia Dortmund", crest: "https://api.fifa.com/api/v3/picture/teams-sq-4/1914854" }, score1: 2, team2: { name: "CF Monterrey", crest: "https://api.fifa.com/api/v3/picture/teams-sq-4/1932136" }, score2: 1 },
        ],
        "quarter-finals": [
             { header: "4 Jul", team1: { name: "Fluminense FC", crest: "https://api.fifa.com/api/v3/picture/teams-sq-4/1956274" }, score1: 2, team2: { name: "Al Hilal", crest: "https://api.fifa.com/api/v3/picture/teams-sq-4/1943992" }, score2: 1 },
             { header: "4 Jul", team1: { name: "Palmeiras", crest: "https://api.fifa.com/api/v3/picture/teams-sq-4/1884426" }, score1: 1, team2: { name: "Chelsea FC", crest: "https://api.fifa.com/api/v3/picture/teams-sq-4/1935290" }, score2: 2 },
             { header: "5 Jul", team1: { name: "Paris Saint-Germain", crest: "https://api.fifa.com/api/v3/picture/teams-sq-4/1956449" }, score1: 2, team2: { name: "FC Bayern München", crest: "https://api.fifa.com/api/v3/picture/teams-sq-4/1914810" }, score2: 0 },
             { header: "5 Jul", team1: { name: "Real Madrid C.F.", crest: "https://api.fifa.com/api/v3/picture/teams-sq-4/30504" }, score1: 3, team2: { name: "Borussia Dortmund", crest: "https://api.fifa.com/api/v3/picture/teams-sq-4/1914854" }, score2: 2 },
        ],
        "semi-finals": [
            { header: "8 Jul", team1: { name: "Fluminense FC", crest: "https://api.fifa.com/api/v3/picture/teams-sq-4/1956274" }, score1: ' ', team2: { name: "Chelsea FC", crest: "https://api.fifa.com/api/v3/picture/teams-sq-4/1935290" }, score2: ' ' },
            { header: "9 Jul", team1: { name: "Paris Saint-Germain", crest: "https://api.fifa.com/api/v3/picture/teams-sq-4/1956449" }, score1: ' ', team2: { name: "Real Madrid C.F.", crest: "https://api.fifa.com/api/v3/picture/teams-sq-4/30504" }, score2: ' ' },
        ],
        "final": [
            { header: "13 Jul", team1: { name: "Ganador SF1", crest: "https://via.placeholder.com/40" }, score1: ' ', team2: { name: "Ganador SF2", crest: "https://via.placeholder.com/40" }, score2: ' ' },
        ]
    };

    const classificationView = document.getElementById('classification-view');
    const teamsView = document.getElementById('teams-view');
    const showClassificationBtn = document.getElementById('show-classification');
    const showTeamsBtn = document.getElementById('show-teams');

    showClassificationBtn.addEventListener('click', () => {
        classificationView.style.display = 'flex';
        teamsView.style.display = 'none';
    });

    showTeamsBtn.addEventListener('click', () => {
        classificationView.style.display = 'none';
        teamsView.style.display = 'block';
    });

    const confederationLogos = {
        'AFC': 'https://digitalhub.fifa.com/transform/6c967ade-8736-4b09-bb1d-635d6fb2a142/AFC-inverted',
        'CAF': 'https://digitalhub.fifa.com/transform/6953acd7-428d-433e-9c24-f438461da775/CAF-inverted',
        'CONCACAF': 'https://digitalhub.fifa.com/transform/f8554e21-2bfa-4000-81af-6e49d73b45ed/CONCACAF-inverted',
        'CONMEBOL': 'https://digitalhub.fifa.com/transform/8f035697-1c40-4b6f-b6e9-3fd6350bafaf/CONMEBOL-inverted',
        'OFC': 'https://digitalhub.fifa.com/transform/2c48016e-b91f-4225-a2a8-5f607b3fe069/OFC-Inverted',
        'UEFA': 'https://digitalhub.fifa.com/transform/eeeae7e5-8bcf-4b5f-bada-24823d7a6c59/UEFA-inverted'
    };

    // Populate Teams View
    const teamsGrid = document.querySelector('.teams-grid_grid__SddEf');
    teams.forEach(team => {
        const teamCard = document.createElement('div');
        teamCard.classList.add('d-flex', 'flex-column', 'team-card_teamCard__b0aXG');
        teamCard.dataset.confederation = team.confederation;
        teamCard.innerHTML = `
            <a href="#">
                <div class="d-flex flex-column justify-content-between team-card_header__mvMPV" style="--backgroundColor: #000; --textColor: #fff;">
                    <div class="d-flex justify-content-between">
                        <div class="team-card_flagContainer__vmhjg">
                            <img loading="lazy" decoding="async" src="${team.crest}" class="team-card_teamFlag__XTFGY">
                            <span class="team-card_emblem__Cd1aZ"></span>
                        </div>
                        <span class="team-card_confederationLogo__KMlF8">
                            <img loading="lazy" decoding="async" src="${confederationLogos[team.confederation]}">
                        </span>
                    </div>
                    <div>
                        <h3 class="team-card_teamName__-2Ckj">
                            <span class="d-md-none"><span title="" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${team.name}</span></span>
                            <span class="d-none d-md-block"><span title="" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${team.name}</span></span>
                        </h3>
                    </div>
                </div>
                <div class="typography-label team-card_cardBody__oRwiX">
                    <div class="d-flex justify-content-between team-card-body-row_cardBodyRow__y2PQ1 team-card-body-row_shortRow__FMUxU">
                        <span class="team-card-body-row_label__f4AIf">Fase</span>
                        <span class="team-card-body-row_right__s9t1g"></span>
                    </div>
                    <div class="d-flex justify-content-between team-card-body-row_cardBodyRow__y2PQ1 team-card-body-row_shortRow__FMUxU">
                        <span class="team-card-body-row_label__f4AIf">Últimos resultados</span>
                        <span class="team-card-body-row_right__s9t1g"></span>
                    </div>
                    <div class="d-flex justify-content-between team-card-body-row_cardBodyRow__y2PQ1 team-card-body-row_shortRow__FMUxU">
                        <span class="team-card-body-row_label__f4AIf">Último partido</span>
                        <span class="team-card-body-row_right__s9t1g"></span>
                    </div>
                    <div class="live-tournament-details_nextMatchWrapper__ah9zw">
                        <div><span>Siguiente partido</span></div>
                        <div><div class="live-tournament-details_nextMatchDateWrapper__B+9uY">-</div></div>
                    </div>
                </div>
            </a>
        `;
        teamsGrid.appendChild(teamCard);
    });

    // Filter logic
    const filterButtons = document.querySelectorAll('.confederation-filter_carouselItem__q2LqA');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('confederation-filter_selected__OWJEu'));
            button.classList.add('confederation-filter_selected__OWJEu');
            const confederation = button.dataset.confederation;
            const teamCards = document.querySelectorAll('.team-card_teamCard__b0aXG');
            teamCards.forEach(card => {
                if (confederation === 'all' || card.dataset.confederation === confederation) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Populate Bracket View
    const bracketContainer = document.querySelector('.bracket-container');
    const rounds = bracketContainer.querySelectorAll('.round .matches');

    Object.keys(knockoutRounds).forEach((roundName, index) => {
        const roundEl = rounds[index];
        knockoutRounds[roundName].forEach(match => {
            const matchEl = document.createElement('div');
            matchEl.classList.add('match');
            matchEl.innerHTML = `
                <div class="match-header">${match.header}</div>
                <div class="match-body">
                    <div class="team">
                        <img src="${match.team1.crest}" alt="${match.team1.name}">
                        <span>${match.team1.name}</span>
                        <span class="score">${match.score1}</span>
                    </div>
                    <div class="team">
                        <img src="${match.team2.crest}" alt="${match.team2.name}">
                        <span>${match.team2.name}</span>
                        <span class="score">${match.score2}</span>
                    </div>
                </div>
            `;
            if (match.note) {
                const noteEl = document.createElement('div');
                noteEl.classList.add('note');
                noteEl.textContent = match.note;
                matchEl.appendChild(noteEl);
            }
            roundEl.appendChild(matchEl);
        });
    });
});
