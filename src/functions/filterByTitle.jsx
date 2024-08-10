import { path } from "../../port";

async function filterByTitle(title) {
  let all = await fetch(`${path}/api/products`, {
    method: "GET",
    credentials: "include"
  });
  all = await all.json();
  if(all.statusCode == 200 && title) {
    const filtered = all.message.filter((product) => 
      product.title.includes(title))
    return filtered
  }
  return null
}

export default filterByTitle