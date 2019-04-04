import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexo'
})
export class SexoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value='M')
    {
      return "machito";
    }else{
      return "señorita";
    }
  }

}
