function trimObject(obj) {
    if (!Array.isArray(obj) && typeof obj != 'object') return obj;
    return Object.keys(obj).reduce(function(acc, key) {
        acc[key.trim()] = typeof obj[key] == 'string' ? obj[key].trim() : trimObj(obj[key]);
        return acc;
    }, Array.isArray(obj)? []:{});
}

function jsonBodyTrim(options) {
    return function jsonBodyTrimMiddleware(req, res, next) {
        try {
            req.body = trimObject(req.body);
        }
        catch (e) {
        }

        next();
    }
}

exports = module.exports = jsonBodyTrim;