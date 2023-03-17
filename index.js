
function distanceFromHqInBlocks(block) {
    const hqBlock = 42;
    return Math.abs(block - hqBlock);
  }
console.log(distanceFromHqInBlocks(43));

function distanceFromHqInFeet(block) {
    const distanceInBlocks = distanceFromHqInBlocks(block);
    return distanceInBlocks * 264;
    
}
console.log(distanceFromHqInFeet(43));

function distanceTravelledInFeet(startBlock, endBlock){
    const distanceInBlocks = Math.abs(endBlock - startBlock);
    return distanceInBlocks * 264;
}
console.log(distanceTravelledInFeet(43, 48));

function calculatesFarePrice(startBlock, endBlock) {
    const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);
    if (distanceInFeet <= 400) {
      return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
console.log(calculatesFarePrice(43, 44));




