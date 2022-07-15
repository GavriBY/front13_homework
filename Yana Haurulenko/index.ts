enum Variants { 
    Rock = "камень", 
    Scissors = "ножницы", 
    Paper = "бумага",
    Error = "не верный вариант"
    
}

enum GameResult {
    Victory = "Победа",
    Loos = "Проигрыш",
    Draw = "Ничья"
}
// Variants[random()]


function stringToVariants (variant: string | null): Variants {
    switch(variant){
        case Variants.Rock:
            return Variants.Rock;
        case Variants.Scissors:
            return Variants.Scissors;
        case Variants.Paper:
            return Variants.Paper;
        default:
            return Variants.Error;
    } 
    // if (variant === Variants.rock) {
    //     console.log("камень");
    // } else if (variant === Variants.scissors) {
    //     console.log("ножницы");
    // } else if (variant === Variants.paper) {
    //     console.log("бумага");
    // } else {
    //     console.log("победитель")
    // }
}

function game (): void {
    const computer: Variants = random ();
    const user: Variants = getUserChoice ();
    if (user !== Variants.Error){
        console.log("Вариант компьютера = ", computer);
        console.log("Вариант пользователя = ", user);
        if (computer === user){
            console.log(GameResult.Draw);
                }else {
                    switch(computer) {
                        case Variants.Rock:
                            console.log(user === Variants.Paper? GameResult.Victory : GameResult.Loos);
                            break;
                        case Variants.Paper:
                            console.log(user === Variants.Scissors? GameResult.Victory : GameResult.Loos);
                            break;
                        case Variants.Scissors:
                            console.log(user === Variants.Rock? GameResult.Victory : GameResult.Loos);
                            break;     
                    }
                }
        
    }else {
        console.log(Variants.Error)
    }
}

function random (): Variants {
    const arrVariants:Variants[]= [Variants.Rock, Variants.Scissors, Variants.Paper];
    const computer = Math.floor(Math.random() * 3);
    return arrVariants[computer];
}

function getUserChoice (): Variants {
    let user = prompt ("Сделайте выбор \камень \ножницы \бумага");
    user = user ? user?.toLowerCase(): user;
    return stringToVariants(user);
}



game();

