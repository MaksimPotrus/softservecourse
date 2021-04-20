let firstIpv4 = prompt("Enter first Ipv4:", "");
let secondIpv4 = prompt("Enter second Ipv4:", "");
console.log(countIpAddresses(firstIpv4, secondIpv4));

function countIpAddresses(firstIpv4, secondIpv4) {
    firstIpv4 = firstIpv4.split('.');
    return secondIpv4.split('.').reduce(function (sum, x, i) {
        return (sum << 8) + Number(x) - Number(firstIpv4[i])
    }, 0);
}