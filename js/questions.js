var questions = [
  // SURVIVORS
  {
    "info": {
      "name": {
        "hasQuestion": false
      },
      "nationality": {
        "hasQuestion": true,
        "question": "What is the nationality of _?",
        "inverseQuestion": "Which of the following survivors is _?"
      },
      "voice_actor": {
        "hasQuestion": true,
        "question": "Who voices _?",
        "inverseQuestion": "Which of the following survivors is voiced by _?"
      },
      "difficulty": {
        "hasQuestion": true,
        "inverseOnly": true,
        "inverseQuestion": "Which of the following survivors has a difficulty of _?"
      },
      "dlc": {
        "hasQuestion": true,
        "question": "What DLC is _ from?",
        "inverseQuestion": "Which of the following survivors is from the '_' DLC?"
      }
    },
    "data": [
      {
        "name": "Dwight Fairfield",
        "nationality": "American",
        "voice_actor": "Ian Chuprun",
        "difficulty": "Easy",
        "dlc": "Base Game"
      },
      {
        "name": "Meg Thomas",
        "nationality": "American",
        "voice_actor": "Ingrid Blemur",
        "difficulty": "Easy",
        "dlc": "Base Game"
      },
      {
        "name": "Claudette Morel",
        "nationality": "Canadian",
        "voice_actor": "Sarah Robinson",
        "difficulty": "Easy",
        "dlc": "Base Game"
      },
      {
        "name": "Jake Park",
        "nationality": "Asian American",
        "voice_actor": "Kevin Boissonneault",
        "difficulty": "Intermediate",
        "dlc": "Base Game"
      },
      {
        "name": "Nea Karlsson",
        "nationality": "Swedish",
        "voice_actor": "Morgane Ravasi",
        "difficulty": "Intermediate",
        "dlc": "The Last Breath Chapter"
      },
      {
        "name": "Laurie Strode",
        "nationality": "American",
        "voice_actor": "Catherine Lecours",
        "difficulty": "Hard",
        "dlc": "The HALLOWEEN Chapter"
      },
      {
        "name": "Ace Visconti",
        "nationality": "Argentinian of Italian descent",
        "voice_actor": "Sebastien Varas",
        "difficulty": "Easy",
        "dlc": "Of Flesh and Mud"
      },
      {
        "name": "Bill Overbeck",
        "nationality": "American",
        "voice_actor": "Ricardo Gomez",
        "difficulty": "Hard",
        "dlc": "Left Behind"
      },
      {
        "name": "Feng Min",
        "nationality": "Chinese",
        "voice_actor": "Bianca Lavric",
        "difficulty": "Easy",
        "dlc": "Spark of Madness"
      },
      {
        "name": "David King",
        "nationality": "English",
        "voice_actor": "Stefan Horvath",
        "difficulty": "Intermediate",
        "dlc": "A Lullaby for the Dark"
      },
      {
        "name": "Quentin Smith",
        "nationality": "American",
        "voice_actor": "Louis McLean",
        "difficulty": "Easy",
        "dlc": "A Nightmare on Elm Street"
      },
      {
        "name": "David Tapp",
        "nationality": "African American",
        "voice_actor": "Dave Blake",
        "difficulty": "Intermediate",
        "dlc": "The SAW Chapter"
      },
      {
        "name": "Kate Denson",
        "nationality": "American",
        "voice_actor": "Daphne Poulin Gourdeau",
        "difficulty": "Easy",
        "dlc": "Curtain Call"
      },
      {
        "name": "Adam Francis",
        "nationality": "Jamaican",
        "voice_actor": "Joseph Bourbaki",
        "difficulty": "Intermediate",
        "dlc": "Shattered Bloodline"
      },
      {
        "name": "Jeff Johansen",
        "nationality": "Canadian with Norwegian roots",
        "voice_actor": "Filip Ivanovic",
        "difficulty": "Intermediate",
        "dlc": "Darkness Among Us"
      },
      {
        "name": "Jane Romero",
        "nationality": "Latin American",
        "voice_actor": "Patricia Brochu-Gagne",
        "difficulty": "Intermediate",
        "dlc": "Demise of the Faithful"
      },
      {
        "name": "Ash Williams",
        "nationality": "American",
        "voice_actor": "Bruce Campbell",
        "difficulty": "Easy",
        "dlc": "Ash vs Evil Dead"
      },
      {
        "name": "Nancy Wheeler",
        "nationality": "American",
        "voice_actor": "Diane Guillemont",
        "difficulty": "Easy",
        "dlc": "Stranger Things"
      },
      {
        "name": "Steve Harrington",
        "nationality": "American",
        "voice_actor": "Unknown",
        "difficulty": "Easy",
        "dlc": "Stranger Things"
      },
      {
        "name": "Yui Kimura",
        "nationality": "Japanese",
        "voice_actor": "Daniela Pinto",
        "difficulty": "Easy"
      },
      {
        "name": "Zarina Kassir",
        "nationality": "Lebanese",
        "voice_actor": "Emilie Paquin",
        "difficulty": "Intermediate",
        "dlc": "Chains of Hate"
      },
      {
        "name": "Cheryl Mason",
        "nationality": "American ",
        "voice_actor": "Unknown",
        "difficulty": "Easy",
        "dlc": "Silent Hill"
      },
      {
        "name": "Felix Richter",
        "nationality": "German",
        "voice_actor": "Frederic Poirier",
        "difficulty": "Intermediate",
        "dlc": "Descend Beyond"
      },
      {
        "name": "Elodie Rakoto",
        "nationality": "French Madagassian",
        "voice_actor": "Beatrix Moersch",
        "difficulty": "Intermediate",
        "dlc": "A Binding of Kin"
      },
      {
        "name": "Yun-Jin Lee",
        "nationality": "Korean",
        "voice_actor": "So-Hee Kim",
        "difficulty": "Easy",
        "dlc": "All-Kill"
      },
      {
        "name": "Jill Valentine",
        "nationality": "American",
        "voice_actor": "Chaney Crabb",
        "difficulty": "Intermediate",
        "dlc": "Resident Evil"
      },
      {
        "name": "Leon Kennedy",
        "nationality": "American",
        "voice_actor": "Riley McShane",
        "difficulty": "Intermediate",
        "dlc": "Resident Evil"
      },
      {
        "name": "Mikaela Reid",
        "nationality": "Unknown",
        "voice_actor": "Adrienne Cowan",
        "difficulty": "Intermediate",
        "dlc": "Hour of the Witch"
      },
      {
        "name": "Jonah Vasquez",
        "nationality": "Hispanic American",
        "voice_actor": "Michael Alvarez",
        "difficulty": "Easy",
        "dlc": "Portrait of a Murder"
      }
    ]
  },
  // SURVIVOR PERKS
  {
    "info": {
      "name": {
        "hasQuestion": false
      },
      "survivor": {
        "hasQuestion": true,
        "question": "Which survivor does the teachable perk _ belong to?"
      },
      "level": {
        "hasQuestion": true,
        "question": "At what level is the teachable perk _ unlocked?",
        "inverseQuestion": "Which of the following teachable perks is unlocked at level _?",
        "type": "number",
        "prefix": "Level "
      },
      "exhaustion": {
        "hasQuestion": true,
        "question": "The perk _ inflicts the Exhaustion status effect for how long?",
        "type": "number",
        "suffix": "s"
      },
      "broken": {
        "hasQuestion": true,
        "question": "The perk _ inflicts the Broken status effect for how long?",
        "type": "number",
        "suffix": "s"
      },
      "cooldown": {
        "hasQuestion": true,
        "question": "How long is the cooldown for the perk _?",
        "type": "number",
        "suffix": "s"
      },
      "movement_bonus": {
        "hasQuestion": true,
        "question": "By how much does the perk _ increase movement speed?",
        "type": "number",
        "prefix": "+",
        "suffix": "%"
      },
      "movement_bonus_duration": {
        "hasQuestion": true,
        "question": "How long does the perk _ increase movement speed?",
        "type": "number",
        "suffix": "s"
      },
      "action_bonus": {
        "hasQuestion": true,
        "question": "What effect does the perk _ have on its associated action speed?",
        "smallprint": "If based on stacks, give the value per stack",
        "type": "number",
        "prefix": "+",
        "suffix": "%"
      },
      "range": {
        "hasQuestion": true,
        "question": "What is the range of the perk _?",
        "smallprint": "If based on stacks, give the value per stack",
        "type": "number",
        "suffix": "m"
      },
      "duration": {
        "hasQuestion": true,
        "question": "What is the duration of the perk _?",
        "type": "number",
        "suffix": "s"
      },
      "stacks": {
        "hasQuestion": true,
        "question": "What is the maximum number of stacks of the perk _?",
        "type": "number",
        "suffix": " Stacks"
      }
    },
    "data": [
      {
        "name": "Bond",
        "survivor": "Dwight Fairfield",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        }
      },
      {
        "name": "Prove Thyself",
        "survivor": "Dwight Fairfield",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        }
      },
      {
        "name": "Leader",
        "survivor": "Dwight Fairfield",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "action_bonus": {
          "value": 25,
          "variance": 5
        }
      },
      {
        "name": "Quick & Quiet",
        "survivor": "Meg Thomas",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "cooldown": {
          "value": 20,
          "variance": 5,
          "min": 10
        }
      },
      {
        "name": "Sprint Burst",
        "survivor": "Meg Thomas",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "exhaustion": {
          "value": 40,
          "variance": 5
        },
        "movement_bonus": {
          "value": 150,
          "variance": 50,
          "min": 50
        },
        "movement_bonus_duration": {
          "value": 3,
          "variance": 1,
          "min": 1
        }
      },
      {
        "name": "Adrenaline",
        "survivor": "Meg Thomas",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "exhaustion": {
          "value": 40,
          "variance": 5
        },
        "movement_bonus": {
          "value": 150,
          "variance": 50,
          "min": 50
        },
        "movement_bonus_duration": {
          "value": 5,
          "variance": 1
        }
      },
      {
        "name": "Empathy",
        "survivor": "Claudette Morel",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "range": {
          "value": 128,
          "variance": 16
        }
      },
      {
        "name": "Botany Knowledge",
        "survivor": "Claudette Morel",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "action_bonus": {
          "value": 33,
          "variance": 11,
          "min": 11
        }
      },
      {
        "name": "Self-Care",
        "survivor": "Claudette Morel",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "action_bonus": {
          "value": -50,
          "variance": 10
        }
      },
      {
        "name": "Iron Will",
        "survivor": "Jake Park",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        }
      },
      {
        "name": "Saboteur",
        "survivor": "Jake Park",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "cooldown": {
          "value": 60,
          "variance": 10
        },
        "range": {
          "value": 56,
          "variance": 8
        }
      },
      {
        "name": "Calm Spirit",
        "survivor": "Jake Park",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        }
      },
      {
        "name": "Balanced Landing",
        "survivor": "Nea Karlsson",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "exhaustion": {
          "value": 40,
          "variance": 5
        },
        "movement_bonus": {
          "value": 150,
          "variance": 50,
          "min": 50
        },
        "movement_bonus_duration": {
          "value": 3,
          "variance": 1,
          "min": 1
        }
      },
      {
        "name": "Urban Evasion",
        "survivor": "Nea Karlsson",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "movement_bonus": {
          "value": 100,
          "variance": 25,
          "min": 50
        }
      },
      {
        "name": "Streetwise",
        "survivor": "Nea Karlsson",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "range": {
          "value": 8,
          "variance": 4,
          "min": 4
        }
      },
      {
        "name": "Sole Survivor",
        "survivor": "Laurie Strode",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "range": {
          "value": 24,
          "variance": 8,
          "min": 8
        },
        "stacks": {
          "value": 3,
          "variance": 1,
          "min": 2
        }
      },
      {
        "name": "Object of Obsession",
        "survivor": "Laurie Strode",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "action_bonus": {
          "value": 6,
          "variance": 3,
          "min": 3
        }
      },
      {
        "name": "Decisive Strike",
        "survivor": "Laurie Strode",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "duration": {
          "value": 60,
          "variance": 10
        }
      },
      {
        "name": "Open Handed",
        "survivor": "Ace Visconti",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "range": {
          "value": 16,
          "variance": 4
        }
      },
      {
        "name": "Up the Ante",
        "survivor": "Ace Visconti",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "stacks": {
          "value": 3,
          "variance": 1,
          "min": 2
        }
      },
      {
        "name": "Ace in the Hole",
        "survivor": "Ace Visconti",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        }
      },
      {
        "name": "Left Behind",
        "survivor": "Bill Overbeck",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "range": {
          "value": 32,
          "variance": 8
        }
      },
      {
        "name": "Borrowed Time",
        "survivor": "Bill Overbeck",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "duration": {
          "value": 12,
          "variance": 2
        }
      },
      {
        "name": "Unbreakable",
        "survivor": "Bill Overbeck",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "action_bonus": {
          "value": 35,
          "variance": 5
        }
      },
      {
        "name": "Technician",
        "survivor": "Feng Min",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "range": {
          "value": 8,
          "variance": 4,
          "min": 4
        }
      },
      {
        "name": "Lithe",
        "survivor": "Feng Min",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "exhaustion": {
          "value": 40,
          "variance": 5
        },
        "movement_bonus": {
          "value": 150,
          "variance": 50,
          "min": 50
        },
        "movement_bonus_duration": {
          "value": 3,
          "variance": 1,
          "min": 1
        }
      },
      {
        "name": "Alert",
        "survivor": "Feng Min",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "duration": {
          "value": 5,
          "variance": 1
        }
      },
      {
        "name": "We're Gonna Live Forever",
        "survivor": "David King",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "action_bonus": {
          "value": 100,
          "variance": 25,
          "min": 50
        },
        "stacks": {
          "value": 4,
          "variance": 1,
          "min": 2
        }
      },
      {
        "name": "Dead Hard",
        "survivor": "David King",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "exhaustion": {
          "value": 40,
          "variance": 5
        }
      },
      {
        "name": "No Mither",
        "survivor": "David King",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "action_bonus": {
          "value": 25,
          "variance": 5
        }
      },
      {
        "name": "Wake Up!",
        "survivor": "Quentin Smith",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "action_bonus": {
          "value": 25,
          "variance": 5
        },
        "range": {
          "value": 128,
          "variance": 16
        }
      },
      {
        "name": "Pharmacy",
        "survivor": "Quentin Smith",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "action_bonus": {
          "value": 80,
          "variance": 20
        },
        "range": {
          "value": 8,
          "variance": 4,
          "min": 4
        }
      },
      {
        "name": "Vigil",
        "survivor": "Quentin Smith",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "range": {
          "value": 8,
          "variance": 4,
          "min": 4
        }
      },
      {
        "name": "Tenacity",
        "survivor": "David Tapp",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "action_bonus": {
          "value": 50,
          "variance": 10
        }
      },
      {
        "name": "Detective's Hunch",
        "survivor": "David Tapp",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "duration": {
          "value": 10,
          "variance": 2
        },
        "range": {
          "value": 64,
          "variance": 16
        }
      },
      {
        "name": "Stake Out",
        "survivor": "David Tapp",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "stacks": {
          "value": 4,
          "variance": 1,
          "min": 2
        }
      },
      {
        "name": "Dance With Me",
        "survivor": "Kate Denson",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "duration": {
          "value": 3,
          "variance": 1,
          "min": 1
        },
        "cooldown": {
          "value": 40,
          "variance": 5
        }
      },
      {
        "name": "Windows of Opportunity",
        "survivor": "Kate Denson",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "range": {
          "value": 32,
          "variance": 8
        }
      },
      {
        "name": "Boil Over",
        "survivor": "Kate Denson",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "range": {
          "value": 16,
          "variance": 4
        }
      },
      {
        "name": "Diversion",
        "survivor": "Adam Francis",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        }
      },
      {
        "name": "Deliverance",
        "survivor": "Adam Francis",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "broken": {
          "value": 60,
          "variance": 10
        }
      },
      {
        "name": "Autodidact",
        "survivor": "Adam Francis",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "stacks": {
          "value": 5,
          "variance": 1
        }
      },
      {
        "name": "Breakdown",
        "survivor": "Jeff Johansen",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "duration": {
          "value": 6,
          "variance": 1
        }
      },
      {
        "name": "Aftercare",
        "survivor": "Jeff Johansen",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "duration": {
          "value": 6,
          "variance": 1
        }
      },
      {
        "name": "Distortion",
        "survivor": "Jeff Johansen",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "duration": {
          "value": 10,
          "variance": 2
        },
        "stacks": {
          "value": 4,
          "variance": 1,
          "min": 2
        }
      },
      {
        "name": "Solidarity",
        "survivor": "Jane Romero",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        }
      },
      {
        "name": "Poised",
        "survivor": "Jane Romero",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "duration": {
          "value": 10,
          "variance": 2
        }
      },
      {
        "name": "Head On",
        "survivor": "Jane Romero",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "exhaustion": {
          "value": 40,
          "variance": 5
        }
      },
      {
        "name": "Flip-Flop",
        "survivor": "Ash Williams",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        }
      },
      {
        "name": "Buckle Up",
        "survivor": "Ash Williams",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "duration": {
          "value": 10,
          "variance": 2
        },
        "range": {
          "value": 48,
          "variance": 8
        }
      },
      {
        "name": "Mettle of Man",
        "survivor": "Ash Williams",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "range": {
          "value": 16,
          "variance": 4
        }
      },
      {
        "name": "Lucky Break",
        "survivor": "Yui Kimura",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "duration": {
          "value": 60,
          "variance": 10
        }
      },
      {
        "name": "Any Means Necessary",
        "survivor": "Yui Kimura",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "duration": {
          "value": 4,
          "variance": 1
        },
        "cooldown": {
          "value": 60,
          "variance": 10
        }
      },
      {
        "name": "Breakout",
        "survivor": "Yui Kimura",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "movement_bonus": {
          "value": 7,
          "variance": 1
        },
        "action_bonus": {
          "value": 20,
          "variance": 5
        },
        "range": {
          "value": 6,
          "variance": 2,
          "min": 4
        }
      },
      {
        "name": "Off the Record",
        "survivor": "Zarina Kassir",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "duration": {
          "value": 80,
          "variance": 10
        }
      },
      {
        "name": "Red Herring",
        "survivor": "Zarina Kassir",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "cooldown": {
          "value": 40,
          "variance": 10
        }
      },
      {
        "name": "For the People",
        "survivor": "Zarina Kassir",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "broken": {
          "value": 60,
          "variance": 10
        }
      },
      {
        "name": "Soul Guard",
        "survivor": "Cheryl Mason",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "cooldown": {
          "value": 30,
          "variance": 10,
          "min": 10
        },
        "duration": {
          "value": 8,
          "variance": 2
        }
      },
      {
        "name": "Blood Pact",
        "survivor": "Cheryl Mason",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "movement_bonus": {
          "value": 7,
          "variance": 1
        }
      },
      {
        "name": "Repressed Aliance",
        "survivor": "Cheryl Mason",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "duration": {
          "value": 30,
          "variance": 10,
          "min": 10
        }
      },
      {
        "name": "Visionary",
        "survivor": "Felix Richter",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "range": {
          "value": 32,
          "variance": 8
        }
      },
      {
        "name": "Desperate Measures",
        "survivor": "Felix Richter",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "action_bonus": {
          "value": 14,
          "variance": 2
        },
        "stacks": {
          "value": 4,
          "variance": 1,
          "min": 2
        }
      },
      {
        "name": "Built to Last",
        "survivor": "Felix Richter",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "duration": {
          "value": 12,
          "variance": 2
        }
      },
      {
        "name": "Appraisal",
        "survivor": "Elodie Rakoto",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "action_bonus": {
          "value": 80,
          "variance": 20
        },
        "stacks": {
          "value": 3,
          "variance": 1,
          "min": 2
        }
      },
      {
        "name": "Deception",
        "survivor": "Elodie Rakoto",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "cooldown": {
          "value": 40,
          "variance": 10
        },
        "duration": {
          "value": 3,
          "variance": 1,
          "min": 1
        }
      },
      {
        "name": "Power Struggle",
        "survivor": "Elodie Rakoto",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        }
      },
      {
        "name": "Fast Track",
        "survivor": "Yun-Jin Lee",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "stacks": {
          "value": 27,
          "variance": 3
        }
      },
      {
        "name": "Smash Hit",
        "survivor": "Yun-Jin Lee",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "exhaustion": {
          "value": 40,
          "variance": 5
        },
        "movement_bonus": {
          "value": 150,
          "variance": 50,
          "min": 50
        },
        "movement_bonus_duration": {
          "value": 4,
          "variance": 1
        }
      },
      {
        "name": "Self-Preservation",
        "survivor": "Yun-Jin Lee",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "duration": {
          "value": 10,
          "variance": 2
        },
        "range": {
          "value": 16,
          "variance": 4
        }
      },
      {
        "name": "Counterforce",
        "survivor": "Jill Valentine",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "action_bonus": {
          "value": 20,
          "variance": 5
        },
        "duration": {
          "value": 4,
          "variance": 1
        }
      },
      {
        "name": "Resurgence",
        "survivor": "Jill Valentine",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        }
      },
      {
        "name": "Blast Mine",
        "survivor": "Jill Valentine",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "duration": {
          "value": 45,
          "variance": 5
        }
      },
      {
        "name": "Bite the Bullet",
        "survivor": "Leon Kennedy",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        }
      },
      {
        "name": "Flashbang",
        "survivor": "Leon Kennedy",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        }
      },
      {
        "name": "Rookie Spirit",
        "survivor": "Leon Kennedy",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        }
      },
      {
        "name": "Clairvoyance",
        "survivor": "Mikaela Reid",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "range": {
          "value": 64,
          "variance": 16
        }
      },
      {
        "name": "Boon: Circle of Healing",
        "survivor": "Mikaela Reid",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "action_bonus": {
          "value": 75,
          "variance": 25,
          "min": 25
        }
      },
      {
        "name": "Boon: Shadow Step",
        "survivor": "Mikaela Reid",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        }
      },
      {
        "name": "Overcome",
        "survivor": "Jonah Vasquez",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "movement_bonus_duration": {
          "value": 2,
          "variance": 1,
          "min": 1
        }
      },
      {
        "name": "Corrective Action",
        "survivor": "Jonah Vasquez",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "stacks": {
          "value": 5,
          "variance": 1
        }
      },
      {
        "name": "Boon: Exponential",
        "survivor": "Jonah Vasquez",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "action_bonus": {
          "value": 100,
          "variance": 25,
          "min": 50
        }
      }
    ]
  },
  // ITEMS
  {
    "info": {
      "name": {
        "hasQuestion": false
      },
      "rarity": {
        "hasQuestion": true,
        "question": "What is the rarity of the _ item?",
        "inverseQuestion": "Which of the following items is _ rarity?"
      },
      "lifetime": {
        "hasQuestion": true,
        "question": "What is the total lifetime of the _ item?",
        "type": "number",
        "suffix": "s"
      },
      "accuracy": {
        "hasQuestion": true,
        "question": "What effect does the _ item have on accuracy?",
        "type": "number",
        "prefix": "+",
        "suffix": "%"
      },
      "depletion": {
        "hasQuestion": true,
        "question": "What effect does the _ item have on depletion rate?",
        "type": "number",
        "prefix": "+",
        "suffix": "%"
      },
      "brightness": {
        "hasQuestion": true,
        "question": "What effect does the _ item have on visual brightness?",
        "type": "number",
        "prefix": "+",
        "suffix": "%"
      },
      "blind_duration": {
        "hasQuestion": true,
        "question": "What effect does the _ item have on blindness duration?",
        "type": "number",
        "prefix": "+",
        "suffix": "%"
      },
      "charges": {
        "hasQuestion": true,
        "question": "How many charges does the _ item have?",
        "type": "number",
        "suffix": " Charges"
      },
      "altruistic_heal": {
        "hasQuestion": true,
        "question": "What effect does the _ item have on altruistic healing speed?",
        "type": "number",
        "prefix": "+",
        "suffix": "%"
      },
      "self_heal": {
        "hasQuestion": true,
        "question": "What effect does the _ item have on self healing speed?",
        "type": "number",
        "prefix": "+",
        "suffix": "%"
      },
      "repair": {
        "hasQuestion": true,
        "question": "What effect does the _ item have on repair speed?",
        "type": "number",
        "prefix": "+",
        "suffix": "%"
      },
      "sabotage": {
        "hasQuestion": true,
        "question": "What effect does the _ item have on sabotage speed?",
        "type": "number",
        "prefix": "+",
        "suffix": "%"
      }
    },
    "data": [
      {
        "name": "Flashlight",
        "rarity": "Uncommon",
        "lifetime": {
          "value": 8,
          "variance": 2
        }
      },
      {
        "name": "Sport Flashlight",
        "rarity": "Rare",
        "lifetime": {
          "value": 8,
          "variance": 2
        },
        "accuracy": {
          "value": 20,
          "variance": 10,
          "min": 10
        },
        "depletion": {
          "value": -11,
          "variance": 11,
          "max": -11
        }
      },
      {
        "name": "Utility Flashlight",
        "rarity": "Very Rare",
        "lifetime": {
          "value": 12,
          "variance": 2
        },
        "brightness": {
          "value": 30,
          "variance": 10,
          "min": 10
        },
        "blind_duration": {
          "value": 15,
          "variance": 10,
          "min": 5
        },
        "accuracy": {
          "value": -20,
          "variance": 10,
          "max": -10
        }
      },
      {
        "name": "Will O' Wisp",
        "rarity": "Event",
        "lifetime": {
          "value": 8,
          "variance": 2
        }
      },
      {
        "name": "Anniversary Flashlight",
        "rarity": "Event",
        "lifetime": {
          "value": 8,
          "variance": 2
        }
      },
      {
        "name": "Broken Key",
        "rarity": "Rare",
        "lifetime": {
          "value": 10,
          "variance": 5,
          "min": 5
        }
      },
      {
        "name": "Dull Key",
        "rarity": "Very Rare",
        "lifetime": {
          "value": 5,
          "variance": 5,
          "min": 5
        }
      },
      {
        "name": "Skeleton Key",
        "rarity": "Ultra Rare",
        "lifetime": {
          "value": 30,
          "variance": 5
        }
      },
      {
        "name": "Map",
        "rarity": "Rare",
        "lifetime": {
          "value": 20,
          "variance": 5
        }
      },
      {
        "name": "Rainbow Map",
        "rarity": "Ultra Rare",
        "lifetime": {
          "value": 20,
          "variance": 5
        }
      },
      {
        "name": "Camping Aid Kit",
        "rarity": "Common",
        "charges": {
          "value": 16,
          "variance": 4
        },
        "altruistic_heal": {
          "value": 25,
          "variance": 5
        }
      },
      {
        "name": "First Aid Kit",
        "rarity": "Uncommon",
        "charges": {
          "value": 24,
          "variance": 4
        },
        "altruistic_heal": {
          "value": 35,
          "variance": 5
        }
      },
      {
        "name": "Emergency Med-Kit",
        "rarity": "Rare",
        "charges": {
          "value": 16,
          "variance": 4
        },
        "altruistic_heal": {
          "value": 50,
          "variance": 5
        },
        "self_heal": {
          "value": 50,
          "variance": 5
        }
      },
      {
        "name": "Ranger Med-Kit",
        "rarity": "Very Rare",
        "charges": {
          "value": 32,
          "variance": 8
        },
        "altruistic_heal": {
          "value": 50,
          "variance": 5
        }
      },
      {
        "name": "All Hallows' Eve Lunchbox",
        "rarity": "Event",
        "charges": {
          "value": 24,
          "variance": 4
        },
        "altruistic_heal": {
          "value": 35,
          "variance": 5
        }
      },
      {
        "name": "Anniversary Med-Kit",
        "rarity": "Event",
        "charges": {
          "value": 24,
          "variance": 4
        },
        "altruistic_heal": {
          "value": 35,
          "variance": 5
        }
      },
      {
        "name": "Worn-Out Tools",
        "rarity": "Common",
        "charges": {
          "value": 16,
          "variance": 4
        },
        "repair": {
          "value": 50,
          "variance": 25,
          "min": 25
        }
      },
      {
        "name": "Toolbox",
        "rarity": "Uncommon",
        "charges": {
          "value": 20,
          "variance": 4
        },
        "repair": {
          "value": 50,
          "variance": 25,
          "min": 25
        },
        "sabotage": {
          "value": 10,
          "variance": 5,
          "min": 5
        }
      },
      {
        "name": "Mechanic's Toolbox",
        "rarity": "Rare",
        "charges": {
          "value": 16,
          "variance": 4
        },
        "repair": {
          "value": 75,
          "variance": 25,
          "min": 25
        },
        "sabotage": {
          "value": -10,
          "variance": 5,
          "max": -5
        }
      },
      {
        "name": "Commodious Toolbox",
        "rarity": "Rare",
        "charges": {
          "value": 32,
          "variance": 4
        },
        "repair": {
          "value": 50,
          "variance": 25,
          "min": 25
        }
      },
      {
        "name": "Engineer's Toolbox",
        "rarity": "Very Rare",
        "charges": {
          "value": 16,
          "variance": 4
        },
        "repair": {
          "value": 100,
          "variance": 25
        },
        "sabotage": {
          "value": -25,
          "variance": 5
        }
      },
      {
        "name": "Alex's Toolbox",
        "rarity": "Very Rare",
        "charges": {
          "value": 16,
          "variance": 4
        },
        "repair": {
          "value": 10,
          "variance": 5,
          "min": 5
        },
        "sabotage": {
          "value": 50,
          "variance": 25,
          "min": 25
        }
      },
      {
        "name": "Anniversary Toolbox",
        "rarity": "Event",
        "charges": {
          "value": 32,
          "variance": 4
        },
        "repair": {
          "value": 50,
          "variance": 25,
          "min": 25
        }
      },
      {
        "name": "Festive Toolbox",
        "rarity": "Event",
        "charges": {
          "value": 32,
          "variance": 4
        },
        "repair": {
          "value": 50,
          "variance": 25,
          "min": 25
        }
      }
    ]
  },
  // KILLERS
  {
    "info": {
      "name": {
        "hasQuestion": false
      },
      "real_name": {
        "hasQuestion": true,
        "question": "What is the real name of _?",
        "inverseQuestion": "What of the following killers has the real name of _?"
      },
      "nationality": {
        "hasQuestion": true,
        "question": "What is the nationality of _?",
        "inverseQuestion": "Which of the following killers is _?"
      },
      "power": {
        "hasQuestion": true,
        "question": "What is the name of _'s power?",
        "inverseQuestion": "Which of the following killers does the power '_' belong to?"
      },
      "weapon": {
        "hasQuestion": true,
        "question": "What is the name of _'s weapon?",
        "inverseQuestion": "Which of the following killers does the weapon '_' belong to?"
      },
      "movement_speed": {
        "hasQuestion": true,
        "question": "How fast does _ move by default?",
        "type": "number",
        "suffix": "%"
      },
      "crouch_speed": {
        "hasQuestion": true,
        "question": "How fast does _ move when crouching?",
        "type": "number",
        "suffix": "%"
      },
      "movement_speed_1": {
        "hasQuestion": true,
        "question": "How fast does _ move by in Tier 1?",
        "type": "number",
        "suffix": "%"
      },
      "movement_speed_2_3": {
        "hasQuestion": true,
        "question": "How fast does _ move by in Tier 2 & 3?",
        "type": "number",
        "suffix": "%"
      },
      "terror_radius": {
        "hasQuestion": true,
        "question": "How large is _'s terror radius by default?",
        "type": "number",
        "suffix": "m"
      },
      "terror_radius_1": {
        "hasQuestion": true,
        "question": "How large is _'s terror radius in Tier 1?",
        "smallprint": "Ignoring the Undetectable status effect",
        "type": "number",
        "suffix": "m"
      },
      "terror_radius_2": {
        "hasQuestion": true,
        "question": "How large is _'s terror radius in Tier 2?",
        "type": "number",
        "suffix": "m"
      },
      "terror_radius_3": {
        "hasQuestion": true,
        "question": "How large is _'s terror radius in Tier 3?",
        "type": "number",
        "suffix": "m"
      },
      "height": {
        "hasQuestion": true,
        "inverseOnly": true,
        "inverseQuestion": "Which of the following killers has an in-game height of _?"
      },
      "voice_actor": {
        "hasQuestion": true,
        "question": "Who voices _?",
        "inverseQuestion": "Which of the following killers is voiced by _?"
      },
      "difficulty": {
        "hasQuestion": true,
        "inverseOnly": true,
        "inverseQuestion": "Which of the following killers has a difficulty of _?"
      },
      "dlc": {
        "hasQuestion": true,
        "question": "What DLC is _ from?",
        "inverseQuestion": "Which of the following killers is from the '_' DLC?"
      }
    },
    "data": [
      {
        "name": "The Trapper",
        "real_name": "Evan MacMillan",
        "nationality": "American",
        "power": "Bear Trap",
        "weapon": "The Cleaver",
        "movement_speed": {
          "value": 115,
          "variance": 5
        },
        "terror_radius": {
          "value": 32,
          "variance": 4,
          "max": 36
        },
        "height": "Tall",
        "voice_actor": "Filip Ivanovic",
        "difficulty": "Easy",
        "dlc": "Base Game"
      },
      {
        "name": "The Wraith",
        "real_name": "Philip Ojomo",
        "nationality": "Nigerian",
        "power": "Wailing Bell",
        "weapon": "Azarov's Skull",
        "movement_speed": {
          "value": 115,
          "variance": 5,
          "max": 120
        },
        "terror_radius": {
          "value": 32,
          "variance": 4,
          "max": 36
        },
        "height": "Tall",
        "voice_actor": "Filip Ivanovic",
        "difficulty": "Intermediate",
        "dlc": "Base Game"
      },
      {
        "name": "The Hillbilly",
        "real_name": "Max Thompson Jr.",
        "nationality": "American",
        "power": "Chainsaw",
        "weapon": "The Hammer",
        "movement_speed": {
          "value": 115,
          "variance": 5,
          "max": 120
        },
        "terror_radius": {
          "value": 32,
          "variance": 4,
          "max": 36
        },
        "height": "Tall",
        "voice_actor": "Filip Ivanovic",
        "difficulty": "Easy",
        "dlc": "Base Game"
      },
      {
        "name": "The Nurse",
        "real_name": "Sally Smithson",
        "nationality": "Anglo-American",
        "power": "Spencer's Last Breath",
        "weapon": "The Bonesaw",
        "movement_speed": {
          "value": 96.25,
          "variance": 1
        },
        "terror_radius": {
          "value": 32,
          "variance": 4,
          "max": 36
        },
        "height": "Average",
        "voice_actor": "Anais Renevey",
        "difficulty": "Hard",
        "dlc": "The Last Breath Chapter"
      },
      {
        "name": "The Shape",
        "real_name": "Michael Myers",
        "nationality": "American",
        "power": "Evil Within",
        "weapon": "Kitchen Knife",
        "movement_speed_1": {
          "value": 105,
          "variance": 5,
          "min": 95,
          "max": 110
        },
        "movement_speed_2_3": {
          "value": 115,
          "variance": 5,
          "max": 120
        },
        "terror_radius_1": {
          "value": 6,
          "variance": 2,
          "min": 2
        },
        "terror_radius_2": {
          "value": 16,
          "variance": 4,
          "min": 8
        },
        "terror_radius_3": {
          "value": 32,
          "variance": 4,
          "max": 36
        },
        "height": "Tall",
        "voice_actor": "Frederic Poirier",
        "difficulty": "Intermediate",
        "dlc": "The HALLOWEEN Chapter"
      },
      {
        "name": "The Hag",
        "real_name": "Lisa Sherwood",
        "nationality": "African American",
        "power": "Blackened Catalyst",
        "weapon": "The Claw",
        "movement_speed": {
          "value": 110,
          "variance": 5,
          "min": 100,
          "max": 120
        },
        "terror_radius": {
          "value": 24,
          "variance": 4,
          "min": 20
        },
        "height": "Average",
        "voice_actor": "Eliane Pregent",
        "difficulty": "Intermediate",
        "dlc": "Of Flesh and Mud"
      },
      {
        "name": "The Doctor",
        "real_name": "Herman Carter",
        "nationality": "African American",
        "power": "Carter's Spark",
        "weapon": "The Stick",
        "movement_speed": {
          "value": 115,
          "variance": 5,
          "max": 120
        },
        "terror_radius": {
          "value": 32,
          "variance": 4,
          "max": 36
        },
        "height": "Tall",
        "voice_actor": "Alex Lin",
        "difficulty": "Hard",
        "dlc": "Spark of Madness"
      },
      {
        "name": "The Huntress",
        "real_name": "Anna",
        "nationality": "Russian",
        "power": "Hunting Hatchets",
        "weapon": "Broad Axe",
        "movement_speed": {
          "value": 110,
          "variance": 5,
          "min": 100,
          "max": 120
        },
        "terror_radius": {
          "value": 20,
          "variance": 4,
          "min": 20
        },
        "height": "Tall",
        "voice_actor": "Amelie Leguiader",
        "difficulty": "Intermediate",
        "dlc": "A Lullaby for the Dark"
      },
      {
        "name": "The Cannibal",
        "real_name": "Bubba Sawyer",
        "nationality": "American",
        "power": "Bubba's Chainsaw",
        "weapon": "The Sledge",
        "movement_speed": {
          "value": 115,
          "variance": 5,
          "max": 120
        },
        "terror_radius": {
          "value": 32,
          "variance": 4,
          "max": 36
        },
        "height": "Tall",
        "voice_actor": "Filip Ivanovic",
        "difficulty": "Easy",
        "dlc": "LEATHERFACE"
      },
      {
        "name": "The Nightmare",
        "real_name": "Freddy Krueger",
        "nationality": "American",
        "power": "Dream Demon",
        "weapon": "Clawed Glove",
        "movement_speed": {
          "value": 115,
          "variance": 5,
          "max": 120
        },
        "terror_radius": {
          "value": 32,
          "variance": 4,
          "max": 36
        },
        "height": "Average",
        "voice_actor": "Filip Ivanovic",
        "difficulty": "Hard",
        "dlc": "A Nightmare on Elm Street"
      },
      {
        "name": "The Pig",
        "real_name": "Amanda Young",
        "nationality": "American",
        "power": "Jigsaw's Baptism",
        "weapon": "Hidden Blade",
        "movement_speed": {
          "value": 115,
          "variance": 5,
          "max": 120
        },
        "crouch_speed": {
          "value": 90,
          "variance": 5
        },
        "terror_radius": {
          "value": 32,
          "variance": 4,
          "max": 36
        },
        "height": "Average",
        "voice_actor": "Christine Marsh",
        "difficulty": "Intermediate",
        "dlc": "The SAW Chapter"
      },
      {
        "name": "The Clown",
        "real_name": "Jeffrey Hawk",
        "nationality": "American",
        "power": "The Afterpiece Tonic",
        "weapon": "Madame Butterfly",
        "movement_speed": {
          "value": 115,
          "variance": 5,
          "max": 120
        },
        "terror_radius": {
          "value": 32,
          "variance": 4,
          "max": 36
        },
        "height": "Tall",
        "voice_actor": "Sebastien Duva",
        "difficulty": "Intermediate",
        "dlc": "Curtain Call"
      },
      {
        "name": "The Spirit",
        "real_name": "Rin Yamaoka",
        "nationality": "Japanese",
        "power": "Yamaoka's Haunting",
        "weapon": "Shattered Katana",
        "movement_speed": {
          "value": 110,
          "variance": 5,
          "min": 100,
          "max": 120
        },
        "terror_radius": {
          "value": 24,
          "variance": 4,
          "min": 20
        },
        "height": "Average",
        "voice_actor": "Gabrielle Murphy",
        "difficulty": "Hard",
        "dlc": "Shattered Bloodline"
      },
      {
        "name": "The Legion",
        "nationality": "Canadian",
        "power": "Feral Frenzy",
        "weapon": "Hunting Knife",
        "movement_speed": {
          "value": 115,
          "variance": 5,
          "max": 120
        },
        "terror_radius": {
          "value": 32,
          "variance": 4,
          "max": 36
        },
        "height": "Average",
        "difficulty": "Intermediate",
        "dlc": "Darkness Among Us"
      },
      {
        "name": "The Plague",
        "real_name": "Adiris",
        "nationality": "Babylonian",
        "power": "Vile Purge",
        "weapon": "Profane Censer",
        "movement_speed": {
          "value": 115,
          "variance": 5,
          "max": 120
        },
        "terror_radius": {
          "value": 32,
          "variance": 4,
          "max": 36
        },
        "height": "Tall",
        "voice_actor": "Unknown",
        "difficulty": "Intermediate",
        "dlc": "Demise of the Faithful"
      },
      {
        "name": "The Ghost Face",
        "real_name": "Danny Johnson",
        "nationality": "American",
        "power": "Night Shroud",
        "weapon": "Tactical Knife",
        "movement_speed": {
          "value": 115,
          "variance": 5,
          "max": 120
        },
        "crouch_speed": {
          "value": 90,
          "variance": 5
        },
        "terror_radius": {
          "value": 32,
          "variance": 4,
          "max": 36
        },
        "height": "Average",
        "voice_actor": "Filip Ivanovic",
        "difficulty": "Hard",
        "dlc": "Ghost Face"
      },
      {
        "name": "The Demogorgon",
        "nationality": "Extradimensional",
        "power": "Of the Abyss",
        "weapon": "Barbarous Claw",
        "movement_speed": {
          "value": 115,
          "variance": 5,
          "max": 120
        },
        "terror_radius": {
          "value": 32,
          "variance": 4,
          "max": 36
        },
        "height": "Tall",
        "difficulty": "Intermediate",
        "dlc": "Stranger Things"
      },
      {
        "name": "The Oni",
        "real_name": "Kazan Yamaoka",
        "nationality": "Japanese",
        "power": "Yamaoka's Wrath",
        "weapon": "Yamaoka Blade",
        "movement_speed": {
          "value": 115,
          "variance": 5,
          "max": 120
        },
        "terror_radius": {
          "value": 32,
          "variance": 4,
          "max": 36
        },
        "height": "Tall",
        "voice_actor": "Jean-Baptiste Garnier",
        "difficulty": "Hard",
        "dlc": "Cursed Legacy"
      },
      {
        "name": "The Deathslinger",
        "real_name": "Caleb Quinn",
        "nationality": "Irish American",
        "power": "The Redeemer",
        "weapon": "Death to Bayshore",
        "movement_speed": {
          "value": 110,
          "variance": 5,
          "min": 100,
          "max": 120
        },
        "terror_radius": {
          "value": 32,
          "variance": 4,
          "max": 36
        },
        "height": "Tall",
        "voice_actor": "Patrick Harris",
        "difficulty": "Intermediate",
        "dlc": "Chains of Hate"
      },
      {
        "name": "The Executioner",
        "real_name": "Pyramid Head",
        "nationality": "Unknown",
        "power": "Rites of Judgement",
        "weapon": "Great Knife",
        "movement_speed": {
          "value": 115,
          "variance": 5,
          "max": 120
        },
        "terror_radius": {
          "value": 32,
          "variance": 4,
          "max": 36
        },
        "height": "Tall",
        "voice_actor": "Jean-Baptiste Garnier",
        "difficulty": "Intermediate",
        "dlc": "Silent Hill"
      },
      {
        "name": "The Blight",
        "real_name": "Talbot Grimes",
        "nationality": "Scottish",
        "power": "Blighted Corruption",
        "weapon": "Bonebuster",
        "movement_speed": {
          "value": 115,
          "variance": 5,
          "max": 120
        },
        "terror_radius": {
          "value": 32,
          "variance": 4,
          "max": 36
        },
        "height": "Tall",
        "voice_actor": "Jean-Baptiste Garnier & Mathieu Favier",
        "difficulty": "Hard",
        "dlc": "Descend Beyond"
      },
      {
        "name": "The Twins",
        "real_name": "Charlotte & Victor Deshayes",
        "nationality": "French",
        "power": "Blood Bond",
        "weapon": "Blade of Marseille",
        "movement_speed": {
          "value": 115,
          "variance": 5,
          "max": 120
        },
        "terror_radius": {
          "value": 32,
          "variance": 4,
          "max": 36
        },
        "height": "Tall",
        "voice_actor": "Catherine Gauthier & Jean-Baptiste Garnier",
        "difficulty": "Hard",
        "dlc": "A Binding of Kin"
      },
      {
        "name": "The Trickster",
        "real_name": "Ji-Woon Hak",
        "nationality": "Korean",
        "power": "Showstopper",
        "weapon": "Polished Head-Smasher",
        "movement_speed": {
          "value": 110,
          "variance": 5,
          "min": 100,
          "max": 120
        },
        "terror_radius": {
          "value": 24,
          "variance": 4,
          "min": 20
        },
        "height": "Average",
        "voice_actor": "Titus Kim",
        "difficulty": "Easy",
        "dlc": "All-Kill"
      },
      {
        "name": "The Nemesis",
        "real_name": "Nemesis T-Type",
        "nationality": "Unknown",
        "power": "T-Virus",
        "weapon": "Raw Fists",
        "movement_speed": {
          "value": 115,
          "variance": 5,
          "max": 120
        },
        "terror_radius": {
          "value": 32,
          "variance": 4,
          "max": 36
        },
        "height": "Tall",
        "voice_actor": "Sebastien Croteau",
        "difficulty": "Intermediate",
        "dlc": "Resident Evil"
      },
      {
        "name": "The Cenobite",
        "real_name": "Elliot Spencer",
        "nationality": "English",
        "power": "Summons of Pain",
        "weapon": "Hook & Chain",
        "movement_speed": {
          "value": 115,
          "variance": 5,
          "max": 120
        },
        "terror_radius": {
          "value": 32,
          "variance": 4,
          "max": 36
        },
        "height": "Tall",
        "voice_actor": "Doug Bradley",
        "difficulty": "Hard",
        "dlc": "Hellraiser"
      },
      {
        "name": "The Artist",
        "real_name": "Carmina Mora",
        "nationality": "Chilean",
        "power": "Birds of Torment",
        "weapon": "Sharp Palette Blade",
        "movement_speed": {
          "value": 115,
          "variance": 5,
          "max": 120
        },
        "terror_radius": {
          "value": 32,
          "variance": 4,
          "max": 36
        },
        "height": "Average",
        "voice_actor": "Unknown",
        "difficulty": "Intermediate",
        "dlc": "Portrait of a Murder"
      }
    ]
  },
  // KILLER POWERS
  {
    "info": {
      "name": {
        "hasQuestion": false
      },
      "setting_time": {
        "hasQuestion": true,
        "question": "How long does it take to set a trap using the '_' power?",
        "type": "number",
        "suffix": "s"
      },
      "disarm_time": {
        "hasQuestion": true,
        "question": "How long does it take to disarm a trap set by the '_' power?",
        "type": "number",
        "suffix": "s"
      },
      "trap_count": {
        "hasQuestion": true,
        "question": "How many total traps are available using the '_' power?",
        "type": "number",
        "suffix": " Traps"
      },
      "activate_time": {
        "hasQuestion": true,
        "question": "How long does it take to activate the '_' power?",
        "type": "number",
        "suffix": "s"
      },
      "deactivate_time": {
        "hasQuestion": true,
        "question": "How long does it take to deactivate the '_' power?",
        "type": "number",
        "suffix": "s"
      },
      "charge_time": {
        "hasQuestion": true,
        "question": "How long does it take to fully charge the '_' power?",
        "smallprint": "Assuming the power starts at 0 charge",
        "type": "number",
        "suffix": "s"
      },
      "movement_speed_using": {
        "hasQuestion": true,
        "question": "What is the movement speed of the killer while using the '_' power?",
        "type": "number",
        "suffix": "%"
      },
      "movement_speed_deactivating": {
        "hasQuestion": true,
        "question": "What is the movement speed of the killer while deactivating the '_' power?",
        "type": "number",
        "suffix": "%"
      },
      "movement_speed_charging": {
        "hasQuestion": true,
        "question": "What is the movement speed of the killer while charging the '_' power?",
        "type": "number",
        "suffix": "%"
      },
      "movement_speed_stalking": {
        "hasQuestion": true,
        "question": "What is the movement speed of the killer while stalking with the '_' power?",
        "type": "number",
        "suffix": "%"
      },
      "token_time": {
        "hasQuestion": true,
        "question": "How long does it take to recharge a token of the '_' power?",
        "type": "number",
        "suffix": "s"
      },
      "tier_time": {
        "hasQuestion": true,
        "question": "How long does it take to tier up using the '_' power?",
        "smallprint": "Based on the maximum stalking rate",
        "type": "number",
        "suffix": "s"
      },
      "cooldown": {
        "hasQuestion": true,
        "question": "What is the cooldown of the '_' main power?",
        "type": "number",
        "suffix": "s"
      },
      "static_blast_charge": {
        "hasQuestion": true,
        "question": "How long does it take to charge Static Blast using the '_' power?",
        "type": "number",
        "suffix": "s"
      },
      "shock_therapy_charge": {
        "hasQuestion": true,
        "question": "How long does it take to charge Shock Therapy using the '_' power?",
        "type": "number",
        "suffix": "s"
      },
      "static_blast_movement": {
        "hasQuestion": true,
        "question": "What is the movement speed of the killer while charging Static Blast with the '_' power?",
        "type": "number",
        "suffix": "%"
      },
      "shock_therapy_movement": {
        "hasQuestion": true,
        "question": "What is the movement speed of the killer while charging Shock Therapy with the '_' power?",
        "type": "number",
        "suffix": "%"
      },
      "ammo": {
        "hasQuestion": true,
        "question": "What is the default maximum ammo using the '_' power?",
        "type": "number",
        "suffix": " Ammo"
      },
      "reload_time": {
        "hasQuestion": true,
        "question": "How long does it take to reload using the '_' power?",
        "type": "number",
        "suffix": "s"
      },
      "sleep_time": {
        "hasQuestion": true,
        "question": "How long does it take survivors to fall asleep from the '_' power?",
        "type": "number",
        "suffix": "s"
      },
      "trap_time": {
        "hasQuestion": true,
        "question": "How long does it take for a trap to kill a survivor once activated from the '_' power?",
        "type": "number",
        "suffix": "s"
      },
      "duration": {
        "hasQuestion": true,
        "question": "What is the base duration of the '_' main power?",
        "type": "number",
        "suffix": "s"
      },
      "cleanse_time": {
        "hasQuestion": true,
        "question": "How long does it take for a survivor to cleanse sickness from the '_' power?",
        "type": "number",
        "suffix": "s"
      },
      "stalk_time": {
        "hasQuestion": true,
        "question": "How long does it take to fully stalk a survivor using the '_' power?",
        "type": "number",
        "suffix": "s"
      },
      "expose_time": {
        "hasQuestion": true,
        "question": "How long does the '_' power inflict the Exposed status effect?",
        "type": "number",
        "suffix": "s"
      },
      "seal_time": {
        "hasQuestion": true,
        "question": "How long does it take for a survivor to seal a portal from the '_' power?",
        "type": "number",
        "suffix": "s"
      },
      "portal_time": {
        "hasQuestion": true,
        "question": "How many portals can be placed from the '_' power?",
        "type": "number",
        "suffix": "s"
      },
      "range": {
        "hasQuestion": true,
        "question": "What is the range of the '_' power?",
        "type": "number",
        "suffix": "m"
      },
      "range_1_2": {
        "hasQuestion": true,
        "question": "What is the range of the '_' power in Tier 1 & 2?",
        "type": "number",
        "suffix": "m"
      },
      "range_3": {
        "hasQuestion": true,
        "question": "What is the range of the '_' power in Tier 3?",
        "type": "number",
        "suffix": "m"
      },
      "vaccine_time": {
        "hasQuestion": true,
        "question": "How long does it take for a survivor to use a vaccine from the '_' power?",
        "type": "number",
        "suffix": "s"
      },
      "vaccine_count": {
        "hasQuestion": true,
        "question": "How many vaccines are available from the '_' power?",
        "type": "number",
        "suffix": " Vaccines"
      },
      "solve_time": {
        "hasQuestion": true,
        "question": "How long does it take for a survivor to solve the Lament Configuration from the '_' power?",
        "type": "number",
        "suffix": "s"
      },
      "hunt_time": {
        "hasQuestion": true,
        "question": "How long does it take for Chain Hunt to start from the '_' power?",
        "smalprint": "Starting from the spawn of the Lament Configuration",
        "type": "number",
        "suffix": "s"
      }
    },
    "data": [
      {
        "name": "Bear Trap",
        "setting_time": {
          "value": 2.5,
          "variance": 0.5
        },
        "disarm_time": {
          "value": 3.5,
          "variance": 0.5
        },
        "trap_count": {
          "value": 8,
          "variance": 2
        }
      },
      {
        "name": "Wailing Bell",
        "activate_time": {
          "value": 1.5,
          "variance": 0.5,
          "min": 0.5
        },
        "deactivate_time": {
          "value": 3,
          "variance": 0.5
        },
        "movement_speed_using": {
          "value": 150,
          "variance": 10
        },
        "movement_speed_deactivating": {
          "value": 40,
          "variance": 10
        }
      },
      {
        "name": "Chainsaw",
        "charge_time": {
          "value": 2.5,
          "variance": 0.5
        },
        "movement_speed_using": {
          "value": 230,
          "variance": 30
        },
        "movement_speed_charging": {
          "value": 92,
          "variance": 6
        }
      },
      {
        "name": "Spencer's Last Breath",
        "charge_time": {
          "value": 2,
          "variance": 0.5
        },
        "movement_speed_using": {
          "value": 333.25,
          "variance": 50
        },
        "movement_speed_charging": {
          "value": 72.25,
          "variance": 10,
          "max": 92.25
        },
        "token_time": {
          "value": 3,
          "variance": 0.5
        }
      },
      {
        "name": "Evil Within",
        "movement_speed_stalking": {
          "value": 23,
          "variance": 10,
          "min": 13
        },
        "tier_time": {
          "value": 6,
          "variance": 2,
          "min": 2
        }
      },
      {
        "name": "Blackened Catalyst",
        "setting_time": {
          "value": 2,
          "variance": 0.5
        },
        "disarm_time": {
          "value": 0.5,
          "variance": 0.25,
          "min": 0.25
        },
        "trap_count": {
          "value": 10,
          "variance": 2
        }
      },
      {
        "name": "Carter's Spark",
        "cooldown": {
          "value": 60,
          "variance": 10
        },
        "static_blast_charge": {
          "value": 2,
          "variance": 0.5
        },
        "shock_therapy_charge": {
          "value": 1,
          "variance": 0.5,
          "min": 0.5
        },
        "static_blast_movement": {
          "value": 29,
          "variance": 10,
          "min": 19
        },
        "shock_therapy_movement": {
          "value": 77,
          "variance": 10
        }
      },
      {
        "name": "Hunting Hatchets",
        "movement_speed_charging": {
          "value": 77,
          "variance": 10
        },
        "charge_time": {
          "value": 3,
          "variance": 0.5
        },
        "ammo": {
          "value": 5,
          "variance": 1
        },
        "reload_time": {
          "value": 4,
          "variance": 1
        }
      },
      {
        "name": "Bubba's Chainsaw",
        "movement_speed_using": {
          "value": 132.25,
          "variance": 15
        },
        "movement_speed_charging": {
          "value": 86.25,
          "variance": 10,
          "max": 106.25
        },
        "charge_time": {
          "value": 2,
          "variance": 0.5
        },
        "token_time": {
          "value": 4,
          "variance": 1
        }
      },
      {
        "name": "Dream Demon",
        "trap_count": {
          "value": 8,
          "variance": 2
        },
        "cooldown": {
          "value": 45,
          "variance": 15,
          "min": 15
        },
        "sleep_time": {
          "value": 60,
          "variance": 10
        }
      },
      {
        "name": "Jigsaw's Baptism",
        "trap_count": {
          "value": 4,
          "variance": 1
        },
        "movement_speed_using": {
          "value": 172.5,
          "variance": 15
        },
        "trap_time": {
          "value": 150,
          "variance": 30
        }
      },
      {
        "name": "The Afterpiece Tonic",
        "ammo": {
          "value": 4,
          "variance": 1
        },
        "reload_time": {
          "value": 3,
          "variance": 0.5
        },
        "charge_time": {
          "value": 0.25,
          "variance": 0.25,
          "min": 0.25
        },
        "movement_speed_charging": {
          "value": 115,
          "variance": 5,
          "max": 115
        }
      },
      {
        "name": "Yamaoka's Haunting",
        "movement_speed_using": {
          "value": 176,
          "variance": 16
        },
        "activate_time": {
          "value": 1.5,
          "variance": 0.5,
          "min": 0.5
        },
        "charge_time": {
          "value": 15,
          "variance": 5,
          "min": 5
        },
        "duration": {
          "value": 5,
          "variance": 1
        }
      },
      {
        "name": "Feral Frenzy",
        "movement_speed_using": {
          "value": 130,
          "variance": 10,
          "min": 120
        },
        "deactivate_time": {
          "value": 4,
          "variance": 0.5
        },
        "charge_time": {
          "value": 20,
          "variance": 5
        },
        "duration": {
          "value": 10,
          "variance": 5,
          "min": 5
        }
      },
      {
        "name": "Vile Purge",
        "charge_time": {
          "value": 1.5,
          "variance": 0.5,
          "min": 0.5
        },
        "activate_time": {
          "value": 1,
          "variance": 0.5,
          "min": 0.5
        },
        "cleanse_time": {
          "value": 8,
          "variance": 2
        }
      },
      {
        "name": "Night Shroud",
        "stalk_time": {
          "value": 2,
          "variance": 0.5,
          "min": 0.5
        },
        "cooldown": {
          "value": 24,
          "variance": 4
        },
        "expose_time": {
          "value": 45,
          "variance": 15,
          "min": 15
        },
        "movement_speed_stalking": {
          "value": 23,
          "variance": 10,
          "min": 13
        }
      },
      {
        "name": "Of the Abyss",
        "charge_time": {
          "value": 1,
          "variance": 0.5,
          "min": 0.5
        },
        "seal_time": {
          "value": 12,
          "variance": 4,
          "min": 4
        },
        "portal_count": {
          "value": 6,
          "variance": 1
        }
      },
      {
        "name": "Yamaoka's Wrath",
        "activate_time": {
          "value": 3,
          "variance": 1,
          "min": 1
        },
        "deactivate_time": {
          "value": 3,
          "variance": 1,
          "min": 1
        },
        "duration": {
          "value": 45.45,
          "variance": 10
        },
        "movement_speed_using": {
          "value": 195.5,
          "variance": 20
        }
      },
      {
        "name": "The Redeemer",
        "reload_time": {
          "value": 2.75,
          "variance": 0.5
        },
        "range": {
          "value": 18,
          "variance": 4
        }
      },
      {
        "name": "Rites of Judgement",
        "movement_speed_using": {
          "value": 110,
          "variance": 5,
          "max": 115
        },
        "range": {
          "value": 8,
          "variance": 4,
          "min": 4
        },
        "activate_time": {
          "value": 1,
          "variance": 0.5,
          "min": 0.5
        },
        "deactivate_time": {
          "value": 1,
          "variance": 0.5,
          "min": 0.5
        }
      },
      {
        "name": "Blighted Corruption",
        "movement_speed_using": {
          "value": 230,
          "variance": 30
        },
        "duration": {
          "value": 3,
          "variance": 1,
          "min": 1
        },
        "token_time": {
          "value": 2,
          "variance": 0.5
        },
        "deactivate_time": {
          "value": 2.5,
          "variance": 0.5
        }
      },
      {
        "name": "Blood Bond",
        "movement_speed_using": {
          "value": 150,
          "variance": 10
        },
        "activate_time": {
          "value": 1,
          "variance": 0.5,
          "min": 0.5
        },
        "deactivate_time": {
          "value": 3,
          "variance": 0.5
        }
      },
      {
        "name": "Showstopper",
        "ammo": {
          "value": 44,
          "variance": 4
        },
        "reload_time": {
          "value": 4,
          "variance": 1
        },
        "duration": {
          "value": 10,
          "variance": 2
        }
      },
      {
        "name": "T-Virus",
        "range_1_2": {
          "value": 5,
          "variance": 1
        },
        "range_3": {
          "value": 6,
          "variance": 1
        },
        "vaccine_time": {
          "value": 3,
          "variance": 1,
          "min": 1
        },
        "vaccine_count": {
          "value": 4,
          "variance": 1
        }
      },
      {
        "name": "Summons of Pain",
        "movement_speed_charging": {
          "value": 92,
          "variance": 6
        },
        "solve_time": {
          "value": 6,
          "variance": 2,
          "min": 2
        },
        "hunt_time": {
          "value": 90,
          "variance": 30,
          "min": 30
        }
      },
      {
        "name": "Birds of Torment",
        "movement_speed_charging": {
          "value": 92,
          "variance": 6
        },
        "ammo": {
          "value": 3,
          "variance": 1,
          "min": 2
        },
        "charge_time": {
          "value": 1,
          "variance": 0.5,
          "min": 0.5
        }
      }
    ]
  }
]