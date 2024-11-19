export class Utilities {


    static numberToArray(number: number) {

        let index = 1
        let array = []

        while (index <= number) {
            array.push(index)
            index++

        }

        return array
    }
}