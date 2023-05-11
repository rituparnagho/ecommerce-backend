module.exports = (theFunc) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next)).catch(next);
};

// But if you have a lot of async middlewares, it may be a little repetitive.

// Since I like my middlewares as clean as possible, and I usually let the errors bubble up, I use a wrapper around async middlewares, that will call next(err) if the promise is rejected, reaching the express error handler and avoiding UnhandledPromiseRejectionWarning

// const asyncHandler = fn => (req, res, next) => {
//     return Promise
//         .resolve(fn(req, res, next))
//         .catch(next);
// };

// module.exports = asyncHandler;

// extends	Extends a class (inherit)
// static	Defines a static method for a class
// super	Refers to the parent class
// constructor()	A special method for creating and initializing objects created within a class

// The extends keyword is used to create a child class of another class (parent).

// The child class inherits all the methods from another class.

// Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.

// Note: From the example above; The super() method refers to the parent class. By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.

// The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
