//The pipe class implements the PipeTransform interface's transform method that accepts an input value and an optional array of parameters and returns the transformed value.
import { Pipe,PipeTransform } from "@angular/core";
//We tell Angular that this is a pipe by applying the @Pipe decorator which we import from the core Angular library.
@Pipe({
  //The @Pipe decorator takes an object with a name property whose value is the pipe name that we'll use within a template expression. It must be a valid JavaScript identifier. Our pipe's name is orderby.
  name: "columnFilter"
})
export class ColumnFilter implements PipeTransform {
  transform(array:Array<any>) {
    // Check if array exists, in this case array contains articles and args is an array that has 1 element : !id
    if(array) {
      
      array.forEach(function(item){
        item.push('test');
      });

      array.shift();

       return array;     
    }
  }
}