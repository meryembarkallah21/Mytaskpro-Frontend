import { Pipe, PipeTransform } from "@angular/core";

/**
 * renvoie la valeur d'une enum en fonction de sa clef
 */
@Pipe({
    name: "enumvaluebykey",
})
export class EnumValueByKeyPipe implements PipeTransform {
    transform(myEnum: any, key: any): string {
        for (const list of myEnum) {
            if (list !== undefined && list[0] === key) {
                return list[1];
            }
        }
        return "";
    }
}
