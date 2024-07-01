import { FormControl } from "@angular/forms";


//  para definir los controles de un formulario y podemos agregar un tipado para cada elemento
// se necesita definir cada elemento del formulario como un FormControl
export class SearchForm {
  // el primer parametro que se le pasa al Form esto es el valor inicial
  search = new FormControl<string|null>('');
}
