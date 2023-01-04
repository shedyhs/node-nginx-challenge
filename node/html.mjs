export const prepareResponse = (peoples) => {
  const tabledNames = peoples.map(people => {
    return `
    <tr>
      <td>${people.id}</td>
      <td>${people.name}</td>
    </tr>
    `
  })
  const html = 
  `<h1>Full Cycle Rocks!!</h1>
  </br>
  <table>
  
    <tr>
      <th>ID</th>
      <th>NAME</th>
    </tr>
    ${tabledNames.join('')}
  </table>
  `

  return html
}