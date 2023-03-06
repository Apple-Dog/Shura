type RandomNumber = {
    (min: number, max: number, exclude: number): any;
};

const GenerateRandomBetween: RandomNumber = (min: number, max: number, exclude: number) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return GenerateRandomBetween(min, max, exclude);
    } 
    else {
        return rndNum;
    };
};
export default GenerateRandomBetween;