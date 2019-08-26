addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

/**
 * Fetch and log a request
 * @param {Request} request
 */
async function handleRequest(_request) {
  var response = await fetch('https://math.vpv.io/api/add');
  var res = new Response(response.body, {
    status: 200
  });
  res.headers.set = response.headers;
  return res;
}
