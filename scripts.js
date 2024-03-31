// Create a menu app with the following requirements:
//     Use at least one array.
//     Use at least two classes.
//     Your menu should have the options to create, view, and delete elements.


// Main menu
class Menu
{
    constructor()
    {
        this.characterList = []; //character list starts empty
        this.fighterList = []; //fighter list starts empty
    }

    showMainMenu() // shows the main menu options
    {
        return prompt(`
        WELCOME TO SPACE WARS
        CHOOSE FROM THE FOLLOWING:
        -------------------------------------
        1) Create New Character
        2) View Characters
        3) FIGHT IN THE SPACE WARS
        4) Exit
        `
        );
    }

    startMenu() // creates the main menu for user input
    {
        let selection = this.showMainMenu();
        while(selection != 4)
        {
            switch(selection)
            {
                case '1': // Create New Character
                    this.createCharacter();
                    break;
                case '2': // View Characters
                    this.showCharacterMenu();
                    break;
                case '3': // FIGHT IN THE SPACE WARS
                    this.spaceWars();
                    break;
                case '4': // Exit
                    break;
                default: // Invalid choice
                    alert("Invalid choice. Enter a number between 1 and 4.");
            }
            selection = this.showMainMenu();
        }
    }

    createCharacter() // ---- add Character Objects to the array
    {
        // console.log("1) Create New Character");

        let name = prompt("Enter your character's name:\n\n");
        let species = this.showSpeciesMenu();
        let role = this.showRoleMenu();

        if (role == "Soldier")
        {
            this.characterList.push(new Soldier(name, species));
        }
        else if (role == "Outlaw")
        {
            this.characterList.push(new Outlaw(name, species));
        }
        else if (role == "Space Wizard")
        {
            this.characterList.push(new SpaceWizard(name, species));
        }
        else if (role == "Clown")
        {
            this.characterList.push(new Clown(name, species));
        }
        else
        {
            console.log("invalid character");
        }
    }

    showSpeciesMenu() // shows the species menu
    {
        let species = "";
        let selection = "";
        
        // while loop for data validation
        while(selection == "")
        {
            selection = prompt(`
        Choose your character's species from the following options:

        1) Human
        2) Reptilian
        3) Grey Alien
        4) Robot
            `
            );

            // switch tree for species selection
            switch(selection)
            {
                case '1': // Human
                    species = "Human";
                    break;
                case '2': // Reptilian
                    species = "Reptilian";
                    break;
                case '3': // Space Elf
                    species = "Grey Alien";
                    break;
                case '4': // Robot
                    species = "Robot";
                    break;
                default: // Invalid choice
                    alert("Invalid choice. Enter a number between 1 and 4.");
                    selection = "";
            }
        }
        
        return species;
    }

    showRoleMenu() // shows the class/role menu
    {
        let role = "";
        let selection = "";

        // while loop for data validation
        while(selection == "")
        {
            selection = prompt(`
        Choose your character's role from the following options:

        1) Soldier (high HP, high attack power)
        2) Space Wizard (can magically drain HP from the enemy)
        3) Outlaw (has a chance to deal very high damage)
        4) Clown (???)
            `
            );

            // switch tree for role selection
            switch(selection)
            {
                case '1': // Soldier
                    role = "Soldier";
                    break;
                case '2': // Space Wizard
                    role = "Space Wizard";
                    break;
                case '3': // Outlaw
                    role = "Outlaw";
                    break;
                case '4': // Clown
                    role = "Clown";
                    break;
                default: // Invalid choice
                    alert("Invalid choice. Enter a number between 1 and 4.");
                    selection = "";
            }
        
        }
        return role;
    }

    collectCharacters() // updates the character roster for display
    {
        //determines if any characters have died in the last space wars
        for(let i = 0; i < this.characterList.length; i++)
        {
            if(this.characterList[i].HP < 1)
            {
                //and deletes them
                this.characterList.splice(i,1);
            }
        }

        //does it again because this code messes up when both fighters die at the same time
        for(let i = 0; i < this.characterList.length; i++)
        {
            if(this.characterList[i].HP < 1)
            {
                //and deletes them
                this.characterList.splice(i,1);
            }
        }

        //concatenates all objects in characterList array into string
        let characters = "";
        for(let i = 0; i < this.characterList.length; i++)
        {
            characters += `${i + 1}) ${this.characterList[i].describe()}\n    `;
        }
        return characters;
    }

    showCharacterMenu() // shows the character list
    {
        let characters = this.collectCharacters();

        let selection = prompt(`
    VIEW CHARACTERS:

    ${characters}
    Enter a character's number to inspect them, or enter 0 to exit:\n\n`);
        

        // data validation
        if(selection == '0')
        {
            // go back
            this.showMainMenu;
        }
        else if (Number.isNaN(parseInt(selection)) || selection > this.characterList.length || selection < 0)
        {
            // if selection is outside of range, give error and show menu again
            alert(`Invalid choice. Enter a number between 1 and ${this.characterList.length} or enter 0 to exit.`);
            selection = this.showCharacterMenu();
        }
        else
        {
            // correct selection
            this.inspectCharacter(selection - 1);
        }
    }

