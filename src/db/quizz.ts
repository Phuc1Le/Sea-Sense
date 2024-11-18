import { ImageSourcePropType } from "react-native";

export interface QuizzData {
  image: ImageSourcePropType;
  ques: string;
  choose: string[];
  ans: number;
}

export const quizzData: { [key: string]: QuizzData[] } = {
  easy: [
    {
      image: require("../assets/turtle.png"),
      ques: "Where do Turtles lay eggs?",
      choose: ["Under the sea", "At the place they were born", "On the sand"],
      ans: 1,
    },
    {
      image: require("../assets/shark.png"),
      ques: "What is the largest species of shark?",
      choose: [
        "Great White Shark",
        "Whale Shark",
        "Hammerhead Shark",
        "Tiger Shark",
      ],
      ans: 1,
    },
    {
      image: require("../assets/colors.png"),
      ques: "Which marine animal is known for its ability to change colors?",
      choose: ["Jellyfish", "Clownfish", "Octopus", "Starfish"],
      ans: 2,
    },
    {
      image: require("../assets/playful.png"),
      ques: "Which marine mammal is known for its playful nature and intelligence?",
      choose: ["Blue Whale", "Dolphin", "Sea Turtle", "Manatee"],
      ans: 1,
    },
    {
      image: require("../assets/whale.png"),
      ques: "What is the primary diet of a blue whale?",
      choose: ["Plankton", "Small Fish", "Squid", "Krill"],
      ans: 3,
    },
    {
      image: require("../assets/bluetang.png"),
      ques: "Which fish is known for its vibrant blue and yellow stripes?",
      choose: ["Goldfish", "Angelfish", "Clownfish", "Blue Tang"],
      ans: 3,
    },
    {
      image: require("../assets/crab.png"),
      ques: "Which marine animal has a shell and is often found on the beach?",
      choose: ["Seahorse", "Crab", "Eel", "Shark"],
      ans: 1,
    },
    {
      image: require("../assets/sea_anemone.png"),
      ques: "What type of animal is a sea anemone?",
      choose: ["Fish", "Mollusk", "Cnidarian", "Crustacean"],
      ans: 2,
    },
    {
      image: require("../assets/eggs.png"),
      ques: "Which marine reptile can be found nesting on sandy beaches?",
      choose: ["Sea Snake", "Crocodile", "Sea Turtle", "Iguana"],
      ans: 2,
    },
    {
      image: require("../assets/octopus1.png"),
      ques: "Which marine creature is known for having eight legs?",
      choose: ["Lobster", "Starfish", "Octopus", "Crab"],
      ans: 2,
    },
    {
      image: require("../assets/jellyfish.png"),
      ques: "What is the main characteristic of a jellyfish?",
      choose: ["Hard Shell", "Tentacles", "Sharp Teeth", "Scales"],
      ans: 1,
    },
    {
      image: require("../assets/clownfish.png"),
      ques: "What type of marine animal is Nemo in the movie 'Finding Nemo'?",
      choose: ["Angelfish", "Clownfish", "Blue Tang", "Seahorse"],
      ans: 1,
    },
    {
      image: require("../assets/narwhal.png"),
      ques: "Which large marine mammal is known for its long tusks?",
      choose: ["Dolphin", "Narwhal", "Seal", "Whale"],
      ans: 1,
    },
    {
      image: require("../assets/starfish.png"),
      ques: "What do starfish primarily eat?",
      choose: ["Algae", "Plankton", "Small Fish", "Mollusks"],
      ans: 3,
    },
    {
      image: require("../assets/pufflefish.png"),
      ques: "What type of fish has the ability to inflate its body to avoid predators?",
      choose: ["Clownfish", "Pufferfish", "Swordfish", "Tuna"],
      ans: 1,
    },
    {
      image: require("../assets/starfish.png"),
      ques: "Which marine animal is famous for its role in helping to clean up the ocean floor by eating dead animals and plants?",
      choose: ["Shark", "Crab", "Eel", "Starfish"],
      ans: 2,
    },
    {
      image: require("../assets/dolphin.png"),
      ques: "Which marine animal is known for traveling in large pods and is often seen breaching out of the water?",
      choose: ["Whale", "Dolphin", "Shark", "Sea Turtle"],
      ans: 1,
    },
  ],
  medium: [
    {
      image: require("../assets/turtle.png"),
      ques: "What is the largest species of turtle in the world?",
      choose: [
        "Leatherback turtle",
        "Green sea turtle",
        "Loggerhead turtle",
        "Hawksbill turtle",
      ],
      ans: 0,
    },
    {
      image: require("../assets/whale.png"),
      ques: "What is the primary food source for blue whales?",
      choose: ["Plankton", "Squid", "Small fish", "Jellyfish"],
      ans: 0,
    },
    {
      image: require("../assets/hammer-headshark.png"),
      ques: "Which species of shark is known for its distinctive hammer-shaped head?",
      choose: [
        "Tiger shark",
        "Hammerhead shark",
        "Bull shark",
        "Great white shark",
      ],
      ans: 1,
    },
    {
      image: require("../assets/manta_ray.png"),
      ques: "What is the largest species of ray in the world?",
      choose: ["Manta ray", "Stingray", "Eagle ray", "Electric ray"],
      ans: 0,
    },
    {
      image: require("../assets/jellyfish.png"),
      ques: "Which marine animal is capable of producing bioluminescent light?",
      choose: ["Jellyfish", "Sea cucumber", "Clownfish", "Angelfish"],
      ans: 0,
    },

    {
      image: require("../assets/orca.png"),
      ques: "What is the primary diet of a killer whale?",
      choose: ["Seals and sea lions", "Squid", "Krill", "Fish"],
      ans: 3,
    },
    {
      image: require("../assets/electric_eel.png"),
      ques: "Which marine animal is known for its ability to produce powerful electric shocks?",
      choose: ["Electric eel", "Stingray", "Electric ray", "Moray eel"],
      ans: 0,
    },
    {
      image: require("../assets/sea_otter.png"),
      ques: "What is the primary diet of a sea otter?",
      choose: ["Sea urchins", "Fish", "Crustaceans", "All of the above"],
      ans: 3,
    },
    {
      image: require("../assets/crusta.png"),
      ques: "Which of the following marine animals is not a crustacean?",
      choose: ["Lobster", "Crab", "Squid", "Shrimp"],
      ans: 2,
    },
    {
      image: require("../assets/clownfish.png"),
      ques: "What is the primary function of a clownfish's symbiotic relationship with anemones?",
      choose: [
        "Protection from predators",
        "Food source",
        "Shelter",
        "Reproduction assistance",
      ],
      ans: 0,
    },
  ],
  hard: [
    {
      image: require("../assets/jellyfish.png"),
      ques: "What is the largest species of jellyfish?",
      choose: [
        "Box Jellyfish",
        "Lion's Mane Jellyfish",
        "Portuguese Man o' War",
        "Moon Jellyfish",
      ],
      ans: 1,
    },
    {
      image: require("../assets/whale.png"),
      ques: "Which marine animal has the longest migration route of any mammal?",
      choose: ["Humpback Whale", "Blue Whale", "Sperm Whale", "Gray Whale"],
      ans: 3,
    },
    {
      image: require("../assets/angler_fish.png"),
      ques: "Which marine animal can produce light through bioluminescence?",
      choose: ["Manta Ray", "Giant Squid", "Anglerfish", "Barracuda"],
      ans: 2,
    },
    {
      image: require("../assets/filter.png"),
      ques: "Which of the following marine animals is a filter feeder?",
      choose: ["Octopus", "Blue Whale", "Great White Shark", "Barracuda"],
      ans: 1,
    },
    {
      image: require("../assets/clownfish.png"),
      ques: "Which marine animal is known for having a symbiotic relationship with anemones?",
      choose: ["Parrotfish", "Clownfish", "Seahorse", "Sea Turtle"],
      ans: 1,
    },
    {
      image: require("../assets/seahorse.png"),
      ques: "What is unique about the reproduction of the seahorse?",
      choose: [
        "They lay eggs in nests",
        "The male carries and gives birth to the young",
        "They reproduce through budding",
        "The female carries the young in her mouth",
      ],
      ans: 1,
    },
    {
      image: require("../assets/icefish.png"),
      ques: "What adaptation allows the Antarctic Icefish to survive in freezing waters?",
      choose: [
        "Antifreeze proteins in their blood",
        "Thick blubber layer",
        "Ability to generate heat",
        "Hibernation during winter",
      ],
      ans: 0,
    },
    {
      image: require("../assets/coral_reef.png"),
      ques: "Which of the following is not a type of coral reef?",
      choose: ["Barrier Reef", "Fringing Reef", "Atoll", "Lagoon Reef"],
      ans: 3,
    },
    {
      image: require("../assets/line.png"),
      ques: "What is the primary function of the lateral line in fish?",
      choose: [
        "Detecting light",
        "Sensing vibrations and movement in the water",
        "Aiding in digestion",
        "Breathing",
      ],
      ans: 1,
    },
    {
      image: require("../assets/red.png"),
      ques: "What causes the phenomenon known as red tide?",
      choose: [
        "A large number of jellyfish",
        "Overgrowth of algae",
        "Migration of red crabs",
        "Pollution from ships",
      ],
      ans: 1,
    },
  ],
};
