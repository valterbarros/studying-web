const res = await fetch(`${location.href}.json`)
const json = await res.json()
const cards = json.cards.filter(({idList, desc}) => idList === '654187b735df8e6b30b5f3ae' && desc.includes('http'))

const group = { }
const getJsLabel = (labels) => labels.find((label) => label.name.toLocaleLowerCase().includes('javascript'))?.name;

cards.forEach(({desc, name, labels}) => {
    const jsLabel = getJsLabel(labels);
    group[jsLabel] ||= []; 
    group[jsLabel].push(`[${name}](${desc})`)
})

let final = ''

for ([subject, markdownLinks]  of Object.entries(group)) {
    final += `${subject}: \n\n\n`;

    markdownLinks.forEach((link) => final += `- ${link} \n\n` )
}

console.log(final)
console.log('Total: ', cards.length);