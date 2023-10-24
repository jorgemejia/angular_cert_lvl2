import { ApiResponse } from '../interfaces/app.interface';

export const responseStandings: ApiResponse =
{
  "get": "standings",
  "parameters": {
  "league": "39",
    "season": "2023"
},
  "errors": {},
  "results": 1,
  "paging": {
  "current": 1,
    "total": 1
},
  "response": [
  {
    "league": {
      "id": 39,
      "name": "Premier League",
      "country": "England",
      "logo": "https://media-4.api-sports.io/football/leagues/39.png",
      "flag": "https://media-4.api-sports.io/flags/gb.svg",
      "season": 2023,
      "standings": [
        [
          {
            "rank": 1,
            "team": {
              "id": 50,
              "name": "Manchester City",
              "logo": "https://media-4.api-sports.io/football/teams/50.png"
            },
            "points": 21,
            "goalsDiff": 12,
            "group": "Premier League",
            "form": "WLLWW",
            "status": "same",
            "description": "Promotion - Champions League (Group Stage: )",
            "all": {
              "played": 9,
              "win": 7,
              "draw": 0,
              "lose": 2,
              "goals": {
                "for": 19,
                "against": 7
              }
            },
            "home": {
              "played": 4,
              "win": 4,
              "draw": 0,
              "lose": 0,
              "goals": {
                "for": 10,
                "against": 2
              }
            },
            "away": {
              "played": 5,
              "win": 3,
              "draw": 0,
              "lose": 2,
              "goals": {
                "for": 9,
                "against": 5
              }
            },
            "update": "2023-10-23T00:00:00+00:00"
          },
          {
            "rank": 2,
            "team": {
              "id": 42,
              "name": "Arsenal",
              "logo": "https://media-4.api-sports.io/football/teams/42.png"
            },
            "points": 21,
            "goalsDiff": 10,
            "group": "Premier League",
            "form": "DWWDW",
            "status": "same",
            "description": "Promotion - Champions League (Group Stage: )",
            "all": {
              "played": 9,
              "win": 6,
              "draw": 3,
              "lose": 0,
              "goals": {
                "for": 18,
                "against": 8
              }
            },
            "home": {
              "played": 5,
              "win": 3,
              "draw": 2,
              "lose": 0,
              "goals": {
                "for": 10,
                "against": 6
              }
            },
            "away": {
              "played": 4,
              "win": 3,
              "draw": 1,
              "lose": 0,
              "goals": {
                "for": 8,
                "against": 2
              }
            },
            "update": "2023-10-23T00:00:00+00:00"
          },
          {
            "rank": 3,
            "team": {
              "id": 40,
              "name": "Liverpool",
              "logo": "https://media-4.api-sports.io/football/teams/40.png"
            },
            "points": 20,
            "goalsDiff": 11,
            "group": "Premier League",
            "form": "WDLWW",
            "status": "same",
            "description": "Promotion - Champions League (Group Stage: )",
            "all": {
              "played": 9,
              "win": 6,
              "draw": 2,
              "lose": 1,
              "goals": {
                "for": 20,
                "against": 9
              }
            },
            "home": {
              "played": 4,
              "win": 4,
              "draw": 0,
              "lose": 0,
              "goals": {
                "for": 11,
                "against": 2
              }
            },
            "away": {
              "played": 5,
              "win": 2,
              "draw": 2,
              "lose": 1,
              "goals": {
                "for": 9,
                "against": 7
              }
            },
            "update": "2023-10-23T00:00:00+00:00"
          },
          {
            "rank": 4,
            "team": {
              "id": 47,
              "name": "Tottenham",
              "logo": "https://media-4.api-sports.io/football/teams/47.png"
            },
            "points": 20,
            "goalsDiff": 10,
            "group": "Premier League",
            "form": "WWDWW",
            "status": "same",
            "description": "Promotion - Champions League (Group Stage: )",
            "all": {
              "played": 8,
              "win": 6,
              "draw": 2,
              "lose": 0,
              "goals": {
                "for": 18,
                "against": 8
              }
            },
            "home": {
              "played": 3,
              "win": 3,
              "draw": 0,
              "lose": 0,
              "goals": {
                "for": 6,
                "against": 2
              }
            },
            "away": {
              "played": 5,
              "win": 3,
              "draw": 2,
              "lose": 0,
              "goals": {
                "for": 12,
                "against": 6
              }
            },
            "update": "2023-10-23T00:00:00+00:00"
          },
          {
            "rank": 5,
            "team": {
              "id": 66,
              "name": "Aston Villa",
              "logo": "https://media-4.api-sports.io/football/teams/66.png"
            },
            "points": 19,
            "goalsDiff": 10,
            "group": "Premier League",
            "form": "WDWWW",
            "status": "same",
            "description": "Promotion - Europa League (Group Stage: )",
            "all": {
              "played": 9,
              "win": 6,
              "draw": 1,
              "lose": 2,
              "goals": {
                "for": 23,
                "against": 13
              }
            },
            "home": {
              "played": 4,
              "win": 4,
              "draw": 0,
              "lose": 0,
              "goals": {
                "for": 17,
                "against": 3
              }
            },
            "away": {
              "played": 5,
              "win": 2,
              "draw": 1,
              "lose": 2,
              "goals": {
                "for": 6,
                "against": 10
              }
            },
            "update": "2023-10-23T00:00:00+00:00"
          },
          {
            "rank": 6,
            "team": {
              "id": 34,
              "name": "Newcastle",
              "logo": "https://media-4.api-sports.io/football/teams/34.png"
            },
            "points": 16,
            "goalsDiff": 15,
            "group": "Premier League",
            "form": "WDWWW",
            "status": "same",
            "description": null,
            "all": {
              "played": 9,
              "win": 5,
              "draw": 1,
              "lose": 3,
              "goals": {
                "for": 24,
                "against": 9
              }
            },
            "home": {
              "played": 5,
              "win": 4,
              "draw": 0,
              "lose": 1,
              "goals": {
                "for": 13,
                "against": 3
              }
            },
            "away": {
              "played": 4,
              "win": 1,
              "draw": 1,
              "lose": 2,
              "goals": {
                "for": 11,
                "against": 6
              }
            },
            "update": "2023-10-23T00:00:00+00:00"
          },
          {
            "rank": 7,
            "team": {
              "id": 51,
              "name": "Brighton",
              "logo": "https://media-4.api-sports.io/football/teams/51.png"
            },
            "points": 16,
            "goalsDiff": 4,
            "group": "Premier League",
            "form": "LDLWW",
            "status": "same",
            "description": null,
            "all": {
              "played": 9,
              "win": 5,
              "draw": 1,
              "lose": 3,
              "goals": {
                "for": 22,
                "against": 18
              }
            },
            "home": {
              "played": 5,
              "win": 3,
              "draw": 1,
              "lose": 1,
              "goals": {
                "for": 13,
                "against": 8
              }
            },
            "away": {
              "played": 4,
              "win": 2,
              "draw": 0,
              "lose": 2,
              "goals": {
                "for": 9,
                "against": 10
              }
            },
            "update": "2023-10-23T00:00:00+00:00"
          },
          {
            "rank": 8,
            "team": {
              "id": 33,
              "name": "Manchester United",
              "logo": "https://media-4.api-sports.io/football/teams/33.png"
            },
            "points": 15,
            "goalsDiff": -2,
            "group": "Premier League",
            "form": "WWLWL",
            "status": "same",
            "description": null,
            "all": {
              "played": 9,
              "win": 5,
              "draw": 0,
              "lose": 4,
              "goals": {
                "for": 11,
                "against": 13
              }
            },
            "home": {
              "played": 5,
              "win": 3,
              "draw": 0,
              "lose": 2,
              "goals": {
                "for": 7,
                "against": 7
              }
            },
            "away": {
              "played": 4,
              "win": 2,
              "draw": 0,
              "lose": 2,
              "goals": {
                "for": 4,
                "against": 6
              }
            },
            "update": "2023-10-23T00:00:00+00:00"
          },
          {
            "rank": 9,
            "team": {
              "id": 48,
              "name": "West Ham",
              "logo": "https://media-4.api-sports.io/football/teams/48.png"
            },
            "points": 14,
            "goalsDiff": 0,
            "group": "Premier League",
            "form": "LDWLL",
            "status": "same",
            "description": null,
            "all": {
              "played": 9,
              "win": 4,
              "draw": 2,
              "lose": 3,
              "goals": {
                "for": 16,
                "against": 16
              }
            },
            "home": {
              "played": 4,
              "win": 2,
              "draw": 1,
              "lose": 1,
              "goals": {
                "for": 8,
                "against": 6
              }
            },
            "away": {
              "played": 5,
              "win": 2,
              "draw": 1,
              "lose": 2,
              "goals": {
                "for": 8,
                "against": 10
              }
            },
            "update": "2023-10-23T00:00:00+00:00"
          },
          {
            "rank": 10,
            "team": {
              "id": 49,
              "name": "Chelsea",
              "logo": "https://media-4.api-sports.io/football/teams/49.png"
            },
            "points": 12,
            "goalsDiff": 4,
            "group": "Premier League",
            "form": "DWWLD",
            "status": "same",
            "description": null,
            "all": {
              "played": 9,
              "win": 3,
              "draw": 3,
              "lose": 3,
              "goals": {
                "for": 13,
                "against": 9
              }
            },
            "home": {
              "played": 5,
              "win": 1,
              "draw": 2,
              "lose": 2,
              "goals": {
                "for": 6,
                "against": 5
              }
            },
            "away": {
              "played": 4,
              "win": 2,
              "draw": 1,
              "lose": 1,
              "goals": {
                "for": 7,
                "against": 4
              }
            },
            "update": "2023-10-23T00:00:00+00:00"
          },
          {
            "rank": 11,
            "team": {
              "id": 52,
              "name": "Crystal Palace",
              "logo": "https://media-4.api-sports.io/football/teams/52.png"
            },
            "points": 12,
            "goalsDiff": -4,
            "group": "Premier League",
            "form": "LDWDL",
            "status": "same",
            "description": null,
            "all": {
              "played": 9,
              "win": 3,
              "draw": 3,
              "lose": 3,
              "goals": {
                "for": 7,
                "against": 11
              }
            },
            "home": {
              "played": 4,
              "win": 1,
              "draw": 2,
              "lose": 1,
              "goals": {
                "for": 3,
                "against": 3
              }
            },
            "away": {
              "played": 5,
              "win": 2,
              "draw": 1,
              "lose": 2,
              "goals": {
                "for": 4,
                "against": 8
              }
            },
            "update": "2023-10-23T00:00:00+00:00"
          },
          {
            "rank": 12,
            "team": {
              "id": 39,
              "name": "Wolves",
              "logo": "https://media-4.api-sports.io/football/teams/39.png"
            },
            "points": 11,
            "goalsDiff": -4,
            "group": "Premier League",
            "form": "WDWDL",
            "status": "same",
            "description": null,
            "all": {
              "played": 9,
              "win": 3,
              "draw": 2,
              "lose": 4,
              "goals": {
                "for": 11,
                "against": 15
              }
            },
            "home": {
              "played": 4,
              "win": 1,
              "draw": 1,
              "lose": 2,
              "goals": {
                "for": 5,
                "against": 9
              }
            },
            "away": {
              "played": 5,
              "win": 2,
              "draw": 1,
              "lose": 2,
              "goals": {
                "for": 6,
                "against": 6
              }
            },
            "update": "2023-10-23T00:00:00+00:00"
          },
          {
            "rank": 13,
            "team": {
              "id": 36,
              "name": "Fulham",
              "logo": "https://media-4.api-sports.io/football/teams/36.png"
            },
            "points": 11,
            "goalsDiff": -5,
            "group": "Premier League",
            "form": "WLDWL",
            "status": "same",
            "description": null,
            "all": {
              "played": 8,
              "win": 3,
              "draw": 2,
              "lose": 3,
              "goals": {
                "for": 8,
                "against": 13
              }
            },
            "home": {
              "played": 4,
              "win": 2,
              "draw": 0,
              "lose": 2,
              "goals": {
                "for": 4,
                "against": 6
              }
            },
            "away": {
              "played": 4,
              "win": 1,
              "draw": 2,
              "lose": 1,
              "goals": {
                "for": 4,
                "against": 7
              }
            },
            "update": "2023-10-23T00:00:00+00:00"
          },
          {
            "rank": 14,
            "team": {
              "id": 55,
              "name": "Brentford",
              "logo": "https://media-4.api-sports.io/football/teams/55.png"
            },
            "points": 10,
            "goalsDiff": 2,
            "group": "Premier League",
            "form": "WLDLL",
            "status": "same",
            "description": null,
            "all": {
              "played": 9,
              "win": 2,
              "draw": 4,
              "lose": 3,
              "goals": {
                "for": 14,
                "against": 12
              }
            },
            "home": {
              "played": 5,
              "win": 1,
              "draw": 3,
              "lose": 1,
              "goals": {
                "for": 9,
                "against": 8
              }
            },
            "away": {
              "played": 4,
              "win": 1,
              "draw": 1,
              "lose": 2,
              "goals": {
                "for": 5,
                "against": 4
              }
            },
            "update": "2023-10-23T00:00:00+00:00"
          },
          {
            "rank": 15,
            "team": {
              "id": 65,
              "name": "Nottingham Forest",
              "logo": "https://media-4.api-sports.io/football/teams/65.png"
            },
            "points": 10,
            "goalsDiff": -2,
            "group": "Premier League",
            "form": "DDDLD",
            "status": "same",
            "description": null,
            "all": {
              "played": 9,
              "win": 2,
              "draw": 4,
              "lose": 3,
              "goals": {
                "for": 10,
                "against": 12
              }
            },
            "home": {
              "played": 4,
              "win": 1,
              "draw": 3,
              "lose": 0,
              "goals": {
                "for": 6,
                "against": 5
              }
            },
            "away": {
              "played": 5,
              "win": 1,
              "draw": 1,
              "lose": 3,
              "goals": {
                "for": 4,
                "against": 7
              }
            },
            "update": "2023-10-23T00:00:00+00:00"
          },
          {
            "rank": 16,
            "team": {
              "id": 45,
              "name": "Everton",
              "logo": "https://media-4.api-sports.io/football/teams/45.png"
            },
            "points": 7,
            "goalsDiff": -5,
            "group": "Premier League",
            "form": "LWLWL",
            "status": "same",
            "description": null,
            "all": {
              "played": 9,
              "win": 2,
              "draw": 1,
              "lose": 6,
              "goals": {
                "for": 9,
                "against": 14
              }
            },
            "home": {
              "played": 5,
              "win": 1,
              "draw": 0,
              "lose": 4,
              "goals": {
                "for": 4,
                "against": 5
              }
            },
            "away": {
              "played": 4,
              "win": 1,
              "draw": 1,
              "lose": 2,
              "goals": {
                "for": 5,
                "against": 9
              }
            },
            "update": "2023-10-23T00:00:00+00:00"
          },
          {
            "rank": 17,
            "team": {
              "id": 1359,
              "name": "Luton",
              "logo": "https://media-4.api-sports.io/football/teams/1359.png"
            },
            "points": 5,
            "goalsDiff": -9,
            "group": "Premier League",
            "form": "DLLWD",
            "status": "same",
            "description": null,
            "all": {
              "played": 9,
              "win": 1,
              "draw": 2,
              "lose": 6,
              "goals": {
                "for": 8,
                "against": 17
              }
            },
            "home": {
              "played": 4,
              "win": 0,
              "draw": 1,
              "lose": 3,
              "goals": {
                "for": 3,
                "against": 6
              }
            },
            "away": {
              "played": 5,
              "win": 1,
              "draw": 1,
              "lose": 3,
              "goals": {
                "for": 5,
                "against": 11
              }
            },
            "update": "2023-10-23T00:00:00+00:00"
          },
          {
            "rank": 18,
            "team": {
              "id": 44,
              "name": "Burnley",
              "logo": "https://media-4.api-sports.io/football/teams/44.png"
            },
            "points": 4,
            "goalsDiff": -16,
            "group": "Premier League",
            "form": "LLWLL",
            "status": "same",
            "description": "Relegation - Championship",
            "all": {
              "played": 9,
              "win": 1,
              "draw": 1,
              "lose": 7,
              "goals": {
                "for": 7,
                "against": 23
              }
            },
            "home": {
              "played": 5,
              "win": 0,
              "draw": 0,
              "lose": 5,
              "goals": {
                "for": 4,
                "against": 16
              }
            },
            "away": {
              "played": 4,
              "win": 1,
              "draw": 1,
              "lose": 2,
              "goals": {
                "for": 3,
                "against": 7
              }
            },
            "update": "2023-10-23T00:00:00+00:00"
          },
          {
            "rank": 19,
            "team": {
              "id": 35,
              "name": "Bournemouth",
              "logo": "https://media-4.api-sports.io/football/teams/35.png"
            },
            "points": 3,
            "goalsDiff": -14,
            "group": "Premier League",
            "form": "LLLLD",
            "status": "same",
            "description": "Relegation - Championship",
            "all": {
              "played": 9,
              "win": 0,
              "draw": 3,
              "lose": 6,
              "goals": {
                "for": 6,
                "against": 20
              }
            },
            "home": {
              "played": 5,
              "win": 0,
              "draw": 2,
              "lose": 3,
              "goals": {
                "for": 2,
                "against": 9
              }
            },
            "away": {
              "played": 4,
              "win": 0,
              "draw": 1,
              "lose": 3,
              "goals": {
                "for": 4,
                "against": 11
              }
            },
            "update": "2023-10-23T00:00:00+00:00"
          },
          {
            "rank": 20,
            "team": {
              "id": 62,
              "name": "Sheffield Utd",
              "logo": "https://media-4.api-sports.io/football/teams/62.png"
            },
            "points": 1,
            "goalsDiff": -17,
            "group": "Premier League",
            "form": "LLLLL",
            "status": "same",
            "description": "Relegation - Championship",
            "all": {
              "played": 9,
              "win": 0,
              "draw": 1,
              "lose": 8,
              "goals": {
                "for": 7,
                "against": 24
              }
            },
            "home": {
              "played": 5,
              "win": 0,
              "draw": 1,
              "lose": 4,
              "goals": {
                "for": 4,
                "against": 15
              }
            },
            "away": {
              "played": 4,
              "win": 0,
              "draw": 0,
              "lose": 4,
              "goals": {
                "for": 3,
                "against": 9
              }
            },
            "update": "2023-10-23T00:00:00+00:00"
          }
        ]
      ]
    }
  }
]
};