    inspectCharacter(i) // ---- view or DELETE characters
    {
        let selection = "";

        // while loop for data validation
        while(selection == "")
        {
            selection = prompt(`
        ${this.characterList[i].stats()}
            
        0) Go Back
        1) DELETE THIS CHARACTER\n\n`);

            // switch tree for role selection
            switch(selection)
            {
                case '0': // Go Back
                    this.showCharacterMenu();
                    break;
                case '1': // DELETE
                    this.characterList.splice(i,1); //splices this index out of existence
                    this.showCharacterMenu(); //look at menu again
                    break;
                default: // Invalid choice
                    alert("Invalid choice. Enter a number between 0 and 1.");
                    selection = "";
            }
        
        }
    }

    spaceWars() // ---- play the game!
    {
        let characters = this.collectCharacters();
        
        for(let i = 0; i < 2; i++)
        {
            let selection = prompt(`
    CHOOSE YOUR COMBATANTS TO FIGHT IN THE SPACE WARS:

    ${characters}
    Enter a character's number to draft them, or enter 0 to exit:\n\n`);
        

            // data validation
            if(selection == '0')
            {
                // go back
                fighterList = []; //clear the list of fighters
                this.showMainMenu;
            }
            else if (Number.isNaN(parseInt(selection)) || selection > this.characterList.length || selection < 0)
            {
                // if selection is outside of range, give error and show menu again
                alert(`Invalid choice. Enter a number between 1 and ${this.characterList.length} or enter 0 to exit.`);
                fighterList = []; //clear the list of fighters
                selection = this.spaceWars();
            }
            else
            {
                // correct selection
                this.fighterList.push(this.characterList[selection - 1]);
                // this.characterList.splice(this.characterList[selection - 1],1);

                console.log("added " + this.characterList[selection - 1].describe());
                console.log(this.fighterList);
            }
        }

        let fighter1 = this.fighterList[0];

        let fighter2 = this.fighterList[1];

        alert(`
            ${fighter1.saySomething()}

            ${fighter2.saySomething()}
            -------------------------------
            ${fighter1.name}: ${Math.max(0,fighter1.HP)} HP        ${fighter2.name}: ${Math.max(0,fighter2.HP)} HP
            `)

        while (fighter1.HP > 0 && fighter2.HP > 0 ) //as long as both fighters are still left standing, continue to fight
        {
            alert(`
            ${fighter1.attack(fighter2)}

            ${fighter2.attack(fighter1)}
            -------------------------------
            ${fighter1.name}: ${Math.max(0,fighter1.HP)} HP        ${fighter2.name}: ${Math.max(0,fighter2.HP)} HP
            `)
        }

        //calculate who wins
        if(Math.max(0,fighter1.HP) > Math.max(0,fighter2.HP))
        {
            alert(`${fighter1.name} wins!\n${fighter2.name} has been deleted from the roster.`);
            fighter1.HP = fighter1.maxHP; //the champion rests
        }
        else if(Math.max(0,fighter1.HP) < Math.max(0,fighter2.HP))
        {
            alert(`${fighter2.name} wins!\n${fighter1.name} has been deleted from the roster.`);
            fighter2.HP = fighter2.maxHP; //the champion rests
        }
        else if(fighter1.HP <= 0 && fighter2.HP <= 0)
        {
            alert(`Nobody wins! Both fighters have been deleted from the roster!`);
        }

        this.fighterList.length = [];
        
    }

}

class Character
{
    constructor(name, species)
    {
        this.name = name;
        this.species = species;

        this.role = "";
        this.ability = "";
        this.HP = 10;
    }

    saySomething()
    {
        if(this.species == "Human")
        {
            return `${this.name} says "Hello!".`;
        }
        else if(this.species == "Reptilian")
        {
            return `${this.name} hisses menacingly!`;
        }
        else if(this.species == "Grey Alien")
        {
            return `${this.name} makes a unsettling noise.`;
        }
        else if(this.species == "Robot")
        {
            return `${this.name} says "beep boop".`;
        }
        else
        {
            return "";
        }
    }

    rollDice(min, max) //random number generator shamelessly stolen from MDN js documentation
    {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
    }

    describe()
    {
        return `${this.name}, the ${this.species} ${this.role}`;
    }

    stats()
    {
        return `${this.name}, the ${this.species} ${this.role}:
        
        HP: ${this.HP}

        Attacks:\n${this.ability}`;
    }

}

// subclasses

class Soldier extends Character
{
    constructor(name, species)
    {
        super(name, species);

        this.HP = 20;
        this.maxHP = 20;
        this.role = "Soldier";
        this.ability = "        Plasma Sword: Deals 3-5 damage.\n        Laser Rifle: Deals 4-7 damage.";
    }

