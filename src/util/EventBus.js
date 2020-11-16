var on = (event, callback) => {
    document.addEventListener(event, (e) => callback(e.detail));
}

var dispatch = (event, data) => {
    document.dispatchEvent(new CustomEvent(event, { detail: data }));
}

var remove = (event, callback) => {
    document.removeEventListener(event, callback);
}

module.exports = {
    on: on,
    dispatch: dispatch,
    remove:remove
};
