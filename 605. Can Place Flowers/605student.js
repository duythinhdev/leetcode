var canPlaceFlowers = function(flowerbed, n) {
    if (!n) return true;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0 && flowerbed?.[i - 1] !== 1 && flowerbed?.[i+1] !== 1) {
            n--;
            flowerbed[i] = 1;
        }
        if (!n) return true;
    }
    return !n;
};
console.log(canPlaceFlowers([1,0,0,0,1],1));
