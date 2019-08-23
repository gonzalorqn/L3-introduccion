function MiFuncion2(numero: number,cadena?: string): void
{
  if(cadena != undefined)
  {
    for (let index = 0; index < numero; index++)
    {
      console.log(cadena)
    }
  }
  else
  {
    console.log(0-numero)
  }
}
