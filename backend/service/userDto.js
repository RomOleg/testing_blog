module.exports = userDto = (userModel) => {
    return {
        id: userModel.id,
        email: userModel.email
    }
}