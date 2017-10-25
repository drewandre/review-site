const languageColors = Object.freeze({
  'Arduino': '#BB7CCF',
  'C++': '#F14C7D',
  'C': '#555555',
  'Python': '#3674A3',
  'JavaScript': '#F2DE62',
  'Eagle': '#CCCCCC',
  'HTML': '#E24B2C',
  'Processing': '#0498D6',
  'Assembly': '#6E4B18',
  'C#': '#208411',
  'CSS': '#55407B',
  'Objective-C': '#4292FD',
  'Ruby': '#6F1417',
  'TypeScript': '#2D7588',
  'Java': '#AF7122',
  'PHP': '#4F5F93',
  'Scala': '#C02D42',
  'Shell': '#8CDE59',
  'Ruby': '#6F1417',
  'Go': '#3661A9',
  'PHP': '#4F5F93',
  'PowerShell': '#002755',
  'Vim script': '#249D4F'
})

export const getLanguageColor = language => (
  languageColors[language] || '#3674A3'
)

export const prettifyStars = starCount =>(
  starCount > 999
    ? (starCount / 1000).toFixed(1) + "K"
    : starCount + ""
)

//export default getLanguageColor
