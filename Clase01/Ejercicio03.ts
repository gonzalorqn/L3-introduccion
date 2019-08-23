function MiFuncion(numero: number,cadena?: string): void
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

MiFuncion(4)
MiFuncion(4,"hola")
MiFuncion(7)
MiFuncion(2,"chau")
