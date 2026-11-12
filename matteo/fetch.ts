async function getNeighbors(country: string): Promise<string[]> {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
    const data = await res.json()
    console.log(data)
}

getNeighbors("china")