function leapyear(year)
{
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

console.log(leapyear(2002));
console.log(leapyear(2024));
