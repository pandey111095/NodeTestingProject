// module.exports.add = (a,b) => {
//     return a + b;
// };                                                       // These two methods are same. Because in arrow Function if there is a single statement 
                                                            // Then we can write like below Method.

module.exports.add = (a,b) => a +b;

module.exports.asyncAdd = (a, b, clb) =>{
    setTimeout(() => {
        clb(a+b);
    },1500);
}; 


module.exports.squre = a => a * a;

module.exports.setName = (user, fullName) => {
    var names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
};