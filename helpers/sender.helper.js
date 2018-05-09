const ACCEPT_HANDLERS = {
  'application/json': (res, data) => {
    res.json(data);
  },
  '*/*': (res, data) => {
    res.json(data);
  }
};

export const send = (req, res, data) => {
  // const accept = req.headers['accept'];
   const handler = ACCEPT_HANDLERS['application/json'];

  handler(res, data);
};
