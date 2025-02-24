function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        thrownewError('Inputs must be numbers');    
    }
    return a + b;
}
    
    module.exports = { add, };