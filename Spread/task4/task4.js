function mean(...numbers) 
{
    let sum = 0;

    if (numbers.length === 0) 
    {
      return 0;
    }

    for(let i = 0; i < numbers.length; i++)
    {
        sum += numbers[i];
    }

    return sum / numbers.length;
}

document.write(mean(1, 2, 3, 4))