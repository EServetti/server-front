import { port } from "../../port";

async function filterByTitle(title) {
  let all = await fetch(`http://localhost:${port}/api/products`);
  all = await all.json();
  if(all.statusCode == 200 && title) {
    const filtered = all.message.filter((product) => 
      product.title.includes(title))
    return filtered
  }
  return null
}

export default filterByTitle