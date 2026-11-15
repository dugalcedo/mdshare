async function getTopEpisodes(show: string, count: number): Promise<string[] | null> {
    const showRes = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${show}`)
    if (!showRes.ok) return null;
    const { id } = await showRes.json()
    const episodesRes = await fetch(`https://api.tvmaze.com/shows/${id}/episodes`)
    if (!episodesRes.ok) return null;
    const episodesData = await episodesRes.json()
    episodesData.sort((a: any, b: any) => {
        return b.rating.average - a.rating.average
    })
    return episodesData.slice(0, count).map((e: any) => `S${e.season}E${e.number}: ${e.name} (${e.rating.average})`)
}

async function main() {
    console.log(JSON.stringify(await getTopEpisodes('orange is the new black', 10), null, 2))
}
main()