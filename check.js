function validateISBN(isbn){
    
    let vel = isbn.length; 
    var brojCrtica = 0;

    if(vel != 17)
        return false;

    for(i = 0;i <vel;i++)
    {
        if((isbn[i] >=0 && isbn[i] <=9) || isbn[i] =='-') 
            {
                if(isbn[i] =='-') 
                {

                    if(i != 3 && i != 7 && i != 11 && i != 15)  
                         return false;

                    brojCrtica++; 
                }
            }
        else
            return false;
    }
    if(brojCrtica != 4) 
        return false;

    return true; 
}