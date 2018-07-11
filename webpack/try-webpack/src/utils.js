module.exports = {
    log: (message) => {
        console && console.log(message);                     // console API   && 左边为真才执行右边
    }
}