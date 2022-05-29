exports.listener = (err, port) => {
  err
    ? console.error("OUPS server didn't connect => " + err)
    : console.log(`go to localhost:${port}`);
};