    attack(target)
    {
        let random = this.rollDice(1, 2);
        if(random == 1)
        {
            return this.laserRifle(target);
        }
        if(random == 2)
        {
            return this.plasmaSword(target);
        }
    }

    laserRifle(target)
    {
        let damage = this.rollDice(4, 7);
        target.HP -= damage;
        return `${this.name} shoots ${target.name} with their laser rifle, dealing ${damage} damage!`;
    }

    plasmaSword(target)
    {
        let damage = this.rollDice(3, 5);
        target.HP -= damage;
        return `${this.name} swings at ${target.name} with their plasma sword,\n            dealing ${damage} damage!`;
    }
}

class Outlaw extends Character
{
    constructor(name, species)
    {
        super(name, species);

        this.HP = 15;
        this.maxHP = 15;
        this.role = "Outlaw";
        this.ability = "        Sneak Attack: Deals 3-6 damage, with a 33% chance to\n        deal 3x damage.";
    }

    attack(target)
    {
        //does between 3 and 6 damage, with a 1/3 chance to deal 3x damage
        let damage =  this.rollDice(3, 6);
        let critChance =  this.rollDice(1,3);

        if(critChance == 1)
        {
            target.HP -= damage * 3;
            return `${this.name} sneaks behind ${target.name} and suprises them with a\n            deadly sneak attack, dealing ${damage * 3} damage!`;
        }
        else
        {
            target.HP -= damage;
            return `${this.name} attacks ${target.name} with a knife, dealing ${damage} damage!`;
        }
    }
}

class SpaceWizard extends Character
{
    constructor(name, species)
    {
        super(name, species);

        this.HP = 10;
        this.maxHP = 10;
        this.role = "Space Wizard";
        this.ability = "        Space Magic: Deals 2-5 damage, and heals self that equal amount.\n        Fission Orb: Deals 1-9 damage, and self-inflicts half as much.\n        Nebula Aura: Heals self for 6 HP.";
    }

    attack(target)
    {
        let random = this.rollDice(1, 3);
        if(random == 1)
        {
            return this.drain(target);
        }
        if(random == 2)
        {
            return this.fissionOrb(target);
        }
        if(random == 3)
        {
            return this.nebulaAura(target);
        }
    }

    drain(target)
    {
        //deals between 2 and 5 damage, and heals for the same amount
        let damage =  this.rollDice(2, 5);
        target.HP -= damage;
        this.HP += damage;
        return `${this.name} attacks ${target.name} with space magic, dealing ${damage} damage and \n           healing themselves for ${damage} HP!`;
    }

    fissionOrb(target)
    {
        //deals between 1 and 9 damage to everyone
        let damage =  this.rollDice(1, 9);
        target.HP -= damage;
        this.HP -= damage;
        return `${this.name} summons a miniature sun and throws it at ${target.name},\n            dealing ${damage} damage!\n            ${this.name} is caught in the resulting explosion as well, taking ${Math.ceil(damage/2)} damage!`;
    }

    nebulaAura(target)
    {
        //heals between 2 and 9 damage
        this.HP += 6;
        return `${this.name} surrounds themselves with a nebula-like aura, healing\n            themselves for 6 HP!`;
    }
}

class Clown extends Character
{
    constructor(name, species)
    {
        super(name, species);

        this.HP = 10;
        this.maxHP = 10;
        this.role = "Clown";
        this.ability = "        Wacky Shenanigans: Mostly useless, but may surprise you.";
    }

    attack(target)
    {
        //random roulette
        let random =  this.rollDice(1, 10);

        if(random == 1)
        {
            return `${this.name} honks their nose!`;
        }
        if(random == 2)
        {
            return `${this.name} blows up a balloon!\n            They fold it into the shape of a space dog!`;
        }
        if(random == 3 || random == 4)
        {
            return `${this.name} tells a joke! ${target.name} doesn't get it.`;
        }
        if(random == 5 || random == 6)
        {
            return `${this.name} tells a joke! ${target.name} laughs!`;
        }
        if(random == 7)
        {
            target.HP -= 1;
            return `${this.name} convinces ${target.name} to shake their hand...\n            There was a shocking buzzer hidden in ${this.name}'s hand!\n            ${target.name} takes 1 damage.`;
        }
        if(random == 8)
        {
            this.HP -= 1;
            return `${this.name} trips and falls in a slapstick manner! ${this.name} takes 1 damage!`;
        }
        if(random == 9)
        {
            let damage =  this.rollDice(5, 10);
            target.HP -= damage;
            return `${this.name} tells a joke! ${target.name} laughs so hard they can't breathe!\n            ${target.name} takes ${damage} damage!`;
        }
        if(random == 10)
        {
            target.HP = 0;
            return `${this.name} smiles and snaps their fingers. In a flash of light, ${target.name} is turned into dust!`;
            target.HP = 0;
        }
        
    }
}

//start the game
let spaceWars = new Menu();
spaceWars.startMenu();