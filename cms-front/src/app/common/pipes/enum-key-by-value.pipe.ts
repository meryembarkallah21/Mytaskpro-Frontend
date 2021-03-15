import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "enumkeybyvalue",
})
/**
 * récupère la clef d'une enum par sa valeur (i.e. enum.A -> 'a', transform(enum, enum.A) -> A)
 */
export class EnumKeyByValuePipe implements PipeTransform {
    transform(myEnum: any, value: any): any {
        return Object.keys(myEnum).find((key) => myEnum[key] === value);
    }
}
