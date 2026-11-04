const animals = [
  {
    id: 1,
    name: "African Elephant",
    animalClass: "mammal",
    weightKg: 6000,
    status: "endangered",
    nocturnal: false,
    habitats: ["savanna", "forest"],
    diet: { type: "herbivore", foods: ["grass", "leaves", "bark"] },
    stats: { topSpeedKmh: 40, lifespanYears: 65 },
  },
  {
    id: 2,
    name: "Lion",
    animalClass: "mammal",
    weightKg: 190,
    status: "vulnerable",
    nocturnal: true,
    habitats: ["savanna", "grassland"],
    diet: { type: "carnivore", foods: ["zebra", "antelope", "buffalo"] },
    stats: { topSpeedKmh: 80, lifespanYears: 14 },
  },
  {
    id: 3,
    name: "Giant Panda",
    animalClass: "mammal",
    weightKg: 100,
    status: "vulnerable",
    nocturnal: false,
    habitats: ["forest"],
    diet: { type: "herbivore", foods: ["bamboo"] },
    stats: { topSpeedKmh: 32, lifespanYears: 20 },
  },
  {
    id: 4,
    name: "Emperor Penguin",
    animalClass: "bird",
    weightKg: 30,
    status: "near threatened",
    nocturnal: false,
    habitats: ["ice", "ocean"],
    diet: { type: "carnivore", foods: ["fish", "krill", "squid"] },
    stats: { topSpeedKmh: 9, lifespanYears: 20 },
  },
  {
    id: 5,
    name: "Bald Eagle",
    animalClass: "bird",
    weightKg: 5,
    status: "least concern",
    nocturnal: false,
    habitats: ["forest", "wetland"],
    diet: { type: "carnivore", foods: ["fish", "rabbit", "carrion"] },
    stats: { topSpeedKmh: 160, lifespanYears: 28 },
  },
  {
    id: 6,
    name: "Komodo Dragon",
    animalClass: "reptile",
    weightKg: 80,
    status: "endangered",
    nocturnal: false,
    habitats: ["savanna", "forest"],
    diet: { type: "carnivore", foods: ["deer", "pig", "carrion"] },
    stats: { topSpeedKmh: 20, lifespanYears: 30 },
  },
  {
    id: 7,
    name: "Green Sea Turtle",
    animalClass: "reptile",
    weightKg: 160,
    status: "endangered",
    nocturnal: false,
    habitats: ["ocean"],
    diet: { type: "herbivore", foods: ["seagrass", "algae"] },
    stats: { topSpeedKmh: 35, lifespanYears: 70 },
  },
  {
    id: 8,
    name: "Red Fox",
    animalClass: "mammal",
    weightKg: 7,
    status: "least concern",
    nocturnal: true,
    habitats: ["forest", "grassland", "urban"],
    diet: { type: "omnivore", foods: ["rabbit", "berries", "insects"] },
    stats: { topSpeedKmh: 50, lifespanYears: 4 },
  },
  {
    id: 9,
    name: "Brown Bear",
    animalClass: "mammal",
    weightKg: 300,
    status: "least concern",
    nocturnal: false,
    habitats: ["forest", "tundra"],
    diet: { type: "omnivore", foods: ["salmon", "berries", "roots"] },
    stats: { topSpeedKmh: 56, lifespanYears: 25 },
  },
  {
    id: 10,
    name: "Chinese Giant Salamander",
    animalClass: "amphibian",
    weightKg: 25,
    status: "critically endangered",
    nocturnal: true,
    habitats: ["river"],
    diet: { type: "carnivore", foods: ["fish", "crabs", "insects"] },
    stats: { topSpeedKmh: 3, lifespanYears: 60 },
  },
  {
    id: 11,
    name: "Great White Shark",
    animalClass: "fish",
    weightKg: 1100,
    status: "vulnerable",
    nocturnal: false,
    habitats: ["ocean"],
    diet: { type: "carnivore", foods: ["fish", "seal", "squid"] },
    stats: { topSpeedKmh: 56, lifespanYears: 70 },
  },
  {
    id: 12,
    name: "Cheetah",
    animalClass: "mammal",
    weightKg: 50,
    status: "vulnerable",
    nocturnal: false,
    habitats: ["savanna", "grassland"],
    diet: { type: "carnivore", foods: ["gazelle", "impala", "hare"] },
    stats: { topSpeedKmh: 105, lifespanYears: 12 },
  },
  {
    id: 13,
    name: "Gray Wolf",
    animalClass: "mammal",
    weightKg: 40,
    status: "least concern",
    nocturnal: true,
    habitats: ["forest", "tundra", "grassland"],
    diet: { type: "carnivore", foods: ["deer", "elk", "moose"] },
    stats: { topSpeedKmh: 60, lifespanYears: 8 },
  },
  {
    id: 14,
    name: "Western Gorilla",
    animalClass: "mammal",
    weightKg: 140,
    status: "critically endangered",
    nocturnal: false,
    habitats: ["forest"],
    diet: { type: "herbivore", foods: ["leaves", "fruit", "stems"] },
    stats: { topSpeedKmh: 40, lifespanYears: 35 },
  },
  {
    id: 15,
    name: "Snowy Owl",
    animalClass: "bird",
    weightKg: 2,
    status: "vulnerable",
    nocturnal: false,
    habitats: ["tundra", "grassland"],
    diet: { type: "carnivore", foods: ["lemming", "vole", "hare"] },
    stats: { topSpeedKmh: 80, lifespanYears: 10 },
  },
];

