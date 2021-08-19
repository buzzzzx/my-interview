function set(key, value, expired) {
  let obj = {
    value,
    expired: Date.now() + expired * 1000 * 60,
  };
  localStorage.setItem(key, JSON.stringify(obj));
}

function get(key) {
  let obj = localStorage.getItem(key);
  if (!obj) {
    return obj;
  }
  obj = JSON.parse(obj);
  if (obj.expired > Date.now()) {
    localStorage.removeItem(key);
    return null;
  }
  return obj.value;
}
