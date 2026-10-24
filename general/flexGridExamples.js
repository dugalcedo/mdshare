const examples = document.querySelectorAll('.example')

examples.forEach(handleExample)

const main = document.querySelector('main')
const resizer = document.createElement('div')
const resizerTooltip = document.createElement('div')
let grabOffset = 0

resizer.id = 'resizer'
resizerTooltip.id = 'resizer-tooltip'
main.append(resizer)
document.body.append(resizerTooltip)

updateResizerTooltip()

resizer.addEventListener('pointerdown', handleResizerDown)
resizer.addEventListener('pointermove', handleResizerMove)
resizer.addEventListener('lostpointercapture', () => document.body.style.userSelect = '')
window.addEventListener('resize', updateResizerTooltip)

function handleResizerDown(e) {
    resizer.setPointerCapture(e.pointerId)
    grabOffset = e.clientX - main.getBoundingClientRect().right
    document.body.style.userSelect = 'none'
}

function handleResizerMove(e) {
    if (!resizer.hasPointerCapture(e.pointerId)) return

    // main is centered, so the width changes by twice the drag distance
    const rect = main.getBoundingClientRect()
    const center = rect.left + rect.width / 2
    main.style.width = `${2 * (e.clientX - grabOffset - center)}px`
    updateResizerTooltip()
}

function updateResizerTooltip() {
    const rect = main.getBoundingClientRect()
    resizerTooltip.textContent = `Drag me to resize · ${Math.round(rect.width)}px`
    resizerTooltip.style.left = `${rect.right}px`
}

function handleExample(div) {
    const content = div.querySelector(".content")
    const codePre = document.createElement('pre')

    codePre.innerHTML = `<code class="language-html">${formatCode(content.innerHTML)}</code>`
    hljs.highlightElement(codePre.querySelector('code'))

    content.insertAdjacentElement('afterend', codePre)
}

function formatCode(html) {
    return dedent(html)
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
}

function dedent(text) {
    const lines = text.replace(/^\s*\n/, '').trimEnd().split('\n')
    const indent = Math.min(
        ...lines
            .filter(line => line.trim())
            .map(line => line.match(/^\s*/)[0].length)
    )
    return lines.map(line => line.slice(indent)).join('\n')
}