// map
const names = animals.map(a => a.name)
const diets = animals.map(a => `${a.name} eats ${a.diet.foods.join(', ')}`)
const stats = animals.map(a => ({
    name: a.name,
    weightLb: Math.round(a.weightKg*2.2),
    isFast: a.stats.topSpeedKmh >= 60
}))


// filter
const nocturnals = animals.filter(a => a.nocturnal)
const vulnerableForestAnimals = animals.filter(a => a.habitats.includes('forest') && a.status !== 'least concern')

// find
const fishEater = animals.find(a => a.diet.foods.includes('fish'))
const getTopSpeed = animal => animals.find(a => a.name === animal)?.stats?.topSpeedKmh ?? null;

// every
const allLiveLongerThan = n => animals.every(a => a.stats.lifespanYears > n)

// some
const anyoneEats = food => animals.some(a => a.diet.foods.includes(food))

// sort
animals.sort((a,b) => a.weightKg - b.weightKg)
animals.sort((a,b) => a.name.localeCompare(b.name))
animals.sort((a,b) => {
    const aKey = `${a.animalClass}|${9999-a.weightKg}`
    const bKey = `${b.animalClass}|${9999-b.weightKg}`
    return aKey.localeCompare(bKey)
})

console.log(animals)

// reduce
const totalWeight = animals.reduce((total,a) => total+a.weightKg, 0)
const counts = animals.reduce((obj, a) => {
    if (!obj[a.animalClass]) obj[a.animalClass] = 0
    obj[a.animalClass]++
    return obj
}, {})
const fastest = animals.reduce((fastest, a) => {
    return a.stats.topSpeedKmh > fastest.stats.topSpeedKmh ? a : fastest
}, { stats: { topSpeedKmh: -Infinity }})
const habitats = [...new Set(animals.reduce((arr, a) => {
    return [...arr, ...a.habitats]
}, []))]

Array.prototype.reject = function(cb) {
    const arr = []
    for (let i = 0; i < this.length; i++) {
        const shouldReject = cb(this[i], i, this)
        if (!shouldReject) arr.push(arr[i])
    }
    return arr
}

Array.prototype.countWhere = function(cb) {
    let count = 0
    for (let i = 0; i < this.length; i++) {
        const bool = cb(this[i], i, this)
        if (bool) count++
    }
    return count
}

Array.prototype.groupBy = function(cb) {
    const groups = {}
    for (let i = 0; i < this.length; i++) {
        const key = cb(this[i], i, this)
        if (!groups[key]) groups[key] = []
        groups[key].push(this[i])
    }
    return groups
}

animals.groupBy(a => {
    const s = a.stats.topSpeedKmh
    return s >= 50 ? "fast"
        : s >= 25 ? "medium"
        : "slow" 
})