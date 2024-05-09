const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const getItems = (async (req, res) => {
  if (req.query.q == undefined)
    return res.status(400).json({ msg: "Bad Request" });

  const url = `https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}&limit=4`;
  const options = {
    method: "GET",
  };
  let responseItems;
  try {
    const response = await fetch(url, options);
    responseItems = await response.json();
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `Internal Server Error.` });
  }
  const response = {
    author: {
      name: "Pablo",
      lastname: "Pellegrinet",
    },
    categories: [],
    items: responseItems.results.map((item) => {
      return {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: parseInt(item.price.toString().split(".")[0]),
          decimals: item.price.toFixed(2).toString().split(".")[1],
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
      };
    }),
  };
  res.status(200).json(response);
});

const getItem = ( async (req, res) => {
  if (req.params.id == undefined)
    return res.status(400).json({ msg: "Bad Request" });

  const options = { method: "GET" };

  const urlItem = `https://api.mercadolibre.com/items/${req.params.id}`;
  const urlDescription = `https://api.mercadolibre.com/items/${req.params.id}/description`;
  let responseItem, responseDescription;

  try {
    const response = await fetch(urlItem, options);
    responseItem = await response.json();
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `Internal Server Error.` });
  }

  try {
    const response = await fetch(urlDescription, options);
    responseDescription = await response.json();
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `Internal Server Error.` });
  }
  const response = {
    author: {
      name: "Pablo",
      lastname: "Pellegrinet",
    },
    item: {
      id: responseItem.id,
      title: responseItem.title,
      price: {
        currency: responseItem.currency_id,
        amount: parseInt(responseItem.price.toString().split(".")[0]),
        decimals: responseItem.price.toFixed(2).toString().split(".")[1],
      },
      picture: responseItem.thumbnail,
      condition: responseItem.condition,
      free_shipping: responseItem.shipping.free_shipping,
      sold_quantity: responseItem.initial_quantity,
      description: responseDescription.plain_text,
    },
  };
  res.status(200).json(response);
});

module.exports = { getItems, getItem };