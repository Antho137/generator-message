function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
}
  
const effectiveManager = {
    roles: ['planning', 'organizing', 'staffing', 'leading', 'controling'],
    skills: ['technical', 'interpersonal', 'conceptual', 'diagnostic', 'political'],
    mindSets: ['Reflection', 'Analysis', 'Worldly', 'Collaboration', 'Action']
}
  
// Store the 'competences' in an array
let managerCompetences = []
  
// Iterate over the object
for (let prop in effectiveManager) {
    let effectiveness = generateRandomNumber(effectiveManager[prop].length)
  
    // use the object's properties to customize the message being added to managerCompetences  
    switch(prop) {
        case 'roles':
            managerCompetences.push(`One of the Manager role is ${effectiveManager[prop][effectiveness]}.`)
            break
        case 'skills':
            managerCompetences.push(`Effective Manager needs ${effectiveManager[prop][effectiveness]} skill.`)
            break
        case 'mindSets':
            managerCompetences.push(`${effectiveManager[prop][effectiveness]} must be one of the Manager mind-set.`)
            break
        default:
            managerCompetences.push('There is not enough info.')
    }
}
  
function getCompetences(competences) {
    const allCompetences = managerCompetences.join('\n')
    console.log(allCompetences);
}
  
getCompetences(managerCompetences);