const calculateTemp =()=>{
    const numberTemp = document.getElementById('temp').value;
    // this is for to get the input 
    const tempSelected= document.getElementById('temp_diff');
    //  this is to get what the user is selected 
   const valueTemp=  temp_diff.options[tempSelected.selectedIndex].value;
    // ye return krega jo index hmne select kiya hai list of options me se

    const celToFah = (cel) =>{
        let fahrenheit = Math.round((cel*9/5)+32)
        // math round use kiya bcs decimal me value nhi chaiye
        return fahrenheit;
    }
    const fahToCel = (fah)=>{
        let celsius = Math.round((fah-32)*5/9)
        return celsius;
    }
    let result;

    if(valueTemp == 'cel')  {
        result = celToFah(numberTemp);
        // function to convert the value and used the input
        document.getElementById('resultContainer').innerHTML = ` = ${result}°fahrenheit`
    }else 
      { result = fahToCel(numberTemp)
    // function to convert the value and used the input
    document.getElementById('resultContainer').innerHTML = ` = ${result}°celsius`
    }
}
