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
        "difficulty": "Easy",
        "dlc": "Base Game"
      },
      {
        "name": "Meg Thomas",
        "nationality": "American",
        "difficulty": "Easy",
        "dlc": "Base Game"
      },
      {
        "name": "Claudette Morel",
        "nationality": "Canadian",
        "difficulty": "Easy",
        "dlc": "Base Game"
      },
      {
        "name": "Jake Park",
        "nationality": "Asian American",
        "difficulty": "Intermediate",
        "dlc": "Base Game"
      },
      {
        "name": "Nea Karlsson",
        "nationality": "Swedish",
        "difficulty": "Intermediate",
        "dlc": "The Last Breath Chapter"
      },
      {
        "name": "Laurie Strode",
        "nationality": "American",
        "difficulty": "Hard",
        "dlc": "The HALLOWEEN Chapter"
      },
      {
        "name": "Ace Visconti",
        "nationality": "Argentinian of Italian descent",
        "difficulty": "Easy",
        "dlc": "Of Flesh and Mud"
      },
      {
        "name": "Bill Overbeck",
        "nationality": "American",
        "difficulty": "Hard",
        "dlc": "Left Behind"
      },
      {
        "name": "Feng Min",
        "nationality": "Chinese",
        "difficulty": "Easy",
        "dlc": "Spark of Madness"
      },
      {
        "name": "David King",
        "nationality": "English",
        "difficulty": "Intermediate",
        "dlc": "A Lullaby for the Dark"
      },
      {
        "name": "Quentin Smith",
        "nationality": "American",
        "difficulty": "Easy",
        "dlc": "A Nightmare on Elm Street"
      },
      {
        "name": "David Tapp",
        "nationality": "African American",
        "difficulty": "Intermediate",
        "dlc": "The SAW Chapter"
      },
      {
        "name": "Kate Denson",
        "nationality": "American",
        "difficulty": "Easy",
        "dlc": "Curtain Call"
      },
      {
        "name": "Adam Francis",
        "nationality": "Jamaican",
        "difficulty": "Intermediate",
        "dlc": "Shattered Bloodline"
      },
      {
        "name": "Jeff Johansen",
        "nationality": "Canadian with Norwegian roots",
        "difficulty": "Intermediate",
        "dlc": "Darkness Among Us"
      },
      {
        "name": "Jane Romero",
        "nationality": "Latin American",
        "difficulty": "Intermediate",
        "dlc": "Demise of the Faithful"
      },
      {
        "name": "Ash Williams",
        "nationality": "American",
        "difficulty": "Easy",
        "dlc": "Ash vs Evil Dead"
      },
      {
        "name": "Nancy Wheeler",
        "nationality": "American",
        "difficulty": "Easy",
        "dlc": "Stranger Things"
      },
      {
        "name": "Steve Harrington",
        "nationality": "American",
        "difficulty": "Easy",
        "dlc": "Stranger Things"
      },
      {
        "name": "Yui Kimura",
        "nationality": "Japanese",
        "difficulty": "Easy",
        "dlc": "Cursed Legacy"
      },
      {
        "name": "Zarina Kassir",
        "nationality": "Lebanese",
        "difficulty": "Intermediate",
        "dlc": "Chains of Hate"
      },
      {
        "name": "Cheryl Mason",
        "nationality": "American",
        "difficulty": "Easy",
        "dlc": "Silent Hill"
      },
      {
        "name": "Felix Richter",
        "nationality": "German",
        "difficulty": "Intermediate",
        "dlc": "Descend Beyond"
      },
      {
        "name": "Elodie Rakoto",
        "nationality": "French Madagassian",
        "difficulty": "Intermediate",
        "dlc": "A Binding of Kin"
      },
      {
        "name": "Yun-Jin Lee",
        "nationality": "Korean",
        "difficulty": "Easy",
        "dlc": "All-Kill"
      },
      {
        "name": "Jill Valentine",
        "nationality": "American",
        "difficulty": "Intermediate",
        "dlc": "Resident Evil"
      },
      {
        "name": "Leon Kennedy",
        "nationality": "American",
        "difficulty": "Intermediate",
        "dlc": "Resident Evil"
      },
      {
        "name": "Mikaela Reid",
        "nationality": "Unknown",
        "difficulty": "Intermediate",
        "dlc": "Hour of the Witch"
      },
      {
        "name": "Jonah Vasquez",
        "nationality": "Hispanic American",
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
      "aura_duration": {
        "hasQuestion": true,
        "question": "What is the duration of the aura reading effect of the perk _?",
        "type": "number",
        "suffix": "s"
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
        },
        "range": {
          "value": 36,
          "variance": 4
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
        },
        "range": {
          "value": 4,
          "variance": 2,
          "min": 2
        },
        "action_bonus": {
          "value": 15,
          "variance": 5,
          "min": 5
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
        },
        "range": {
          "value": 8,
          "variance": 4,
          "min": 4
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
        "aura_duration": {
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
        "aura_duration": {
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
        "aura_duration": {
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
        "aura_duration": {
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
        "aura_duration": {
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
        "aura_duration": {
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
        "aura_duration": {
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
          "value": 24,
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
        "difficulty": "Intermediate",
        "dlc": "Portrait of a Murder"
      }
    ]
  },
  // KILLER PERKS
  {
    "info": {
      "name": {
        "hasQuestion": false
      },
      "killer": {
        "hasQuestion": true,
        "question": "Which killer does the teachable perk _ belong to?"
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
      "undetectable": {
        "hasQuestion": true,
        "question": "The perk _ grants the Undetectable status effect for how long?",
        "type": "number",
        "suffix": "s"
      },
      "exposed": {
        "hasQuestion": true,
        "question": "The perk _ inflicts the Exposed status effect for how long?",
        "type": "number",
        "suffix": "s"
      },
      "oblivious": {
        "hasQuestion": true,
        "question": "The perk _ inflicts the Oblivious status effect for how long?",
        "type": "number",
        "suffix": "s"
      },
      "incapacitated": {
        "hasQuestion": true,
        "question": "The perk _ inflicts the Incapacitated status effect for how long?",
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
        "smallprint": "If based on stacks, give the value per stack",
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
      "action_duration": {
        "hasQuestion": true,
        "question": "What effect does the perk _ have on its associated action duration?",
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
        "smallprint": "If based on stacks, give the value per stack",
        "type": "number",
        "suffix": "s"
      },
      "aura_duration": {
        "hasQuestion": true,
        "question": "What is the duration of the aura reading effect of the perk _?",
        "type": "number",
        "suffix": "s"
      },
      "stacks": {
        "hasQuestion": true,
        "question": "What is the maximum number of stacks of the perk _?",
        "type": "number",
        "suffix": " Stacks"
      },
      "terror_radius": {
        "hasQuestion": true,
        "question": "By how much does the perk _ affect the terror radius?",
        "smallprint": "If based on stacks, give the value per stack",
        "type": "number",
        "prefix": "+",
        "suffix": "m"
      },
      "blood_duration": {
        "hasQuestion": true,
        "question": "How much longer is blood visible while using the perk _?",
        "type": "number",
        "suffix": "s"
      },
      "fov": {
        "hasQuestion": true,
        "question": "What effect does the perk _ have on FOV?",
        "type": "number",
        "prefix": "+",
        "suffix": "&#8451"
      },
      "gate_time": {
        "hasQuestion": true,
        "question": "What effect does the perk _ have on exit gate opening time?",
        "smallprint": "If based on stacks, give the value per stack",
        "type": "number",
        "prefix": "+",
        "suffix": "s"
      },
      "regression": {
        "hasQuestion": true,
        "question": "What % regression is inflicted by the perk _?",
        "type": "number",
        "suffix": "%"
      },
      "carry_hit": {
        "hasQuestion": true,
        "question": "For how long does the perk _ pause wiggle progress?",
        "type": "number",
        "suffix": "s"
      },
      "chests": {
        "hasQuestion": true,
        "question": "How many additional chests are spawned by the perk _?",
        "type": "number",
        "suffix": " Chests"
      },
      "lunge": {
        "hasQuestion": true,
        "question": "What effect does the perk _ have on lunge range?",
        "type": "+",
        "suffix": "%"
      }
    },
    "data": [
      {
        "name": "Unnerving Presence",
        "killer": "The Trapper",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        }
      },
      {
        "name": "Brutal Strength",
        "killer": "The Trapper",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "action_bonus": {
          "value": 20,
          "variance": 5
        }
      },
      {
        "name": "Agitation",
        "killer": "The Trapper",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "movement_bonus": {
          "value": 18,
          "variance": 6,
          "min": 6
        },
        "terror_radius": {
          "value": 12,
          "variance": 4,
          "min": 4
        }
      },
      {
        "name": "Predator",
        "killer": "The Wraith",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        }
      },
      {
        "name": "Bloodhound",
        "killer": "The Wraith",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "blood_duration": {
          "value": 4,
          "variance": 1
        }
      },
      {
        "name": "Shadowborn",
        "killer": "The Wraith",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "fov": {
          "value": 15,
          "variance": 5,
          "min": 5
        }
      },
      {
        "name": "Enduring",
        "killer": "The Hillbilly",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "action_duration": {
          "value": -50,
          "variance": 10
        }
      },
      {
        "name": "Lightborn",
        "killer": "The Hillbilly",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "aura_duration": {
          "value": 10,
          "variance": 2
        }
      },
      {
        "name": "Tinkerer",
        "killer": "The Hillbilly",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "undetectable": {
          "value": 16,
          "variance": 4
        }
      },
      {
        "name": "Stridor",
        "killer": "The Nurse",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        }
      },
      {
        "name": "Thanatophobia",
        "killer": "The Nurse",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "action_bonus": {
          "value": -5,
          "variance": 1
        }
      },
      {
        "name": "A Nurse's Calling",
        "killer": "The Nurse",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "range": {
          "value": 28,
          "variance": 4
        }
      },
      {
        "name": "Save the Best for Last",
        "killer": "The Shape",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "action_bonus": {
          "value": 5,
          "variance": 1
        }
      },
      {
        "name": "Play With Your Food",
        "killer": "The Shape",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "movement_bonus": {
          "value": 5,
          "variance": 1
        }
      },
      {
        "name": "Dying Light",
        "killer": "The Shape",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "action_bonus": {
          "value": -3,
          "variance": 1,
          "max": -1
        }
      },
      {
        "name": "Hex: The Third Seal",
        "killer": "The Hag",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "action_bonus": {
          "value": -3,
          "variance": 1,
          "max": -1
        }
      },
      {
        "name": "Hex: Ruin",
        "killer": "The Hag",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        }
      },
      {
        "name": "Hex: Devour Hope",
        "killer": "The Hag",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "movement_bonus": {
          "value": 5,
          "variance": 1
        },
        "movement_bonus_duration": {
          "value": 10,
          "variance": 2
        },
        "stacks": {
          "value": 5,
          "variance": 1
        }
      },
      {
        "name": "Overwhelming Presence",
        "killer": "The Doctor",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        }
      },
      {
        "name": "Monitor & Abuse",
        "killer": "The Doctor",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "range": {
          "value": 16,
          "variance": 4
        },
        "fov": {
          "value": 10,
          "variance": 5,
          "min": 5
        }
      },
      {
        "name": "Overcharge",
        "killer": "The Doctor",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "regression": {
          "value": 5,
          "variance": 1
        }
      },
      {
        "name": "Beast of Prey",
        "killer": "The Huntress",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        }
      },
      {
        "name": "Territorial Imperative",
        "killer": "The Huntress",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "aura_duration": {
          "value": 3,
          "variance": 1
        },
        "range": {
          "value": 32,
          "variance": 8
        },
        "cooldown": {
          "value": 20,
          "variance": 10,
          "min": 10
        }
      },
      {
        "name": "Hex: Huntress Lullaby",
        "killer": "The Huntress",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "regression": {
          "value": 6,
          "variance": 1
        },
        "stacks": {
          "value": 5,
          "variance": 1
        }
      },
      {
        "name": "Knock Out",
        "killer": "The Cannibal",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "duration": {
          "value": 15,
          "variance": 5,
          "min": 5
        }
      },
      {
        "name": "Barbecue & Chilli",
        "killer": "The Cannibal",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "aura_duration": {
          "value": 4,
          "variance": 1
        },
        "stacks": {
          "value": 4,
          "variance": 1
        }
      },
      {
        "name": "Franklin's Demise",
        "killer": "The Cannibal",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        }
      },
      {
        "name": "Fire Up",
        "killer": "The Nightmare",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "action_bonus": {
          "value": 4,
          "variance": 1
        },
        "stacks": {
          "value": 5,
          "variance": 1
        }
      },
      {
        "name": "Remember Me",
        "killer": "The Nightmare",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "gate_time": {
          "value": 4,
          "variance": 1
        },
        "stacks": {
          "value": 4,
          "variance": 1
        }
      },
      {
        "name": "Blood Warden",
        "killer": "The Nightmare",
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
        "name": "Hangman's Trick",
        "killer": "The Pig",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "range": {
          "value": 6,
          "variance": 2,
          "min": 2
        }
      },
      {
        "name": "Surveillance",
        "killer": "The Pig",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "duration": {
          "value": 16,
          "variance": 4
        }
      },
      {
        "name": "Make Your Choice",
        "killer": "The Pig",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "exposed": {
          "value": 60,
          "variance": 10
        }
      },
      {
        "name": "Bamboozle",
        "killer": "The Clown",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "action_bonus": {
          "value": 15,
          "variance": 5,
          "min": 5
        },
        "duration": {
          "value": 16,
          "variance": 4
        }
      },
      {
        "name": "Caulrophobia",
        "killer": "The Clown",
        "level": {
          "value": 35,
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
        "name": "Pop Goes the Weasel",
        "killer": "The Clown",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "duration": {
          "value": 45,
          "variance": 15
        },
        "regression": {
          "value": 25,
          "variance": 5
        }
      },
      {
        "name": "Spirit Fury",
        "killer": "The Spirit",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        }
      },
      {
        "name": "Hex: Haunted Ground",
        "killer": "The Spirit",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "exposed": {
          "value": 60,
          "variance": 10
        }
      },
      {
        "name": "Rancor",
        "killer": "The Spirit",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "aura_duration": {
          "value": 3,
          "variance": 1,
          "min": 1
        }
      },
      {
        "name": "Discordance",
        "killer": "The Legion",
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
        "name": "Mad Grit",
        "killer": "The Legion",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "carry_hit": {
          "value": 4,
          "variance": 1
        }
      },
      {
        "name": "Iron Maiden",
        "killer": "The Legion",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "action_bonus": {
          "value": 50,
          "variance": 10
        },
        "exposed": {
          "value": 30,
          "variance": 10,
          "min": 10
        }
      },
      {
        "name": "Corrupt Intervention",
        "killer": "The Plague",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "duration": {
          "value": 120,
          "variance": 30
        }
      },
      {
        "name": "Infectious Fright",
        "killer": "The Plague",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "duration": {
          "value": 120,
          "variance": 30
        }
      },
      {
        "name": "Dark Devotion",
        "killer": "The Plague",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "undetectable": {
          "value": 30,
          "variance": 10,
          "min": 10
        }
      },
      {
        "name": "I'm All Ears",
        "killer": "The Ghostface",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "aura_duration": {
          "value": 6,
          "variance": 2,
          "min": 2
        },
        "range": {
          "value": 48,
          "variance": 16,
          "min": 16
        },
        "cooldown": {
          "value": 40,
          "variance": 10
        }
      },
      {
        "name": "Thrilling Tremors",
        "killer": "The Ghostface",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "duration": {
          "value": 16,
          "variance": 4
        },
        "cooldown": {
          "value": 60,
          "variance": 10
        }
      },
      {
        "name": "Furtive Chase",
        "killer": "The Ghostface",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "terror_radius": {
          "value": -4,
          "variance": 2,
          "max": -2
        },
        "tokens": {
          "value": 4,
          "variance": 1,
          "min": 2
        }
      },
      {
        "name": "Zanshin Tactics",
        "killer": "The Oni",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "range": {
          "value": 32,
          "variance": 8
        },
        "tokens": {
          "value": 4,
          "variance": 1,
          "min": 2
        }
      },
      {
        "name": "Blood Echo",
        "killer": "The Oni",
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
        "exhaustion": {
          "value": 45,
          "variance": 15,
          "min": 15
        }
      },
      {
        "name": "Nemesis",
        "killer": "The Oni",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "aura_duration": {
          "value": 4,
          "variance": 1
        },
        "oblivious": {
          "value": 60,
          "variance": 10
        }
      },
      {
        "name": "Gearhead",
        "killer": "The Deathslinger",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "aura_duration": {
          "value": 10,
          "variance": 2
        }
      },
      {
        "name": "Dead Man's Switch",
        "killer": "The Deathslinger",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "duration": {
          "value": 45,
          "variance": 15
        }
      },
      {
        "name": "Hex: Retribution",
        "killer": "The Deathslinger",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "oblivious": {
          "value": 45,
          "variance": 15,
          "min": 15
        },
        "aura_duration": {
          "value": 15,
          "variance": 5,
          "min": 5
        }
      },
      {
        "name": "Forced Penance",
        "killer": "The Executioner",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "broken": {
          "value": 80,
          "variance": 10
        }
      },
      {
        "name": "Trail of Torment",
        "killer": "The Executioner",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "cooldown": {
          "value": 60,
          "variance": 10
        }
      },
      {
        "name": "Deathbound",
        "killer": "The Executioner",
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
        "name": "Dragon's Grip",
        "killer": "The Blight",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "exposed": {
          "value": 60,
          "variance": 10
        },
        "cooldown": {
          "value": 80,
          "variance": 10
        }
      },
      {
        "name": "Hex: Blood Favour",
        "killer": "The Blight",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "range": {
          "value": 32,
          "variance": 8
        },
        "duration": {
          "value": 15,
          "variance": 5,
          "min": 5
        }
      },
      {
        "name": "Hex: Undying",
        "killer": "The Blight",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "range": {
          "value": 4,
          "variance": 2,
          "min": 2
        }
      },
      {
        "name": "Hoarder",
        "killer": "The Twins",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "range": {
          "value": 64,
          "variance": 16
        },
        "chests": {
          "value": 2,
          "variance": 1,
          "min": 1
        }
      },
      {
        "name": "Oppression",
        "killer": "The Twins",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "cooldown": {
          "value": 80,
          "variance": 10
        }
      },
      {
        "name": "Coup de Grace",
        "killer": "The Twins",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "stacks": {
          "value": 5,
          "variance": 1
        },
        "lunge": {
          "value": 80,
          "variance": 20
        }
      },
      {
        "name": "Starstruck",
        "killer": "The Trickster",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "exposed": {
          "value": 30,
          "variance": 10,
          "min": 10
        }
      },
      {
        "name": "Hex: Crowd Control",
        "killer": "The Trickster",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "duration": {
          "value": 20,
          "variance": 5
        }
      },
      {
        "name": "No Way Out",
        "killer": "The Trickster",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "duration": {
          "value": 12,
          "variance": 5
        },
        "stacks": {
          "value": 4,
          "variance": 1,
          "min": 2
        }
      },
      {
        "name": "Lethal Pursuer",
        "killer": "The Nemesis",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "aura_duration": {
          "value": 9,
          "variance": 3
        }
      },
      {
        "name": "Hysteria",
        "killer": "The Nemesis",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "oblivious": {
          "value": 30,
          "variance": 10,
          "min": 10
        },
        "cooldown": {
          "value": 30,
          "variance": 10,
          "min": 10
        }
      },
      {
        "name": "Eruption",
        "killer": "The Nemesis",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "regression": {
          "value": 6,
          "variance": 1
        },
        "incapacitated": {
          "value": 16,
          "variance": 4
        }
      },
      {
        "name": "Deadlock",
        "killer": "The Pinhead",
        "level": {
          "value": 30,
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
        "name": "Hex: Plaything",
        "killer": "The Pinhead",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        }
      },
      {
        "name": "Scourge Hook: Gift of Pain",
        "killer": "The Pinhead",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "action_bonus": {
          "value": -9,
          "variance": 3,
          "max": -3
        }
      },
      {
        "name": "Grim Embrace",
        "killer": "The Artist",
        "level": {
          "value": 30,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "duration": {
          "value": 40,
          "variance": 10
        },
        "aura_duration": {
          "value": 5,
          "variance": 1
        }
      },
      {
        "name": "Scourge Hook: Pain Resonance",
        "killer": "The Artist",
        "level": {
          "value": 35,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "regression": {
          "value": 15,
          "variance": 5,
          "min": 5
        }
      },
      {
        "name": "Hex: Pentimento",
        "killer": "The Artist",
        "level": {
          "value": 40,
          "variance": 5,
          "min": 25,
          "max": 45
        },
        "action_bonus": {
          "value": -30,
          "variance": 10,
          "max": -10
        }
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
      "movement_speed_ambushing": {
        "hasQuestion": true,
        "question": "What is the movement speed of the killer while ambushing with the '_' power?",
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
      "fountain_time": {
        "hasQuestion": true,
        "question": "How long does it take for the killer to ingest corruption at a fountain from the '_' power?",
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
      },
      "injure_range": {
        "hasQuestion": true,
        "question": "At what range do crows deal damage from the '_' power?",
        "type": "number",
        "suffix": "m"
      }
    },
    "data": [
      {
        "name": "Bear Trap",
        "setting_time": {
          "value": 2.5,
          "variance": 1,
          "min": 0.5
        },
        "disarm_time": {
          "value": 3.5,
          "variance": 1
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
          "variance": 1,
          "min": 0.5
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
          "variance": 1,
          "min": 1
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
          "variance": 1,
          "min": 1
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
          "value": 5,
          "variance": 1
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
        "movement_speed_ambushing": {
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
          "variance": 1,
          "min": 1
        },
        "charge_time": {
          "value": 1,
          "variance": 0.5,
          "min": 0.5
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
          "variance": 1
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
        "fountain_time": {
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
          "variance": 1
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
          "variance": 1
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
          "variance": 1
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
        "injure_range": {
          "value": 7.5,
          "variance": 2.5,
          "min": 2.5
        }
      }
    ]
  },
  // OFFERINGS
  {
    "info": {
      "name": {
        "hasQuestion": false
      },
      "rarity": {
        "hasQuestion": true,
        "question": "What is the rarity of the _ offering?",
        "inverseQuestion": "Which of the following offerings is _ rarity?"
      },
      "bloodpoints": {
        "hasQuestion": true,
        "question": "What effect does the offering _ have on its associated bloodpoint category?",
        "type": "number",
        "prefix": "+",
        "suffix": "%"
      },
      "category": {
        "hasQuestion": true,
        "question": "What category of bloodpoints is boosted by the _ offering?",
        "inverseQuestion": "Which of the following offerings boosts bloodpoints gained in the '_' category?"
      },
      "luck": {
        "hasQuestion": true,
        "question": "What effect does the _ offering have on luck?",
        "type": "number",
        "prefix": "+",
        "suffix": "%"
      },
      "basement": {
        "hasQuestion": true,
        "question": "How long does the _ offering show the aura of the basement hooks?",
        "type": "number",
        "suffix": "s"
      },
      "chests": {
        "hasQuestion": true,
        "question": "What effect does the _ offering have on the number of spawned chests?",
        "type": "number",
        "prefix": "+",
        "suffix": " Chests"
      },
      "mist": {
        "hasQuestion": true,
        "question": "What effect does the _ offering have on the thickness of the dark mist?",
        "type": "number",
        "prefix": "+",
        "suffix": "%"
      },
      "hook_distance": {
        "hasQuestion": true,
        "question": "What effect does the _ offering have on the minimum spawn distance between hooks?",
        "type": "number",
        "prefix": "+",
        "suffix": "m"
      },
      "realm": {
        "hasQuestion": true,
        "question": "The _ offering increases odds of being sent to which realm?",
        "inverseQuestion": "Which of the following offerings increases the odds of being sent to the _ realm?"
      },
      "killer": {
        "hasQuestion": true,
        "question": "On release, which killer could be played for a single trial using the _ offering?",
        "inverseQuestion": "On release, which offering allowed _ to be played for a single trial?"
      }
    },
    "data": [
      {
        "name": "Escape! Cake",
        "rarity": "Uncommon",
        "bloodpoints": {
          "value": 100,
          "variance": 25
        },
        "category": "All"
      },
      {
        "name": "Hollow Shell",
        "rarity": "Uncommon",
        "bloodpoints": {
          "value": 25,
          "variance": 25,
          "min": 25
        },
        "category": "All"
      },
      {
        "name": "Sealed Envelope",
        "rarity": "Uncommon",
        "bloodpoints": {
          "value": 25,
          "variance": 25,
          "min": 25
        },
        "category": "All"
      },
      {
        "name": "Survivor Pudding",
        "rarity": "Uncommon",
        "bloodpoints": {
          "value": 100,
          "variance": 25
        },
        "category": "All"
      },
      {
        "name": "Bloody Party Streamers",
        "rarity": "Rare",
        "bloodpoints": {
          "value": 100,
          "variance": 25
        },
        "category": "All"
      },
      {
        "name": "Bound Envelope",
        "rarity": "Rare",
        "bloodpoints": {
          "value": 25,
          "variance": 25,
          "min": 25
        },
        "category": "All"
      },
      {
        "name": "Ghastly Gateau",
        "rarity": "Event",
        "bloodpoints": {
          "value": 104,
          "variance": 1
        },
        "category": "All"
      },
      {
        "name": "Gruesome Gateau",
        "rarity": "Event",
        "bloodpoints": {
          "value": 103,
          "variance": 1
        },
        "category": "All"
      },
      {
        "name": "Sacrificial Cake",
        "rarity": "Event",
        "bloodpoints": {
          "value": 105,
          "variance": 1
        },
        "category": "All"
      },
      {
        "name": "Primrose Blossom Sachet",
        "rarity": "Common",
        "bloodpoints": {
          "value": 50,
          "variance": 25,
          "min": 25
        },
        "category": "Altruism"
      },
      {
        "name": "Fresh Primrose Blossom",
        "rarity": "Uncommon",
        "bloodpoints": {
          "value": 75,
          "variance": 25,
          "min": 25
        },
        "category": "Altruism"
      },
      {
        "name": "Fragrant Primrose Blossom",
        "rarity": "Rare",
        "bloodpoints": {
          "value": 100,
          "variance": 25
        },
        "category": "Altruism"
      },
      {
        "name": "Sweet William Sachet",
        "rarity": "Common",
        "bloodpoints": {
          "value": 50,
          "variance": 25,
          "min": 25
        },
        "category": "Boldness"
      },
      {
        "name": "Fresh Sweet William",
        "rarity": "Uncommon",
        "bloodpoints": {
          "value": 75,
          "variance": 25,
          "min": 25
        },
        "category": "Boldness"
      },
      {
        "name": "Fragrant Sweet William",
        "rarity": "Rare",
        "bloodpoints": {
          "value": 100,
          "variance": 25
        },
        "category": "Boldness"
      },
      {
        "name": "Tanager Wreath",
        "rarity": "Common",
        "bloodpoints": {
          "value": 50,
          "variance": 25,
          "min": 25
        },
        "category": "Brutality"
      },
      {
        "name": "Devout Tanager Wreath",
        "rarity": "Uncommon",
        "bloodpoints": {
          "value": 75,
          "variance": 25,
          "min": 25
        },
        "category": "Brutality"
      },
      {
        "name": "Ardent Tanager Wreath",
        "rarity": "Rare",
        "bloodpoints": {
          "value": 100,
          "variance": 25
        },
        "category": "Brutality"
      },
      {
        "name": "Raven Wreath",
        "rarity": "Common",
        "bloodpoints": {
          "value": 50,
          "variance": 25,
          "min": 25
        },
        "category": "Deviousness"
      },
      {
        "name": "Devout Raven Wreath",
        "rarity": "Uncommon",
        "bloodpoints": {
          "value": 75,
          "variance": 25,
          "min": 25
        },
        "category": "Deviousness"
      },
      {
        "name": "Ardent Raven Wreath",
        "rarity": "Rare",
        "bloodpoints": {
          "value": 100,
          "variance": 25
        },
        "category": "Deviousness"
      },
      {
        "name": "Spotted Owl Wreath",
        "rarity": "Common",
        "bloodpoints": {
          "value": 50,
          "variance": 25,
          "min": 25
        },
        "category": "Hunter"
      },
      {
        "name": "Devout Spotted Owl Wreath",
        "rarity": "Uncommon",
        "bloodpoints": {
          "value": 75,
          "variance": 25,
          "min": 25
        },
        "category": "Hunter"
      },
      {
        "name": "Ardent Spotted Owl Wreath",
        "rarity": "Rare",
        "bloodpoints": {
          "value": 100,
          "variance": 25
        },
        "category": "Hunter"
      },
      {
        "name": "Bog Laurel Sachet",
        "rarity": "Common",
        "bloodpoints": {
          "value": 50,
          "variance": 25,
          "min": 25
        },
        "category": "Objectives"
      },
      {
        "name": "Fresh Bog Laurel",
        "rarity": "Uncommon",
        "bloodpoints": {
          "value": 75,
          "variance": 25,
          "min": 25
        },
        "category": "Objectives"
      },
      {
        "name": "Fragrant Bog Laurel",
        "rarity": "Rare",
        "bloodpoints": {
          "value": 100,
          "variance": 25
        },
        "category": "Objectives"
      },
      {
        "name": "Shrike Wreath",
        "rarity": "Common",
        "bloodpoints": {
          "value": 50,
          "variance": 25,
          "min": 25
        },
        "category": "Sacrifice"
      },
      {
        "name": "Devout Shrike Wreath",
        "rarity": "Uncommon",
        "bloodpoints": {
          "value": 75,
          "variance": 25,
          "min": 25
        },
        "category": "Sacrifice"
      },
      {
        "name": "Ardent Shrike Wreath",
        "rarity": "Rare",
        "bloodpoints": {
          "value": 100,
          "variance": 25
        },
        "category": "Sacrifice"
      },
      {
        "name": "Crispleaf Amaranth Sachet",
        "rarity": "Common",
        "bloodpoints": {
          "value": 50,
          "variance": 25,
          "min": 25
        },
        "category": "Survival"
      },
      {
        "name": "Fresh Crispleaf Amaranth",
        "rarity": "Uncommon",
        "bloodpoints": {
          "value": 75,
          "variance": 25,
          "min": 25
        },
        "category": "Survival"
      },
      {
        "name": "Fragrant Crispleaf Amaranth",
        "rarity": "Rare",
        "bloodpoints": {
          "value": 100,
          "variance": 25
        },
        "category": "Survival"
      },
      {
        "name": "Chalk Pouch",
        "rarity": "Common",
        "luck": {
          "value": 1,
          "variance": 1,
          "min": 1
        }
      },
      {
        "name": "Cream Chalk Pouch",
        "rarity": "Uncommon",
        "luck": {
          "value": 2,
          "variance": 1,
          "min": 1
        }
      },
      {
        "name": "Ivory Chalk Pouch",
        "rarity": "Rare",
        "luck": {
          "value": 3,
          "variance": 1,
          "min": 1
        }
      },
      {
        "name": "Salt Pouch",
        "rarity": "Uncommon",
        "luck": {
          "value": 1,
          "variance": 1,
          "min": 1
        }
      },
      {
        "name": "Black Salt Statuette",
        "rarity": "Rare",
        "luck": {
          "value": 2,
          "variance": 1,
          "min": 1
        }
      },
      {
        "name": "Vigo's Jar of Salty Lips",
        "rarity": "Very Rare",
        "luck": {
          "value": 3,
          "variance": 1,
          "min": 1
        }
      },
      {
        "name": "Bloodied Blueprint",
        "rarity": "Common",
        "basement": {
          "value": 20,
          "variance": 5
        }
      },
      {
        "name": "Torn Blueprint",
        "rarity": "Common",
        "basement": {
          "value": 20,
          "variance": 5
        }
      },
      {
        "name": "Scratched Coin",
        "rarity": "Uncommon",
        "chests": {
          "value": -1,
          "variance": 1,
          "max": -1
        }
      },
      {
        "name": "Tarnished Coin",
        "rarity": "Uncommon",
        "chests": {
          "value": 1,
          "variance": 1,
          "min": 1
        }
      },
      {
        "name": "Cut Coin",
        "rarity": "Very Rare",
        "chests": {
          "value": -2,
          "variance": 1,
          "min": -4,
          "max": -1
        }
      },
      {
        "name": "Shiny Coin",
        "rarity": "Very Rare",
        "chests": {
          "value": 2,
          "variance": 1,
          "min": 1,
          "max": 4
        }
      },
      {
        "name": "Clear Reagent",
        "rarity": "Common",
        "mist": {
          "value": -50,
          "variance": 25,
          "max": -25
        }
      },
      {
        "name": "Faint Reagent",
        "rarity": "Common",
        "mist": {
          "value": 25,
          "variance": 25,
          "min": 25
        }
      },
      {
        "name": "Hazy Reagent",
        "rarity": "Uncommon",
        "mist": {
          "value": 50,
          "variance": 25,
          "min": 25
        }
      },
      {
        "name": "Murky Reagent",
        "rarity": "Very Rare",
        "mist": {
          "value": 75,
          "variance": 25,
          "min": 25
        }
      },
      {
        "name": "Annotated Blueprint",
        "rarity": "Common"
      },
      {
        "name": "Vigo's Blueprint",
        "rarity": "Common"
      },
      {
        "name": "Mouldy Oak",
        "rarity": "Uncommon",
        "hook_distance": {
          "value": -1.5,
          "variance": 1,
          "max": -0.5
        }
      },
      {
        "name": "Rotten Oak",
        "rarity": "Rare",
        "hook_distance": {
          "value": -2.5,
          "variance": 1,
          "max": -0.5
        }
      },
      {
        "name": "Putrid Oak",
        "rarity": "Very Rare",
        "hook_distance": {
          "value": -3.5,
          "variance": 1,
          "max": -0.5
        }
      },
      {
        "name": "Petrified Oak",
        "rarity": "Very Rare",
        "hook_distance": {
          "value": 1,
          "variance": 1,
          "min": 1
        }
      },
      {
        "name": "Cypress Memento Mori",
        "rarity": "Uncommon"
      },
      {
        "name": "Ivory Memento Mori",
        "rarity": "Rare"
      },
      {
        "name": "Ebony Memento Mori",
        "rarity": "Ultra Rare"
      },
      {
        "name": "Shredded Plate",
        "rarity": "Common",
        "realm": "Autohaven Wreckers"
      },
      {
        "name": "Virginia Plate",
        "rarity": "Uncommon",
        "realm": "Autohaven Wreckers"
      },
      {
        "name": "Azarov's Key",
        "rarity": "Rare",
        "realm": "Autohaven Wreckers"
      },
      {
        "name": "Fuming Cordage",
        "rarity": "Common",
        "realm": "Backwater Swamp"
      },
      {
        "name": "Fuming Welcome Sign",
        "rarity": "Uncommon",
        "realm": "Backwater Swamp"
      },
      {
        "name": "Grandma's Cookbook",
        "rarity": "Rare",
        "realm": "Backwater Swamp"
      },
      {
        "name": "Cattle Tag 28",
        "rarity": "Common",
        "realm": "Coldwind Farm"
      },
      {
        "name": "Cattle Tag 81",
        "rarity": "Uncommon",
        "realm": "Coldwind Farm"
      },
      {
        "name": "Heart Locket",
        "rarity": "Rare",
        "realm": "Coldwind Farm"
      },
      {
        "name": "Lunacy Ticket",
        "rarity": "Common",
        "realm": "Crotus Prenn Asylum"
      },
      {
        "name": "P. Elliott Lunacy Ticket",
        "rarity": "Uncommon",
        "realm": "Crotus Prenn Asylum"
      },
      {
        "name": "Charred Wedding Photograph",
        "rarity": "Rare",
        "realm": "Crotus Prenn Asylum"
      },
      {
        "name": "Crow's Eye",
        "rarity": "Rare",
        "realm": "Forsaken Boneyard"
      },
      {
        "name": "Jigsaw Piece",
        "rarity": "Rare",
        "realm": "Gideon Meat Plant"
      },
      {
        "name": "Dusty Noose",
        "rarity": "Rare",
        "realm": "Grave of Glenvale"
      },
      {
        "name": "Harvest Festival Leaflet",
        "rarity": "Common",
        "realm": "Haddonfield"
      },
      {
        "name": "Decrepit Clapboard",
        "rarity": "Uncommon",
        "realm": "Haddonfield"
      },
      {
        "name": "Strode Realty Key",
        "rarity": "Rare",
        "realm": "Haddonfield"
      },
      {
        "name": "Hawkins National Laboratory ID",
        "rarity": "Rare",
        "realm": "Hawkins National Laboratory"
      },
      {
        "name": "Emergency Certificate",
        "rarity": "Common",
        "realm": "Lery's Memorial Institute"
      },
      {
        "name": "Psychiatric Assessment Report",
        "rarity": "Uncommon",
        "realm": "Lery's Memorial Institute"
      },
      {
        "name": "Shattered Glasses",
        "rarity": "Rare",
        "realm": "Lery's Memorial Institute"
      },
      {
        "name": "MacMillan Ledger Page",
        "rarity": "Common",
        "realm": "The MacMillan Estate"
      },
      {
        "name": "Signed Ledger Page",
        "rarity": "Uncommon",
        "realm": "The MacMillan Estate"
      },
      {
        "name": "MacMillan's Phalanx Bone",
        "rarity": "Rare",
        "realm": "The MacMillan Estate"
      },
      {
        "name": "Damaged Photo",
        "rarity": "Rare",
        "realm": "Ormond"
      },
      {
        "name": "RPD Badge",
        "rarity": "Rare",
        "realm": "Raccoon City"
      },
      {
        "name": "Painted River Rock",
        "rarity": "Common",
        "realm": "Red Forest"
      },
      {
        "name": "Children's Book",
        "rarity": "Uncommon",
        "realm": "Red Forest"
      },
      {
        "name": "The Last Mask",
        "rarity": "Rare",
        "realm": "Red Forest"
      },
      {
        "name": "Mary's Letter",
        "rarity": "Rare",
        "realm": "Silent Hill"
      },
      {
        "name": "The Pied Piper",
        "rarity": "Rare",
        "realm": "Springwood"
      },
      {
        "name": "Yamaoka Family Crest",
        "rarity": "Rare",
        "realm": "Yamaoka Estate"
      },
      {
        "name": "Shroud of Union",
        "rarity": "Uncommon"
      },
      {
        "name": "Shroud of Separation",
        "rarity": "Uncommon"
      },
      {
        "name": "Vigo's Shroud",
        "rarity": "Uncommon"
      },
      {
        "name": "Shroud of Binding",
        "rarity": "Very Rare"
      },
      {
        "name": "Black Splinter",
        "rarity": "Ultra Rare",
        "killer": "The Shape"
      },
      {
        "name": "Bone Splinter",
        "rarity": "Ultra Rare",
        "killer": "The Cannibal"
      },
      {
        "name": "Glass Splinter",
        "rarity": "Ultra Rare",
        "killer": "The Pig"
      },
      {
        "name": "Muddy Splinter",
        "rarity": "Ultra Rare",
        "killer": "The Hag"
      },
      {
        "name": "Shock Splinter",
        "rarity": "Ultra Rare",
        "killer": "The Doctor"
      },
      {
        "name": "Smoking Splinter",
        "rarity": "Ultra Rare",
        "killer": "The Nightmare"
      },
      {
        "name": "Sacrificial Ward",
        "rarity": "Rare"
      },
      {
        "name": "Black Ward",
        "rarity": "Very Rare"
      },
      {
        "name": "White Ward",
        "rarity": "Very Rare"
      }
    ]
  }
]