export let responseFixtures: ApiResponse =
  {
    "get": "fixtures",
    "parameters": {
      "team": "50",
      "last": "10"
    },
    "errors": {},
    "results": 10,
    "paging": {
      "current": 1,
      "total": 1
    },
    "response": [
      {
        "fixture": {
          "id": 1035122,
          "referee": "Robert Jones, England",
          "timezone": "UTC",
          "date": "2023-10-21T14:00:00+00:00",
          "timestamp": 1697896800,
          "periods": {
            "first": 1697896800,
            "second": 1697900400
          },
          "venue": {
            "id": 555,
            "name": "Etihad Stadium",
            "city": "Manchester"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2023,
          "round": "Regular Season - 9"
        },
        "teams": {
          "home": {
            "id": 50,
            "name": "Manchester City",
            "logo": "https://media-4.api-sports.io/football/teams/50.png",
            "winner": true
          },
          "away": {
            "id": 51,
            "name": "Brighton",
            "logo": "https://media-4.api-sports.io/football/teams/51.png",
            "winner": false
          }
        },
        "goals": {
          "home": 2,
          "away": 1
        },
        "score": {
          "halftime": {
            "home": 2,
            "away": 0
          },
          "fulltime": {
            "home": 2,
            "away": 1
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      {
        "fixture": {
          "id": 1035107,
          "referee": "Michael Oliver, England",
          "timezone": "UTC",
          "date": "2023-10-08T15:30:00+00:00",
          "timestamp": 1696779000,
          "periods": {
            "first": 1696779000,
            "second": 1696782600
          },
          "venue": {
            "id": 494,
            "name": "Emirates Stadium",
            "city": "London"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2023,
          "round": "Regular Season - 8"
        },
        "teams": {
          "home": {
            "id": 42,
            "name": "Arsenal",
            "logo": "https://media-4.api-sports.io/football/teams/42.png",
            "winner": true
          },
          "away": {
            "id": 50,
            "name": "Manchester City",
            "logo": "https://media-4.api-sports.io/football/teams/50.png",
            "winner": false
          }
        },
        "goals": {
          "home": 1,
          "away": 0
        },
        "score": {
          "halftime": {
            "home": 0,
            "away": 0
          },
          "fulltime": {
            "home": 1,
            "away": 0
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      {
        "fixture": {
          "id": 1126173,
          "referee": "Artur Soares Dias",
          "timezone": "UTC",
          "date": "2023-10-04T19:00:00+00:00",
          "timestamp": 1696446000,
          "periods": {
            "first": 1696446000,
            "second": 1696449600
          },
          "venue": {
            "id": 738,
            "name": "Red Bull Arena",
            "city": "Leipzig"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 2,
          "name": "UEFA Champions League",
          "country": "World",
          "logo": "https://media-4.api-sports.io/football/leagues/2.png",
          "flag": null,
          "season": 2023,
          "round": "Group G - 2"
        },
        "teams": {
          "home": {
            "id": 173,
            "name": "RB Leipzig",
            "logo": "https://media-4.api-sports.io/football/teams/173.png",
            "winner": false
          },
          "away": {
            "id": 50,
            "name": "Manchester City",
            "logo": "https://media-4.api-sports.io/football/teams/50.png",
            "winner": true
          }
        },
        "goals": {
          "home": 1,
          "away": 3
        },
        "score": {
          "halftime": {
            "home": 0,
            "away": 1
          },
          "fulltime": {
            "home": 1,
            "away": 3
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      {
        "fixture": {
          "id": 1035106,
          "referee": "Craig Pawson, England",
          "timezone": "UTC",
          "date": "2023-09-30T14:00:00+00:00",
          "timestamp": 1696082400,
          "periods": {
            "first": 1696082400,
            "second": 1696086000
          },
          "venue": {
            "id": 600,
            "name": "Molineux Stadium",
            "city": "Wolverhampton, West Midlands"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2023,
          "round": "Regular Season - 7"
        },
        "teams": {
          "home": {
            "id": 39,
            "name": "Wolves",
            "logo": "https://media-4.api-sports.io/football/teams/39.png",
            "winner": true
          },
          "away": {
            "id": 50,
            "name": "Manchester City",
            "logo": "https://media-4.api-sports.io/football/teams/50.png",
            "winner": false
          }
        },
        "goals": {
          "home": 2,
          "away": 1
        },
        "score": {
          "halftime": {
            "home": 1,
            "away": 0
          },
          "fulltime": {
            "home": 2,
            "away": 1
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      {
        "fixture": {
          "id": 1125712,
          "referee": "C. Kavanagh",
          "timezone": "UTC",
          "date": "2023-09-27T19:00:00+00:00",
          "timestamp": 1695841200,
          "periods": {
            "first": 1695841200,
            "second": 1695844800
          },
          "venue": {
            "id": 562,
            "name": "St. James' Park",
            "city": "Newcastle upon Tyne"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 48,
          "name": "League Cup",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/48.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2023,
          "round": "3rd Round"
        },
        "teams": {
          "home": {
            "id": 34,
            "name": "Newcastle",
            "logo": "https://media-4.api-sports.io/football/teams/34.png",
            "winner": true
          },
          "away": {
            "id": 50,
            "name": "Manchester City",
            "logo": "https://media-4.api-sports.io/football/teams/50.png",
            "winner": false
          }
        },
        "goals": {
          "home": 1,
          "away": 0
        },
        "score": {
          "halftime": {
            "home": 0,
            "away": 0
          },
          "fulltime": {
            "home": 1,
            "away": 0
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      {
        "fixture": {
          "id": 1035095,
          "referee": "Anthony Taylor, England",
          "timezone": "UTC",
          "date": "2023-09-23T14:00:00+00:00",
          "timestamp": 1695477600,
          "periods": {
            "first": 1695477600,
            "second": 1695481200
          },
          "venue": {
            "id": 555,
            "name": "Etihad Stadium",
            "city": "Manchester"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2023,
          "round": "Regular Season - 6"
        },
        "teams": {
          "home": {
            "id": 50,
            "name": "Manchester City",
            "logo": "https://media-4.api-sports.io/football/teams/50.png",
            "winner": true
          },
          "away": {
            "id": 65,
            "name": "Nottingham Forest",
            "logo": "https://media-4.api-sports.io/football/teams/65.png",
            "winner": false
          }
        },
        "goals": {
          "home": 2,
          "away": 0
        },
        "score": {
          "halftime": {
            "home": 2,
            "away": 0
          },
          "fulltime": {
            "home": 2,
            "away": 0
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      {
        "fixture": {
          "id": 1126149,
          "referee": "João Pedro Pinheiro",
          "timezone": "UTC",
          "date": "2023-09-19T19:00:00+00:00",
          "timestamp": 1695150000,
          "periods": {
            "first": 1695150000,
            "second": 1695153600
          },
          "venue": {
            "id": 555,
            "name": "Etihad Stadium",
            "city": "Manchester"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 2,
          "name": "UEFA Champions League",
          "country": "World",
          "logo": "https://media-4.api-sports.io/football/leagues/2.png",
          "flag": null,
          "season": 2023,
          "round": "Group G - 1"
        },
        "teams": {
          "home": {
            "id": 50,
            "name": "Manchester City",
            "logo": "https://media-4.api-sports.io/football/teams/50.png",
            "winner": true
          },
          "away": {
            "id": 598,
            "name": "FK Crvena Zvezda",
            "logo": "https://media-4.api-sports.io/football/teams/598.png",
            "winner": false
          }
        },
        "goals": {
          "home": 3,
          "away": 1
        },
        "score": {
          "halftime": {
            "home": 0,
            "away": 1
          },
          "fulltime": {
            "home": 3,
            "away": 1
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      {
        "fixture": {
          "id": 1035085,
          "referee": "Andy Madley, England",
          "timezone": "UTC",
          "date": "2023-09-16T14:00:00+00:00",
          "timestamp": 1694872800,
          "periods": {
            "first": 1694872800,
            "second": 1694876400
          },
          "venue": {
            "id": 598,
            "name": "London Stadium",
            "city": "London"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2023,
          "round": "Regular Season - 5"
        },
        "teams": {
          "home": {
            "id": 48,
            "name": "West Ham",
            "logo": "https://media-4.api-sports.io/football/teams/48.png",
            "winner": false
          },
          "away": {
            "id": 50,
            "name": "Manchester City",
            "logo": "https://media-4.api-sports.io/football/teams/50.png",
            "winner": true
          }
        },
        "goals": {
          "home": 1,
          "away": 3
        },
        "score": {
          "halftime": {
            "home": 1,
            "away": 0
          },
          "fulltime": {
            "home": 1,
            "away": 3
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      {
        "fixture": {
          "id": 1035075,
          "referee": "Michael Oliver, England",
          "timezone": "UTC",
          "date": "2023-09-02T14:00:00+00:00",
          "timestamp": 1693663200,
          "periods": {
            "first": 1693663200,
            "second": 1693666800
          },
          "venue": {
            "id": 555,
            "name": "Etihad Stadium",
            "city": "Manchester"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2023,
          "round": "Regular Season - 4"
        },
        "teams": {
          "home": {
            "id": 50,
            "name": "Manchester City",
            "logo": "https://media-4.api-sports.io/football/teams/50.png",
            "winner": true
          },
          "away": {
            "id": 36,
            "name": "Fulham",
            "logo": "https://media-4.api-sports.io/football/teams/36.png",
            "winner": false
          }
        },
        "goals": {
          "home": 5,
          "away": 1
        },
        "score": {
          "halftime": {
            "home": 2,
            "away": 1
          },
          "fulltime": {
            "home": 5,
            "away": 1
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      {
        "fixture": {
          "id": 1035066,
          "referee": "Jarred Gillett, Australia",
          "timezone": "UTC",
          "date": "2023-08-27T13:00:00+00:00",
          "timestamp": 1693141200,
          "periods": {
            "first": 1693141200,
            "second": 1693144800
          },
          "venue": {
            "id": 581,
            "name": "Bramall Lane",
            "city": "Sheffield"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2023,
          "round": "Regular Season - 3"
        },
        "teams": {
          "home": {
            "id": 62,
            "name": "Sheffield Utd",
            "logo": "https://media-4.api-sports.io/football/teams/62.png",
            "winner": false
          },
          "away": {
            "id": 50,
            "name": "Manchester City",
            "logo": "https://media-4.api-sports.io/football/teams/50.png",
            "winner": true
          }
        },
        "goals": {
          "home": 1,
          "away": 2
        },
        "score": {
          "halftime": {
            "home": 0,
            "away": 0
          },
          "fulltime": {
            "home": 1,
            "away": 2
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      }
    ]
  };
