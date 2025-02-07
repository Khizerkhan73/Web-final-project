function checkPermission(role, requiredPermission) {
    return (req, res, next) => {
        const { userRole } = req; // Assume role is attached to req by an earlier middleware or login API
        if (userRole === role && requiredPermission) {
            next();
        } else {
            res.status(403).send('Forbidden: Insufficient permissions');
        }
    };
}

module.exports = { checkPermission };
